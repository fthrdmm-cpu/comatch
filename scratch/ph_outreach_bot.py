import requests
import re
import os
import json
import time
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from urllib.parse import urljoin, urlparse

print("[*] Starting Product Hunt Auto-Outreach Bot...")

# File to track duplicate leads
SENT_LEADS_FILE = "ph_sent_leads.json"
if os.path.exists(SENT_LEADS_FILE):
    with open(SENT_LEADS_FILE, "r", encoding="utf-8") as f:
        try:
            sent_domains = set(json.load(f))
        except Exception:
            sent_domains = set()
else:
    sent_domains = set()

print(f"[+] Loaded {len(sent_domains)} previously contacted domains.")

# SMTP Configuration
SMTP_SERVER = "smtp.hostinger.com"
SMTP_PORT = 465
SMTP_USER = "hello@comatch.org"
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD", "Fatiherdem.1")

def extract_emails(html):
    # Match valid email format
    pattern = r'[a-zA-Z0-9\._%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,4}'
    emails = re.findall(pattern, html)
    valid_emails = []
    
    # Block list of false positives and placeholder addresses
    blocked_emails = {"you@work.com", "example@example.com", "test@test.com", "info@domain.com"}
    blocked_domains = {"example.com", "domain.com", "yourdomain.com", "email.com", "work.com", "yourcompany.com", "temp.com", "acmecorp.com", "studio.com", "test.com", "mycompany.com"}
    blocked_extensions = {".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".mp4", ".css", ".js", ".ico"}
    
    for email in emails:
        email = email.lower().strip()
        if email in blocked_emails:
            continue
        if any(email.endswith(ext) for ext in blocked_extensions):
            continue
        
        parts = email.split("@")
        if len(parts) == 2:
            domain = parts[1]
            if domain in blocked_domains:
                continue
            if email not in valid_emails:
                valid_emails.append(email)
                
    return valid_emails

def scrape_site_for_emails(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
    }
    try:
        r = requests.get(url, headers=headers, timeout=12)
        html = r.text
        emails = extract_emails(html)
        if emails:
            return emails
        
        # Search for common contact subpages
        links = re.findall(r'href=["\']([^"\']+)["\']', html)
        contact_keywords = ['contact', 'privacy', 'about', 'terms', 'legal']
        subpage_urls = []
        
        for link in links:
            link_lower = link.lower()
            if any(kw in link_lower for kw in contact_keywords):
                full_url = urljoin(url, link)
                # Keep requests within the same domain
                if full_url.startswith(url) and full_url not in subpage_urls:
                    subpage_urls.append(full_url)
                    
        for sub_url in subpage_urls[:3]:
            try:
                sub_r = requests.get(sub_url, headers=headers, timeout=8)
                sub_emails = extract_emails(sub_r.text)
                if sub_emails:
                    return sub_emails
            except Exception:
                pass
        return []
    except Exception:
        return []

def send_outreach_email(startup_name, tagline, website_url, email_address):
    subject = f"Congrats on your Product Hunt launch today! 🚀"
    
    body = f"""Hi {startup_name} Team,

Huge congrats on launching {startup_name} on Product Hunt today! We love your tagline: "{tagline}".

As founders, we know that finding B2B sponsors or VC funding during scale-up is a major headache. Most directories charge $99+/mo just to view sponsor lists or contact details.

To help fellow builders, we created CoMatch (https://comatch.org) - a 100% free, open-source matching directory.

🤖 AI Matchmaker: Describe your startup, and get matched with sponsors (like Vercel, Supabase, DigitalOcean) or VC funds (like Sequoia, Accel, Seedcamp) instantly.
📧 Custom Pitch Generator: Gets you tailored pitch templates and direct email contacts in seconds.
🔒 No paywalls, no subscriptions, forever. All pitch generation runs 100% locally in your browser.

Since you've launched today, listing on CoMatch is a great way to build backlinks and get matched with sponsors/investors. You can submit your project in under 1 minute here:
👉 https://comatch.org

Wishing you the absolute best on your Product Hunt launch!

Best regards,
Fatih Erdem
Founder, CoMatch
hello@comatch.org | https://comatch.org

---
CoMatch Project, Maslak, 34485 Istanbul, Turkey
To opt out of future project invites, reply to this email with "Unsubscribe" or "STOP".
"""
    msg = MIMEMultipart()
    msg['From'] = SMTP_USER
    msg['To'] = email_address
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain', 'utf-8'))
    
    if SMTP_PASSWORD == "YOUR_SMTP_PASSWORD" or SMTP_PASSWORD == "":
        print(f"[SIMULATION] Would send email to: {email_address} (Startup: {startup_name})")
        return True
        
    try:
        server = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT, timeout=15)
        server.login(SMTP_USER, SMTP_PASSWORD)
        server.sendmail(SMTP_USER, email_address, msg.as_string())
        server.quit()
        print(f"[+] Successfully sent outreach email to: {email_address}")
        return True
    except Exception as e:
        print(f"[-] Failed to send email to {email_address}: {e}")
        return False

