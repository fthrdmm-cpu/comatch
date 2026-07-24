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

const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve static frontend files from current directory
app.use(express.static(__dirname));

// Favicon redirect fallback to prevent console 404 errors
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'logo.png'));
});

const databasePath = path.join(__dirname, 'database.json');
let dbData = [];

// Status variables for debugging
let dbError = null;
let dbInitMode = "Local File System";

// Automated Welcome & Developer Showcase Email Helper
async function sendWelcomeEmail(brand) {
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER || "hello@comatch.org";
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS || "Fatiherdem.1";
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = process.env.SMTP_PORT || 465;

    if (!brand || !brand.contactEmail) {
        console.log(`[-] Skipping welcome email for [${brand?.name || 'Unknown'}] (No email address provided).`);
        return;
    }

    if (!smtpUser || !smtpPass) {
        console.log(`[-] SMTP credentials (SMTP_USER / SMTP_PASS) not configured in env. Skipping automated email to [${brand.contactEmail}].`);
        return;
    }

    try {
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: parseInt(smtpPort),
            secure: parseInt(smtpPort) === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass
            }
        });

        const subject = `${brand.name} is listed on CoMatch + A quick preview of what's next 🚀`;
        const textContent = `Hi ${brand.name} team,\n\nThank you for sharing ${brand.name} on CoMatch! We are excited to have your product added to our B2B ecosystem.\n\nYour submission has been processed and is now indexed for creators, brands, and partners searching for active B2B collaborations.\n\n🚀 A Two-Way Growth Network (Get Sponsored & Sponsor Others):\nCoMatch is built as a two-way hub for founders: whether you want to get VC funding and brand sponsorships for your own startup, or acquire creators/users to promote your product.\n\nWe are currently building a dedicated Developer Showcase & Launch Hub directly on CoMatch where very soon you will be able to:\n- Pitch ${brand.name} directly to registered VC funds, angel networks, and enterprise sponsors in our directory.\n- Partner with creators and business influencers via custom trials or affiliate perks to scale your user base.\n- Feature ${brand.name} in our dedicated product spotlight for maximum exposure.\n\nAs one of our early registered partners, we will grant you VIP Early Access the moment this new showcase feature goes live.\n\nIf you have any specific partnership requests in the meantime, simply reply to this email!\n\nWelcome aboard, and keep building!\n\nBest regards,\nThe CoMatch Team\nhttps://comatch.org`;

        const htmlContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #2563eb; margin-top: 0;">Welcome to CoMatch, ${brand.name}! 🚀</h2>
            <p>Hi <strong>${brand.name}</strong> team,</p>
            <p>Thank you for sharing your product on <strong>CoMatch</strong>! We are thrilled to have you in our B2B ecosystem.</p>
            <p>Your listing has been approved and is now indexed for creators, founders, and partners searching for active B2B collaborations.</p>
            
            <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <h3 style="margin-top: 0; color: #0f172a;">🚀 A Two-Way Growth Network (Get Sponsored & Sponsor Others)</h3>
                <p style="margin-bottom: 0;">CoMatch is built as a two-way hub for founders: whether you want to get VC funding and brand sponsorships for your own startup, or acquire creators to promote your product.</p>
            </div>
            
            <p>We are currently building a dedicated <strong>Developer Showcase & Launch Hub</strong> directly on CoMatch where very soon you will be able to:</p>
            <ul>
                <li><strong>Get Sponsored & Funded:</strong> Pitch ${brand.name} directly to registered VC funds, angel networks, and enterprise sponsors in our directory.</li>
                <li><strong>Offer Partnerships & Deals:</strong> Partner with top creators and influencers to scale your user base.</li>
                <li><strong>VIP Showcase Visibility:</strong> Feature ${brand.name} in our dedicated developer spotlight for maximum exposure.</li>
            </ul>
            
            <p>As one of our early registered partners, we will grant you <strong>VIP Early Access</strong> the moment this new showcase feature goes live.</p>
            
            <p>If you have any specific partnership requests in the meantime, simply reply to this email!</p>
            
            <p style="margin-top: 30px;">Welcome aboard, and keep building!<br><strong>The CoMatch Team</strong><br><a href="https://comatch.org" style="color: #2563eb;">https://comatch.org</a></p>
        </div>
        `;

        await transporter.sendMail({
            from: `"CoMatch Team" <${smtpUser}>`,
            to: brand.contactEmail,
            subject: subject,
            text: textContent,
            html: htmlContent
        });

        console.log(`[+] Welcome email automatically sent to [${brand.contactEmail}] for [${brand.name}]`);
    } catch (err) {
        console.error(`[-] Failed to send welcome email to [${brand.contactEmail}]:`, err.message);
    }
}

// Initialize Supabase Client if env is defined
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
let supabase = null;

if (supabaseUrl && supabaseKey) {
    const { createClient } = require('@supabase/supabase-js');
    supabase = createClient(supabaseUrl, supabaseKey);
    dbInitMode = "Supabase Cloud (Attempting)";
    console.log("🔌 Supabase Cloud Database integration configured.");
}

async function loadDatabase() {
    if (supabase) {
        try {
            console.log("[*] Querying brands from Supabase Cloud...");
            const { data, error } = await supabase.from('brands').select('*').order('created_at', { ascending: false });
            
            if (error) {
                throw error;
            }
            
            if (Array.isArray(data) && data.length > 0) {
                dbData = data;
                dbInitMode = "Supabase Cloud";
                console.log(`[+] Loaded ${dbData.length} brands dynamically from Supabase.`);
            } else {
                console.log("[-] Supabase table 'brands' is empty. Seeding with local database.json...");
                loadLocalDatabase();
                
                // Seed data into Supabase in chunks to avoid payload limits
                const chunkSize = 50;
                for (let i = 0; i < dbData.length; i += chunkSize) {
                    const chunk = dbData.slice(i, i + chunkSize);
                    const { error: seedError } = await supabase.from('brands').insert(chunk);
                    if (seedError) throw seedError;
                }
                
                dbInitMode = "Supabase Cloud";
                console.log(`[+] Seeded ${dbData.length} brands successfully to Supabase.`);
            }
        } catch (err) {
            dbError = err.message || err.toString();
            dbInitMode = "Local File System (Supabase Error)";
            console.error("[-] Supabase database load/seed error:", err.message);
            console.log("[*] Falling back to local file database.");
            loadLocalDatabase();
        }
    } else {
        console.log("[*] Supabase URL/Key environment variables not defined. Loading local database.json.");
        loadLocalDatabase();
    }
}

function loadLocalDatabase() {
    // Always try to load from brands.js first (primary source of truth)
    const brandsJsPath = path.join(__dirname, 'brands.js');
    if (fs.existsSync(brandsJsPath)) {
        try {
            const fileContent = fs.readFileSync(brandsJsPath, 'utf8');
            const jsonStartIndex = fileContent.indexOf('[');
            const jsonEndIndex = fileContent.lastIndexOf(']') + 1;
            const jsonText = fileContent.substring(jsonStartIndex, jsonEndIndex);
            dbData = JSON.parse(jsonText);
            // Write to database.json so API mutations are still persisted
            fs.writeFileSync(databasePath, JSON.stringify(dbData, null, 2), 'utf8');
            console.log(`[+] Loaded ${dbData.length} opportunities from brands.js (primary source)`);
            return;
        } catch (e) {
            console.error("[-] Failed to parse brands.js:", e);
        }
    }
    // Fallback: use database.json if brands.js is unavailable
    if (fs.existsSync(databasePath)) {
        try {
            dbData = JSON.parse(fs.readFileSync(databasePath, 'utf8'));
            console.log(`[+] Fallback: loaded database.json with ${dbData.length} opportunities`);
        } catch (e) {
            console.error("[-] Failed to read database.json:", e);
        }
    }
}

// Telegram Notification Helper
async function sendTelegramNotification(brand, moderationApproved) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!token || !chatId) {
        console.log("[-] Telegram bot token or chat ID not configured, skipping notification.");
        return;
    }
    
    const status = moderationApproved ? "✅ AI Approved & Listed" : "⚠️ Fallback Local Save";
    const contactInfo = brand.contactEmail ? `📧 Email: ${brand.contactEmail}` : `📝 Form: ${brand.contactForm}`;
    
    const text = `🚀 <b>New Brand Submission on CoMatch!</b>\n\n` +
                 `<b>Name:</b> ${brand.name}\n` +
                 `<b>Type:</b> ${brand.type}\n` +
                 `<b>Category:</b> ${brand.category}\n` +
                 `<b>Sponsor Type:</b> ${brand.sponsorType}\n` +
                 `<b>Creator Size:</b> ${brand.creatorSize}\n` +
                 `${contactInfo}\n` +
                 `<b>Status:</b> ${status}\n\n` +
                 `🔗 <a href="https://comatch.org">View Live Directory</a>`;
                 
    try {
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'HTML'
            })
        });
        const data = await response.json();
        if (data.ok) {
            console.log(`[+] Telegram notification sent for [${brand.name}]`);
        } else {
            console.error("[-] Telegram API error:", data.description);
        }
    } catch (err) {
        console.error("[-] Failed to send Telegram notification:", err.message);
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

// API: Get all brands (Esports teams excluded; tournament organizers kept under "Events & Tournaments")
app.get('/api/brands', (req, res) => {
    const filtered = dbData.filter(b => b.category !== 'Esports');
    res.json(filtered);
});

// API: Submit a brand (AI Auto-moderation & verification)
app.post('/api/submit-brand', async (req, res) => {
    const { name, url, email, description, logoUrl, listingType } = req.body;

    if (!name || !url || !description) {
        return res.status(400).json({ error: "Missing required fields (Name, URL, Description)" });
    }

    console.log(`[*] New Submission Request: [${name}] - Type: [${listingType || 'sponsor'}] - Website: [${url}]`);

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
        
        let newBrand;
        const isInvestor = listingType === "investor";
        if (isInvestor) {
            newBrand = {
                id,
                name,
                type: "investor",
                investorType: "Venture Capital",
                targetStage: "Pre-Seed / Seed",
                sectors: "Tech, SaaS, AI",
                ticketSize: "$250,000 - $1,000,000",
                contactEmail: email || null,
                contactForm: url,
                logo: finalLogo,
                dna: {
                    requirements: description || "Requires MVP, strong team, scalable tech.",
                    dealStructure: "Equity round, clean SAFE.",
                    pitchHelper: `Dear ${name} Team,\n\nWe are building [Startup Name], a [One-liner]...`
                },
                premium: false
            };
        } else {
            newBrand = {
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
                    requirements: description || "Requires gaming/tech stream coverage, positive community engagement.",
                    dealStructure: "Product gifting sponsorships.",
                    pitchHelper: `Hi ${name} Partnerships,\n\nI am [Name], a content developer at [Link]. I would love to explore a partnership to feature ${name} on my channel. Attached is my media kit.\n\nBest,\n[Name]`
                },
                premium: false
            };
        }

        if (supabase) {
            const { error } = await supabase.from('brands').insert(newBrand);
            if (error) {
                console.error("[-] Supabase save error:", error.message);
                return res.status(500).json({ error: "Failed to save listing to cloud database." });
            }
        }
        dbData.unshift(newBrand);
        fs.writeFileSync(databasePath, JSON.stringify(dbData, null, 2), 'utf8');
        
        // Send Telegram notification and Welcome Email (async background)
        sendTelegramNotification(newBrand, false);
        sendWelcomeEmail(newBrand);
        
        return res.json({ success: true, brand: newBrand });
    }

    try {
        const ai = new GoogleGenerativeAI(apiKey);
        const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });

        const isInvestor = listingType === "investor";
        const prompt = isInvestor 
            ? `You are the auto-moderator and submission processor bot for CoMatch, a web directory of Venture Capital, Accelerators, and Angel Investors.
