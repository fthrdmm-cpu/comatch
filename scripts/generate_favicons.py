import os
from PIL import Image

print("[*] Generating Google-compliant favicons from assets/logo.png...")

logo_path = "assets/logo.png"
if not os.path.exists(logo_path):
    print(f"[-] Error: {logo_path} not found.")
    exit(1)

try:
    img = Image.open(logo_path)
    
    # Save standard size PNGs (all multiples of 48px square)
    img.resize((48, 48), Image.LANCZOS).save("assets/favicon-48x48.png", "PNG")
    print("[+] Generated: assets/favicon-48x48.png")
    
    img.resize((96, 96), Image.LANCZOS).save("assets/favicon-96x96.png", "PNG")
    print("[+] Generated: assets/favicon-96x96.png")
    
    img.resize((192, 192), Image.LANCZOS).save("assets/favicon-192x192.png", "PNG")
    print("[+] Generated: assets/favicon-192x192.png")
    
    # Save standard multi-resolution favicon.ico in the root directory
    img.save("favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print("[+] Generated: favicon.ico (Root)")
    
    print("[SUCCESS] All favicon assets generated successfully!")
except Exception as e:
    print(f"[-] Failed to generate favicons: {e}")
    exit(1)
