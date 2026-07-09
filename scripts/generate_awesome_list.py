import re
import ast
import sys

def parse_js_array(filepath, var_name):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Locate array start and end
    pattern = rf"const\s+{var_name}\s*=\s*(\[[\s\S]*?\]);"
    match = re.search(pattern, content)
    if not match:
        # Try finding double quote variable
        pattern = rf"var\s+{var_name}\s*=\s*(\[[\s\S]*?\]);"
        match = re.search(pattern, content)
        if not match:
            print(f"[-] Error: Could not find variable {var_name} in {filepath}")
            return []
            
    array_str = match.group(1)
    
    # Clean JS array string to make it evaluatable in python literal_eval
    # Replace JS booleans/nulls
    array_str = array_str.replace("true", "True").replace("false", "False").replace("null", "None")
    
    # Evaluate list of dicts
    try:
        data = ast.literal_eval(array_str)
        return data
    except Exception as e:
        print(f"[-] AST Evaluation failed for {var_name}: {e}")
        # Fallback manual line-by-line regex extract or eval
        # Since we just want simple values, we can clean up comments and do eval
        try:
            # Strip comments
            cleaned = re.sub(r'//.*', '', array_str)
            cleaned = re.sub(r'/\*[\s\S]*?\*/', '', cleaned)
            data = eval(cleaned, {"True": True, "False": False, "None": None})
            return data
        except Exception as e2:
            print(f"[-] Fallback eval also failed: {e2}")
            return []

def main():
    print("[*] Loading databases...")
    sponsors = parse_js_array("brands.js", "BRANDS_DATA")
    investors = parse_js_array("investors.js", "INVESTORS_DATA")
    
    if not sponsors and not investors:
        print("[-] Error: Loaded no data. Aborting.")
        sys.exit(1)
        
    print(f"[+] Loaded {len(sponsors)} sponsors and {len(investors)} investors.")
    
    markdown = []
    markdown.append("# Awesome B2B Sponsorships & Startup Investors List")
    markdown.append("\n> A curated directory of B2B brand sponsors, marketing partnerships, VC funds, and startup accelerators.")
    markdown.append("\n## 🤖 AI Matchmaking & Pitch Templates")
    markdown.append("Need dynamic matchmaking or customized cold email pitch templates? Visit the live app:")
    markdown.append("👉 **[CoMatch Directory (https://comatch.org)](https://comatch.org)**")
    
    # 1. B2B Sponsors Table
    markdown.append("\n## 🚀 B2B Sponsor Directories")
    markdown.append("| Sponsor / Brand | Category | Partnership Type | Target Scale | Contact Channel | Link |")
    markdown.append("| --- | --- | --- | --- | --- | --- |")
    
    for s in sponsors:
        name = s.get("name", "Unknown")
        cat = s.get("category", "Tech")
        s_type = s.get("sponsorType", "Unspecified")
        scale = s.get("creatorSize", "All Scale")
        
        email = s.get("contactEmail", "")
        contact = f"`{email}`" if email else "Form/Link"
        
        form_url = s.get("contactForm", "https://comatch.org")
        link = f"[Apply]({form_url})"
        
        markdown.append(f"| **{name}** | {cat} | {s_type} | {scale} | {contact} | {link} |")
        
    # 2. Investors Table
    markdown.append("\n## 💼 VC Funds & Startup Accelerators")
    markdown.append("| Investor / Fund | Investor Type | Target Sectors | Target Stage | Ticket Size | Contact Channel | Link |")
    markdown.append("| --- | --- | --- | --- | --- | --- | --- |")
    
    for inv in investors:
        name = inv.get("name", "Unknown")
        i_type = inv.get("investorType", "Unspecified")
        sectors = inv.get("sectors", "All Sectors")
        stage = inv.get("targetStage", "Pre-Seed / Seed")
        ticket = inv.get("ticketSize", "Unspecified")
        
        email = inv.get("contactEmail", "")
        contact = f"`{email}`" if email else "Form/Link"
        
        form_url = inv.get("contactForm", "https://comatch.org")
        link = f"[Apply]({form_url})"
        
        markdown.append(f"| **{name}** | {i_type} | {sectors} | {stage} | {ticket} | {contact} | {link} |")
        
    markdown.append("\n---\n*Generated automatically by CoMatch Engine. Help us keep this directory fresh by submitting new listings at [comatch.org](https://comatch.org).*")
    
    output_path = "../AWESOME_LIST.md"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(markdown))
        
    print(f"[SUCCESS] Awesome list markdown written to: {output_path}")

if __name__ == "__main__":
    main()
