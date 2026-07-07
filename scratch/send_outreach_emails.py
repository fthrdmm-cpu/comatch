import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import json
import os
import time

print("[*] Starting Auto-Email Outreach Sender Engine...")

# Load leads
leads_path = "creator_leads.json"
if not os.path.exists(leads_path) or os.path.getsize(leads_path) == 0:
    # Dummy sample leads for testing if file is empty or not created
    leads = [
        {
            "name": "Alex Dev",
            "username": "alexdev12",
            "email": "hello@comatch.org", # We test to our own email!
            "repo": "awesome-saas-boilerplate"
        }
    ]
    print("[*] Leads file empty or not found. Loaded dummy test lead pointing to 'hello@comatch.org'.")
else:
    with open(leads_path, "r", encoding="utf-8") as f:
        leads = json.load(f)

# SMTP Server Configurations (Fill these details to execute!)
SMTP_SERVER = "smtp.hostinger.com" # Default Hostinger SMTP
SMTP_PORT = 465 # SSL Port
SMTP_USER = "hello@comatch.org" # Your sender email
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD", "Fatiherdem.1") # Securely configured Hostinger password

if SMTP_PASSWORD == "YOUR_SMTP_PASSWORD":
    print("[!] Warning: SMTP_PASSWORD is not configured. Run will simulate mailing without sending.")

def send_email(lead):
    name = lead.get("name", lead.get("username", "Developer"))
    repo = lead.get("repo", "your open source projects")
    to_email = lead.get("email")
    
    subject = f"Free AI sponsor matchmaking tool for your project '{repo}'"
    
    # Professional Cold Email Template
    body = f"""Hi {name},

I came across your GitHub repository '{repo}' and was really impressed by your work! 

As developers, we know that funding open-source projects or finding sponsorships is a major headache. Most directories charge $99/mo just to view sponsor emails.

To solve this, we built CoMatch (https://comatch.org) - a 100% free, open-source directory powered by AI.

🤖 AI Matchmaker: Describe your project, and get matched with B2B sponsors (like Vercel, Supabase, DigitalOcean) instantly.
📧 Custom Pitch Generator: Gets you tailored pitch templates and contact emails in seconds.
🔑 No signups or credit cards required.

We'd love for you to try it out and find your next sponsor! Let me know if you have any feedback.

Best regards,
Fatih Erdem
Founder, CoMatch
fatih@comatch.org | https://comatch.org

---
CoMatch Project, Maslak, 34485 Istanbul, Turkey
To opt out of future project invites, reply to this email with "Unsubscribe" or "STOP".
"""

    msg = MIMEMultipart()
    msg['From'] = SMTP_USER
    msg['To'] = to_email
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain', 'utf-8'))
    
    if SMTP_PASSWORD == "YOUR_SMTP_PASSWORD":
        print(f"[SIMULATION] Would send email to: {to_email}")
        print(f"  Subject: {subject}")
        print(f"  Body snippet: {body[:150]}...\n")
        return True
        
    try:
        # Connect to Hostinger via SSL
        server = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT, timeout=15)
        server.login(SMTP_USER, SMTP_PASSWORD)
        server.sendmail(SMTP_USER, to_email, msg.as_string())
        server.quit()
        print(f"[+] Successfully sent outreach email to: {to_email}")
        return True
    except Exception as e:
        print(f"[-] Failed to send email to {to_email}: {e}")
        return False

# Iterate and send with a safe delay (to prevent spam triggers)
success_sent = 0
for idx, lead in enumerate(leads, 1):
    print(f"[*] Sending [{idx}/{len(leads)}] to {lead.get('email')}...")
    if send_email(lead):
        success_sent += 1
    
    # Safe 5-second interval between emails
    if idx < len(leads) and SMTP_PASSWORD != "YOUR_SMTP_PASSWORD":
        print("[*] Waiting 5 seconds before next send...")
        time.sleep(5)

print(f"\n[+] Mail run complete! Successfully sent {success_sent} outreach emails.")
