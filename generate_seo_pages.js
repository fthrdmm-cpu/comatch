const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("[*] Starting Programmatic SEO Page Generator...");

const sponsorhubDir = __dirname;
const brandsJsPath = path.join(sponsorhubDir, 'brands.js');
const sitemapPath = path.join(sponsorhubDir, 'sitemap.xml');
const outputBaseDir = path.join(sponsorhubDir, 'brands');

// 1. Read and parse brands.js using standard VM context to safely extract BRANDS_DATA
if (!fs.existsSync(brandsJsPath)) {
    console.error("[-] Error: brands.js not found!");
    process.exit(1);
}

const brandsJsContent = fs.readFileSync(brandsJsPath, 'utf8') + "\nBRANDS_DATA;";
const sandbox = {};
vm.createContext(sandbox);
let brands;
try {
    brands = vm.runInContext(brandsJsContent, sandbox);
} catch (e) {
    console.error("[-] Error parsing brands.js via VM:", e.message);
    process.exit(1);
}

if (!Array.isArray(brands) || brands.length === 0) {
    console.error("[-] Error: BRANDS_DATA is empty or not an array!");
    process.exit(1);
}

console.log(`[+] Loaded ${brands.length} brands successfully.`);

// 2. Ensure target directory exists
if (!fs.existsSync(outputBaseDir)) {
    fs.mkdirSync(outputBaseDir, { recursive: true });
}

