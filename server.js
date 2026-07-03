// CoMatch Express Backend Server
// AI-Powered Auto-moderation, Online Verification, and Brand Database Management

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve static frontend files from current directory
app.use(express.static(__dirname));

const databasePath = path.join(__dirname, 'database.json');
let dbData = [];

// Initialize database from brands.js if database.json doesn't exist
if (fs.existsSync(databasePath)) {
    try {
        dbData = JSON.parse(fs.readFileSync(databasePath, 'utf8'));
        console.log(`[+] Loaded database.json containing ${dbData.length} opportunities`);
    } catch (e) {
        console.error("[-] Failed to read database.json:", e);
    }
} else {
    const brandsJsPath = path.join(__dirname, 'brands.js');
    if (fs.existsSync(brandsJsPath)) {
        try {
            const fileContent = fs.readFileSync(brandsJsPath, 'utf8');
            const jsonStartIndex = fileContent.indexOf('[');
            const jsonEndIndex = fileContent.lastIndexOf(']') + 1;
            const jsonText = fileContent.substring(jsonStartIndex, jsonEndIndex);
            dbData = JSON.parse(jsonText);
            fs.writeFileSync(databasePath, JSON.stringify(dbData, null, 2), 'utf8');
            console.log(`[+] Initialized database.json with ${dbData.length} seed opportunities from brands.js`);
        } catch (e) {
            console.error("[-] Failed to parse brands.js for seed data:", e);
        }
    }
}

// 1. Online Domain Verification Helper
function pingDomain(urlStr) {
    return new Promise((resolve) => {
        try {
            // Clean URL string
            if (!/^https?:\/\//i.test(urlStr)) {
                urlStr = 'https://' + urlStr;
            }
            const parsedUrl = new URL(urlStr);
            const client = parsedUrl.protocol === 'https:' ? https : http;
            
            const req = client.request({
                method: 'HEAD',
                host: parsedUrl.hostname,
                path: parsedUrl.pathname + parsedUrl.search,
                timeout: 8000
            }, (res) => {
                // If we get any HTTP response code, the server exists and is online
                resolve(true);
            });

            req.on('error', (e) => {
                console.log(`[-] Ping failed for ${parsedUrl.hostname}: ${e.message}`);
                resolve(false);
            });

            req.on('timeout', () => {
                req.destroy();
                resolve(false);
            });

            req.end();
        } catch (err) {
            resolve(false);
        }
    });
}

// API: Get all brands
app.get('/api/brands', (req, res) => {
    res.json(dbData);
});