Evaluate this investor/VC submission:
Investor/Fund Name: "${name}"
Website URL: "${url}"
Contact Email: "${email || 'Not provided'}"
Description / Focus: "${description}"
User-provided Logo URL: "${logoUrl || 'Not provided'}"

SAFETY / MODERATION CHECKS:
- Check if this fund name or description contains NSFW, violence, drugs, gambling, or illegal activities.
- Check if it is spam or gibberish (e.g. random letters, unrelated ads).
- Verify if it represents an actual venture capital fund, accelerator, or angel network.

If it is unsafe or spam, reject it by returning:
{
  "approved": false,
  "reason": "Specify a rejection reason in English."
}

If it is safe and relevant, accept and enrich the data by returning the following JSON:
{
  "approved": true,
  "brand": {
    "id": "${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}",
    "name": "${name}",
    "type": "investor",
    "investorType": "Venture Capital | Angel Network | Accelerator (choose the most appropriate)",
    "targetStage": "Pre-Seed / Seed | Seed / Series A | Series A / B | Multi-Stage (choose the most appropriate)",
    "sectors": "Comma-separated target sectors (e.g. AI, SaaS, Fintech)",
    "ticketSize": "Estimate ticket size (e.g. $100,000 - $500,000 or $250,000 - $1,000,000)",
    "contactEmail": "${email || null}",
    "contactForm": "${url}",
    "logo": "Use user logo if valid. Otherwise generate: https://www.google.com/s2/favicons?domain=extracted-domain&sz=128",
    "dna": {
      "requirements": "Write a professional summary of requirements/criteria for startups in English based on their description.",
      "dealStructure": "Write investment terms details (equity, convertible notes, SAFE etc) in English.",
      "pitchHelper": "Write a customized pitch email template in English for startups pitching this fund. Include brackets like [Startup Name] and [Your Name].",
      "pitchTips": [
        "First specific tip to bypass spam filter or get their attention based on their criteria and website",
        "Second specific tip on metrics they look for or pitch format",
        "Third specific tip on outreach custom to this fund"
      ]
    }
  }
}