# Main Execution Loop
try:
    print("[*] Fetching Product Hunt feed...")
    r = requests.get("https://www.producthunt.com/feed", headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
    }, timeout=15)
    
    entries = re.findall(r'<entry>(.*?)</entry>', r.text, re.DOTALL)
    print(f"[+] Found {len(entries)} entries. Processing...")
    
    new_sent_count = 0
    
    for idx, entry in enumerate(entries, 1):
        title_match = re.search(r'<title>(.*?)</title>', entry)
        if not title_match:
            continue
        startup_name = title_match.group(1).strip()
        
        # Extract tagline
        tagline_match = re.search(r'&lt;p&gt;\s*(.*?)\s*&lt;/p&gt;', entry, re.DOTALL)
        tagline = tagline_match.group(1).strip() if tagline_match else "No tagline"
        
        # Extract PH Redirect URL
        redirect_match = re.search(r'href="(https://www\.producthunt\.com/r/p/[^"]+)"', entry)
        if not redirect_match:
            continue
        redirect_url = redirect_match.group(1).replace("&amp;", "&")
        
        # Resolve target website URL
        try:
            head_resp = requests.head(redirect_url, headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
            }, allow_redirects=True, timeout=10)
            website_url = head_resp.url
        except Exception:
            try:
                get_resp = requests.get(redirect_url, headers={
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
                }, allow_redirects=True, timeout=10)
                website_url = get_resp.url
            except Exception:
                continue
                
        # Parse domain to prevent duplicate outreach
        domain = urlparse(website_url).netloc.lower().replace("www.", "")
        if not domain or domain in sent_domains:
            continue
            
        print(f"\n[*] Processing [{idx}/{len(entries)}] {startup_name} ({domain})...")
        
        # Scrape website for emails
        emails = scrape_site_for_emails(website_url)
        if not emails:
            print(f"    [-] No emails found for {domain}")
            # Add to registry anyway so we don't scrape it repeatedly
            sent_domains.add(domain)
            continue
            
        target_email = emails[0] # Take the first verified email
        print(f"    [+] Found email: {target_email}")
        
        # Send mail
        if send_outreach_email(startup_name, tagline, website_url, target_email):
            sent_domains.add(domain)
            new_sent_count += 1
            
            # Save registry instantly in case process crashes
            with open(SENT_LEADS_FILE, "w", encoding="utf-8") as f:
                json.dump(list(sent_domains), f, indent=2)
                
            # Wait 5 seconds to prevent rate limits
            if SMTP_PASSWORD != "YOUR_SMTP_PASSWORD" and SMTP_PASSWORD != "":
                time.sleep(5)
                
    print(f"\n[+] Product Hunt mail run complete! Sent {new_sent_count} new outreach emails.")
    
except Exception as e:
    print(f"[-] Error during Product Hunt outreach: {e}")