// API: Submit a brand (AI Auto-moderation & verification)
app.post('/api/submit-brand', async (req, res) => {
    const { name, url, email, description, logoUrl } = req.body;

    if (!name || !url || !description) {
        return res.status(400).json({ error: "Missing required fields (Name, URL, Description)" });
    }

    console.log(`[*] New Brand Submission Request: [${name}] - Website: [${url}]`);

    // Step 1: Online Domain Verification
    const isOnline = await pingDomain(url);
    if (!isOnline) {
        console.log(`[-] Rejected [${name}] due to offline website.`);
        return res.status(400).json({ error: "The submitted website is offline, inactive, or invalid. Please check the URL and try again." });
    }
    console.log(`[+] Domain ping passed for [${name}]`);

    // Step 2: AI Evaluator and Content Moderation (Safety check)
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.warn("[-] GEMINI_API_KEY is not defined. Simulating auto-approval without AI validation.");
        // Fallback simulated success if no Gemini Key
        const id = name.toLowerCase().replace(/[^a-z0-9]/g, "-");
        const domain = url.replace(/https?:\/\//i, "").replace("www.", "").split('/')[0];
        const finalLogo = logoUrl ? logoUrl : `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
        
        const newBrand = {
            id,
            name,
            type: "brand",
            category: "Gaming",
            sponsorType: "Product Gifting",
            creatorSize: "Micro (10k-50k)",
            contactEmail: email || null,
            contactForm: url,
            logo: finalLogo,
            dna: {
                requirements: "Requires gaming/tech stream coverage, positive community engagement.",
                dealStructure: "Product gifting sponsorships.",
                pitchHelper: `Hi ${name} Partnerships,\n\nI am [Name], a content developer at [Link]. I would love to explore a partnership to feature ${name} on my channel. Attached is my media kit.\n\nBest,\n[Name]`
            },
            premium: false
        };

        dbData.unshift(newBrand);
        fs.writeFileSync(databasePath, JSON.stringify(dbData, null, 2), 'utf8');
        return res.json({ success: true, brand: newBrand });
    }

    try {
        const ai = new GoogleGenerativeAI(apiKey);
        const model = ai.getGenerativeModel({ model: 'gemini-2.0-flash' });

        const prompt = `You are the auto-moderator and submission processor bot for CoMatch, a web directory of B2B brand partnerships and sponsorships.
Evaluate this brand submission:
Brand Name: "${name}"
Website URL: "${url}"
Contact Email: "${email || 'Not provided'}"
Description: "${description}"
User-provided Logo URL: "${logoUrl || 'Not provided'}"

SAFETY / MODERATION CHECKS:
- Check if this brand or description contains adult/sexually explicit (NSFW), violence, drugs, gambling, hate speech, or illegal activities.
- Check if it is spam or gibberish (e.g. random letters, advertisements for unrelated services).
- Verify if it represents an actual brand or esports team that could reasonably offer creator sponsorships (hardware, tech, gaming, energy drinks, clothing, hosting, etc.).

If it is unsafe, spam, or completely irrelevant, you MUST reject it by returning the following JSON:
{
  "approved": false,
  "reason": "Specify a clear rejection reason in English (e.g., Content violates platform guidelines because it contains illegal, adult, or spam material)."
}

If it is safe and relevant, you MUST accept it and enrich the data by returning the following JSON:
{
  "approved": true,
  "brand": {
    "id": "${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}",
    "name": "${name}",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "${email || null}",
    "contactForm": "${url}",
    "logo": "Use the user-provided logo URL if they entered a valid link. Otherwise, generate: https://www.google.com/s2/favicons?domain=domain-name-extracted-from-url&sz=128",
    "dna": {
      "requirements": "Write a professional summary of requirements for creators based on the brand's profile in English.",
      "dealStructure": "Write what kind of deal the brand likely offers (e.g., Product gifting, Affiliate code, Flat fee payout).",
      "pitchHelper": "Write a customized, professional introductory pitch email template in English. Include brackets like [Name] and [Channel Link]."
    }
  }
}

Return ONLY the raw JSON text block. Do not wrap it in markdown code blocks like \`\`\`json.`;

        const result = await model.generateContent(prompt);
        let responseText = await result.response.text();
        
        // Clean up markdown blocks if the model returned them
        responseText = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
        
        const aiResponse = JSON.parse(responseText);

        if (!aiResponse.approved) {
            console.log(`[-] AI Moderation rejected [${name}]. Reason: ${aiResponse.reason}`);
            return res.status(400).json({ error: aiResponse.reason || "Submission rejected by AI moderator." });
        }

        // Add to database
        const enrichedBrand = aiResponse.brand;
        enrichedBrand.premium = false;
        
        // Enforce the user-provided logo if valid, else keep the AI generated one
        if (logoUrl && (logoUrl.startsWith('http://') || logoUrl.startsWith('https://'))) {
            enrichedBrand.logo = logoUrl;
        }

        dbData.unshift(enrichedBrand);
        fs.writeFileSync(databasePath, JSON.stringify(dbData, null, 2), 'utf8');
        
        console.log(`[+] AI Moderation approved and added brand: [${enrichedBrand.name}]`);
        return res.json({ success: true, brand: enrichedBrand });

    } catch (err) {
        console.error("[-] AI Moderation error:", err);
        return res.status(500).json({ error: "An internal error occurred during AI evaluation. Please try again later." });
    }
});