// 3. Define the HTML Template
function generateBrandHtml(brand) {
    const canonicalUrl = `https://www.comatch.org/brands/${brand.id}/`;
    const initials = brand.name.substring(0, 2).toUpperCase();
    
    // Safety check for DNA fields
    const requirements = (brand.dna && brand.dna.requirements) ? brand.dna.requirements : "General content creation, audience engagement, and brand-safe guidelines.";
    const dealStructure = (brand.dna && brand.dna.dealStructure) ? brand.dna.dealStructure : "Product gifting or performance-based commissions.";
    const pitchTemplate = (brand.dna && brand.dna.pitchHelper) ? brand.dna.pitchHelper : `Hi ${brand.name} Partnerships Team,\n\nI love your products and would like to apply to your creator program. Below is a link to my channel.\n\nBest,\n[Your Name]`;

    // Construct contact elements
    let contactInfoHtml = "";
    if (brand.contactEmail) {
        contactInfoHtml += `
            <a href="mailto:${brand.contactEmail}" class="btn btn-action-primary">
                <i class="fa-solid fa-envelope"></i> Email: ${brand.contactEmail}
            </a>
        `;
    }
    if (brand.contactForm) {
        contactInfoHtml += `
            <a href="${brand.contactForm}" target="_blank" rel="noopener" class="btn btn-action-secondary">
                <i class="fa-solid fa-square-arrow-up-right"></i> Partner Form Application
            </a>
        `;
    }

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${brand.name} Creator Sponsorship & Partnership Program - CoMatch</title>
    <meta name="description" content="Apply to ${brand.name}'s creator partnership program. Find verified contact emails, sponsor requirements, deal structure, and AI-optimized pitch templates on CoMatch.">
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="${brand.name} Creator Sponsorship Program - CoMatch">
    <meta property="og:description" content="Get verified contact info and AI pitch helpers for ${brand.name}. Join 138+ B2B brands looking for creator partnerships.">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="${brand.logo}">

    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        :root {
            --bg-color: #0b0f19;
            --bg-card: rgba(17, 24, 39, 0.7);
            --bg-input: rgba(15, 23, 42, 0.8);
            --border-color: rgba(255, 255, 255, 0.08);
            --border-glow: rgba(16, 185, 129, 0.2);
            --color-primary: #10b981;
            --color-primary-hover: #059669;
            --color-premium: #f59e0b;
            --text-main: #f3f4f6;
            --text-secondary: #d1d5db;
            --text-muted: #9ca3af;
            --border-radius-lg: 16px;
            --border-radius-sm: 8px;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            line-height: 1.6;
            padding: 40px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            max-width: 720px;
            width: 100%;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-lg);
            padding: 40px;
            backdrop-filter: blur(16px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            position: relative;
        }

        .container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--color-primary), var(--color-premium));
            border-top-left-radius: var(--border-radius-lg);
            border-top-right-radius: var(--border-radius-lg);
        }

        /* Header block */
        .profile-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
        }

        .profile-logo {
            width: 80px;
            height: 80px;
            border-radius: var(--border-radius-sm);
            border: 1px solid var(--border-color);
            overflow: hidden;
            display: flex;
            background: #fff;
            flex-shrink: 0;
        }

        .profile-logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            padding: 4px;
        }

        .avatar-fallback {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--color-primary), var(--color-premium));
            color: #fff;
            font-weight: bold;
            font-size: 1.8rem;
        }

        .profile-info h1 {
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 6px;
            color: #fff;
            letter-spacing: -0.5px;
        }

        .badge {
            display: inline-block;
            padding: 4px 10px;
            font-size: 0.75rem;
            font-weight: 600;
            border-radius: 50px;
            background: rgba(16, 185, 129, 0.1);
            color: var(--color-primary);
            border: 1px solid rgba(16, 185, 129, 0.2);
            text-transform: uppercase;
        }

        /* Metadata table */
        .meta-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            margin-bottom: 30px;
        }

        .meta-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-sm);
            padding: 14px;
            text-align: center;
        }

        .meta-card span {
            display: block;
            font-size: 0.75rem;
            color: var(--text-muted);
            margin-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .meta-card strong {
            font-size: 0.95rem;
            color: #fff;
            font-weight: 600;
        }

        /* Content Blocks */
        .section-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .section-title i {
            color: var(--color-primary);
        }

        .content-box {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-sm);
            padding: 16px;
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin-bottom: 24px;
        }

        /* Action Buttons */
        .action-container {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 30px;
        }

        .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            width: 100%;
            padding: 14px;
            border-radius: var(--border-radius-sm);
            font-size: 0.95rem;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s ease;
            border: none;
        }

        .btn-action-primary {
            background: var(--color-primary);
            color: #0b0f19;
        }

        .btn-action-primary:hover {
            background: var(--color-primary-hover);
            transform: translateY(-1px);
        }

        .btn-action-secondary {
            background: rgba(255, 255, 255, 0.05);
            color: #fff;
            border: 1px solid var(--border-color);
        }

        .btn-action-secondary:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.15);
            transform: translateY(-1px);
        }

        /* Pitch helper text area */
        .pitch-container {
            position: relative;
            margin-bottom: 30px;
        }

        .pitch-textarea {
            width: 100%;
            height: 180px;
            background: var(--bg-input);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-sm);
            padding: 16px;
            color: var(--text-main);
            font-family: inherit;
            font-size: 0.88rem;
            resize: none;
            outline: none;
        }

        .pitch-textarea:focus {
            border-color: var(--color-primary);
            box-shadow: 0 0 10px var(--border-glow);
        }

        .btn-copy {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: var(--color-primary);
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .btn-copy:hover {
            background: var(--color-primary);
            color: #0b0f19;
        }

        /* Footer navigation */
        .footer-nav {
            text-align: center;
            border-top: 1px solid var(--border-color);
            padding-top: 24px;
            margin-top: 10px;
        }

        .footer-nav a {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 0.85rem;
            transition: color 0.2s;
        }

        .footer-nav a:hover {
            color: var(--color-primary);
        }

        /* Responsive */
        @media (max-width: 600px) {
            .meta-grid {
                grid-template-columns: 1fr;
                gap: 12px;
            }
            .profile-header {
                flex-direction: column;
                text-align: center;
            }
            .container {
                padding: 24px;
            }
        }
    </style>

    <!-- Schema.org Product Structured Data for SEO Rich Snippets -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "${brand.name} Creator Sponsorship Program",
      "image": "${brand.logo}",
      "description": "Details, requirements, and outreach templates for ${brand.name} creator partnership program.",
      "brand": {
        "@type": "Brand",
        "name": "${brand.name}"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
    </script>
</head>
<body>

    <div class="container">
        
        <div class="profile-header">
            <div class="profile-logo">
                <img src="${brand.logo}" alt="${brand.name} Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="avatar-fallback" style="display: none;">${initials}</div>
            </div>
            <div class="profile-info">
                <h1>${brand.name}</h1>
                <span class="badge">${brand.category}</span>
            </div>
        </div>

        <div class="meta-grid">
            <div class="meta-card">
                <span>Creator Size</span>
                <strong>${brand.creatorSize}</strong>
            </div>
            <div class="meta-card">
                <span>Sponsor Type</span>
                <strong>${brand.sponsorType}</strong>
            </div>
            <div class="meta-card">
                <span>Target Niche</span>
                <strong>${brand.category}</strong>
            </div>
        </div>

        <div class="section-title">
            <i class="fa-solid fa-list-check"></i> Program Requirements
        </div>
        <div class="content-box">
            ${requirements}
        </div>

        <div class="section-title">
            <i class="fa-solid fa-handshake"></i> Expected Deal Structure
        </div>
        <div class="content-box">
            ${dealStructure}
        </div>

        <div class="section-title">
            <i class="fa-solid fa-pen-nib"></i> AI Pitch Template (Copyable)
        </div>
        <div class="pitch-container">
            <button class="btn-copy" onclick="copyPitchText()">Copy Template</button>
            <textarea id="pitch-helper-text" class="pitch-textarea" readonly>${pitchTemplate}</textarea>
        </div>

        <div class="action-container">
            ${contactInfoHtml}
        </div>

        <div class="footer-nav">
            <a href="https://www.comatch.org/">
                <i class="fa-solid fa-arrow-left-long"></i> Back to CoMatch B2B Partner Directory
            </a>
        </div>

    </div>

    <script>
        function copyPitchText() {
            const textarea = document.getElementById("pitch-helper-text");
            textarea.select();
            textarea.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(textarea.value);
            
            const copyBtn = document.querySelector(".btn-copy");
            copyBtn.innerText = "Copied!";
            copyBtn.style.background = "#10b981";
            copyBtn.style.color = "#0b0f19";
            
            setTimeout(() => {
                copyBtn.innerText = "Copy Template";
                copyBtn.style.background = "rgba(16, 185, 129, 0.1)";
                copyBtn.style.color = "#10b981";
            }, 2000);
        }
    </script>
</body>
</html>
`;
}

// 4. Generate the pages
let brandUrls = [];
brands.forEach(brand => {
    const brandDirName = brand.id;
    const brandFolder = path.join(outputBaseDir, brandDirName);
    
    if (!fs.existsSync(brandFolder)) {
        fs.mkdirSync(brandFolder, { recursive: true });
    }
    
    const htmlContent = generateBrandHtml(brand);
    fs.writeFileSync(path.join(brandFolder, 'index.html'), htmlContent, 'utf8');
    
    brandUrls.push(`https://www.comatch.org/brands/${brandDirName}/`);
});

console.log(`[+] Generated ${brands.length} static landing pages.`);

// 5. Generate / Update sitemap.xml dynamically
const currentDate = new Date().toISOString().split('T')[0];

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.comatch.org/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

brandUrls.forEach(url => {
    sitemapContent += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
`;
});

sitemapContent += `</urlset>\n`;

fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log(`[+] Successfully updated sitemap.xml with ${brandUrls.length + 1} URLs.`);
console.log("[*] Programmatic SEO Generation complete!");
