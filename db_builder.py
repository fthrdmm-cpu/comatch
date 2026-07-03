# -*- coding: utf-8 -*-
import os
import re
import urllib.request
import urllib.parse
import json
import time
from html.parser import HTMLParser

# Base directories for output
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "brands.js")
LOGOS_DIR = os.path.join(OUTPUT_DIR, "assets", "logos")

# Seed database containing pre-researched, high-quality, real data for top brands and esports teams.
# Logo fields will be dynamically mapped to local files after they are downloaded.
SEED_DATA = [
    # --- GAMING BRANDS ---
    {
        "id": "logitech-g",
        "name": "Logitech G",
        "type": "brand",
        "category": "Gaming",
        "sponsorType": "Product Gifting / Affiliate",
        "creatorSize": "Micro (10k-50k)",
        "contactEmail": "mediarelations@logitech.com",
        "contactForm": "https://www.logitech.com/en-us/influencers-creators-program.html",
        "domain": "logitechg.com",
        "dna": {
            "requirements": "High-quality camera/webcam setup, consistent weekly streaming or content schedule, clean brand-friendly community guidelines.",
            "dealStructure": "Initial setup hardware package (headset, mouse, keyboard) + 10% affiliate link/code. Performance-based flat-fee upgrades.",
            "pitchHelper": "Hi Logitech G Partnerships Team,\n\nMy name is [Name], and I create content focused on [Game/Topic] on [Platform/Channel Link]. I have been using Logitech G peripherals for years and love their reliability. I would love to explore a partnership through your Creator Program. I've attached my channel analytics below.\n\nBest regards,\n[Name]\n[Channel Link]"
        }
    },
    {
        "id": "razer",
        "name": "Razer",
        "type": "brand",
        "category": "Gaming",
        "sponsorType": "Product Gifting / Affiliate",
        "creatorSize": "Micro (10k-50k)",
        "contactEmail": "press.us@razer.com",
        "contactForm": "https://www.razer.com/creator",
        "domain": "razer.com",
        "dna": {
            "requirements": "Active YouTube or Twitch channel, hardware/peripheral reviews, esports tournament participation, or active streaming profile.",
            "dealStructure": "Official entry to the Team Razer program. Free peripheral kits, early access to new releases, and affiliate commissions up to 10%.",
            "pitchHelper": "Hi Team Razer,\n\nI am [Name], a content creator at [Channel Link] specializing in [Game/Tech]. I am a long-time fan of Razer hardware and would love to collaborate under your Creator Program. I'd love to showcase Razer products to my active audience of [Subscriber Count] gamers.\n\nBest regards,\n[Name]"
        }
    },
    {
        "id": "corsair",
        "name": "Corsair",
        "type": "brand",
        "category": "Gaming",
        "sponsorType": "Product Gifting",
        "creatorSize": "Micro (10k-50k)",
        "contactEmail": "sponsorships@corsair.com",
        "contactForm": "https://www.corsair.com/us/en/sponsorship",
        "domain": "corsair.com",
        "dna": {
            "requirements": "Professional streaming stream overlays and lighting setup, active gaming social media presence, and technology/PC hardware knowledge.",
            "dealStructure": "Corsair sponsorship peripheral bundles (keyboard, mouse, case components) and access to the Corsair Explorer Ambassador community.",
            "pitchHelper": "Hi Corsair Team,\n\nI hope this email finds you well. I am [Name], a gaming creator with an audience of [Size] on [Platform/Channel]. I am reaching out to apply for your creator sponsorship program to feature Corsair's legendary gear in my setup. Please find my portfolio attached.\n\nBest,\n[Name]"
        }
    },
    {
        "id": "steelseries",
        "name": "SteelSeries",
        "type": "brand",
        "category": "Gaming",
        "sponsorType": "Product Gifting / Affiliate",
        "creatorSize": "Micro (10k-50k)",
        "contactEmail": "sponsorships@steelseries.com",
        "contactForm": "https://steelseries.com/blog/steelseries-sponsorship",
        "domain": "steelseries.com",
        "dna": {
            "requirements": "Regular competitive gaming gameplay (CS2, Valorant, League of Legends, etc.), high community interaction rates.",
            "dealStructure": "SteelSeries Arctis headset, Apex keyboard, and Prime mouse gear support + affiliate commission structures.",
            "pitchHelper": "Hi SteelSeries Team,\n\nI am a competitive gamer and content creator at [Channel Link]. I focus mainly on competitive FPS titles. I would love to display and review SteelSeries gear on my stream. I am looking forward to joining your creator program.\n\nBest,\n[Name]"
        }
    },
    {
        "id": "hyperx",
        "name": "HyperX",
        "type": "brand",
        "category": "Gaming",
        "sponsorType": "Product Gifting",
        "creatorSize": "Micro (10k-50k)",
        "contactEmail": "hyperx_sponsorship@hp.com",
        "contactForm": "https://hyperx.com/pages/creator-program",
        "domain": "hyperx.com",
        "dna": {
            "requirements": "High audio/video production values. Strong listener engagement and regular streaming schedule.",
            "dealStructure": "HyperX Creator program peripheral bundles, early access to new releases, and influencer campaigns.",
            "pitchHelper": "Hi HyperX Team,\n\nI'm [Name], creating gaming and stream highlights at [Link]. I admire the quality of HyperX headsets and microphones. I would love to discuss a partnership where I can use and feature your gear on my daily streams.\n\nThank you,\n[Name]"
        }
    },
    {
        "id": "elgato",
        "name": "Elgato",
        "type": "brand",
        "category": "Gaming",
        "sponsorType": "Product Gifting",
        "creatorSize": "Micro (10k-50k)",
        "contactEmail": "partners@elgato.com",
        "contactForm": "https://www.elgato.com/en/partnership",
        "domain": "elgato.com",
        "dna": {
            "requirements": "Regular stream broadcasts, need/use for capture cards, stream controllers (Stream Deck), or studio gear (Key Lights).",
            "dealStructure": "Elgato professional studio hardware kits, early software integrations, and creator feature spotlights.",
            "pitchHelper": "Hello Elgato Partnerships,\n\nI am [Name], a live streamer on [Platform]. I'm currently upgrading my stream quality and setup. I would be thrilled to integrate Elgato's professional streaming solutions into my broadcasts and review them for my community of [Size].\n\nKind regards,\n[Name]"
        }
    },
    {
        "id": "secretlab",
        "name": "Secretlab",
        "type": "brand",
        "category": "Gaming",
        "sponsorType": "Product Gifting / Affiliate",
        "creatorSize": "Micro (10k-50k)",
        "contactEmail": "partnerships@secretlab.co",
        "contactForm": "https://secretlab.co/pages/collaborate",
        "domain": "secretlab.co",
        "dna": {
            "requirements": "High-quality room/setup visuals, ergonomic focus, comfortable showing your face or setup, active community following.",
            "dealStructure": "Secretlab Titan EVO gaming chair gifting + 5% affiliate links with custom landing page setup.",
            "pitchHelper": "Hi Secretlab Team,\n\nI am [Name], a gaming creator at [Link]. I am currently upgrading my gaming room and setup aesthetics. I've always admired the design of Secretlab chairs and would love to review and feature one on my daily broadcasts. I've attached my setup photos and channel stats.\n\nBest regards,\n[Name]"
        }
    },
    {
        "id": "msi",
        "name": "MSI",
        "type": "brand",
        "category": "Gaming",
        "sponsorType": "Product Gifting",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "us-marketing@msi.com",
        "contactForm": "https://www.msi.com/landing/creator-program",
        "domain": "msi.com",
        "dna": {
            "requirements": "PC tech reviewers, 3D artists, game developers, or macro-level streamers using hardware intensives.",
            "dealStructure": "Gaming laptop/desktop review kits, motherboard/GPU upgrades, global creator spotlight campaigns.",
            "pitchHelper": "Hi MSI Marketing Team,\n\nI am [Name], a hardware reviewer and content creator at [Link]. I am planning a comprehensive PC build guide for my audience of [Subscribers]. I would love to explore a partnership to feature MSI hardware (GPU/Motherboard) in this build. Let me know if you'd like to check my media kit.\n\nKind regards,\n[Name]"
        }
    },
    {
        "id": "asus-rog",
        "name": "ASUS ROG",
        "type": "brand",
        "category": "Gaming",
        "sponsorType": "Product Gifting",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "rog_partnerships@asus.com",
        "contactForm": "https://rog.asus.com/",
        "domain": "asus.com",
        "dna": {
            "requirements": "Competitive tier gameplay, tech-savvy content creator, top-notch video production quality.",
            "dealStructure": "ASUS Republic of Gamers (ROG) monitors, components, or gaming laptops + access to joint offline esports event activations.",
            "pitchHelper": "Hello ASUS ROG Team,\n\nI am [Name], hosting a tech/gaming channel at [Link]. I am planning an upcoming content series about high-refresh-rate competitive gaming, and would love to feature an ASUS ROG gaming monitor. I'd love to share my project deck with you.\n\nBest regards,\n[Name]"
        }
    },

    # --- TECH & SERVICES ---
    {
        "id": "nordvpn",
        "name": "NordVPN",
        "type": "brand",
        "category": "Technology",
        "sponsorType": "Flat Fee / Affiliate",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "affiliate@nordvpnmedia.com",
        "contactForm": "https://nordvpn.com/influencers/",
        "domain": "nordvpn.com",
        "dna": {
            "requirements": "Focus on tech, security, education, gaming, or general entertainment content. Minimum average of 10,000 video views.",
            "dealStructure": "Flat-fee payment per video integration (30-60s) + high-percentage commissions on successful sign-ups.",
            "pitchHelper": "Hello NordVPN Partnerships Team,\n\nI am [Name], hosting the channel [Channel Link]. My audience focuses deeply on cybersecurity, tech tips, and gaming. I would like to propose a 60-second video integration for NordVPN in my upcoming videos. My average views per video are [Views]. Let me know if we can discuss rates.\n\nBest,\n[Name]"
        }
    },
    {
        "id": "squarespace",
        "name": "Squarespace",
        "type": "brand",
        "category": "Technology",
        "sponsorType": "Flat Fee",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "partnerships@squarespace.com",
        "contactForm": "https://www.squarespace.com/affiliates-sponsorships",
        "domain": "squarespace.com",
        "dna": {
            "requirements": "Designers, photographers, developers, educators, or general lifestyle creators with a highly professional viewer profile.",
            "dealStructure": "Dedicated flat-fee video sponsorships starting at $500 to $5000+ depending on average channel view metrics.",
            "pitchHelper": "Hi Squarespace Partnerships Team,\n\nI am [Name], a creative developer posting on [Link]. My channel averages [Views] per video and focuses on helping creators build their portfolio sites. I'd love to pitch Squarespace as a sponsor for my next video series. Let me know if we can discuss details.\n\nBest,\n[Name]"
        }
    },
    {
        "id": "skillshare",
        "name": "Skillshare",
        "type": "brand",
        "category": "Technology",
        "sponsorType": "Flat Fee / Affiliate",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "affiliates@skillshare.com",
        "contactForm": "https://www.skillshare.com/en/teach",
        "domain": "skillshare.com",
        "dna": {
            "requirements": "Focus on skill development, design, software, productivity, entrepreneurship, or art. Positive educational tone.",
            "dealStructure": "Flat-fee integration rate + customized free trial links for your community (with affiliate commission per signup).",
            "pitchHelper": "Hi Skillshare Partnerships Team,\n\nI am [Name], an online educator and creator at [Link] focusing on [Topic]. Skillshare has been an invaluable learning tool for me, and I would love to introduce it to my audience in my next video integration. Attached is my channel media kit.\n\nWarm regards,\n[Name]"
        }
    },
    {
        "id": "adobe",
        "name": "Adobe",
        "type": "brand",
        "category": "Technology",
        "sponsorType": "Product Gifting / Affiliate",
        "creatorSize": "Micro (10k-50k)",
        "contactEmail": "adobe_creators@adobe.com",
        "contactForm": "https://www.adobe.com/creativecloud/buy/affiliate.html",
        "domain": "adobe.com",
        "dna": {
            "requirements": "Designers, video editors, photographers, digital artists who actively use and teach Premiere Pro, Photoshop, or Illustrator.",
            "dealStructure": "1-year free Creative Cloud membership ($600+ value) + affiliate sales commissions and opportunities to be featured on Adobe Live.",
            "pitchHelper": "Hello Adobe Creator Team,\n\nI am [Name], a digital artist teaching Photoshop tutorials at [Link]. I would love to apply for the Adobe Creator program. I've been using your creative apps for [X years] and would love to represent Adobe and share my workflows with my audience of [Subscribers].\n\nBest,\n[Name]"
        }
    },
    {
        "id": "canva",
        "name": "Canva",
        "type": "brand",
        "category": "Technology",
        "sponsorType": "Affiliate / Gifting",
        "creatorSize": "Micro (10k-50k)",
        "contactEmail": "affiliates@canva.com",
        "contactForm": "https://www.canva.com/affiliates/",
        "domain": "canva.com",
        "dna": {
            "requirements": "Graphic design creators, bloggers, marketing teachers, social media managers. Promoting templates and visual branding.",
            "dealStructure": "Free Canva Pro membership + recurring affiliate commissions (up to $36 per Pro sign-up via your link).",
            "pitchHelper": "Hi Canva Affiliate Team,\n\nI am [Name], a social media strategist at [Link]. I frequently teach my audience how to design graphics using Canva. I'd love to join your official Affiliate Program to share a custom promo link with my audience of [Size].\n\nBest regards,\n[Name]"
        }
    },

    # --- ENERGY DRINKS ---
    {
        "id": "redbull",
        "name": "Red Bull",
        "type": "brand",
        "category": "Energy Drinks",
        "sponsorType": "Flat Fee / Event",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "info@redbull.com",
        "contactForm": "https://www.redbull.com/us-en/energydrink/contact-red-bull",
        "domain": "redbull.com",
        "dna": {
            "requirements": "Participation in competitive esports, extreme sports, or high-engagement gaming entertainment. High energy brand fit.",
            "dealStructure": "Event sponsorships, product/cooler inventory support, special projects and flat-fee branding partnerships.",
            "pitchHelper": "Dear Red Bull Sports & Partnerships Team,\n\nMy name is [Name/Esports Team], actively competing in [Game] in the [Region/Country] scene. We closely follow Red Bull's major initiatives in esports and sports. We would love to collaborate with Red Bull for our upcoming [Event/Tournament]. We'd love to share our project proposal with you.\n\nThank you,\n[Name]"
        }
    },
    {
        "id": "gfuel",
        "name": "G FUEL",
        "type": "brand",
        "category": "Energy Drinks",
        "sponsorType": "Affiliate / Product Gifting",
        "creatorSize": "Micro (10k-50k)",
        "contactEmail": "sponsorships@gfuel.com",
        "contactForm": "https://gfuel.com/pages/sponsorships",
        "domain": "gfuel.com",
        "dna": {
            "requirements": "Gaming streams, active audience engagement, chat commands configured, showing shaker cups on-stream regularly.",
            "dealStructure": "G FUEL product supply kits (tubs, shakers), custom 10-30% discount code, commission earnings on checkouts.",
            "pitchHelper": "Hi G FUEL Team,\n\nI am [Name], streaming daily gameplay at [Link]. I am a huge fan of G FUEL and drink it on my broadcasts. I'd love to apply for an official sponsorship to share custom discounts with my active community of [Subscribers].\n\nFuel up,\n[Name]"
        }
    },
    {
        "id": "monster-energy",
        "name": "Monster Energy",
        "type": "brand",
        "category": "Energy Drinks",
        "sponsorType": "Event / Flat Fee",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "info@monsterenergy.com",
        "contactForm": "https://www.monsterenergy.com/en-us/about-us/contact-us/",
        "domain": "monsterenergy.com",
        "dna": {
            "requirements": "Esports teams, extreme sport athletes, pro motorsport, high-impact gaming events, or top-tier streamers.",
            "dealStructure": "Large event branding sponsorships, customized merch apparel, flat-fee ambassador retainers.",
            "pitchHelper": "Dear Monster Energy Team,\n\nI am [Name], organizer of the [Esports Event / Tournament Name] at [Link]. We are planning our next event and expect [Attendance] competitive gamers. We would love to discuss a branding sponsorship package with Monster Energy. Please find our event deck attached.\n\nBest,\n[Name]"
        }
    },

    # --- PLATFORMS & PUBLISHERS ---
    {
        "id": "epic-games",
        "name": "Epic Games",
        "type": "brand",
        "category": "Gaming",
        "sponsorType": "Affiliate",
        "creatorSize": "Micro (10k-50k)",
        "contactEmail": "creator-program@epicgames.com",
        "contactForm": "https://sac.epicgames.com/",
        "domain": "epicgames.com",
        "dna": {
            "requirements": "Publishing content on Fortnite, Rocket League, or Fall Guys. Active social media channel with 1000+ followers.",
            "dealStructure": "Epic Games Support-A-Creator affiliate code. Earn 5% on in-game spend and Epic Games Store transactions.",
            "pitchHelper": "Hi Epic Games Support-A-Creator Team,\n\nI am [Name], a content creator focusing on Fortnite gameplay at [Link]. I would love to apply for the Support-A-Creator program. I have an active community of [Size] who support me, and I want to offer them a code to support my channel. Let me know if you need any verification.\n\nBest,\n[Name]"
        }
    },
    {
        "id": "playstation",
        "name": "Sony PlayStation",
        "type": "brand",
        "category": "Gaming",
        "sponsorType": "Product Gifting",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "playstation_creators@sony.com",
        "contactForm": "https://www.playstation.com/",
        "domain": "playstation.com",
        "dna": {
            "requirements": "Console gaming reviewers, high-quality video walkthroughs, or popular gameplay streams focused on PlayStation exclusives.",
            "dealStructure": "Game review keys, console/VR peripheral gifting kits, early review embargo access for console releases.",
            "pitchHelper": "Dear PlayStation Creator Relations,\n\nI am a game reviewer and content developer at [Link]. With the upcoming release of [Game Name], I would love to request a review code for the PS5 console to write an in-depth review for my audience of [Subscribers]. Please find my statistics attached.\n\nBest regards,\n[Name]"
        }
    },
    {
        "id": "xbox",
        "name": "Xbox",
        "type": "brand",
        "category": "Gaming",
        "sponsorType": "Product Gifting",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "xbox_pr@microsoft.com",
        "contactForm": "https://www.xbox.com/",
        "domain": "xbox.com",
        "dna": {
            "requirements": "Active YouTube or Twitch channel focusing on Game Pass reviews, indie games, or multiplayer console titles.",
            "dealStructure": "Xbox Game Pass ultimate membership codes (for giveaways), game preview codes, and occasional controller customization collaborations.",
            "pitchHelper": "Hi Xbox Partnerships Team,\n\nI am [Name], streaming console co-op titles on [Link]. We are big fans of Xbox Game Pass and would love to collaborate to host a Game Pass giveaway code event for my community. I've attached my engagement rates and stream times.\n\nBest,\n[Name]"
        }
    },

    # --- ESPORTS TEAMS ---
    {
        "id": "fut-esports",
        "name": "FUT Esports",
        "type": "team",
        "category": "Esports",
        "sponsorType": "Flat Fee / Brand Partnership",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "info@futesports.com",
        "contactForm": "https://futesports.com/contact/",
        "domain": "futesports.com",
        "dna": {
            "requirements": "Representing the team as an official content creator/influencer. Family-friendly and highly engaging community presence.",
            "dealStructure": "Team jerseys/apparel support, partner brand peripherals, co-branded tournament participation revenues, and salary contracts.",
            "pitchHelper": "Hi FUT Esports Management Team,\n\nMy name is [Name], a competitive FPS creator streaming on [Channel Link] with [Subscriber Count] followers. I've been following FUT's impressive roster expansion and would love to join your official influencer lineup. I've attached my media kit for your review.\n\nBest regards,\n[Name]"
        }
    },
    {
        "id": "eternal-fire",
        "name": "Eternal Fire",
        "type": "team",
        "category": "Esports",
        "sponsorType": "Flat Fee / Brand Partnership",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "contact@eternalfire.gg",
        "contactForm": "https://eternalfire.gg/",
        "domain": "eternalfire.gg",
        "dna": {
            "requirements": "High competitive CS2/FPS rating or a large competitive gaming viewer base. Clean standing and team player attitude.",
            "dealStructure": "Official team stream roster contract, partner hardware brand perks, tournament prize share allocations.",
            "pitchHelper": "Hi Eternal Fire Team,\n\nI am [Name], hosting competitive shooter streams at [Link]. I admire EF's competitive legacy in CS2. I would love to explore a partnership to stream under the Eternal Fire banner and promote your official partners. Please find my stream stats attached.\n\nKind regards,\n[Name]"
        }
    },
    {
        "id": "bbl-esports",
        "name": "BBL Esports",
        "type": "team",
        "category": "Esports",
        "sponsorType": "Flat Fee / Brand Partnership",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "info@bblesports.com",
        "contactForm": "https://www.bblesports.com/",
        "domain": "bblesports.com",
        "dna": {
            "requirements": "Strong viewership on Twitch/YouTube, entertaining and interactive multiplayer gameplay streams. High appeal to younger demographic.",
            "dealStructure": "Official streamer signing contract, integration opportunities with team sponsors, access to gaming office/studio.",
            "pitchHelper": "Hi BBL Esports Management,\n\nI am [Name], a live streamer at [Link]. I'm writing to express my interest in joining BBL's content creator squad. I believe my stream's high interaction rates align perfectly with your community focus. I've attached my stream statistics presentation.\n\nBest regards,\n[Name]"
        }
    },
    {
        "id": "g2-esports",
        "name": "G2 Esports",
        "type": "team",
        "category": "Esports",
        "sponsorType": "Flat Fee / Brand Partnership",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "partnerships@g2esports.com",
        "contactForm": "https://g2esports.com/pages/contact",
        "domain": "g2esports.com",
        "dna": {
            "requirements": "Excellent English communication skills, global audience. Highly active on social media with a humorous, meme-friendly vibe.",
            "dealStructure": "Global marketing campaign integrations, co-branded sponsor gear allocations, streamer salary/commission pools.",
            "pitchHelper": "Hi G2 Esports Partnerships Team,\n\nI am [Name], a content creator with a global gaming audience on [Link]. I love G2's social media style and competitive dominance. I would love to pitch a collaboration idea for your creator roster. Attached is my media kit.\n\nLet's make some noise,\n[Name]"
        }
    },
    {
        "id": "fnatic",
        "name": "Fnatic",
        "type": "team",
        "category": "Esports",
        "sponsorType": "Flat Fee / Brand Partnership",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "partners@fnatic.com",
        "contactForm": "https://fnatic.com/partnerships",
        "domain": "fnatic.com",
        "dna": {
            "requirements": "Professional esports experience or highly respected guide/educational gaming content. Reputable and professional brand representation.",
            "dealStructure": "Fnatic Gear hardware kit allocations, espor sponsor integration earnings, global influencer campaigns.",
            "pitchHelper": "Hi Fnatic Partnerships Team,\n\nI hope you're doing well. I am a competitive gaming creator at [Link] with [Subscribers] followers. I've always admired Fnatic's long history in esports. I would love to explore content collaboration opportunities under your brand.\n\nBest regards,\n[Name]"
        }
    },
    {
        "id": "team-liquid",
        "name": "Team Liquid",
        "type": "team",
        "category": "Esports",
        "sponsorType": "Flat Fee / Brand Partnership",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "partnerships@teamliquid.com",
        "contactForm": "https://www.teamliquid.com/contact",
        "domain": "teamliquid.com",
        "dna": {
            "requirements": "Multi-game content focus, high-quality audio/video broadcasts, and close tracking of tournament trends.",
            "dealStructure": "Team Liquid Creator roster benefits, Alienware/partner equipment upgrades, global marketing program support.",
            "pitchHelper": "Dear Team Liquid Partnerships,\n\nI am [Name], a content developer focusing on competitive strategies at [Channel Link]. I would love to discuss representing Team Liquid as a creator. Please find my channel metrics and audience details attached.\n\nThank you for your time,\n[Name]"
        }
    },
    {
        "id": "cloud9",
        "name": "Cloud9",
        "type": "team",
        "category": "Esports",
        "sponsorType": "Flat Fee / Brand Partnership",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "partnerships@c9.gg",
        "contactForm": "https://cloud9.gg/contact/",
        "domain": "c9.gg",
        "dna": {
            "requirements": "Clean competitive gaming standing, Valorant/League of Legends gameplay clips, active short-form creator.",
            "dealStructure": "Cloud9 gaming jerseys/merch bundle, partner peripherals (HyperX/BMW sponsorships), tournament prize shares.",
            "pitchHelper": "Hi Cloud9 Partnerships Team,\n\nI am a gaming content developer at [Link]. I admire C9's history across esports and would love to discuss joining your team roster as a stream partner. I've attached my channel profile and average monthly impressions.\n\nBest regards,\n[Name]"
        }
    },
    {
        "id": "sentinels",
        "name": "Sentinels",
        "type": "team",
        "category": "Esports",
        "sponsorType": "Flat Fee",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "info@sentinels.gg",
        "contactForm": "https://www.sentinels.gg/",
        "domain": "sentinels.gg",
        "dna": {
            "requirements": "Focus on tactical shooter games (Valorant, Apex Legends). High community interaction on Twitter/TikTok.",
            "dealStructure": "Professional influencer roster salary, sponsored peripheral upgrades, and custom team digital items.",
            "pitchHelper": "Hello Sentinels Management,\n\nI am [Name], a competitive tactical shooter streamer at [Link]. I am a huge supporter of the Sentinels Valorant roster and would love to explore a content partnership to stream under the Sentinels tag. Please see my channel media kit attached.\n\nBest,\n[Name]"
        }
    },
    {
        "id": "100-thieves",
        "name": "100 Thieves",
        "type": "team",
        "category": "Esports",
        "sponsorType": "Flat Fee / Brand Partnership",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "partnerships@100thieves.com",
        "contactForm": "https://100thieves.com/pages/contact",
        "domain": "100thieves.com",
        "dna": {
            "requirements": "Lifestyle gaming creator, fashion/merch enthusiast, clean brand look, gaming content developer.",
            "dealStructure": "Custom apparel drops, team peripheral sponsor support, flat-fee salary deals, feature video appearances.",
            "pitchHelper": "Dear 100 Thieves Creator Relations,\n\nI am [Name], a lifestyle gaming content developer at [Link]. I admire how 100 Thieves blends gaming culture with apparel and fashion. I would love to explore a partnership to collaborate on upcoming campaigns. Let me know if we can discuss details.\n\nBest,\n[Name]"
        }
    },
    {
        "id": "faze-clan",
        "name": "FaZe Clan",
        "type": "team",
        "category": "Esports",
        "sponsorType": "Flat Fee / Brand Partnership",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "partnerships@fazeclan.com",
        "contactForm": "https://fazeclan.com/",
        "domain": "fazeclan.com",
        "dna": {
            "requirements": "Extreme skills in competitive gaming, high energy stream style, massive social media presence (Twitter/TikTok).",
            "dealStructure": "FaZe sponsor deal integrations, global merch line collaborations, custom gaming equipment packages, salary contracts.",
            "pitchHelper": "Hi FaZe Clan Partnerships,\n\nI am [Name], a competitive FPS gaming creator streaming at [Link]. I've been a follower of FaZe since the early sniper montage days. I'd love to discuss joining the creator network to represent the FaZe brand. Please check my stream stats attached.\n\nFaZe Up,\n[Name]"
        }
    },
    {
        "id": "t1",
        "name": "T1 Esports",
        "type": "team",
        "category": "Esports",
        "sponsorType": "Flat Fee / Brand Partnership",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "t1_partnerships@skt1.co.kr",
        "contactForm": "https://t1.gg/contact",
        "domain": "t1.gg",
        "dna": {
            "requirements": "High League of Legends MMR, global target audience, positive influence in the Asian/Global esports landscape.",
            "dealStructure": "Official T1 creator tags, sponsorships through T1 global partners, stream hosting support, and merchandise allowances.",
            "pitchHelper": "Dear T1 Partnerships Team,\n\nI am [Name], a competitive League of Legends streamer broadcasting at [Link]. I have been following T1's competitive dominance for years and would love to join your stream partner roster. I've attached my channel analytics for your consideration.\n\nSincerely,\n[Name]"
        }
    },
    {
        "id": "navi",
        "name": "Natus Vincere (NAVI)",
        "type": "team",
        "category": "Esports",
        "sponsorType": "Flat Fee / Brand Partnership",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "partnerships@navi.gg",
        "contactForm": "https://navi.gg/en/contacts",
        "domain": "navi.gg",
        "dna": {
            "requirements": "Competitive gameplay streaming, CS2 focus, highly competitive mindset, Ukrainian/Global target audience.",
            "dealStructure": "NAVI stream roster team jerseys, partner peripheral support, tournament prize percentages.",
            "pitchHelper": "Hi NAVI Partnerships Team,\n\nI am [Name], a CS2 streamer at [Link]. I admire NAVI's esports legacy and would love to explore a partnership to stream under your team. I've attached my stream statistics and details.\n\nBest regards,\n[Name]"
        }
    },
    {
        "id": "vitality",
        "name": "Team Vitality",
        "type": "team",
        "category": "Esports",
        "sponsorType": "Flat Fee / Brand Partnership",
        "creatorSize": "Macro (50k+)",
        "contactEmail": "partnerships@vitality.gg",
        "contactForm": "https://vitality.gg/en/contact-us/",
        "domain": "vitality.gg",
        "dna": {
            "requirements": "Esports titles focus (Rocket League, CS2, League of Legends), active European/Global viewership profiles.",
            "dealStructure": "Team Vitality creator team benefits, brand partner equipment upgrades, and global brand activations.",
            "pitchHelper": "Dear Team Vitality Partnerships,\n\nI am [Name], a gaming creator broadcasting at [Link]. I would love to discuss representing Team Vitality as a content creator. Please find my channel metrics and media kit attached.\n\nBest regards,\n[Name]"
        }
    }
]

