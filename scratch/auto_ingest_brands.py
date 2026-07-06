import os
import re
import json
import requests

print("[*] Starting Otonom B2B Sponsor Ingestion Engine...")

# Get Gemini API key
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    # Check if running in a non-interactive CI/CD environment like GitHub Actions
    if os.environ.get("GITHUB_ACTIONS") == "true":
        print("[!] Warning: GEMINI_API_KEY secret not found in GitHub Actions. Skipping otonom brand ingestion...")
        print("[*] Exiting gracefully so sitemap and PSEO build steps can continue.")
        exit(0)
    try:
        # Fallback to local storage or user input in sandbox
        api_key = input("[?] Enter your Gemini API Key: ")
    except:
        print("[-] Error: GEMINI_API_KEY environment variable is not configured.")
        exit(1)

# Load existing brands dynamically from brands.js to avoid duplicates
existing_brands = []
brands_js_path = "brands.js"
if os.path.exists(brands_js_path):
    try:
        with open(brands_js_path, "r", encoding="utf-8") as f:
            js_content = f.read()
        existing_brands = list(set(re.findall(r'"name":\s*"([^"]+)"', js_content)))
    except Exception as e:
        print("[!] Warning loading existing brands:", e)

if not existing_brands:
    existing_brands = ["Logitech G", "Razer", "Vercel", "Shopify", "Notion", "Github", "DigitalOcean"]

prompt = f"""
Find 5 active B2B brands, tech companies, or SaaS platforms that actively sponsor creators, developers, podcasts, newsletters, startup conferences, or hackathons (such as hosting companies, productivity platforms, devtools, design utilities, fintech brands, etc.).
Do NOT repeat the ones I already have: {", ".join(existing_brands)}.

For each brand, find and extract:
1. Name of the B2B brand.
2. Logo URL (use Google favicon API link based on their domain, e.g. https://www.google.com/s2/favicons?sz=128&domain=domain.com).
3. Website URL.
4. Category (choose from: Gaming, Design, Hosting, SaaS, Developer Tools, Productivity, Fintech, E-commerce, Hardware, Travel, Education).
5. Sponsor Type (e.g. Product Gifting, Affiliate / Referral, Flat Fee, Barter, B2B Partnership).
6. Target Creator Size (choose from: Nano (under 10k), Micro (10k-50k), Mid (50k-100k), Macro (50k+), Enterprise).
7. Public contact email (e.g. sponsor@domain.com). Under no circumstances return null or empty for 'contactEmail'. If they only use a form, find and provide their general contact email (e.g. info@domain.com, hello@domain.com, contact@domain.com) as a fallback.
8. Public contact form or partnerships page URL.
9. Key requirements (investment criteria, e.g. active developers, minimum reach, clean content).
10. Expected Deal structure (what they offer, e.g. free hosting, custom API limits, affiliate tier, flat payout).
11. A cold email pitch template matching their criteria.
12. 3 bespoke outreach/anti-spam tips customized for this brand to prevent emails from landing in spam folders and maximize open rates.

Output MUST be a valid JSON array matching this exact schema:
[
  {{
    "id": "slug-name",
    "name": "Brand Name",
    "type": "brand",
    "category": "SaaS",
    "sponsorType": "Flat Fee",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "partner@domain.com",
    "contactForm": "https://domain.com/partners",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=domain.com",
    "dna": {{
      "requirements": "...",
      "dealStructure": "...",
      "pitchHelper": "...",
      "pitchTips": [
        "Tip 1...",
        "Tip 2...",
        "Tip 3..."
      ]
    }}
  }}
]
"""

# Call Gemini 2.5 Flash API
url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={api_key}"
headers = {"Content-Type": "application/json"}
payload = {
    "contents": [{"parts": [{"text": prompt}]}],
    "generationConfig": {
        "responseMimeType": "application/json"
    }
}

try:
    print("[*] Contacting Gemini AI for otonom B2B brand research...")
    response = requests.post(url, headers=headers, json=payload, timeout=45)
    
    if response.status_code != 200:
        print(f"[-] Gemini API Error: HTTP {response.status_code}")
        print(response.text)
        exit(1)
        
    res_data = response.json()
    raw_text = res_data["candidates"][0]["content"]["parts"][0]["text"].strip()
    
    # Parse JSON list
    new_brands = json.loads(raw_text)
    print(f"[+] Successfully extracted {len(new_brands)} new B2B brand profiles from research.")
    
    # Append to local brands.js file
    if os.path.exists(brands_js_path):
        with open(brands_js_path, "r", encoding="utf-8") as f:
            js_content = f.read()
            
        # Extract the array inside BRANDS_DATA
        # Find const BRANDS_DATA = [ ... ];
        match = re.search(r"const\s+BRANDS_DATA\s*=\s*(\[.*?\]);", js_content, re.DOTALL)
        if match:
            existing_json_str = match.group(1)
            try:
                existing_array = json.loads(existing_json_str)
            except Exception as parse_err:
                print("[-] Regex parse warning, recreating file format instead.")
                existing_array = []
                
            combined_array = existing_array + new_brands
            
            # Format and save back into brands.js
            new_js_content = f"""// CoMatch Brands & Teams Database
// Curated with high-definition, ad-blocker-safe logo assets from Wikipedia and Simple Icons.

const BRANDS_DATA = {json.dumps(combined_array, indent=2, ensure_ascii=False)};

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = BRANDS_DATA;
}}
"""
            with open(brands_js_path, "w", encoding="utf-8") as f:
                f.write(new_js_content)
                
            print(f"[+] Successfully updated '{brands_js_path}' with the new B2B sponsors! Total: {len(combined_array)} brands.")
        else:
            print("[-] Error: Could not parse BRANDS_DATA array in 'brands.js'.")
    else:
        print("[-] Error: 'brands.js' not found in project root.")
        
except Exception as e:
    print("[-] Ingestion failed:", e)
