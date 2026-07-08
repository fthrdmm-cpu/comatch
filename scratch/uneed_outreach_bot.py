import requests
import re
import os
import json
import time
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from urllib.parse import urljoin, urlparse

print("[*] Starting Uneed Auto-Outreach Bot...")

# Unified file to track duplicate leads across PH, HN and Uneed
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
    pattern = r'[a-zA-Z0-9\._%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,4}'
    emails = re.findall(pattern, html)
    valid_emails = []
    
    # Block list of false positives and placeholder addresses
    blocked_emails = {
        "you@work.com", "example@example.com", "test@test.com", "info@domain.com",
        "you@company.com", "team@gmail.com", "your@email.com", "your-email@domain.com",
        "username@domain.com", "placeholder@email.com", "someone@example.com",
        "email@example.com", "username@email.com", "first.last@company.com",
        "yourname@yourcompany.com", "mail@example.com", "info@yourcompany.com",
        "contact@yourcompany.com", "support@yourcompany.com", "info@company.com",
        "contact@company.com", "support@company.com", "team@company.com",
        "hello@company.com", "admin@company.com", "webmaster@company.com",
        "feedback@company.com", "noreply@gmail.com", "no-reply@gmail.com"
    }
    blocked_domains = {
        "example.com", "domain.com", "yourdomain.com", "email.com", "work.com",
        "yourcompany.com", "temp.com", "acmecorp.com", "studio.com", "test.com",
        "mycompany.com", "company.com", "company.co", "website.com", "yourwebsite.com", "uneed.best"
    }
    blocked_extensions = {".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".mp4", ".css", ".js", ".ico"}
    blocked_prefixes = {"you", "your-email", "username", "placeholder", "someone", "yourname", "first.last", "email", "dummy", "test", "your"}
    
    for email in emails:
        email = email.lower().strip()
        if email in blocked_emails:
            continue
        if any(email.endswith(ext) for ext in blocked_extensions):
            continue
        
        parts = email.split("@")
        if len(parts) == 2:
            username, domain = parts[0], parts[1]
            if domain in blocked_domains:
                continue
            if username in blocked_prefixes:
                continue
            if domain.startswith("company.") or domain.startswith("yourcompany."):
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

def send_outreach_email(project_url, email_address):
    # Try parsing clean project name from URL
    try:
        parsed = urlparse(project_url)
        domain = parsed.netloc.replace("www.", "")
        project_name = domain.split(".")[0].capitalize()
    except Exception:
        project_name = "Startup"
        
    subject = f"Congrats on your Uneed launch! 🚀"
    
    body = f"""Hi Team,

Congrats on launching your project on Uneed!

As builders, we know that finding B2B sponsors or VC funding during scale-up is a major headache. Most directories charge $99+/mo just to view sponsor lists or contact details.

To help fellow builders, we created CoMatch (https://comatch.org) - a 100% free, open-source matching directory.

🤖 AI Matchmaker: Describe your startup, and get matched with sponsors (like Vercel, Supabase, DigitalOcean) or VC funds (like Sequoia, Accel, Seedcamp) instantly.
📧 Custom Pitch Generator: Gets you tailored pitch templates and direct email contacts in seconds.
🔒 No paywalls, no subscriptions, forever. All pitch generation runs 100% locally in your browser.

Since you just launched, listing on CoMatch is a great way to build backlinks and get matched with sponsors/investors. You can submit your project in under 1 minute here:
👉 https://comatch.org

Wishing you the absolute best on your launch!

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
        print(f"[SIMULATION] Would send email to: {email_address} (Project: {project_name})")
        return True
        
    try:
        server = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT, timeout=15)
        server.login(SMTP_USER, SMTP_PASSWORD)
        server.sendmail(SMTP_USER, email_address, msg.as_string())
        server.quit()
        print(f"[+] Successfully sent Uneed outreach email to: {email_address}")
        return True
    except Exception as e:
        print(f"[-] Failed to send email to {email_address}: {e}")
        return False

# Main Execution Loop
try:
    print("[*] Fetching Uneed homepage state...")
    r = requests.get("https://uneed.best", headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
    }, timeout=15)
    
    if "__NUXT_DATA__" not in r.text:
        print("[-] Error: Nuxt data state not found in HTML.")
        exit(1)
        
    escaped_urls = re.findall(r'https?:\\u002F\\u002F[a-zA-Z0-9\.\-_\\u002F\?&\=\+]+', r.text)
    print(f"[+] Found {len(escaped_urls)} escaped URLs in state. Filtering...")
    
    cleaned_urls = []
    for url in escaped_urls:
        clean = url.replace("\\u002F", "/")
        # Filter out assets/avatar/backend URLs
        if "backend.uneed.best" in clean or "storage" in clean or "youtube" in clean or "x.com" in clean or "bsky" in clean:
            continue
        if clean not in cleaned_urls:
            cleaned_urls.append(clean)
            
    print(f"[+] Extracted {len(cleaned_urls)} clean product links. Commencing outreach...")
    
    new_sent_count = 0
    
    for idx, website_url in enumerate(cleaned_urls, 1):
        try:
            # Resolve target website URL redirects
            try:
                head_resp = requests.head(website_url, headers={
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
                }, allow_redirects=True, timeout=10)
                final_url = head_resp.url
            except Exception:
                try:
                    get_resp = requests.get(website_url, headers={
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
                    }, allow_redirects=True, timeout=10)
                    final_url = get_resp.url
                except Exception:
                    final_url = website_url
            
            # Parse domain for duplicate protection
            domain = urlparse(final_url).netloc.lower().replace("www.", "")
            if not domain or domain in sent_domains:
                continue
                
            print(f"\n[*] Processing [{idx}/{len(cleaned_urls)}] URL: {final_url} ({domain})...")
            
            # Scrape website for emails
            emails = scrape_site_for_emails(final_url)
            if not emails:
                print(f"    [-] No emails found for {domain}")
                sent_domains.add(domain) # Skip next time
                continue
                
            target_email = emails[0]
            print(f"    [+] Found email: {target_email}")
            
            # Send email
            if send_outreach_email(final_url, target_email):
                sent_domains.add(domain)
                new_sent_count += 1
                
                # Save registry instantly
                with open(SENT_LEADS_FILE, "w", encoding="utf-8") as f_sent:
                    json.dump(list(sent_domains), f_sent, indent=2)
                    
                # Delay to be nice
                if SMTP_PASSWORD != "YOUR_SMTP_PASSWORD" and SMTP_PASSWORD != "":
                    time.sleep(5)
        except Exception as e_url:
            print(f"[!] Error processing URL {website_url}: {e_url}")
            
    print(f"\n[+] Uneed mail run complete! Sent {new_sent_count} new outreach emails.")
except Exception as e:
    print(f"[-] Error during Uneed outreach: {e}")