# Simple DuckDuckGo HTML Search Scraper
class DuckDuckGoSearchParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.in_result_link = False
        self.current_href = ""

    def handle_starttag(self, tag, attrs):
        if tag == "a":
            attrs_dict = dict(attrs)
            href = attrs_dict.get("href", "")
            if href.startswith("/l/?kh=") or "duckduckgo.com/l/" in href:
                self.in_result_link = True
                parsed = urllib.parse.urlparse(href)
                query_params = urllib.parse.parse_qs(parsed.query)
                real_url = query_params.get("uddg", [""])[0]
                if real_url:
                    self.current_href = real_url
            elif href.startswith("http") and not "duckduckgo.com" in href:
                self.in_result_link = True
                self.current_href = href

    def handle_endtag(self, tag):
        if tag == "a" and self.in_result_link:
            if self.current_href and self.current_href not in self.links:
                self.links.append(self.current_href)
            self.in_result_link = False
            self.current_href = ""

def search_duckduckgo(query, max_results=3):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    encoded_query = urllib.parse.quote_plus(query)
    url = f"https://html.duckduckgo.com/html/?q={encoded_query}"
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode("utf-8", errors="ignore")
            parser = DuckDuckGoSearchParser()
            parser.feed(html)
            return parser.links[:max_results]
    except Exception as e:
        print(f"[-] Search failed for query '{query}': {e}")
        return []

