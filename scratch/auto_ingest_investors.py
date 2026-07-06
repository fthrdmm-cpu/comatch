import os
import re
import json
import requests

print("[*] Starting Otonom Investor Ingestion Engine...")

# Get Gemini API key
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    # Check if running in a non-interactive CI/CD environment like GitHub Actions
    if os.environ.get("GITHUB_ACTIONS") == "true":
        print("[!] Warning: GEMINI_API_KEY secret not found in GitHub Actions. Skipping otonom investor ingestion...")
        print("[*] Exiting gracefully so PSEO and sitemap build steps can continue.")
        exit(0)
    try:
        # Fallback to local storage or user input in sandbox
        api_key = input("[?] Enter your Gemini API Key: ")
    except:
        print("[-] Error: GEMINI_API_KEY environment variable is not configured.")
        exit(1)

# List of already seeded investors to avoid duplication
existing_investors = [
    "Y Combinator", "scaleX Ventures", "TRangels", "Revo Capital",
    "500 Emerging Europe", "Collective Spark", "Techstars", "Sequoia Capital"
]

prompt = f"""
Find 5 active Venture Capital (VC) firms, startup accelerators, or angel investor networks (especially ones that invest in Turkish founders or European SaaS/AI startups at Pre-Seed or Seed stage, such as APY Ventures, Boğaziçi Ventures, Galata Business Angels, Keiretsu Forum, StartersHub, 212, Simya VC, Vestel Ventures, Tarvenn, etc.).
Do NOT repeat the ones I already have: {", ".join(existing_investors)}.

For each investor, find and extract:
1. Name of the VC/Angel network.
2. Logo URL (use clearbit logo API link based on their domain, e.g. https://logo.clearbit.com/domain.com).
3. Website URL.
4. Investor Type (Venture Capital, Angel Network, Accelerator).
5. Target Stage (e.g. Pre-Seed / Seed).
6. Target Sectors (e.g. AI, SaaS, Fintech, Deep Tech).
7. Average Ticket Size (e.g. $100,000 - $300,000).
8. Public contact email (e.g. pitch@domain.com) or application form URL.
9. Key requirements (investment criteria, e.g. MVP ready, MRR target).
10. Expected Deal structure (dilution rate, terms).
11. A cold email pitch template matching their criteria.

Output MUST be a valid JSON array matching this exact schema:
[
  {{
    "id": "slug-name",
    "name": "VC Name",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed",
    "sectors": "AI, SaaS, Fintech",
    "ticketSize": "$100k - $300k",
    "contactEmail": "pitch@domain.com",
    "contactForm": "https://domain.com/apply",
    "logo": "https://logo.clearbit.com/domain.com",
    "dna": {{
      "requirements": "...",
      "dealStructure": "...",
      "pitchHelper": "..."
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
    print("[*] Contacting Gemini AI for otonom web research...")
    response = requests.post(url, headers=headers, json=payload, timeout=45)
    
    if response.status_code != 200:
        print(f"[-] Gemini API Error: HTTP {response.status_code}")
        print(response.text)
        exit(1)
        
    res_data = response.json()
    raw_text = res_data["candidates"][0]["content"]["parts"][0]["text"].strip()
    
    # Parse JSON list
    new_investors = json.loads(raw_text)
    print(f"[+] Successfully extracted {len(new_investors)} new investor profiles from research.")
    
    # Append to local investors.js file
    investors_js_path = "investors.js"
    if os.path.exists(investors_js_path):
        with open(investors_js_path, "r", encoding="utf-8") as f:
            js_content = f.read()
            
        # Extract the array inside INVESTORS_DATA
        # Find const INVESTORS_DATA = [ ... ];
        match = re.search(r"const\s+INVESTORS_DATA\s*=\s*(\[.*?\]);", js_content, re.DOTALL)
        if match:
            existing_json_str = match.group(1)
            # Remove any trailing comments or JS-isms if any, standard loads
            try:
                # We need to parse existing json array
                # Simple regex replace to make it pure JSON (remove JS module export at bottom if any)
                existing_array = json.loads(existing_json_str)
            except Exception as parse_err:
                print("[-] Regex parse warning, recreating file format instead.")
                existing_array = []
                
            combined_array = existing_array + new_investors
            
            # Format and save back into investors.js
            new_js_content = f"""// CoMatch Investors & VCs Database
// Seed data for startups looking for investment.

const INVESTORS_DATA = {json.dumps(combined_array, indent=2, ensure_ascii=False)};

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = INVESTORS_DATA;
}}
"""
            with open(investors_js_path, "w", encoding="utf-8") as f:
                f.write(new_js_content)
                
            print(f"[+] Successfully updated '{investors_js_path}' with the new profiles! Total: {len(combined_array)} investors.")
        else:
            print("[-] Error: Could not parse INVESTORS_DATA array in 'investors.js'.")
    else:
        print("[-] Error: 'investors.js' not found in project root.")
        
except Exception as e:
    print("[-] Ingestion failed:", e)
