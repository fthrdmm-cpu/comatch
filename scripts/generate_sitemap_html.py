import re
import ast
import sys

def parse_js_array(filepath, var_name):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    pattern = rf"const\s+{var_name}\s*=\s*(\[[\s\S]*?\]);"
    match = re.search(pattern, content)
    if not match:
        pattern = rf"var\s+{var_name}\s*=\s*(\[[\s\S]*?\]);"
        match = re.search(pattern, content)
        if not match:
            return []
            
    array_str = match.group(1)
    array_str = array_str.replace("true", "True").replace("false", "False").replace("null", "None")
    
    try:
        data = ast.literal_eval(array_str)
        return data
    except Exception:
        try:
            cleaned = re.sub(r'//.*', '', array_str)
            cleaned = re.sub(r'/\*[\s\S]*?\*/', '', cleaned)
            data = eval(cleaned, {"True": True, "False": False, "None": None})
            return data
        except Exception:
            return []

def main():
    sponsors = parse_js_array("brands.js", "BRANDS_DATA")
    investors = parse_js_array("investors.js", "INVESTORS_DATA")
    
    if not sponsors and not investors:
        print("[-] Error: No data found.")
        sys.exit(1)
        
    # Build list of links
    links = []
    
    # Sponsors
    for s in sponsors:
        s_id = s.get("id")
        name = s.get("name")
        if s_id and name:
            links.append(f'<a href="/?sponsor={s_id}" style="color: var(--text-secondary); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color=\'var(--color-primary)\'" onmouseout="this.style.color=\'var(--text-secondary)\'">{name}</a>')
            
    # Investors
    for inv in investors:
        inv_id = inv.get("id")
        name = inv.get("name")
        if inv_id and name:
            links.append(f'<a href="/?sponsor={inv_id}" style="color: var(--text-secondary); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color=\'var(--color-premium)\'" onmouseout="this.style.color=\'var(--text-secondary)\'">{name} Fund</a>')
            
    # Combine links separated by a dot
    links_html = "\n                    " + " <span style=\"color: var(--text-muted); opacity: 0.5;\">•</span>\n                    ".join(links)
    
    sitemap_block = f"""            <!-- SEO Sitemap Directory Index -->
            <div class="sitemap-index" style="margin-top: 40px; border-top: 1px solid var(--border-color); padding-top: 24px; text-align: left; max-width: 900px; margin-left: auto; margin-right: auto; z-index: 10; position: relative;">
                <h4 style="font-size: 0.9rem; color: var(--text-primary); margin-bottom: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; text-align: center;">Verified B2B Sponsors & Investors Index</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 8px 12px; justify-content: center; font-size: 0.78rem; line-height: 1.6; text-align: center;">
                    {links_html}
                </div>
            </div>"""
            
    # Load index.html and replace
    with open("index.html", "r", encoding="utf-8") as f:
        html_content = f.read()
        
    # Find portal-footer placement
    target = '<div class="portal-footer">'
    if target not in html_content:
        print("[-] Error: portal-footer target not found in index.html.")
        sys.exit(1)
        
    # Replace target with sitemap + target
    updated_html = html_content.replace(target, sitemap_block + "\n            \n            " + target)
    
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(updated_html)
        
    print("[SUCCESS] HTML sitemap successfully generated and injected into index.html!")

if __name__ == "__main__":
    main()
