import requests
import json
import os

print("[*] Starting GitHub Creator Email Finder Tool...")

import re

github_token = os.environ.get("GITHUB_TOKEN")
headers = {
    "Accept": "application/vnd.github.v3+json"
}
if github_token:
    headers["Authorization"] = f"token {github_token}"

try:
    print("[*] Scraping GitHub Trending page for active repositories...")
    
    # We scrape JS and Python trending pages
    languages = ["javascript", "python"]
    valid_repos = []
    ignored = {"features", "about", "trending", "pricing", "marketplace", "login", "signup", "security", "customer-stories", "search", "sponsors", "collections", "topics", "site", "orgs", "users", "settings", "notifications"}
    
    for lang in languages:
        url = f"https://github.com/trending/{lang}?since=daily"
        try:
            r = requests.get(url, timeout=15)
            if r.status_code == 200:
                matches = re.findall(r'href="/([a-zA-Z0-9\-]+)/([a-zA-Z0-9\-\._]+)"', r.text)
                for owner, repo in matches:
                    if owner.lower() not in ignored and repo.lower() not in ignored:
                        if (owner, repo) not in valid_repos:
                            valid_repos.append((owner, repo))
        except Exception as err:
            print(f"[!] Warning: Could not scrape trending for {lang}:", err)
            
    print(f"[+] Extracted {len(valid_repos)} trending repositories. Extracting owner emails...")
    
    creators_list = []
    
    for idx, (owner_username, repo_name) in enumerate(valid_repos, 1):
        
        # Get user details to check for public email
        user_url = f"https://api.github.com/users/{owner_username}"
        user_response = requests.get(user_url, headers=headers, timeout=10)
        
        if user_response.status_code == 200:
            user_data = user_response.json()
            email = user_data.get("email")
            name = user_data.get("name") or owner_username
            bio = user_data.get("bio") or ""
            
            if email:
                creators_list.append({
                    "name": name,
                    "username": owner_username,
                    "email": email,
                    "repo": repo_name,
                    "bio": bio[:100] + "..." if bio else ""
                })
                print(f"  [+] Found Email: {name} ({owner_username}) -> {email} (Repo: {repo_name})")
            else:
                # Fallback: Check commit events for emails (standard open-source trick)
                events_url = f"https://api.github.com/users/{owner_username}/events/public"
                events_response = requests.get(events_url, headers=headers, timeout=10)
                email_found = False
                if events_response.status_code == 200:
                    events = events_response.json()
                    for event in events:
                        if event.get("type") == "PushEvent":
                            commits = event.get("payload", {}).get("commits", [])
                            for commit in commits:
                                author = commit.get("author", {})
                                author_email = author.get("email")
                                # Skip dummy github emails
                                if author_email and "noreply" not in author_email and "@" in author_email:
                                    creators_list.append({
                                        "name": name,
                                        "username": owner_username,
                                        "email": author_email,
                                        "repo": repo_name,
                                        "bio": bio[:100] + "..." if bio else ""
                                    })
                                    print(f"  [+] Found Email via Commits: {name} -> {author_email} (Repo: {repo_name})")
                                    email_found = True
                                    break
                            if email_found:
                                break
                                
        if idx >= 15: # Let's limit the sample test run so we don't hit rate limits
            break
            
    # Save results to a JSON file
    output_path = "creator_leads.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(creators_list, f, indent=2, ensure_ascii=False)
        
    print(f"\n[+] Scrape complete! Saved {len(creators_list)} active creator leads with verified emails to '{output_path}'.")

except Exception as e:
    print("[-] Error during scrape:", e)