Return ONLY the raw JSON text block. Do not wrap it in markdown code blocks like \`\`\`json.`
            : `You are the auto-moderator and submission processor bot for CoMatch, a web directory of B2B brand partnerships and sponsorships.
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
      "pitchHelper": "Write a customized, professional introductory pitch email template in English. Include brackets like [Name] and [Channel Link].",
      "pitchTips": [
        "First specific tip to bypass spam filter or get their attention based on their brand and guidelines",
        "Second specific tip on target audience or channel statistics they value",
        "Third specific tip on outreach custom to this sponsor"
      ]
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

        if (supabase) {
            const { error } = await supabase.from('brands').insert(enrichedBrand);
            if (error) {
                console.error("[-] Supabase save error:", error.message);
                return res.status(500).json({ error: "Failed to save listing to cloud database." });
            }
        }
        dbData.unshift(enrichedBrand);
        fs.writeFileSync(databasePath, JSON.stringify(dbData, null, 2), 'utf8');
        
        console.log(`[+] AI Moderation approved and added listing: [${enrichedBrand.name}] (type: ${enrichedBrand.type})`);
        
        // Send Telegram notification and Welcome Email (async background)
        sendTelegramNotification(enrichedBrand, true);
        sendWelcomeEmail(enrichedBrand);
        
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
        const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });

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

// API: Brutally roast and re-write cold pitch (Generative AI optimization)
app.post('/api/roast', async (req, res) => {
    const { pitch, targetId, channel = 'Email', tone = 'Brutal' } = req.body;

    if (!pitch || pitch.trim().length < 10) {
        return res.status(400).json({ error: "Please write a more detailed pitch draft (minimum 10 characters)." });
    }

    console.log(`[*] AI Pitch Roast request received. Pitch length: ${pitch.length} chars. Target: ${targetId}. Channel: ${channel}. Tone: ${tone}`);

    const apiKey = process.env.GEMINI_API_KEY;
    
    // Fallback: Default witty critique if no API Key is provided
    if (!apiKey) {
        console.warn("[-] GEMINI_API_KEY is not defined. Using local fallback for pitch roasting.");
        const fallbackText = channel === 'LinkedIn' 
            ? `Hi team, I notice your brand targets active SaaS developers. I'd love to connect to discuss a quick partnership package that aligns with your Q3 targets.`
            : channel === 'Twitter'
            ? `Hey, love your developer tools. Do you have 2 minutes to discuss a quick integration for our SaaS audience?`
            : `Subject: Partnership Proposal: Driving value for ${targetId || 'your team'}\n\nHi Partnerships Team,\n\nI run a B2B platform helping startups find sponsors. I notice your brand targets active SaaS developers. I'd love to discuss a developer-focused integration package that aligns with your Q3 targets.\n\nLet me know if you have 5 minutes to chat next week!\n\nBest,\n[Name]`;
            
        return res.json({
            roast: `🔥 Oh, a pitch with no API Key? Classic bootstrap move. This draft is so generic it reads like a standard cookie policy. You need to focus on what the brand actually gains (distribution, brand alignment) instead of just asking for sponsorships.`,
            rewrite: fallbackText,
            score: 30
        });
    }

    try {
        const ai = new GoogleGenerativeAI(apiKey);
        const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });

        const targetEntity = dbData.find(item => item.id === targetId) || { name: targetId || "Sponsor" };

        // Tone Instruction builder
        let toneInstruction = "";
        if (tone === "Brutal") {
            toneInstruction = "Make the roast brutally honest, highly sarcastic, and funny. Point out flaws with wit and fire emojis. Let them know exactly why their pitch makes them look like an amateur.";
        } else if (tone === "Spicy") {
            toneInstruction = "Make the roast a spicy audit. Point out actual flaws with dry humor and constructive criticism, without being overly cruel but keeping it sharp.";
        } else {
            toneInstruction = "Make the critique a highly formal corporate evaluation. Detail why the pitch fails from a B2B ROI and marketing perspective, keeping a professional, serious investor tone.";
        }

        // Channel Instruction builder
        let channelInstruction = "";
        if (channel === "LinkedIn") {
            channelInstruction = "Write a short, engaging LinkedIn DM template (under 100 words) instead of an email. Keep it punchy, conversational, and direct.";
        } else if (channel === "Twitter") {
            channelInstruction = "Write an extremely concise Twitter DM template (under 60 words). No subject lines. Focus on quick interest hook and simple call to action.";
        } else {
            channelInstruction = "Write a professional B2B cold email template (under 150 words) with a clear, high-open-rate Subject line.";
        }

        const prompt = `You are an B2B copywriter, outreach optimizer, and startup investor.
Your task is to analyze the user's pitch draft targeting ${targetEntity.name} and provide a diagnostic critique (roast) and a high-converting re-write.

Target Partner Details:
Name: ${targetEntity.name}
Category: ${targetEntity.category || 'N/A'}
Requirements: ${targetEntity.dna?.requirements || 'N/A'}

User's Pitch Draft:
"${pitch}"

INSTRUCTIONS FOR THE "roast" (Critique):
1. Do not use generic, lazy insults. The critique must be highly specific and diagnostic based on the actual draft.
2. Clearly identify what is missing in the pitch (e.g., lack of B2B value exchange, missing audience stats/demographics, vague call-to-action, lack of personalization for ${targetEntity.name}, or looking like a flat handout request instead of a partnership).
3. Keep it to 3-4 sentences.
4. ${toneInstruction}
5. Point out exactly which sentence or missing piece makes it an immediate "delete" for the partnerships team at ${targetEntity.name}.

INSTRUCTIONS FOR THE "rewrite":
1. ${channelInstruction}
2. Focus on clear value exchange, target audience fit, and a low-friction call-to-action (CTA).
3. Use placeholder brackets like [Your Name] where appropriate.

Return ONLY a raw JSON object matching this schema:
{
  "roast": "The critique text here.",
  "rewrite": "The optimized outreach template here.",
  "score": 35
}

Do not include any other conversational text or wrap the response in markdown code blocks.`;

        const result = await model.generateContent(prompt);
        let responseText = await result.response.text();
        
        responseText = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
        const data = JSON.parse(responseText);

        console.log(`[+] AI Pitch Roaster successfully roasted pitch for [${targetEntity.name}].`);
        return res.json(data);

    } catch (err) {
        console.error("[-] AI Roaster error:", err);
        return res.status(500).json({ error: "An internal error occurred during AI roasting. Please try again later.", details: err.message || err.toString() });
    }
});