def scrape_emails_and_forms_from_url(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=8) as response:
            content = response.read().decode("utf-8", errors="ignore")
            raw_emails = re.findall(r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+', content)
            emails = []
            for email in raw_emails:
                email = email.lower().strip(".")
                if not any(email.endswith(ext) for ext in [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".js", ".css"]):
                    if email not in emails and "example" not in email:
                        emails.append(email)
            
            form_links = []
            links = re.findall(r'href=["\'](http[s]?://[^"\']+)["\']', content)
            for link in links:
                if any(kw in link.lower() for kw in ["sponsor", "partner", "contact", "creator", "affiliate", "influencer"]):
                    if link not in form_links and link != url:
                        form_links.append(link)
            
            return emails, form_links
    except Exception as e:
        return [], []

def build_database():
    print("[+] Starting CoMatch database builder...")
    final_database = []
    
    # Create logos directory if not exists
    if not os.path.exists(LOGOS_DIR):
        os.makedirs(LOGOS_DIR)
        
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    for index, item in enumerate(SEED_DATA):
        print(f"\n[*] Processing [{item['name']}] ({index+1}/{len(SEED_DATA)})")
        
        # Download logo locally
        brand_id = item["id"]
        domain = item["domain"]
        logo_url = f"https://logo.clearbit.com/{domain}"
        local_filename = f"{brand_id}.png"
        local_filepath = os.path.join(LOGOS_DIR, local_filename)
        local_logo_path = f"assets/logos/{local_filename}"
        
        print(f"  [>] Downloading logo from: {logo_url}")
        downloaded = False
        try:
            req = urllib.request.Request(logo_url, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as response:
                with open(local_filepath, "wb") as f:
                    f.write(response.read())
            print(f"    [+] Successfully saved logo to {local_logo_path}")
            item["logo"] = local_logo_path
            downloaded = True
        except Exception as e:
            print(f"    [-] Failed to download logo for {item['name']}: {e}")
            # Use a generic fallback url in the JSON if download failed, 
            # but still set it as local file so the image error avatar handler in app.js can catch it!
            item["logo"] = local_logo_path
            
        # Search & scrape details (rate limited query)
        if item["type"] == "team":
            query = f"{item['name']} esports partnership contact business email"
        else:
            query = f"{item['name']} brand sponsorship contact creator email application"
            
        print(f"  [>] Searching DuckDuckGo: '{query}'")
        search_links = search_duckduckgo(query, max_results=2)
        
        scraped_emails = []
        scraped_forms = []
        
        for link in search_links:
            print(f"  [>] Scrape attempt: {link}")
            emails, forms = scrape_emails_and_forms_from_url(link)
            if emails:
                print(f"    [+] Found emails: {emails}")
                scraped_emails.extend(emails)
            if forms:
                scraped_forms.extend(forms)
            time.sleep(1)
            
        scraped_emails = list(set(scraped_emails))
        scraped_forms = list(set(scraped_forms))
        
        contacts = []
        if item.get("contactEmail"):
            contacts.append(item["contactEmail"].lower())
            
        for semail in scraped_emails:
            domain_part = item["name"].lower().replace(" ", "").replace("g2esports", "g2").replace("teamliquid", "liquid")
            if any(part in semail for part in [domain_part, "sponsor", "partner", "media", "pr"]):
                if semail not in contacts:
                    contacts.append(semail)
                    
        if contacts:
            item["contactEmail"] = contacts[0]
            item["allEmails"] = contacts
        
        if scraped_forms:
            item["alternativeForms"] = scraped_forms[:3]
            
        item["premium"] = False
        final_database.append(item)
        time.sleep(1)
        
    js_content = f"""// CoMatch Brands & Teams Database
// Generated automatically on {time.strftime('%Y-%m-%d %H:%M:%S')}

const BRANDS_DATA = {json.dumps(final_database, indent=2, ensure_ascii=False)};
"""
    
    try:
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            f.write(js_content)
        print(f"\n[+] Success! Database written to {OUTPUT_FILE}")
    except Exception as e:
        print(f"[-] Failed to write database: {e}")

if __name__ == "__main__":
    build_database()
