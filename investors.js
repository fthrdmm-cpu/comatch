// CoMatch Investors & VCs Database
// Seed data for startups looking for investment.

const INVESTORS_DATA = [
  {
    "id": "y-combinator",
    "name": "Y Combinator",
    "type": "investor",
    "investorType": "Accelerator / Incubator",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "AI, SaaS, Fintech, Consumer, B2B",
    "ticketSize": "$500,000 (Standard Deal)",
    "contactEmail": "",
    "contactForm": "https://www.ycombinator.com/apply",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=ycombinator.com",
    "dna": {
      "requirements": "Strong founding team (prefer 2+ co-founders), raw product MVP, high potential market cap, ability to scale globally.",
      "dealStructure": "Standard $500,000 investment: $125,000 for 7% equity using post-money SAFE + $375,000 uncapped MFN SAFE.",
      "pitchHelper": "Dear Y Combinator Selection Committee,\n\nWe are building [Startup Name], a [Short Description / One-liner] that solves [Problem] for [Target Customer]. Our team consists of [Founder 1] (former [Previous Role]) and [Founder 2] (former [Previous Role]). Currently, we have achieved [ Traction / MRR / Users] and are applying to the next batch to accelerate our growth.\n\nBest regards,\n[Your Name]",
      "pitchTips": [
        "Avoid buzzword stuffing: Focus on clear, simple English. YC partners hate overly complex explanations of simple ideas.",
        "Lead with team strength: Mention where co-founders met and how long they've worked together. YC prioritizes co-founder dynamics above all.",
        "Show product traction: Even if early, mention weekly growth rates or customer interview insights rather than raw estimates."
      ]
    }
  },
  {
    "id": "scalex-ventures",
    "name": "scaleX Ventures",
    "type": "investor",
    "investorType": "Venture Capital (VC)",
    "targetStage": "Seed / Series A",
    "sectors": "Deep Tech, AI, B2B SaaS, Cybersecurity",
    "ticketSize": "$250,000 - $1,000,000",
    "contactEmail": "pitch@scalexventures.com",
    "contactForm": "https://scalexventures.com/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=scalexventures.com",
    "dna": {
      "requirements": "Turkish founders targeting global markets, validated B2B SaaS business model, initial monthly recurring revenue (MRR > $5k), high-growth deep tech potential.",
      "dealStructure": "Equity-based investment (typical 10%-15% dilution), structured via clean SAFEs or standard equity rounds with advisory support.",
      "pitchHelper": "Hi scaleX Ventures Investment Team,\n\nMy name is [Name], founder of [Startup Name]. We are a Turkish deep-tech startup building [Core Tech / One-liner] for the global market. We currently have [ Traction / MRR] and are raising a Seed round of [Amount] to expand our operations. Given your focus on global B2B SaaS, we believe there is a great fit.\n\nBest regards,\n[Your Name]\n[Link to Pitch Deck]",
      "pitchTips": [
        "Focus on global potential: Emphasize how your B2B SaaS product will expand outside of Turkey from day one.",
        "Clear MRR metrics: scaleX prefers early validation metrics; list your current monthly recurring revenue (MRR) clearly.",
        "Highlight technical moat: Explain your deep tech or architectural advantages in the email."
      ]
    }
  },
  {
    "id": "trangels",
    "name": "TRangels",
    "type": "investor",
    "investorType": "Angel Investor Network",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "Tech, SaaS, Healthcare, Marketplace",
    "ticketSize": "$50,000 - $250,000",
    "contactEmail": "info@trangels.com",
    "contactForm": "https://trangels.com/girisimciler-icin/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=trangels.com",
    "dna": {
      "requirements": "Clear problem statement, initial product prototype/MVP, dedicated core team, and a scalable business model with a realistic exit strategy.",
      "dealStructure": "Angel syndicate round, equity investment in exchange for 8%-12% shares, organized under Turkish joint stock company structure.",
      "pitchHelper": "Sayın TRangels Yatırım Kurulu,\n\nBen [Startup Name] kurucusu [Name]. [Sektör / Problem] alanında [Çözümünüz] sunan girişimimizle [Traction / Aşama] aşamasına ulaştık. Büyümemizi hızlandırmak ve TRangels melek yatırımcılarının tecrübelerinden faydalanmak adına yatırım turumuzu açtık. Sunum dosyamız ektedir.\n\nSaygılarımla,\n[Your Name]",
      "pitchTips": [
        "Emphasize exit strategy: TRangels angels look for clear, realistic exits (M&A, IPO) or commercial paths.",
        "Founder commitment: State clearly if the founding team is working full-time on the project.",
        "Keep it simple: Avoid complex VC jargon; explain the problem and solution in simple terms."
      ]
    }
  },
  {
    "id": "revo-capital",
    "name": "Revo Capital",
    "type": "investor",
    "investorType": "Venture Capital (VC)",
    "targetStage": "Seed / Series A / Series B",
    "sectors": "Fintech, SaaS, AI, Marketplace, HealthTech",
    "ticketSize": "$500,000 - $2,500,000",
    "contactEmail": "pitch@revo.vc",
    "contactForm": "https://www.revo.vc/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=revo.vc",
    "dna": {
      "requirements": "Strong product-market fit, substantial recurring revenue or scale metrics, high potential for regional or global scaling, and experienced management team.",
      "dealStructure": "Standard VC equity round (15%-25% dilution) with Board of Directors representation and active operational scale support.",
      "pitchHelper": "Hi Revo Capital Investment Team,\n\nI am [Name], kurucusu olduğum [Startup Name] ile [Sektör] dikeyinde [Çözüm] geliştiriyoruz. Bölgesel liderlik hedeflerimiz doğrultusunda [Aşama] turumuzu açtık ve [Mevcut Gelir / Metrik] büyümemizle Revo Capital'in fon vizyonuyla uyuştuğumuzu düşünüyoruz. Detaylı sunumumuz ektedir.\n\nBest regards,\n[Your Name]",
      "pitchTips": [
        "Provide scaling data: Revo focuses on Series A growth; list your scaling metrics, customer retention, and LTV/CAC ratio.",
        "Board readiness: Mention if your corporate governance and accounting are structured for VC investments.",
        "Regional leadership: Outline your plans to dominate Eastern Europe or the MENA region."
      ]
    }
  },
  {
    "id": "500-emerging-europe",
    "name": "500 Emerging Europe",
    "type": "investor",
    "investorType": "Venture Capital (VC)",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "SaaS, AI, Fintech, Logistics, EdTech",
    "ticketSize": "$100,000 - $300,000",
    "contactEmail": "ee@500.co",
    "contactForm": "https://ee.500.co/pitch/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=ee.500.co",
    "dna": {
      "requirements": "Emerging Europe founders (Turkey, Poland, Romania, etc.) with a global growth mindset, launched MVP, early user feedback, and scalable software architecture.",
      "dealStructure": "SAFE (Simple Agreement for Future Equity) or equity seed investment, with access to 500 Global's international network and mentor pool.",
      "pitchHelper": "Hi 500 Emerging Europe Team,\n\nWe are building [Startup Name], a [One-liner] based in [Location] serving [Target Market]. We have built our MVP and reached [ Traction / Users / Revenue]. We are raising [Amount] to expand our customer base globally. We'd love to connect with your team.\n\nBest regards,\n[Your Name]\n[Pitch Deck URL]",
      "pitchTips": [
        "Highlight capital efficiency: 500 Emerging Europe looks for lean teams that scale fast; show low cash burn.",
        "Global network fit: Explain why you want to join 500 Global and how you will leverage their mentors.",
        "Product demo: Include a short (1-2 min) Loom video link showing the product in action."
      ]
    }
  },
  {
    "id": "collective-spark",
    "name": "Collective Spark",
    "type": "investor",
    "investorType": "Venture Capital (VC)",
    "targetStage": "Seed / Series A",
    "sectors": "SaaS, AI, Fintech, PropTech, Gaming",
    "ticketSize": "$250,000 - $750,000",
    "contactEmail": "pitch@collective-spark.com",
    "contactForm": "https://collective-spark.com/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=collective-spark.com",
    "dna": {
      "requirements": "High-velocity team, strong product foundations, target markets with large gaps, clear business metrics, and a plan for capital efficiency.",
      "dealStructure": "Equity round as lead or co-lead investor, 10%-20% share acquisition, with active hands-on growth and recruitment support.",
      "pitchHelper": "Hi Collective Spark Team,\n\nMy name is [Name], founder of [Startup Name]. We are building a B2B SaaS platform that helps [Target Audience] solve [Problem]. We currently have [ Traction / MRR] and are raising our Seed round. We've been following your portfolio and would value your partner-first approach.\n\nBest regards,\n[Your Name]",
      "pitchTips": [
        "Emphasize market gap: Collective Spark looks for founders attacking massive underserved niches; state the market size.",
        "List recruitment plans: They offer hands-on talent support; mention key hires you plan to make.",
        "Show capital plan: Outline exactly how the Seed ticket will buy you 18-24 months of runway."
      ]
    }
  },
  {
    "id": "techstars",
    "name": "Techstars",
    "type": "investor",
    "investorType": "Accelerator / Incubator",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "All Tech Sectors, Hardware, Web3, ClimateTech",
    "ticketSize": "$120,000 (Standard Deal)",
    "contactEmail": "",
    "contactForm": "https://www.techstars.com/accelerators",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=techstars.com",
    "dna": {
      "requirements": "Strong founder alignment, scalable product prototype, passion for mentorship, and readiness to join a 3-month high-intensity accelerator program.",
      "dealStructure": "Standard deal: $20,000 investment in exchange for 6% equity (using common stock) + optional $100,000 convertible note.",
      "pitchHelper": "Dear Techstars Application Committee,\n\nWe are the founders of [Startup Name], building [One-liner] to address [Problem]. Our team has a background in [Key Background] and we have developed our MVP to the [Current Stage] stage. We want to join Techstars to leverage your global network and accelerate our sales engine.\n\nBest regards,\n[Your Name]",
      "pitchTips": [
        "Mentorship coachability: State your openness to coaching and how Techstars mentors will help your specific bottlenecks.",
        "Team completeness: Highlight if you have both engineering and sales capabilities in-house.",
        "Quick demo: Add a direct product sandbox link or interactive prototype URL."
      ]
    }
  },
  {
    "id": "sequoia-capital",
    "name": "Sequoia Capital",
    "type": "investor",
    "investorType": "Venture Capital (VC)",
    "targetStage": "Seed / Series A / Series B",
    "sectors": "AI, SaaS, Enterprise, Fintech, Consumer Tech",
    "ticketSize": "$1,000,000 - $10,000,000",
    "contactEmail": "seed@sequoiacap.com",
    "contactForm": "https://www.sequoiacap.com/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=sequoiacap.com",
    "dna": {
      "requirements": "Outlier founders building category-defining companies, massive addressable market (TAM), unique technical advantages, and early exponential metrics.",
      "dealStructure": "Equity rounds (Lead Investor) with board representation, extensive corporate development resources, and multi-stage funding follow-on options.",
      "pitchHelper": "Hi Sequoia Capital Team,\n\nWe are building [Startup Name] - a category-defining [One-liner] targeting [TAM]. We've built unique tech that reduces [Problem Metric] by [X%] and have reached [Traction] in our first [Timeline] months. We are raising our next round to scale our engineering and market reach.\n\nBest regards,\n[Your Name]",
      "pitchTips": [
        "Lead with outlier metrics: Sequoia looks for massive category leaders; lead with exponential user/revenue growth.",
        "Define the TAM: Clearly state how your target market (Total Addressable Market) is worth billions.",
        "Technical founder advantage: Highlight if the CTO/founders have deep academic or elite engineering backgrounds."
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = INVESTORS_DATA;
}
