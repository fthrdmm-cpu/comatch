// CoMatch Brands & Teams Database
// Curated with high-definition, ad-blocker-safe logo assets from Wikipedia and Simple Icons.

const BRANDS_DATA = [
  {
    "id": "logitech-g",
    "name": "Logitech G",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting / Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "mediarelations@logitech.com",
    "contactForm": "https://www.logitechg.com/en-us/partnerships.html",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=logitechg.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=razer.com",
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
    "contactForm": "https://www.corsair.com/sponsorship",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=corsair.com",
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
    "contactForm": "https://steelseries.com/sponsorship",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=steelseries.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=hyperx.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=elgato.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=secretlab.co",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=msi.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=asus.com",
    "dna": {
      "requirements": "Competitive tier gameplay, tech-savvy content creator, top-notch video production quality.",
      "dealStructure": "ASUS Republic of Gamers (ROG) monitors, components, or gaming laptops + access to joint offline esports event activations.",
      "pitchHelper": "Hello ASUS ROG Team,\n\nI am [Name], hosting a tech/gaming channel at [Link]. I am planning an upcoming content series about high-refresh-rate competitive gaming, and would love to feature an ASUS ROG gaming monitor. I'd love to share my project deck with you.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "nordvpn",
    "name": "NordVPN",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Flat Fee / Affiliate",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "affiliate@nordvpnmedia.com",
    "contactForm": "https://nordvpn.com/influencers/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=nordvpn.com",
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
    "contactForm": "https://www.squarespace.com/affiliates",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=squarespace.com",
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
    "contactForm": "https://www.skillshare.com/en/affiliates",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=skillshare.com",
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
    "contactForm": "https://www.adobe.com/affiliates.html",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=adobe.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=canva.com",
    "dna": {
      "requirements": "Graphic design creators, bloggers, marketing teachers, social media managers. Promoting templates and visual branding.",
      "dealStructure": "Free Canva Pro membership + recurring affiliate commissions (up to $36 per Pro sign-up via your link).",
      "pitchHelper": "Hi Canva Affiliate Team,\n\nI am [Name], a social media strategist at [Link]. I frequently teach my audience how to design graphics using Canva. I'd love to join your official Affiliate Program to share a custom promo link with my audience of [Size].\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "redbull",
    "name": "Red Bull",
    "type": "brand",
    "category": "Energy Drinks",
    "sponsorType": "Flat Fee / Event",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "info@redbull.com",
    "contactForm": "https://www.redbull.com/us-en/energydrink/contact-red-bull",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=redbull.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=gfuel.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=monsterenergy.com",
    "dna": {
      "requirements": "Esports teams, extreme sport athletes, pro motorsport, high-impact gaming events, or top-tier streamers.",
      "dealStructure": "Large event branding sponsorships, customized merch apparel, flat-fee ambassador retainers.",
      "pitchHelper": "Dear Monster Energy Team,\n\nI am [Name], organizer of the [Esports Event / Tournament Name] at [Link]. We are planning our next event and expect [Attendance] competitive gamers. We would love to discuss a branding sponsorship package with Monster Energy. Please find our event deck attached.\n\nBest,\n[Name]"
    }
  },
  {
    "id": "epic-games",
    "name": "Epic Games",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "creator-program@epicgames.com",
    "contactForm": "https://sac.epicgames.com/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=epicgames.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=playstation.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=xbox.com",
    "dna": {
      "requirements": "Active YouTube or Twitch channel focusing on Game Pass reviews, indie games, or multiplayer console titles.",
      "dealStructure": "Xbox Game Pass ultimate membership codes (for giveaways), game preview codes, and occasional controller customization collaborations.",
      "pitchHelper": "Hi Xbox Partnerships Team,\n\nI am [Name], streaming console co-op titles on [Link]. We are big fans of Xbox Game Pass and would love to collaborate to host a Game Pass giveaway code event for my community. I've attached my engagement rates and stream times.\n\nBest,\n[Name]"
    }
  },
  {
    "id": "fut-esports",
    "name": "FUT Esports",
    "type": "team",
    "category": "Esports",
    "sponsorType": "Flat Fee / Brand Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "info@futesports.com",
    "contactForm": "https://futesports.com/contact/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=futesports.com",
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
    "contactForm": "https://eternalfire.gg/contact/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=eternalfire.gg",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=bblesports.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=g2esports.com",
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
    "contactForm": "https://fnatic.com/pages/partnerships",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=fnatic.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=teamliquid.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=c9.gg",
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
    "contactForm": "https://sentinels.gg/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=sentinels.gg",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=100thieves.com",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=fazeclan.com",
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
    "contactForm": "https://t1.gg/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=t1.gg",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=navi.gg",
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
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=vitality.gg",
    "dna": {
      "requirements": "Esports titles focus (Rocket League, CS2, League of Legends), active European/Global viewership profiles.",
      "dealStructure": "Team Vitality creator team benefits, brand partner equipment upgrades, and global brand activations.",
      "pitchHelper": "Dear Team Vitality Partnerships,\n\nI am [Name], a gaming creator broadcasting at [Link]. I would love to discuss representing Team Vitality as a content creator. Please find my channel metrics and media kit attached.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "acer",
    "name": "Acer Predator",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting / Affiliate",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "predator.gaming@acer.com",
    "contactForm": "https://www.acer.com/us-en/predator",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=acer.com",
    "dna": {
      "requirements": "High-quality video production, tech/hardware benchmark capability, active gaming social streams.",
      "dealStructure": "Acer Predator series desktop/laptop gifting, early review opportunities, co-marketing campaign budgets.",
      "pitchHelper": "Hi Acer Predator Partnerships,\n\nI am [Name], a competitive streamer at [Link]. I am planning an in-depth review and setup showcase featuring high-performance gaming hardware. I would love to explore a partnership to feature a Predator gaming rig on my stream. Attached is my channel kit.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "lenovo",
    "name": "Lenovo Legion",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting / Affiliate",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "legion_sponsorship@lenovo.com",
    "contactForm": "https://www.lenovo.com/us/en/legion/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=lenovo.com",
    "dna": {
      "requirements": "Consistent streaming schedule, tech-savvy reviews, positive community focus, active YouTube or Twitch channel.",
      "dealStructure": "Lenovo Legion laptop/desktop gear gifting, affiliate link setups with 8% commission payouts, priority early review access.",
      "pitchHelper": "Dear Lenovo Legion Team,\n\nMy name is [Name], and I host a gaming channel at [Link] with [Size] subscribers. I'm writing to express my interest in partnering with Lenovo Legion. I love the performance of your gaming notebooks and would love to review one for my audience. Attached is my deck.\n\nBest,\n[Name]"
    }
  },
  {
    "id": "monster-notebook",
    "name": "Monster Notebook",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting / Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "sponsorluk@monsternotebook.com.tr",
    "contactForm": "https://www.monsternotebook.com.tr/iletisim.html",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=monsternotebook.com.tr",
    "dna": {
      "requirements": "Gaming/tech stream coverage, Turkish language video uploads, gaming hardware testing/benchmarking focus.",
      "dealStructure": "Abra/Tulpar gaming laptop gifting, influencer discount codes for Turkey audience, and joint local esports events.",
      "pitchHelper": "Monster Notebook Sponsorluk Ekibine Merhaba,\n\nBen [İsim], [Kanal Linki] adresinde oyun ve teknoloji içerikleri üretiyorum. Monster Notebook'un yerel espor ve oyun sektörüne katkılarını yakından takip ediyorum. Oynadığım oyunları ve incelemelerimi canavarla taçlandırmak adına bir iş birliği gerçekleştirmek isterim. Sunum dosyam ekte yer almaktadır.\n\nSaygılarımla,\n[İsim]"
    }
  },
  {
    "id": "hp-omen",
    "name": "HP Omen",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "omen_sponsorship@hp.com",
    "contactForm": "https://www.omen.com/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=omen.com",
    "dna": {
      "requirements": "High esports tournament visibility, competitive FPS gaming, tech review channel profiles with professional overlays.",
      "dealStructure": "HP Omen high-refresh rate displays and gaming desktop sponsorship packages, influencer campaign fees.",
      "pitchHelper": "Dear HP Omen Partnerships,\n\nI am [Name], hosting gaming broadcasts at [Link]. I would love to explore featuring HP Omen competitive gear in my daily streaming setup. I've attached my channel analytics and audience metrics.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "alienware",
    "name": "Alienware (Dell)",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting / Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partnerships@alienware.com",
    "contactForm": "https://www.alienwarearena.com/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=alienware.com",
    "dna": {
      "requirements": "Premium stream setup aesthetic, high audience interaction rates, gaming lifestyle content creator focus.",
      "dealStructure": "Alienware high-end gaming laptops, custom-built desktop towers, early alpha testing keys, and flat-fee campaigns.",
      "pitchHelper": "Hello Alienware Team,\n\nI am [Name], hosting my gaming streams at [Link]. I am planning a comprehensive stream room makeover and would love to partner with Alienware to feature your desktop hardware. I have attached my media kit.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "gigabyte-aorus",
    "name": "Gigabyte AORUS",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "aorus_marketing@gigabyte.com",
    "contactForm": "https://www.aorus.com/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=aorus.com",
    "dna": {
      "requirements": "PC assembly/building tutorials, motherboard and graphic card reviews, competitive esports streaming.",
      "dealStructure": "Gigabyte Aorus components (graphic cards, motherboards, coolers) for custom PC build streams, promotional bundles.",
      "pitchHelper": "Hello Gigabyte Aorus Team,\n\nI am [Name], a hardware reviewer and PC building enthusiast at [Link]. I am planning an upcoming custom liquid-cooled PC build project. I would love to feature Gigabyte Aorus components in this video. Please let me know if we can discuss details.\n\nBest,\n[Name]"
    }
  },
  {
    "id": "rode",
    "name": "Rode",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "sponsorships@rode.com",
    "contactForm": "https://rode.com/contact",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=rode.com",
    "dna": {
      "requirements": "Podcasting, livestreaming, or high-fidelity audio reviews. Clean and engaging voice presentation.",
      "dealStructure": "Rodecaster Pro, PodMic, or wireless microphone kits gifting.",
      "pitchHelper": "Hi Rode Partnerships Team,\n\nI am [Name], a podcast and video creator at [Link]. I am looking to upgrade my recording gear to provide professional-grade audio for my audience. I would love to explore a partnership to feature Rode equipment in my stream setup. Attached is my media kit.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "shure",
    "name": "Shure",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "influencer@shure.com",
    "contactForm": "https://www.shure.com/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=shure.com",
    "dna": {
      "requirements": "Professional streaming setups, high-fidelity vocal output, large audience reach (50k+).",
      "dealStructure": "Shure SM7B or MV7 microphone setups gifting + ambassador status.",
      "pitchHelper": "Hi Shure Creator Relations,\n\nI am [Name], hosting my gaming streams and recordings at [Link]. I am planning a setup refresh and want to feature the Shure SM7B as my primary audio source. I would love to discuss an ambassador partnership. Attached is my media deck.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "nzxt",
    "name": "NZXT",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting / Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "sponsorship@nzxt.com",
    "contactForm": "https://nzxt.com/page/creator-program",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=nzxt.com",
    "dna": {
      "requirements": "Active gaming streamer, tech-savvy configuration videos, high production values.",
      "dealStructure": "Custom gaming PC builds, peripheral gifting, affiliate commissions.",
      "pitchHelper": "Hello NZXT Team,\n\nI am [Name], a competitive streamer at [Link]. I love NZXT's minimalist case designs and prebuilt systems. I would love to join your Creator Program to showcase NZXT setups to my community. Please find my stats attached.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "cooler-master",
    "name": "Cooler Master",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "marketing@coolermaster.com",
    "contactForm": "https://www.coolermaster.com/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=coolermaster.com",
    "dna": {
      "requirements": "Custom system builds, tech logs, regular hardware reviews.",
      "dealStructure": "Chassis, coolers, power supplies supply kits.",
      "pitchHelper": "Hi Cooler Master Team,\n\nI am [Name], a hardware reviewer at [Link]. I am planning an upcoming custom PC build video for my community and would love to feature a Cooler Master chassis and cooling setup. Attached are my channel details.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "zowie",
    "name": "BenQ ZOWIE",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "sponsorship.us@benq.com",
    "contactForm": "https://zowie.benq.com/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=benq.com",
    "dna": {
      "requirements": "Competitive Valorant/CS2 streamers, pro players, high gaming refresh-rate setups.",
      "dealStructure": "ZOWIE high-refresh rate monitors, espor gaming mice gifting.",
      "pitchHelper": "Dear ZOWIE Partnerships Team,\n\nMy name is [Name], and I stream competitive tactical shooters at [Link]. I would love to review and feature ZOWIE's high-refresh-rate monitors on my stream. Attached is my gaming history and channel details.\n\nSincerely,\n[Name]"
    }
  },
  {
    "id": "logitech",
    "name": "Logitech",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Product Gifting / Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "creator-relations@logitech.com",
    "contactForm": "https://www.logitech.com/en-us/influencers-creators-program.html",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=logitech.com",
    "dna": {
      "requirements": "Office setups, productivity tips, general lifestyle vlogging, or business tutorials.",
      "dealStructure": "Brio webcams, MX Master series office peripherals, Blue Yeti microphones gifting.",
      "pitchHelper": "Hi Logitech Creator Relations,\n\nI am [Name], producing tech and productivity tutorials at [Link]. I am a regular user of your MX series peripherals. I would love to explore a partnership to feature Logitech office gear in my next workspace setup video. Attached is my media kit.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "opera-gx",
    "name": "Opera GX",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Flat Fee / Sponsor",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partner.gx@opera.com",
    "contactForm": "https://www.opera.com/gx",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=opera.com",
    "dna": {
      "requirements": "Gaming videos, streamers, humor-heavy gaming reviews, high view averages.",
      "dealStructure": "Integrated 60-second video slots, sponsorships, custom GX browser mods.",
      "pitchHelper": "Hi Opera GX Marketing Team,\n\nI am a gaming creator broadcasting at [Link]. I love GX's gaming-centric browser features and active social media humor. I would love to pitch an integration idea for my next video series. Let me know if you would like to see my view metrics.\n\nBest,\n[Name]"
    }
  },
  {
    "id": "expressvpn",
    "name": "ExpressVPN",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "sponsorships@expressvpn.com",
    "contactForm": "https://www.expressvpn.com/affiliates",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=expressvpn.com",
    "dna": {
      "requirements": "General tech reviews, educational channels, pop culture commentaries, minimum 20k views.",
      "dealStructure": "Flat-fee payments starting at $1000 per integration depending on views.",
      "pitchHelper": "Dear ExpressVPN Partnerships,\n\nI am [Name], hosting a tech and security review channel at [Link]. I would love to secure an integration partnership for ExpressVPN. My average video view count is [Views] and my audience is highly tech-centric. Attached is my rate card.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "surfshark",
    "name": "Surfshark",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Flat Fee / Affiliate",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "affiliates@surfshark.com",
    "contactForm": "https://surfshark.com/influencers",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=surfshark.com",
    "dna": {
      "requirements": "Broad general entertainment, tech tutorials, gaming channels.",
      "dealStructure": "Fixed integration payments + high-percentage commissions.",
      "pitchHelper": "Hi Surfshark Influencer Team,\n\nI am a content developer at [Link]. I would love to integrate Surfshark as a sponsor in my upcoming video series. I average [Views] views and believe Surfshark fits perfectly with my audience's digital needs. Let's discuss details.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "hostinger",
    "name": "Hostinger",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Flat Fee / Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "sponsorship@hostinger.com",
    "contactForm": "https://www.hostinger.com/affiliate",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=hostinger.com",
    "dna": {
      "requirements": "Web development tutorials, design courses, software guide vlogs.",
      "dealStructure": "Free hosting resources, flat fee video rates, high affiliate conversions.",
      "pitchHelper": "Hi Hostinger Partnerships,\n\nMy name is [Name], creating web development tutorial content at [Link]. I would love to explore featuring Hostinger's hosting services in my next build-a-website video. Please see my channel stats and audience details attached.\n\nKind regards,\n[Name]"
    }
  },
  {
    "id": "notion",
    "name": "Notion",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Flat Fee / Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "affiliates@makenotion.com",
    "contactForm": "https://www.notion.so/affiliates",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=notion.so",
    "dna": {
      "requirements": "Productivity tips, educational workflows, tech tutorials, students/professional targets.",
      "dealStructure": "Dedicated video integrations, premium subscription resources, commissions.",
      "pitchHelper": "Hi Notion Affiliate Team,\n\nI am a tech and productivity creator broadcasting at [Link]. I use Notion daily to organize my workspace and content planning. I would love to review and showcase my Notion templates to my audience. Attached is my media kit.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "audible",
    "name": "Audible",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "audiblepartnerships@audible.com",
    "contactForm": "https://www.audible.com/ep/creator-program",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=audible.com",
    "dna": {
      "requirements": "Book reviews, history channels, educational summaries, storytelling channels.",
      "dealStructure": "Integrated 60-second video slots with free audiobook download sign-up integrations.",
      "pitchHelper": "Dear Audible Partnerships Team,\n\nI am [Name], hosting an educational/book review channel at [Link]. I would love to secure a video integration sponsorship for Audible's creator campaign. Please find my demographics and rates attached.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "raid-shadow-legends",
    "name": "Raid: Shadow Legends",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Flat Fee / Sponsor",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "sponsorships@plarium.com",
    "contactForm": "https://plarium.com/en/about/sponsorship/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=plarium.com",
    "dna": {
      "requirements": "Large entertainment channels, gaming vlogs, pop culture, comedy. Average 15,000 views.",
      "dealStructure": "High flat-fee campaigns per 60-second video integrations (starting from $1500 to $10,000+).",
      "pitchHelper": "Hi Plarium Sponsorship Team,\n\nI am [Name], hosting video content at [Link]. I am reaching out to propose a 60-second video sponsorship integration for Raid: Shadow Legends in my upcoming video schedule. Attached are my channel statistics.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "brave",
    "name": "Brave Browser",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "creators@brave.com",
    "contactForm": "https://publishers.basicattentiontoken.org/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=brave.com",
    "dna": {
      "requirements": "Crypto tips, tech guides, privacy topics, general coding content creators.",
      "dealStructure": "Earn BAT tokens based on user downloads, tipping integration on your verified channels.",
      "pitchHelper": "Hi Brave Creator Support,\n\nI am a tech and web development blogger at [Link]. I would love to sign up for Brave Creator program to verify my channel and promote privacy-centric browsing to my audience. Let me know if you need verification.\n\nBest,\n[Name]"
    }
  },
  {
    "id": "soylent",
    "name": "Soylent",
    "type": "brand",
    "category": "Energy Drinks",
    "sponsorType": "Product Gifting / Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "partnerships@soylent.com",
    "contactForm": "https://soylent.com/pages/ambassador",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=soylent.com",
    "dna": {
      "requirements": "Lifestyle streamers, gaming streams, students, busy coding tutorials, healthy living vlogs.",
      "dealStructure": "Monthly supplies of Soylent drinks, affiliate codes, brand merch kit.",
      "pitchHelper": "Hello Soylent Team,\n\nI am [Name], a live streamer and developer broadcasting at [Link]. I love the convenience of Soylent meals during my long coding streams. I would love to partner as an ambassador. Attached is my channel profile.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "sneak-energy",
    "name": "Sneak Energy",
    "type": "brand",
    "category": "Energy Drinks",
    "sponsorType": "Product Gifting / Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "partners@sneakenergy.com",
    "contactForm": "https://sneakenergy.com/pages/creators",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=sneakenergy.com",
    "dna": {
      "requirements": "Gaming streams, custom overlays, displaying Sneak shaker cups during live streams.",
      "dealStructure": "Sneak energy starter tubs, branded shaker cups, custom checkout referral links.",
      "pitchHelper": "Hi Sneak Energy Team,\n\nI am [Name], a live streamer on [Link]. I am a huge supporter of Sneak Energy's zero-sugar formulas and would love to represent Sneak on my stream and share discounts with my viewers. Attached is my media card.\n\nBest,\n[Name]"
    }
  },
  {
    "id": "fire-flux",
    "name": "Fire Flux Esports",
    "type": "team",
    "category": "Esports",
    "sponsorType": "Flat Fee / Brand Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "info@fireflux.gg",
    "contactForm": "https://fireflux.gg/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=fireflux.gg",
    "dna": {
      "requirements": "Turkish language Valorant or competitive mobile gaming streamer, active social content creator.",
      "dealStructure": "Fire Flux content squad contracts, jersey branding, team gaming facility access.",
      "pitchHelper": "Fire Flux Espor Yönetimine Merhaba,\n\nBen [İsim], [Yayın Linki] adresinde Valorant ve FPS içerikleri yayınlıyorum. Fire Flux espor organizasyonuna katılmak ve ortak sponsorluklarda yer almak isterim. Yayın istatistiklerimi ekte paylaşıyorum.\n\nSaygılarımla,\n[İsim]"
    }
  },
  {
    "id": "sangal",
    "name": "Sangal Esports",
    "type": "team",
    "category": "Esports",
    "sponsorType": "Flat Fee / Brand Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "info@sangal.gg",
    "contactForm": "https://sangal.gg/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=sangal.gg",
    "dna": {
      "requirements": "FPS/CS2 competitive focus, professional gameplay representation, European target audience.",
      "dealStructure": "Official streamer sign-on perks, sponsor hardware provisions, competitive tournament support.",
      "pitchHelper": "Sangal Esports Yönetimine Selamlar,\n\nBen [İsim], [Yayın Linki] adresinde CS2 odaklı yayınlar yapıyorum. Sangal'ın köklü espor geçmişini temsil edecek yaratıcı kadronuza katılmak isterim. Sunum dosyam ekte yer almaktadır.\n\nSaygılarımla,\n[İsim]"
    }
  },
  {
    "id": "astralis",
    "name": "Astralis",
    "type": "team",
    "category": "Esports",
    "sponsorType": "Flat Fee / Brand Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partnerships@astralis.gg",
    "contactForm": "https://astralis.gg/contact",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=astralis.gg",
    "dna": {
      "requirements": "CS2/League of Legends gaming guides, professional tier representation, Danish/European focus.",
      "dealStructure": "Team jersey allocation, partner hardware support, local events, sponsor promotion slots.",
      "pitchHelper": "Dear Astralis Partnerships Team,\n\nI am [Name], hosting gaming analysis streams at [Link]. I would love to explore content collaborations under the Astralis brand. Please find my audience metrics and details attached.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "nip",
    "name": "Ninjas in Pyjamas (NIP)",
    "type": "team",
    "category": "Esports",
    "sponsorType": "Flat Fee / Brand Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partnerships@nip.gl",
    "contactForm": "https://nip.gl/pages/contact",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=nip.gl",
    "dna": {
      "requirements": "Competitive esports guides, Swedish or international FPS audience reach, highly active on TikTok/Twitter.",
      "dealStructure": "NIP stream roster contracts, Razer/partner peripherals support, global marketing activities.",
      "pitchHelper": "Dear NIP Partnerships Team,\n\nI am [Name], streaming competitive FPS games on [Link]. I've always admired NIP's long legacy in esports. I would love to represent NIP as a content creator. Please check my stream statistics attached.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "team-spirit",
    "name": "Team Spirit",
    "type": "team",
    "category": "Esports",
    "sponsorType": "Flat Fee / Brand Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partnerships@teamspirit.gg",
    "contactForm": "https://teamspirit.gg/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=teamspirit.gg",
    "dna": {
      "requirements": "High Dota2/CS2 competitive rank or gaming guide creator, international audience profiles.",
      "dealStructure": "Official creator squad, TS branded gear provisions, tournament cash prize share structures.",
      "pitchHelper": "Hi Team Spirit Management,\n\nI am [Name], hosting high-tier Dota2 streams at [Link]. I would love to discuss representing Team Spirit as a partner creator. My channel demographics and metrics are attached.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "team-falcons",
    "name": "Team Falcons",
    "type": "team",
    "category": "Esports",
    "sponsorType": "Flat Fee / Brand Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "info@teamfalcons.sa",
    "contactForm": "https://teamfalcons.sa/",
    "logo": "https://www.google.com/s2/favicons?domain=teamfalcons.sa&sz=128",
    "dna": {
      "requirements": "Professional competitive esports alignment, high mechanical skill, clean social standings.",
      "dealStructure": "Pro player salary packages, partner hardware allocations, tournament earnings percentages.",
      "pitchHelper": "Hi Team Falcons Management,\n\nI am [Name], hosting competitive gaming streams at [Link]. I admire Falcons' impressive competitive rosters and would love to discuss joining your streamer or competitive team roster. Attached is my gaming portfolio and metrics.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "karmine-corp",
    "name": "Karmine Corp",
    "type": "team",
    "category": "Esports",
    "sponsorType": "Flat Fee / Brand Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "contact@karminecorp.fr",
    "contactForm": "https://www.karminecorp.fr/",
    "logo": "https://www.google.com/s2/favicons?domain=karminecorp.fr&sz=128",
    "dna": {
      "requirements": "French language capability preferred, high community engagement, positive and entertaining streaming style.",
      "dealStructure": "KCorp stream squad contract, official sponsor integrations, and live fan event appearances.",
      "pitchHelper": "Bonjour Karmine Corp Management,\n\nI am [Name], streaming gaming content at [Link]. I have a highly active fanbase and love KCorp's legendary fan culture. I would love to explore representing KCorp as a content creator. Please find my stream stats attached.\n\nCordialement,\n[Name]"
    }
  },
  {
    "id": "koi",
    "name": "KOI",
    "type": "team",
    "category": "Esports",
    "sponsorType": "Flat Fee / Brand Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partnerships@koi.gg",
    "contactForm": "https://koi.gg/",
    "logo": "https://www.google.com/s2/favicons?domain=koi.gg&sz=128",
    "dna": {
      "requirements": "Spanish/English language content, active social media, gaming/entertainment streaming focus.",
      "dealStructure": "KOI squad streaming agreements, sponsor merchandise allocations, and collaborative content videos.",
      "pitchHelper": "Hola KOI Partnerships Team,\n\nI am [Name], a content creator broadcasting at [Link]. I admire KOI's massive social presence and community focus. I would love to discuss a content collaboration or creator signing. My media kit is attached.\n\nSaludos,\n[Name]"
    }
  },
  {
    "id": "pcific-esports",
    "name": "PCIFIC Esports",
    "type": "team",
    "category": "Esports",
    "sponsorType": "Flat Fee / Brand Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "info@pcific.gg",
    "contactForm": "https://pcific.gg/",
    "logo": "https://www.google.com/s2/favicons?domain=pcific.gg&sz=128",
    "dna": {
      "requirements": "Turkish language Valorant or competitive shooter focus, team player attitude, active local competitive clips.",
      "dealStructure": "PCIFIC competitive squad contract, local brand sponsor gear support.",
      "pitchHelper": "PCIFIC Esports Yönetimine Merhaba,\n\nBen [İsim], [Yayın Linki] adresinde competitive oyun yayınları yapıyorum. PCIFIC bünyesinde yer almak ve sponsorlarınızı temsil etmek isterim. Dosyam ekte yer almaktadır.\n\nSaygılarımla,\n[İsim]"
    }
  },
  {
    "id": "nvidia",
    "name": "NVIDIA",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Product Gifting",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "geforce_community@nvidia.com",
    "contactForm": "https://www.nvidia.com/en-us/geforce/community/",
    "logo": "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    "dna": {
      "requirements": "High-quality video production, detailed hardware/graphics benchmark tutorials, active GeForce community engagement.",
      "dealStructure": "GeForce RTX graphics cards gifting, developer beta testing access, global social feature support.",
      "pitchHelper": "Dear NVIDIA GeForce Community Team,\n\nI am [Name], producing hardware guides and gaming reviews at [Link]. I am planning a comprehensive setup benchmarking series and would love to feature NVIDIA's GeForce RTX graphics hardware. Attached is my channel media deck.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "amd",
    "name": "AMD",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Product Gifting / Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "redteam@amd.com",
    "contactForm": "https://www.amd.com/en/gaming/community.html",
    "logo": "https://www.google.com/s2/favicons?domain=amd.com&sz=128",
    "dna": {
      "requirements": "PC builder videos, gaming performance benchmarks, active AMD Red Team community participation.",
      "dealStructure": "Ryzen CPUs, Radeon GPUs gifting, affiliate setups, AMD creator merch packages.",
      "pitchHelper": "Hello AMD Red Team Partnerships,\n\nI am [Name], a hardware and gaming creator posting tutorials at [Link]. I am planning an upcoming custom AMD PC build project. I would love to explore a partnership to feature AMD hardware. Attached is my channel deck.\n\nBest,\n[Name]"
    }
  },
  {
    "id": "intel",
    "name": "Intel",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Product Gifting",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "intelgaming@intel.com",
    "contactForm": "https://www.intel.com/",
    "logo": "https://www.google.com/s2/favicons?domain=intel.com&sz=128",
    "dna": {
      "requirements": "Hardware review channels, high-production gaming events, professional setup walkthroughs.",
      "dealStructure": "Intel Core processor upgrade kits, custom developer preview hardware, event sponsorship opportunities.",
      "pitchHelper": "Dear Intel Gaming Team,\n\nMy name is [Name], producing tech and gaming content at [Link]. I would love to discuss a partnership to feature Intel's processor lineup in my upcoming PC build reviews. Please see my metrics attached.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "eneba",
    "name": "Eneba",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "partnerships@eneba.com",
    "contactForm": "https://www.eneba.com/partners",
    "logo": "https://www.google.com/s2/favicons?domain=eneba.com&sz=128",
    "dna": {
      "requirements": "Active gaming streams, config chat command for Eneba links, sharing store deals regularly.",
      "dealStructure": "Custom affiliate portal, up to 10% cash commission per key checkout, regular code giveaways.",
      "pitchHelper": "Hi Eneba Partnerships Team,\n\nI am a gaming creator broadcasting daily at [Link]. I am a regular customer of Eneba for game keys and would love to join your partner program to promote your store to my active audience of [Size].\n\nBest,\n[Name]"
    }
  },
  {
    "id": "humble-bundle",
    "name": "Humble Bundle",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "partner@humblebundle.com",
    "contactForm": "https://www.humblebundle.com/partner",
    "logo": "https://www.google.com/s2/favicons?domain=humblebundle.com&sz=128",
    "dna": {
      "requirements": "Charity-friendly creator profile, regular game list reviews, placing custom affiliate link in descriptions.",
      "dealStructure": "Humble Partner dashboard, earn up to 15% commission per bundle sold, supporting your chosen charity.",
      "pitchHelper": "Dear Humble Partner Team,\n\nI am a gaming and charity streamer at [Link]. I love Humble Bundle's mission of supporting charities through gaming. I'd love to join the Humble Partner Program to share bundles with my community. Attached is my profile.\n\nSincerely,\n[Name]"
    }
  },
  {
    "id": "dxracer",
    "name": "DXRacer",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "sponsorship@dxracer.com",
    "contactForm": "https://www.dxracer.com/sponsorship",
    "logo": "https://www.google.com/s2/favicons?domain=dxracer.com&sz=128",
    "dna": {
      "requirements": "Showing your face on camera, daily streaming schedule, clean ergonomic room setup layout.",
      "dealStructure": "DXRacer ergonomic gaming chair gifting + customized affiliate checkout codes.",
      "pitchHelper": "Hi DXRacer Team,\n\nMy name is [Name], and I stream gaming content at [Link]. I am upgrading my gaming setup and would love to review and feature DXRacer's ergonomic gaming chairs. Please find my setup photos and stats attached.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "andaseat",
    "name": "AndaSeat",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting / Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "cooperation@andaseat.com",
    "contactForm": "https://www.andaseat.com/cooperation",
    "logo": "https://www.google.com/s2/favicons?domain=andaseat.com&sz=128",
    "dna": {
      "requirements": "Consistent livestreaming hours, premium gaming room aesthetic, showing setup layout on stream.",
      "dealStructure": "AndaSeat premium gaming chair gifting, custom 8% affiliate code, brand co-marketing posts.",
      "pitchHelper": "Hello AndaSeat Team,\n\nI am a gaming creator broadcasting at [Link]. I would love to explore a partnership under your cooperation program to review and feature an AndaSeat gaming chair. Please find my channel details attached.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "fifine",
    "name": "Fifine Microphones",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "sponsorship@fifinemic.com",
    "contactForm": "https://fifinemic.com/pages/sponsorship",
    "logo": "https://www.google.com/s2/favicons?domain=fifinemic.com&sz=128",
    "dna": {
      "requirements": "Unboxing or audio quality review videos, microphone testing segments, active YouTube or Twitch channel.",
      "dealStructure": "Fifine AmpliGame series microphones or audio gear gifting, priority reviews of new products.",
      "pitchHelper": "Hi Fifine Team,\n\nI am [Name], creating gaming and tech content at [Link]. I am planning a comparative audio review of USB creator microphones and would love to feature a Fifine microphone. Attached is my channel info.\n\nKind regards,\n[Name]"
    }
  },
  {
    "id": "maono",
    "name": "Maono",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "collab@maono.com",
    "contactForm": "https://www.maono.com/pages/collab",
    "logo": "https://www.google.com/s2/favicons?domain=maono.com&sz=128",
    "dna": {
      "requirements": "Streaming setup showcase, podcast style content, regular audio setup reviews.",
      "dealStructure": "Maonocaster audio mixers, XLR microphones gifting, affiliate sales commission slots.",
      "pitchHelper": "Dear Maono Team,\n\nI am [Name], hosting a podcast and stream channel at [Link]. I'm looking to upgrade my audio routing and would love to review and feature a Maonocaster mixer setup. Attached is my media kit.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "protonvpn",
    "name": "ProtonVPN",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Flat Fee / Affiliate",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partners@proton.me",
    "contactForm": "https://proton.me/partners",
    "logo": "https://www.google.com/s2/favicons?domain=proton.me&sz=128",
    "dna": {
      "requirements": "Privacy-focused topics, tech reviews, open-source programming guides, clean community guidelines.",
      "dealStructure": "Flat-fee integrated video spots + high recurring affiliate commission payouts.",
      "pitchHelper": "Dear Proton Partnerships Team,\n\nI am [Name], hosting a privacy and tech channel at [Link]. I admire Proton's dedication to secure, open-source internet tools. I'd love to secure a video integration sponsorship. Attached is my media card.\n\nSincerely,\n[Name]"
    }
  },
  {
    "id": "grammarly",
    "name": "Grammarly",
    "type": "brand",
    "category": "Technology",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "affiliates@grammarly.com",
    "contactForm": "https://www.grammarly.com/affiliates",
    "logo": "https://www.google.com/s2/favicons?domain=grammarly.com&sz=128",
    "dna": {
      "requirements": "Educational channels, study hacks, writing tips, lifestyle vlogs, minimum 20k views per video.",
      "dealStructure": "High flat-fee payment integrations per 30-60 second dedicated video ad slots.",
      "pitchHelper": "Dear Grammarly Partnerships Team,\n\nI am an online educator and creator at [Link] averaging [Views] per video. I frequently recommend Grammarly to my students and would love to secure an integration partnership. Attached is my rate card.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "levlup",
    "name": "LevlUp",
    "type": "brand",
    "category": "Energy Drinks",
    "sponsorType": "Product Gifting / Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "sponsorship@levlup.de",
    "contactForm": "https://levlup.com/pages/sponsorships",
    "logo": "https://www.google.com/s2/favicons?domain=levlup.com&sz=128",
    "dna": {
      "requirements": "Gaming streams, chat command setup, regular display of LevlUp shaker cups during broadcasts.",
      "dealStructure": "LevlUp gaming energy booster tubs gifting, custom 10% affiliate link setups.",
      "pitchHelper": "Hi LevlUp Team,\n\nI am a gaming streamer broadcasting daily at [Link]. I drink LevlUp during my competitive sessions and would love to apply for an official creator sponsorship to represent LevlUp. Attached is my media kit.\n\nBest,\n[Name]"
    }
  },
  {
    "id": "madmonq",
    "name": "Madmonq",
    "type": "brand",
    "category": "Energy Drinks",
    "sponsorType": "Product Gifting / Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "affiliates@madmonq.gg",
    "contactForm": "https://www.madmonq.gg/affiliates/",
    "logo": "https://www.google.com/s2/favicons?domain=madmonq.gg&sz=128",
    "dna": {
      "requirements": "Health-conscious streamer, clean community chat moderation, active gameplay clips.",
      "dealStructure": "Madmonq supplement supply kits, ambassador community entry, affiliate commissions.",
      "pitchHelper": "Dear Madmonq Team,\n\nI am [Name], a live streamer focusing on competitive tactics at [Link]. I admire Madmonq's focus on healthy gaming habits. I would love to join your ambassador program. Attached are my channel metrics.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "riot-games",
    "name": "Riot Games",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting / Affiliate",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "creator-relations@riotgames.com",
    "contactForm": "https://www.riotgames.com/",
    "logo": "https://www.google.com/s2/favicons?domain=riotgames.com&sz=128",
    "dna": {
      "requirements": "Good standing in Riot titles (LoL, Valorant, TFT), positive behavior, regular streaming or educational guides.",
      "dealStructure": "League Partner Program (LPP) entry, free skin giveaways codes, developer co-marketing campaigns.",
      "pitchHelper": "Dear Riot Games Creator Relations,\n\nI am [Name], hosting competitive guides and streams for [Valorant/League of Legends] at [Link]. I would love to apply for the Riot partner initiatives to share custom content and giveaways with my community. Attached is my gaming portfolio.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "electronic-arts",
    "name": "Electronic Arts",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "ea_creatornetwork@ea.com",
    "contactForm": "https://www.ea.com/creator-network",
    "logo": "https://www.google.com/s2/favicons?domain=ea.com&sz=128",
    "dna": {
      "requirements": "Active posting about EA titles (EA FC, Apex Legends, The Sims, Battlefield), high production values.",
      "dealStructure": "EA Creator Network membership, early access playtest codes, exclusive creator events invite.",
      "pitchHelper": "Hello EA Creator Network Team,\n\nI am [Name], producing gaming reviews and guides for [Apex Legends / EA FC] at [Link]. I'm writing to apply for the EA Creator Network to cover upcoming game launches. Please see my metrics and setup attached.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "ubisoft",
    "name": "Ubisoft",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "ubisoftcreators@ubisoft.com",
    "contactForm": "https://www.ubisoft.com/",
    "logo": "https://www.google.com/s2/favicons?domain=ubisoft.com&sz=128",
    "dna": {
      "requirements": "Publishing content around Ubisoft titles (Rainbow Six Siege, Assassin's Creed), creative storytelling.",
      "dealStructure": "Ubisoft Creators Club entry, game review keys, promotional merchandising packages.",
      "pitchHelper": "Dear Ubisoft Creators Relations Team,\n\nI am [Name], hosting a gaming channel at [Link] focusing on Rainbow Six Siege. I would love to explore a partnership to secure review codes and promotions for Ubisoft's upcoming titles. Please see my media kit attached.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "wargaming",
    "name": "Wargaming",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Affiliate / Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "partnerships@wargaming.net",
    "contactForm": "https://wargaming.com/en/news/wg-partner-program/",
    "logo": "https://www.google.com/s2/favicons?domain=wargaming.net&sz=128",
    "dna": {
      "requirements": "Active World of Tanks or World of Warships streams, placing invite codes in video descriptions.",
      "dealStructure": "Wargaming Partner Program benefits, custom player referral bonuses, free in-game premium time codes.",
      "pitchHelper": "Hi Wargaming Partnerships Team,\n\nMy name is [Name], streaming World of Tanks daily at [Link]. I would love to join the official Wargaming Partner Program to offer special invite links and gold bonuses to my community. Attached is my profile.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "sega",
    "name": "Sega",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "sega_creators@sega.com",
    "contactForm": "https://www.sega.com/",
    "logo": "https://www.google.com/s2/favicons?domain=sega.com&sz=128",
    "dna": {
      "requirements": "Sonic the Hedgehog, Persona, or Total War gameplay reviews, high-engagement viewer communities.",
      "dealStructure": "Early game codes, review keys, and exclusive promotional merch kits.",
      "pitchHelper": "Dear Sega Creator Relations,\n\nI am [Name], a dedicated gaming YouTuber reviewing competitive and retro titles at [Link]. I would love to secure early review codes for Sega's upcoming launches. Attached is my channel media deck.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "bandai-namco",
    "name": "Bandai Namco",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Product Gifting",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "influencers@bandainamcoent.com",
    "contactForm": "https://www.bandainamcoent.com/",
    "logo": "https://www.google.com/s2/favicons?domain=bandainamcoent.com&sz=128",
    "dna": {
      "requirements": "Fighting games reviews (Tekken), anime gaming vlogs, or RPG (Elden Ring) guides.",
      "dealStructure": "Early access review codes, special gaming setup merchandise gifting, and event promotions.",
      "pitchHelper": "Dear Bandai Namco Partnerships,\n\nI am [Name], hosting Elden Ring and Tekken guides at [Link] with [Size] subscribers. I would love to apply for your creator program to cover upcoming anime and action title releases. Attached is my media kit.\n\nBest,\n[Name]"
    }
  },
  {
    "id": "esl",
    "name": "ESL Gaming",
    "type": "team",
    "category": "Esports",
    "sponsorType": "Flat Fee / Brand Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partnerships@eslgaming.com",
    "contactForm": "https://www.eslgaming.com/",
    "logo": "https://www.google.com/s2/favicons?domain=eslgaming.com&sz=128",
    "dna": {
      "requirements": "Professional CS2/Dota2 casting, community tournament organizing, or espor analyst profiles.",
      "dealStructure": "Official community caster license, server hosting allocations, flat-fee sponsorships.",
      "pitchHelper": "Dear ESL Partnerships Team,\n\nI am [Name], an esports broadcaster and community organizer at [Link]. I would love to collaborate under your community casting licenses for upcoming CS2 events. Please find my broadcast statistics attached.\n\nSincerely,\n[Name]"
    }
  },
  {
    "id": "blast",
    "name": "BLAST",
    "type": "team",
    "category": "Esports",
    "sponsorType": "Flat Fee / Brand Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partnerships@blast.tv",
    "contactForm": "https://blast.tv/",
    "logo": "https://www.google.com/s2/favicons?domain=blast.tv&sz=128",
    "dna": {
      "requirements": "High-quality FPS casting (CS2, Rainbow Six), professional stream layout overlays, esports commentary.",
      "dealStructure": "BLAST Premier co-streaming rights, official broadcast feature sponsorships.",
      "pitchHelper": "Dear BLAST Partnerships,\n\nMy name is [Name], broadcasting competitive shooter matches at [Link]. I am a huge follower of BLAST Premier tournaments and would love to request official co-streaming licensing. Attached are my channel demographics.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "faceit",
    "name": "FACEIT",
    "type": "brand",
    "category": "Esports",
    "sponsorType": "Affiliate / Brand Partnership",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "organizers@faceit.com",
    "contactForm": "https://www.faceit.com/",
    "logo": "https://www.google.com/s2/favicons?domain=faceit.com&sz=128",
    "dna": {
      "requirements": "Organizing local hubs/leagues, hosting regular competitive lobbies, active community following.",
      "dealStructure": "FACEIT Points allocation (for user rewards), custom organizer subscription splits, server provisions.",
      "pitchHelper": "Hi FACEIT Organizers Team,\n\nI am [Name], hosting a competitive CS2/Valorant community at [Link]. We would love to set up an official FACEIT Hub to run weekly tournaments. Please find our community player stats attached.\n\nBest,\n[Name]"
    }
  },
  {
    "id": "challengermode",
    "name": "Challengermode",
    "type": "brand",
    "category": "Esports",
    "sponsorType": "Flat Fee / Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "studios@challengermode.com",
    "contactForm": "https://www.challengermode.com/",
    "logo": "https://www.google.com/s2/favicons?domain=challengermode.com&sz=128",
    "dna": {
      "requirements": "Livestreaming community tournaments, utilizing Challengermode bracket widgets, promoting registration links.",
      "dealStructure": "Tournament cash prize pool sponsorships, server premium credits, and developer API integrations.",
      "pitchHelper": "Hello Challengermode Studios,\n\nI am [Name], a tournament organizer hosting community leagues at [Link]. We are planning our next Valorant league and would love to partner with Challengermode for tournament brackets and prize pool support. Let's discuss details.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "battlefy",
    "name": "Battlefy",
    "type": "brand",
    "category": "Esports",
    "sponsorType": "Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "support@battlefy.com",
    "contactForm": "https://battlefy.com/",
    "logo": "https://www.google.com/s2/favicons?domain=battlefy.com&sz=128",
    "dna": {
      "requirements": "Multiplayer community event hosting, custom tournament landing page setups, active user registration.",
      "dealStructure": "Free access to premium bracket configurations, promotion of your tournament on Battlefy homepage.",
      "pitchHelper": "Dear Battlefy Team,\n\nI am [Name], hosting weekly gaming tournaments at [Link]. We use Battlefy as our primary bracket engine and would love to explore a featured organizer status to showcase our tournaments on your dashboard. Attached is our event history.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "gamer-arena",
    "name": "Gamer Arena",
    "type": "brand",
    "category": "Esports",
    "sponsorType": "Flat Fee / Affiliate",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "info@gamerarena.com",
    "contactForm": "https://gamerarena.com/",
    "logo": "https://www.google.com/s2/favicons?domain=gamerarena.com&sz=128",
    "dna": {
      "requirements": "Turkish language streaming channels, hosting custom Gamer Arena duels, promoting GA Coin integrations.",
      "dealStructure": "GA Coin reward pools for tournament prizes, flat-fee livestreaming sponsorships, influencer packages.",
      "pitchHelper": "Gamer Arena Sponsorluk Ekibine Merhaba,\n\nBen [İsim], [Yayın Linki] adresinde gaming içerikleri yayınlıyorum. Platformunuzun düello ve turnuva yapısını izleyicilerimle buluşturup GA Coin destekli turnuvalar düzenlemek isterim. Sunum dosyam ekte yer almaktadır.\n\nSaygılarımla,\n[İsim]"
    }
  },
  {
    "id": "esportland",
    "name": "Esportland",
    "type": "brand",
    "category": "Esports",
    "sponsorType": "Flat Fee",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "info@esportland.com",
    "contactForm": "https://esportland.com/",
    "logo": "https://www.google.com/s2/favicons?domain=esportland.com&sz=128",
    "dna": {
      "requirements": "Turkish competitive shooter streams, community league organization, active espor social media clips.",
      "dealStructure": "Local community tournament prize pool funding, co-branded marketing operations.",
      "pitchHelper": "Esportland Yönetimine Selamlar,\n\nBen [İsim], [Yayın Linki] üzerinde competitive turnuvalar düzenliyorum. Sektördeki espor ligi altyapınızı ve turnuvalarınızı destekleyecek ortak bir etkinlik planı gerçekleştirmek isterim. Proje detaylarımız ekte yer almaktadır.\n\nSaygılarımla,\n[İsim]"
    }
  },
  {
    "id": "shopify",
    "name": "Shopify",
    "type": "brand",
    "category": "Software/SaaS",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Any Size",
    "contactEmail": "partners@shopify.com",
    "contactForm": "https://www.shopify.com/partners",
    "logo": "https://www.google.com/s2/favicons?domain=shopify.com&sz=128",
    "dna": {
      "requirements": "E-commerce developers, marketing agencies, content channels teaching business creation, or startups seeking setup tools.",
      "dealStructure": "E-commerce affiliate program (revenue split on store setup checkouts) + enterprise co-marketing budgets.",
      "pitchHelper": "Dear Shopify Partner Relations,\n\nI am [Name], hosting business guides and startup tutorials at [Link]. I would love to explore a B2B collaboration to feature Shopify as the default e-commerce backend in our upcoming store creation series. Attached is our audience demographics.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "figma",
    "name": "Figma",
    "type": "brand",
    "category": "Software/SaaS",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "design-partners@figma.com",
    "contactForm": "https://www.figma.com/",
    "logo": "https://www.google.com/s2/favicons?domain=figma.com&sz=128",
    "dna": {
      "requirements": "UI/UX design agencies, product development hubs, coding bootcamps, or tech education events.",
      "dealStructure": "Free team licenses provisions, collaborative design template highlights, community education event sponsorships.",
      "pitchHelper": "Dear Figma Partner Relations,\n\nI run [Agency Name] ([Link]), a UI/UX design studio. We use Figma daily for all client deliverables and would love to explore a co-marketing collaboration or agency sponsor program. Let us know if we can share our project stats.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "mailchimp",
    "name": "Mailchimp",
    "type": "brand",
    "category": "Software/SaaS",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "newsletter-sponsors@mailchimp.com",
    "contactForm": "https://mailchimp.com/",
    "logo": "https://www.google.com/s2/favicons?domain=mailchimp.com&sz=128",
    "dna": {
      "requirements": "B2B podcasts, business newsletter lists, tech startups blogs, or high-production marketing channels.",
      "dealStructure": "High flat-fee integrations per newsletter sponsor spot or dedicated video advertisement.",
      "pitchHelper": "Dear Mailchimp Sponsorship Team,\n\nMy name is [Name], and I publish [Newsletter/Podcast Name] ([Link]) reaching [Size] active B2B readers weekly. I would love to pitch a dedicated sponsor spot to feature Mailchimp's email marketing automations. Attached is our sponsor kit.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "vercel",
    "name": "Vercel",
    "type": "brand",
    "category": "Software/SaaS",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Any Size",
    "contactEmail": "partnerships@vercel.com",
    "contactForm": "https://vercel.com/contact/sales",
    "logo": "https://www.google.com/s2/favicons?domain=vercel.com&sz=128",
    "dna": {
      "requirements": "Next.js developers, coding bootcamps, frontend agencies, hackathon organizers, or tech startup accelerators.",
      "dealStructure": "Pro team hosting allocations, hackathon prizes sponsorship, Next.js template integrations.",
      "pitchHelper": "Dear Vercel Partnerships Team,\n\nI am organizing [Event/Hackathon Name] ([Link]) for developers. We would love to secure Vercel as a frontend hosting partner to provide free Pro tier access to our [Number] participants. Attached is our event pitch.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "printify",
    "name": "Printify",
    "type": "brand",
    "category": "Apparel",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Any Size",
    "contactEmail": "partners@printify.com",
    "contactForm": "https://printify.com/",
    "logo": "https://www.google.com/s2/favicons?domain=printify.com&sz=128",
    "dna": {
      "requirements": "Clothing brands, merch creators, design influencers, or e-commerce education blogs.",
      "dealStructure": "Printify partner benefits, custom sample merchandise credits, revenue sharing affiliate payouts.",
      "pitchHelper": "Hi Printify Partnerships Team,\n\nI am [Name], running the design and apparel channel at [Link]. I am launching a custom apparel collection and would love to partner with Printify to feature your print-on-demand platform. Attached are my channel statistics.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "wix",
    "name": "Wix",
    "type": "brand",
    "category": "Software/SaaS",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "affiliates@wix.com",
    "contactForm": "https://www.wix.com/about/affiliates",
    "logo": "https://www.google.com/s2/favicons?domain=wix.com&sz=128",
    "dna": {
      "requirements": "Design agencies, web developers, tech reviewers, lifestyle vlogs, or high-volume business guides.",
      "dealStructure": "High flat-fee sponsorships per video integration + up to $100 payout per premium user checkout.",
      "pitchHelper": "Dear Wix Partnerships,\n\nI run a web development review channel at [Link] with over [Size] views monthly. I would love to explore a video integration partnership to feature Wix Studio in our upcoming web agency comparison guide. Attached is my media kit.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "digitalocean",
    "name": "DigitalOcean",
    "type": "brand",
    "category": "Software/SaaS",
    "sponsorType": "Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "community@digitalocean.com",
    "contactForm": "https://www.digitalocean.com/community",
    "logo": "https://www.google.com/s2/favicons?domain=digitalocean.com&sz=128",
    "dna": {
      "requirements": "Software developers, cloud hosting tutorials, Linux/Server administration guides, or startup accelerators.",
      "dealStructure": "DigitalOcean cloud hosting credits (up to $500/month), community tutorial writer grants, Hacktoberfest event partnerships.",
      "pitchHelper": "Dear DigitalOcean Community Team,\n\nI am [Name], hosting a software deployment channel at [Link]. I am creating a multi-part server administration series and would love to secure cloud credits from DigitalOcean to host our testing environments. Attached is my profile.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "clickup",
    "name": "ClickUp",
    "type": "brand",
    "category": "Software/SaaS",
    "sponsorType": "Flat Fee",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "affiliates@clickup.com",
    "contactForm": "https://clickup.com/partners",
    "logo": "https://www.google.com/s2/favicons?domain=clickup.com&sz=128",
    "dna": {
      "requirements": "Productivity consulting agencies, business software reviewers, startup project guides, or workspace decorators.",
      "dealStructure": "Flat-fee video integration sponsorships, clickup consultant certifications, custom referral payouts.",
      "pitchHelper": "Hello ClickUp Partnerships Team,\n\nI am a productivity consultant creating setup walkthroughs at [Link]. I recommend ClickUp to all our B2B clients for task management. I'd love to secure a sponsored integration for our upcoming tool comparison video. Attached is my kit.\n\nBest,\n[Name]"
    }
  },
  {
    "id": "hubspot",
    "name": "HubSpot",
    "type": "brand",
    "category": "Software/SaaS",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partners@hubspot.com",
    "contactForm": "https://www.hubspot.com/partners",
    "logo": "https://www.google.com/s2/favicons?domain=hubspot.com&sz=128",
    "dna": {
      "requirements": "Sales training programs, B2B digital marketing agencies, business consulting firms, or CRM review blogs.",
      "dealStructure": "HubSpot Solutions Partner certification, co-marketing campaign budgets, high recurring commission shares.",
      "pitchHelper": "Dear HubSpot Partner Relations,\n\nI run [Company Name] ([Link]), a digital marketing consultancy. We want to join the HubSpot Solutions Partner program to implement HubSpot's CRM solutions for our [Number] business clients. Let's discuss a collaboration. Attached is our overview.\n\nSincerely,\n[Name]"
    }
  },
  {
    "id": "slack",
    "name": "Slack",
    "type": "brand",
    "category": "Software/SaaS",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Any Size",
    "contactEmail": "partnerships@slack.com",
    "contactForm": "https://slack.com/partners",
    "logo": "https://www.google.com/s2/favicons?domain=slack.com&sz=128",
    "dna": {
      "requirements": "Developer ecosystems, B2B collaboration blogs, remote work consultants, or hackathon event organizers.",
      "dealStructure": "Slack developer API feature spots, Slack Pro/Enterprise upgrades for events, community channel promo codes.",
      "pitchHelper": "Dear Slack Partnerships,\n\nI run a developer platform community at [Link]. We use Slack daily to coordinate our [Size] programmers. We'd love to explore an official partnership to highlight our API integrations on Slack's ecosystem. Attached is our project overview.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "printful",
    "name": "Printful",
    "type": "brand",
    "category": "Apparel",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Any Size",
    "contactEmail": "partnerships@printful.com",
    "contactForm": "https://www.printful.com/",
    "logo": "https://www.google.com/s2/favicons?domain=printful.com&sz=128",
    "dna": {
      "requirements": "E-commerce platform builders, apparel design influencers, clothing store launch guides, or branding agencies.",
      "dealStructure": "Custom print-on-demand sample discounts, co-branded apparel drops, affiliate revenue commission dashboard.",
      "pitchHelper": "Dear Printful Team,\n\nI am [Name], a branding designer posting shop building tutorials at [Link]. I am launching a new e-commerce series and want to review and feature Printful as our direct print-on-demand backend. Attached is my media deck.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "savvy-games-group",
    "name": "Savvy Games Group",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "info@savvygamesgroup.com.sa",
    "contactForm": "https://savvygamesgroup.com.sa/",
    "logo": "https://www.google.com/s2/favicons?domain=savvygamesgroup.com.sa&sz=128",
    "dna": {
      "requirements": "Global gaming ecosystem developers, international esports events licensing, strategic B2B studio investments.",
      "dealStructure": "Sovereign wealth funding programs, B2B investment collaborations, infrastructure grants.",
      "pitchHelper": "Dear Savvy Games Group Partnerships,\n\nI am [Name], representing [Company/Project Name] ([Link]). We are developing a comprehensive gaming infrastructure platform and would love to pitch our project for B2B collaboration or investment under your gaming initiatives. Attached is our overview deck.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "qiddiya",
    "name": "Qiddiya",
    "type": "brand",
    "category": "Esports",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partnerships@qiddiya.com",
    "contactForm": "https://qiddiya.com/",
    "logo": "https://www.google.com/s2/favicons?domain=qiddiya.com&sz=128",
    "dna": {
      "requirements": "Tier-1 esports organizations, global gaming event casting networks, premium lifestyle branding partnerships.",
      "dealStructure": "Multi-million dollar event sponsorships, long-term team partnership funding, city-activation campaigns.",
      "pitchHelper": "Dear Qiddiya Partnerships Team,\n\nI am representing [Esports Organization/Project] ([Link]). We admire Qiddiya's vision to build the world's premier gaming and entertainment capital. We would love to explore a B2B partnership for event coverage or esports sponsorships. Attached is our portfolio.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "stc",
    "name": "STC",
    "type": "brand",
    "category": "Tech",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partnerships@stc.com.sa",
    "contactForm": "https://www.stc.com.sa/",
    "logo": "https://www.google.com/s2/favicons?domain=stc.com.sa&sz=128",
    "dna": {
      "requirements": "Middle Eastern competitive events, local tech start-ups seeking cloud/connectivity support, regional tournaments.",
      "dealStructure": "Corporate sponsorship packages, high-speed telecom service barter provisions, digital gaming platform integrations.",
      "pitchHelper": "Dear STC Partnerships Team,\n\nI am [Name], organizing a regional gaming event in the GCC region ([Link]). We would love to secure STC as our official connectivity and telecom sponsor to support our [Number] participants. Attached is our event sponsorship proposal.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "etisalat",
    "name": "e& (Etisalat Group)",
    "type": "brand",
    "category": "Tech",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partnerships@eand.com",
    "contactForm": "https://eand.com/",
    "logo": "https://www.google.com/s2/favicons?domain=eand.com&sz=128",
    "dna": {
      "requirements": "Tech incubation startups, Middle Eastern streaming networks, innovative mobile software apps.",
      "dealStructure": "B2B technology sponsorships, startup accelerator integrations, regional marketing placements.",
      "pitchHelper": "Dear e& Partnerships Team,\n\nI run [Startup Name] ([Link]), a mobile app focusing on gaming tools in the MENA region. We are looking to explore a B2B partnership to integrate with e&'s ecosystem and reach your massive customer base. Please see our overview deck attached.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "neom",
    "name": "NEOM",
    "type": "brand",
    "category": "Tech",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partners@neom.com",
    "contactForm": "https://www.neom.com/",
    "logo": "https://www.google.com/s2/favicons?domain=neom.com&sz=128",
    "dna": {
      "requirements": "Innovative tech solutions, smart-city startup programs, high-end media production groups.",
      "dealStructure": "Sovereign project funding, NEOM media/gaming hub residency slots, collaborative pilot project budgets.",
      "pitchHelper": "Dear NEOM Partnerships Team,\n\nWe are [Company Name] ([Link]), developing clean smart-city gaming software solutions. We would love to explore piloting our project in NEOM's digital media ecosystem. Attached is our technical pitch and team resume.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "riyadh-season",
    "name": "Riyadh Season",
    "type": "brand",
    "category": "Esports",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "info@riyadhseason.com",
    "contactForm": "https://riyadhseason.com/",
    "logo": "https://www.google.com/s2/favicons?domain=riyadhseason.com&sz=128",
    "dna": {
      "requirements": "International sports Cast networks, global gaming event organizers, major entertainment collaborations.",
      "dealStructure": "Official festival partner licenses, event space provisions, large flat-fee sponsor spots.",
      "pitchHelper": "Dear Riyadh Season Management,\n\nI represent [Organization Name] ([Link]), a global gaming festival caster. We would love to explore a B2B partnership to cast and cover key events during the upcoming Riyadh Season. Attached is our event history and viewer metrics.\n\nSincerely,\n[Name]"
    }
  },
  {
    "id": "vox-cinemas",
    "name": "VOX Cinemas",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Flat Fee",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "voxpartnerships@maf.ae",
    "contactForm": "https://www.majidalfuttaim.com/",
    "logo": "https://www.google.com/s2/favicons?domain=majidalfuttaim.com&sz=128",
    "dna": {
      "requirements": "Middle Eastern gaming influencers, cinema-gaming tournament organizers, local entertainment vlogs.",
      "dealStructure": "Cinema gaming zone sponsorships, event hosting venue provisions, and local marketing support.",
      "pitchHelper": "Dear Majid Al Futtaim/VOX Cinemas Partnerships,\n\nI am [Name], a gaming event organizer at [Link] in Dubai. We want to host a local esports tournament and would love to partner with VOX Cinemas for event hosting and theater screen gameplay setups. Attached are our plans.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "adq",
    "name": "ADQ",
    "type": "brand",
    "category": "Tech",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partners@adq.ae",
    "contactForm": "https://www.adq.ae/",
    "logo": "https://www.google.com/s2/favicons?domain=adq.ae&sz=128",
    "dna": {
      "requirements": "Abu Dhabi based or expanding startups, logistics tech innovations, corporate sustainability projects.",
      "dealStructure": "Corporate investment funding, startup co-development grants, government ecosystem onboarding.",
      "pitchHelper": "Dear ADQ Partnerships Team,\n\nI run [Company Name] ([Link]), a technology startup expanding into the GCC area. We want to explore a strategic B2B partnership to deploy our digital tracking solutions. Please find our business overview attached.\n\nSincerely,\n[Name]"
    }
  },
  {
    "id": "miral",
    "name": "Miral",
    "type": "brand",
    "category": "Gaming",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "info@miral.ae",
    "contactForm": "https://miral.ae/",
    "logo": "https://www.google.com/s2/favicons?domain=miral.ae&sz=128",
    "dna": {
      "requirements": "Yas Island leisure promotion creators, major gaming festival planners, family-friendly B2B events.",
      "dealStructure": "Yas Island resort venue sponsorships, flat-fee promo campaign integrations.",
      "pitchHelper": "Dear Miral Partnerships,\n\nWe are [Event Name] ([Link]), planning an upcoming B2B tech and entertainment festival in Abu Dhabi. We'd love to partner with Miral to coordinate on-island activations and marketing support. Attached is our festival deck.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "aramco",
    "name": "Aramco",
    "type": "brand",
    "category": "Tech",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "sponsorships@aramco.com",
    "contactForm": "https://www.aramco.com/",
    "logo": "https://www.google.com/s2/favicons?domain=aramco.com&sz=128",
    "dna": {
      "requirements": "Formula 1 content creators, massive global esports organizations (EWC/Gamers8), STEM startup programs.",
      "dealStructure": "Premium global sponsorship contracts, STEM research funding slots, major event main partner listings.",
      "pitchHelper": "Dear Aramco Sponsorship Team,\n\nI represent [Organization Name] ([Link]), hosting competitive coding hackathons and engineering events. We would love to discuss a STEM sponsorship to secure Aramco as our main event partner. Attached is our program outline.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "snoonu",
    "name": "Snoonu",
    "type": "brand",
    "category": "Software/SaaS",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "partnerships@snoonu.com",
    "contactForm": "https://snoonu.com/",
    "logo": "https://www.google.com/s2/favicons?domain=snoonu.com&sz=128",
    "dna": {
      "requirements": "Qatari digital startups, local delivery integrations, regional sports and gaming influencers.",
      "dealStructure": "Co-branded B2B marketing campaigns, local event sponsor packages, delivery integration referral slots.",
      "pitchHelper": "Hi Snoonu Partnerships Team,\n\nI run a Qatar-based gaming events channel at [Link]. We are hosting a local tournament and would love to secure Snoonu as our official delivery/food partner to feed our [Number] players. Attached are event details.\n\nBest,\n[Name]"
    }
  },
  {
    "id": "red-sea-global",
    "name": "Red Sea Global",
    "type": "brand",
    "category": "Tech",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partnerships@redseaglobal.com",
    "contactForm": "https://www.redseaglobal.com/",
    "logo": "https://www.google.com/s2/favicons?domain=redseaglobal.com&sz=128",
    "dna": {
      "requirements": "Sustainable tech startups, high-end travel filmmakers, cultural preservation projects.",
      "dealStructure": "Ecotourism project collaborations, tech research funding, premium brand video sponsorships.",
      "pitchHelper": "Dear Red Sea Global Partnerships,\n\nWe are [Creative Production Group] ([Link]), specializing in sustainability documentaries. We would love to pitch a video project highlighting the digital preservation of Red Sea marine life. Attached is our proposal.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "geekay-esports",
    "name": "Geekay Esports",
    "type": "brand",
    "category": "Esports",
    "sponsorType": "Flat Fee",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "info@geekaygroup.com",
    "contactForm": "https://geekayesports.com/",
    "logo": "https://www.google.com/s2/favicons?domain=geekayesports.com&sz=128",
    "dna": {
      "requirements": "Middle Eastern esports casters, regional tournament organizers, GCC competitive players.",
      "dealStructure": "GCC tournament sponsorships, co-marketing retail giveaways, regional caster contracts.",
      "pitchHelper": "Dear Geekay Esports Team,\n\nI am [Name], a GCC-based esports caster broadcasting at [Link]. I would love to explore casting or stream sponsorships for Geekay's upcoming regional Valorant tournaments. Attached is my casting portfolio.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "nike",
    "name": "Nike",
    "type": "brand",
    "category": "Apparel",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "media.relations@nike.com",
    "contactForm": "https://www.nike.com/",
    "logo": "https://www.google.com/s2/favicons?domain=nike.com&sz=128",
    "dna": {
      "requirements": "Athletes, sports teams, active lifestyle vloggers, and design partners who focus on high-performance athletic apparel.",
      "dealStructure": "Large flat-fee event sponsorships, custom apparel design drops, global athlete brand allocations.",
      "pitchHelper": "Dear Nike Partnership Relations,\n\nI am [Name] ([Link]), creating high-energy fitness and athletic design content. We want to pitch a custom collaborative apparel series representing our active community of [Size] members. Attached is our branding proposal.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "adidas",
    "name": "Adidas",
    "type": "brand",
    "category": "Apparel",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "adidaspartners@adidas-group.com",
    "contactForm": "https://www.adidas-group.com/",
    "logo": "https://www.google.com/s2/favicons?domain=adidas.com&sz=128",
    "dna": {
      "requirements": "International esports teams, high-profile music artists, competitive sports groups, or street-culture channels.",
      "dealStructure": "Esports jersey co-branding sponsorships, exclusive product drops, flat-fee brand placements.",
      "pitchHelper": "Dear Adidas Partnerships Team,\n\nI represent [Organization Name] ([Link]). We are looking to secure Adidas as our main apparel sponsor for the upcoming competitive season. We want to feature your logo on our official jerseys. Attached is our media kit.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "puma",
    "name": "Puma",
    "type": "brand",
    "category": "Apparel",
    "sponsorType": "Flat Fee",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "pumapartner@puma.com",
    "contactForm": "https://about.puma.com/",
    "logo": "https://www.google.com/s2/favicons?domain=puma.com&sz=128",
    "dna": {
      "requirements": "Lifestyle creators, gaming lifestyle channels, local competitive leagues, or high-energy streetwear designers.",
      "dealStructure": "Co-branded streetwear allocations, flat-fee local event sponsorships, customized apparel items.",
      "pitchHelper": "Hi Puma Partnerships,\n\nI am [Name] ([Link]), running a lifestyle design channel. I would love to explore a B2B collaboration to design custom gaming sneakers or coordinate a product activation with Puma. Attached are my audience statistics.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "zara",
    "name": "Zara",
    "type": "brand",
    "category": "Apparel",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "press@inditex.com",
    "contactForm": "https://www.zara.com/",
    "logo": "https://www.google.com/s2/favicons?domain=zara.com&sz=128",
    "dna": {
      "requirements": "Eco-friendly design initiatives, high-profile fashion models, creative media agencies, or design platforms.",
      "dealStructure": "Custom capsule collection B2B sponsorships, sustainable fashion grants, and global PR packaging.",
      "pitchHelper": "Dear Zara PR Team,\n\nI run [Agency Name] ([Link]). We are designing a sustainable B2B fashion collection and would love to pitch Zara on a collaborative showcase partnership. Attached is our catalog and project scope.\n\nSincerely,\n[Name]"
    }
  },
  {
    "id": "hm",
    "name": "H&M",
    "type": "brand",
    "category": "Apparel",
    "sponsorType": "Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "mediarelations.us@hm.com",
    "contactForm": "https://hmgroup.com/",
    "logo": "https://www.google.com/s2/favicons?domain=hm.com&sz=128",
    "dna": {
      "requirements": "College campus micro-influencers, fashion vloggers, youth-culture digital groups, and startup design contests.",
      "dealStructure": "Monthly apparel shopping gift vouchers, local design challenge sponsorship, and affiliate campaign slots.",
      "pitchHelper": "Dear H&M Partnerships Team,\n\nI am [Name], hosting fashion styling guides at [Link]. I would love to join your college creator network or partner on an apparel review series. Attached are my channel analytics.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "patagonia",
    "name": "Patagonia",
    "type": "brand",
    "category": "Apparel",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Any Size",
    "contactEmail": "environmental.grants@patagonia.com",
    "contactForm": "https://www.patagonia.com/",
    "logo": "https://www.google.com/s2/favicons?domain=patagonia.com&sz=128",
    "dna": {
      "requirements": "Environmental startup organizations, outdoor filmmakers, travel guides, and green-business blogs.",
      "dealStructure": "Co-branded corporate apparel allocations, environmental preservation grants, and co-marketing campaigns.",
      "pitchHelper": "Dear Patagonia Environmental Team,\n\nI represent [Organization] ([Link]), coordinating local reforestation and eco-education projects. We want to pitch a partnership for co-branded volunteer outerwear or green-initiative funding. Attached are our plans.\n\nSincerely,\n[Name]"
    }
  },
  {
    "id": "tesla",
    "name": "Tesla",
    "type": "brand",
    "category": "Automotive",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "press@tesla.com",
    "contactForm": "https://www.tesla.com/",
    "logo": "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
    "dna": {
      "requirements": "Tech-focused developers, smart-city engineers, hardware reviewers, and renewable energy startups.",
      "dealStructure": "Developer API pilot programs, collaborative research energy grants, high-end tech video placements.",
      "pitchHelper": "Dear Tesla Engineering Relations,\n\nI am [Name] ([Link]), hosting a smart-grid software development platform. We want to pitch a B2B integration to test Tesla API battery telemetry in our upcoming open-source pilot project. Attached is our technical proposal.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "bmw",
    "name": "BMW",
    "type": "brand",
    "category": "Automotive",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "esports-partnerships@bmw.com",
    "contactForm": "https://www.bmw.com/",
    "logo": "https://www.google.com/s2/favicons?domain=bmw.com&sz=128",
    "dna": {
      "requirements": "Tier-1 esports organizations, luxury lifestyle content networks, smart mobility research groups.",
      "dealStructure": "Long-term team sponsor contracts, co-branded marketing activations, luxury test-vehicle provisions.",
      "pitchHelper": "Dear BMW Sponsorship Team,\n\nI represent [Organization/Team] ([Link]). We are pitch-ready for a B2B collaboration with BMW to highlight automotive-gaming lifestyle synergy. Attached is our media kit detailing our [Size] active followers.\n\nSincerely,\n[Name]"
    }
  },
  {
    "id": "mercedes-benz",
    "name": "Mercedes-Benz",
    "type": "brand",
    "category": "Automotive",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "sponsorships@mercedes-benz.com",
    "contactForm": "https://www.mercedes-benz.com/",
    "logo": "https://www.google.com/s2/favicons?domain=mercedes-benz.com&sz=128",
    "dna": {
      "requirements": "Global esports leagues, tech innovation conventions, high-end business networks.",
      "dealStructure": "Riot Games league main partner sponsorships, exclusive tech startup funding, flat-fee branding spots.",
      "pitchHelper": "Dear Mercedes-Benz Sponsorship Team,\n\nI am [Name], organizing the upcoming [Technology Convention/Event Name] ([Link]). We would love to secure Mercedes-Benz as our official premium automotive partner for on-site VIP transportation. Attached is our event proposal.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "toyota",
    "name": "Toyota",
    "type": "brand",
    "category": "Automotive",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "toyota.sponsorships@toyota.com",
    "contactForm": "https://www.toyota.com/",
    "logo": "https://www.google.com/s2/favicons?domain=toyota.com&sz=128",
    "dna": {
      "requirements": "Sports leagues, smart mobility innovators, hydrogen fuel-cell research hubs, local community builders.",
      "dealStructure": "Olympic/Paralympic community sponsorships, green energy research grants, and local dealer marketing funds.",
      "pitchHelper": "Dear Toyota Sponsorship Team,\n\nI am organizing a regional eco-mobility summit ([Link]) and would love to explore a B2B partnership to showcase Toyota's hydrogen fuel vehicle solutions. Attached is our project overview.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "ford",
    "name": "Ford",
    "type": "brand",
    "category": "Automotive",
    "sponsorType": "Flat Fee",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "fordsponsorships@ford.com",
    "contactForm": "https://www.ford.com/",
    "logo": "https://www.google.com/s2/favicons?domain=ford.com&sz=128",
    "dna": {
      "requirements": "Engineering challenges, off-road and outdoor adventure projects, custom vehicle modifiers, or local sports.",
      "dealStructure": "Flat-fee video campaign integrations, promotional custom gear slots, and local event sponsorships.",
      "pitchHelper": "Dear Ford Sponsorship Team,\n\nI run an outdoor exploration channel at [Link] with over [Size] views. I would love to explore a B2B collaboration to feature the Ford Bronco in our upcoming wilderness expedition series. Attached is our proposal.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "red-bull",
    "name": "Red Bull",
    "type": "brand",
    "category": "Beverages",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "creator.partnerships@redbull.com",
    "contactForm": "https://www.redbull.com/",
    "logo": "https://www.google.com/s2/favicons?domain=redbull.com&sz=128",
    "dna": {
      "requirements": "Extreme athletes, global esports teams, energetic streamers, music producers, or high-octane creators.",
      "dealStructure": "Official Red Bull athlete sponsorship, premium event prize funding, flat-fee sponsorships.",
      "pitchHelper": "Dear Red Bull Sponsorship Team,\n\nI am [Name], a competitive [Sport/Game] player and streamer at [Link]. I would love to pitch a dedicated sponsorship to feature Red Bull on my streams and participate in your global events. Attached is my performance kit.\n\nKeep pushing limits,\n[Name]"
    }
  },
  {
    "id": "stripe",
    "name": "Stripe",
    "type": "brand",
    "category": "FinTech",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Any Size",
    "contactEmail": "partnerships@stripe.com",
    "contactForm": "https://stripe.com/partners",
    "logo": "https://www.google.com/s2/favicons?domain=stripe.com&sz=128",
    "dna": {
      "requirements": "E-commerce developers, SaaS builders, tech startup accelerators, or billing software platforms.",
      "dealStructure": "Stripe Partner Program integration badges, co-marketing campaign budgets, transaction volume discount codes.",
      "pitchHelper": "Dear Stripe Partner Relations,\n\nI run [Company Name] ([Link]), developing custom B2B billing software. We want to join the Stripe Partner Program to natively integrate Stripe Checkouts for our client base. Attached is our integration document.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "revolut",
    "name": "Revolut",
    "type": "brand",
    "category": "FinTech",
    "sponsorType": "Flat Fee",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "sponsorships@revolut.com",
    "contactForm": "https://www.revolut.com/",
    "logo": "https://www.google.com/s2/favicons?domain=revolut.com&sz=128",
    "dna": {
      "requirements": "FinTech reviewers, digital lifestyle creators, business podcast hosts, or startup guide sites.",
      "dealStructure": "Flat-fee podcast integrations, custom user referral payouts (up to $50/sign-up), and lifestyle events.",
      "pitchHelper": "Dear Revolut Partnerships Team,\n\nMy name is [Name] ([Link]), hosting a podcast on digital banking and finance. I'd love to pitch a dedicated sponsor slot to feature Revolut Business accounts to our B2B audience of [Size] professionals. Attached is our rate sheet.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "wise",
    "name": "Wise",
    "type": "brand",
    "category": "FinTech",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Any Size",
    "contactEmail": "partners@wise.com",
    "contactForm": "https://wise.com/partners",
    "logo": "https://www.google.com/s2/favicons?domain=wise.com&sz=128",
    "dna": {
      "requirements": "Freelance platform builders, international business tools, digital nomad blogs, or SaaS payroll systems.",
      "dealStructure": "Wise Platform API integration support, co-marketing campaign funding, custom cross-border transaction rates.",
      "pitchHelper": "Dear Wise Platform Team,\n\nI run a freelance marketplace platform ([Link]). We want to integrate the Wise Platform API to allow our global freelancers to withdraw funds securely. Attached is our API integration proposal.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "papara",
    "name": "Papara",
    "type": "brand",
    "category": "FinTech",
    "sponsorType": "Flat Fee",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "sponsorluk@papara.com",
    "contactForm": "https://www.papara.com/",
    "logo": "https://www.google.com/s2/favicons?domain=papara.com&sz=128",
    "dna": {
      "requirements": "Turkish esports organizations, competitive gaming influencers, digital lifestyle content creators, or tech review portals.",
      "dealStructure": "Turkish esports league sponsorships, flat-fee livestream integrations, co-branded Papara Card promotions.",
      "pitchHelper": "Papara Sponsorluk Departmanı Dikkatine,\n\nBen [İsim], [Yayın Linki] üzerinde gaming içerikleri üretiyorum. Papara'nın espor ve gençlik kültürünü destekleyen yapısına uyumlu ortak bir sponsorluk veya turnuva projesi gerçekleştirmek isterim. Sunum dosyamız ekte yer almaktadır.\n\nSaygılarımla,\n[İsim]"
    }
  },
  {
    "id": "coca-cola",
    "name": "Coca-Cola",
    "type": "brand",
    "category": "Beverages",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "global.sponsorships@coca-cola.com",
    "contactForm": "https://www.coca-cola.com/",
    "logo": "https://www.google.com/s2/favicons?domain=coca-cola.com&sz=128",
    "dna": {
      "requirements": "Global sports leagues, massive esports tournament broadcasters, international entertainment festivals.",
      "dealStructure": "Official beverage partner licenses, flat-fee festival sponsorships, global campaign placements.",
      "pitchHelper": "Dear Coca-Cola Partnerships,\n\nI represent [Organization Name] ([Link]), planning a major regional esports tournament in Europe. We'd love to secure Coca-Cola as our official beverage partner. Attached is our tournament prospectus.\n\nSincerely,\n[Name]"
    }
  },
  {
    "id": "doritos",
    "name": "Doritos (PepsiCo)",
    "type": "brand",
    "category": "Beverages",
    "sponsorType": "Flat Fee",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "pepsicosponsorships@pepsico.com",
    "contactForm": "https://www.pepsico.com/",
    "logo": "https://www.google.com/s2/favicons?domain=doritos.com&sz=128",
    "dna": {
      "requirements": "Competitive gaming streams, community tournament organizers, active lifestyle and snack content creators.",
      "dealStructure": "Livestream overlay sponsorships, custom gaming tournament prize pool backing, flat-fee campaigns.",
      "pitchHelper": "Dear PepsiCo/Doritos Sponsorship Team,\n\nI run an online competitive gaming league at [Link]. We are organizing our next season and want to pitch Doritos on a sponsored tournament series. Attached is our viewer demographic sheet.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "pepsico",
    "name": "PepsiCo",
    "type": "brand",
    "category": "Beverages",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "pepsicosponsorships@pepsico.com",
    "contactForm": "https://www.pepsico.com/",
    "logo": "https://www.google.com/s2/favicons?domain=pepsico.com&sz=128",
    "dna": {
      "requirements": "Global entertainment creators, stadium sports clubs, massive digital media festivals.",
      "dealStructure": "Flat-fee stadium partnerships, global marketing campaign integrations, direct event funding.",
      "pitchHelper": "Dear PepsiCo Partnership Team,\n\nI represent [Event Name] ([Link]), a digital media and tech festival reaching [Size] attendees. We would love to discuss a B2B branding partnership to feature PepsiCo's refreshments. Attached is our deck.\n\nWarm regards,\n[Name]"
    }
  },
  {
    "id": "getir",
    "name": "Getir",
    "type": "brand",
    "category": "Beverages",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "sponsorluk@getir.com",
    "contactForm": "https://getir.com/",
    "logo": "https://www.google.com/s2/favicons?domain=getir.com&sz=128",
    "dna": {
      "requirements": "Turkish sports clubs, local esports leagues, high-profile content creators, or delivery app integrations.",
      "dealStructure": "Esports league naming sponsorships, flat-fee digital media campaigns, user promo code deals.",
      "pitchHelper": "Getir Sponsorluk Ekibine Merhaba,\n\nBen [İsim], [Kanal Linki] üzerinde teknoloji ve yaşam tarzı içerikleri üretiyorum. Getir'in espor ve teknoloji alanındaki yenilikçi yapısını destekleyecek ortak bir video serisi veya sponsorluk planı teklif etmek isterim. Dosyamız ekte yer almaktadır.\n\nSaygılarımla,\n[İsim]"
    }
  },
  {
    "id": "turkish-airlines",
    "name": "Turkish Airlines",
    "type": "brand",
    "category": "Travel",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "sponsorship@thy.com",
    "contactForm": "https://www.turkishairlines.com/",
    "logo": "https://www.google.com/s2/favicons?domain=turkishairlines.com&sz=128",
    "dna": {
      "requirements": "Global sports federations, international tech conferences, travel documentary filmmakers, or B2B business summits.",
      "dealStructure": "Flight ticket barter provisions for event speakers, global sports team title sponsors, flat-fee brand spots.",
      "pitchHelper": "Dear Turkish Airlines Sponsorship Team,\n\nWe are organizing the [Conference Name] ([Link]), an international B2B tech summit in Istanbul. We would love to discuss a travel partnership to secure Turkish Airlines as our official carrier. Attached is our event proposal.\n\nSincerely,\n[Name]"
    }
  },
  {
    "id": "airbnb",
    "name": "Airbnb",
    "type": "brand",
    "category": "Travel",
    "sponsorType": "B2B Partnership",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "partnerships@airbnb.com",
    "contactForm": "https://www.airbnb.com/",
    "logo": "https://www.google.com/s2/favicons?domain=airbnb.com&sz=128",
    "dna": {
      "requirements": "Digital nomad blogs, travel lifestyle creators, local tourism startups, or environmental preservation initiatives.",
      "dealStructure": "Accommodation travel credits provisions, custom co-marketing branding drops, and local tourism grants.",
      "pitchHelper": "Dear Airbnb Partnerships Team,\n\nI run the travel and digital nomad guides channel at [Link] with over [Size] active viewers. I'm launching a new cross-country co-working series and would love to partner with Airbnb for accommodation hosting. Attached is my kit.\n\nBest regards,\n[Name]"
    }
  },
  {
    "id": "booking",
    "name": "Booking.com",
    "type": "brand",
    "category": "Travel",
    "sponsorType": "Flat Fee",
    "creatorSize": "Macro (50k+)",
    "contactEmail": "sponsorships@booking.com",
    "contactForm": "https://www.booking.com/",
    "logo": "https://www.google.com/s2/favicons?domain=booking.com&sz=128",
    "dna": {
      "requirements": "International sports events, high-end travel review networks, global startup conventions.",
      "dealStructure": "Official hotel booking partner spots, global campaign flat-fee integrations, and travel affiliate commissions.",
      "pitchHelper": "Dear Booking.com Sponsorships,\n\nI represent [Organization Name] ([Link]), planning an upcoming international tech hackathon. We would love to explore a B2B sponsorship to feature Booking.com as our official accommodation partner. Attached is our event outline.\n\nSincerely,\n[Name]"
    }
  },
  {
    "id": "sony",
    "name": "Sony",
    "type": "brand",
    "category": "Hardware",
    "sponsorType": "Product Gifting",
    "creatorSize": "Micro (10k-50k)",
    "contactEmail": "camera-partners@sony.com",
    "contactForm": "https://www.sony.com/",
    "logo": "https://www.google.com/s2/favicons?domain=sony.com&sz=128",
    "dna": {
      "requirements": "Photographers, filmmakers, tech reviewers, and digital media startup labs using Alpha camera systems.",
      "dealStructure": "Premium camera gear gifting, local camera exhibition sponsorships, and technical review collaborations.",
      "pitchHelper": "Dear Sony Alpha Partnerships,\n\nI run a filmmaking channel at [Link], producing technical tutorials. I would love to explore a B2B gear partnership to review and use the latest Sony Alpha series in our upcoming cinematography course. Attached is my channel media deck.\n\nBest regards,\n[Name]"
    }
  }
];