// Report Successful Match Deal Route
app.post('/api/report-deal', async (req, res) => {
    try {
        const { projectName, matchedWith, dealValue, message, contactEmail } = req.body;
        
        if (!projectName || !matchedWith || !dealValue || !contactEmail) {
            return res.status(400).json({ error: "Missing required fields (projectName, matchedWith, dealValue, contactEmail)" });
        }
        
        const reportPath = path.join(__dirname, 'deal_reports.json');
        let reports = [];
        
        // Load existing reports
        if (fs.existsSync(reportPath)) {
            try {
                const fileData = fs.readFileSync(reportPath, 'utf8');
                reports = JSON.parse(fileData);
            } catch (e) {
                console.error("[!] Warning: Could not parse deal_reports.json, resetting database.", e);
            }
        }
        
        // Append new report with timestamp
        const newReport = {
            id: 'deal_' + Date.now(),
            projectName,
            matchedWith,
            dealValue: parseInt(dealValue, 10),
            contactEmail,
            message: message || '',
            timestamp: new Date().toISOString()
        };
        
        reports.push(newReport);
        
        // Save back to local JSON file
        fs.writeFileSync(reportPath, JSON.stringify(reports, null, 2), 'utf8');
        
        console.log(`[+] New success deal reported: ${projectName} x ${matchedWith} ($${dealValue})`);
        res.json({ success: true, message: "Success deal report logged successfully." });
    } catch (err) {
        console.error("[-] Error logging deal report:", err);
        res.status(500).json({ error: "Failed to log deal report. Please try again." });
    }
});