// API: Find matches for a project (AI Matchmaker)
app.post('/api/match', async (req, res) => {
    const { description } = req.body;

    if (!description || description.trim().length < 10) {
        return res.status(400).json({ error: "Please write a more detailed description of your project (minimum 10 characters)." });
    }

    console.log(`[*] Matchmaker request received. Description length: ${description.length} chars.`);

    const apiKey = process.env.GEMINI_API_KEY;
    
    // Fallback: Local Keyword-based matchmaking if no API Key is provided
    if (!apiKey) {
        console.warn("[-] GEMINI_API_KEY is not defined. Using local keyword fallback for matchmaking.");
        const descLower = description.toLowerCase();
        const matches = [];

        // Simple local keyword matcher
        const keywords = {
            "vercel": ["deploy", "next.js", "frontend", "hosting", "web", "site", "javascript", "code", "dev"],
            "shopify": ["shop", "e-commerce", "ecommerce", "store", "sell", "product", "sales", "business"],
            "printify": ["apparel", "merch", "t-shirt", "clothing", "wear", "print", "design"],
            "printful": ["apparel", "merch", "t-shirt", "clothing", "wear", "print", "design"],
            "faceit": ["tournament", "esports", "matchmaking", "cs2", "valorant", "game", "lobby", "competitive"],
            "challengermode": ["tournament", "esports", "bracket", "prize", "organizer", "compete", "gamer"],
            "wix": ["website", "wix", "studio", "blog", "portfolio", "no-code"],
            "digitalocean": ["cloud", "server", "linux", "hosting", "infrastructure", "deploy", "database"],
            "clickup": ["productivity", "workspace", "management", "task", "organization", "agency"],
            "hubspot": ["crm", "sales", "marketing", "customer", "b2b", "leads"],
            "slack": ["chat", "collaboration", "developer", "api", "communication", "team"],
            "razer": ["peripheral", "mouse", "keyboard", "gaming", "headset", "rgb"],
            "logitech-g": ["peripheral", "mouse", "keyboard", "gaming", "headset", "gear"],
            "g2-esports": ["esports", "pro", "competitive", "team", "organization"],
            "team-falcons": ["esports", "pro", "competitive", "team", "organization"]
        };

        for (const [id, keys] of Object.entries(keywords)) {
            if (keys.some(k => descLower.includes(k))) {
                const brand = dbData.find(b => b.id === id);
                if (brand && matches.length < 4) {
                    matches.push({
                        id: brand.id,
                        reason: `Matched based on keywords relating to ${brand.category}. Sells to similar target audiences.`,
                        strategy: `Highlight how your B2B project aligns with ${brand.name}'s products and userbase.`
                    });
                }
            }
        }

        // If no matches, return first 3 brands in db
        if (matches.length === 0) {
            dbData.slice(0, 3).forEach(brand => {
                matches.push({
                    id: brand.id,
                    reason: `Recommended general B2B partner on CoMatch with active developer/creator channels.`,
                    strategy: `Reach out via their application link to introduce your collab project.`
                });
            });
        }

        return res.json(matches);
    }

    try {
        const ai = new GoogleGenerativeAI(apiKey);
        const model = ai.getGenerativeModel({ model: 'gemini-2.0-flash' });

        // Summarize database for prompt to keep tokens low
        const brandSummaries = dbData.map(item => ({
            id: item.id,
            name: item.name,
            category: item.category,
            sponsorType: item.sponsorType,
            creatorSize: item.creatorSize,
            requirements: item.dna.requirements
        }));

        const prompt = `You are the expert B2B Matchmaker and Sponsorship advisor for CoMatch.
Your task is to analyze the user's project/channel description and recommend the top 3 to 5 best-matching B2B brands or partners from our database list.

User's Project/Request:
"${description}"

Database of Available Brands:
${JSON.stringify(brandSummaries)}

INSTRUCTIONS:
1. Select between 3 and 5 brands from the list that represent the absolute best strategic fit for the user's project.
2. For each recommendation, provide:
   - "id": The exact ID of the brand from the database list.
   - "reason": A brief 2-3 sentence explanation in English detailing WHY this brand is a great fit.
   - "strategy": A brief 1-2 sentence recommendation in English outlining how they should approach them (e.g., "Highlight your developer audience and offer to build a template using their tool.").

Return ONLY a raw JSON array of recommendation objects matching this schema:
[
  {
    "id": "exact-brand-id",
    "reason": "Clear explanation of the strategic fit in English.",
    "strategy": "Actionable pitching strategy advice in English."
  }
]

Do not include any other conversational text or wrap the response in markdown code blocks.`;

        const result = await model.generateContent(prompt);
        let responseText = await result.response.text();
        
        responseText = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
        const recommendations = JSON.parse(responseText);

        console.log(`[+] AI Matchmaker generated ${recommendations.length} recommendations successfully.`);
        return res.json(recommendations);

    } catch (err) {
        console.error("[-] AI Matchmaker error:", err);
        return res.status(500).json({ error: "An internal error occurred during AI matching. Please try again later.", details: err.message || err.toString() });
    }
});

// Fallback: serve index.html for undefined routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 CoMatch Live API Server started on http://localhost:${PORT}`);
    console.log(`💡 Serving frontend files and API endpoints...`);
    console.log(`🔑 AI Bot runs if GEMINI_API_KEY env variable is defined.`);
    console.log(`======================================================\n`);
});