// View Success Deal Reports Endpoint (Admin helper)
app.get('/api/admin/deal-reports', (req, res) => {
    try {
        const reportPath = path.join(__dirname, 'deal_reports.json');
        if (fs.existsSync(reportPath)) {
            const fileData = fs.readFileSync(reportPath, 'utf8');
            const reports = JSON.parse(fileData);
            return res.json({ success: true, count: reports.length, reports });
        }
        res.json({ success: true, count: 0, reports: [] });
    } catch (err) {
        console.error("[-] Error loading reports:", err);
        res.status(500).json({ error: "Failed to load deal reports." });
    }
});

// Database Status Debug Route
app.get('/api/db-status', (req, res) => {
    res.json({
        mode: dbInitMode,
        supabaseConnected: supabase !== null,
        supabaseUrlConfigured: !!supabaseUrl,
        supabaseKeyConfigured: !!supabaseKey,
        error: dbError,
        brandsCount: dbData.length
    });
});

// Fallback: serve index.html for undefined routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
async function startServer() {
    await loadDatabase();
    
    app.listen(PORT, () => {
        console.log(`\n======================================================`);
        console.log(`🚀 CoMatch Live API Server started on http://localhost:${PORT}`);
        console.log(`💡 Serving frontend files and API endpoints...`);
        console.log(`🔑 AI Bot runs if GEMINI_API_KEY env variable is defined.`);
        if (supabase) {
            console.log(`🔌 Supabase Cloud Database is ACTIVE!`);
        } else {
            console.log(`📁 Using Local File Database (fallback).`);
        }
        console.log(`======================================================\n`);
    });
}

startServer();
