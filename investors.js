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
  },
  {
    "id": "212-vc",
    "name": "212",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed",
    "sectors": "B2B SaaS, AI, Fintech, Health Tech, Logistics, E-commerce infrastructure",
    "ticketSize": "$250,000 - $1,000,000",
    "contactEmail": null,
    "contactForm": "https://212.vc/pitch-us/",
    "logo": "https://logo.clearbit.com/212.vc",
    "dna": {
      "requirements": "Strong team, disruptive technology, large addressable market, clear path to scalability, often post-revenue or strong traction. Focus on B2B SaaS, enterprise in Turkey, CEE, MENA.",
      "dealStructure": "Standard equity investment. Dilution rates vary by stage and valuation, typically 10-25% for Seed stage.",
      "pitchHelper": "Subject: Pitch: [Your Company Name] - Revolutionizing [Specific Sector] with AI/SaaS\n\nDear 212 Team,\n\nMy name is [Your Name] and I'm the Founder of [Your Company Name]. We are building a [briefly describe what your company does, e.g., AI-powered SaaS platform] that helps [target customer] solve [pain point] by [your unique solution].\n\nWe've already achieved [mention key traction: e.g., X customers, Y MRR, Z% MoM growth, successful pilot]. Our focus on [specific industry/niche] in the [CEE/MENA/Turkish] market positions us for rapid growth, targeting a $X billion market opportunity.\n\nWe are currently raising a [Pre-Seed/Seed] round of [$X] to [briefly state what funds will be used for, e.g., expand product features and accelerate customer acquisition]. Given 212's strong expertise in [mention a relevant sector, e.g., B2B SaaS, AI] and your track record with companies like [mention one of their portfolio companies if relevant], we believe we are a strong fit.\n\nWould you be open to a brief call next week to discuss how [Your Company Name] is set to disrupt [their specific market]?\n\nThank you,\n[Your Name]\n[Your Title]\n[Your Website]\n[Your LinkedIn]",
      "pitchTips": [
        "Use a concise subject line that immediately conveys value and relevance to 212's investment thesis (e.g., 'Seed Round: [Company Name] - B2B SaaS for [Industry] with $X MRR').",
        "Lead with key metrics (MRR, user growth, pilot successes) in the first paragraph to grab attention and demonstrate execution capability, as 212 values traction.",
        "Highlight your company's relevance to the Turkish, CEE, or MENA markets, aligning with 212's geographic focus. Mention specific market insights or existing regional customers."
      ]
    }
  },
  {
    "id": "bogazici-ventures",
    "name": "Boğaziçi Ventures",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed",
    "sectors": "Fintech, SaaS, Gaming, AI, Health Tech, Mobility, Web3, Deep Tech, E-commerce, Marketplaces",
    "ticketSize": "$100,000 - $500,000",
    "contactEmail": null,
    "contactForm": "https://bogaziciventures.com/apply/",
    "logo": "https://logo.clearbit.com/bogaziciventures.com",
    "dna": {
      "requirements": "Strong team, innovative solution, scalable business model, early traction (MVP ready, initial users/revenue preferred). Focus on technology-driven solutions within Turkey and the region.",
      "dealStructure": "Standard equity investment for Seed/Early Stage rounds.",
      "pitchHelper": "Subject: Seed Round: [Your Company Name] - Innovating [Sector, e.g., Fintech/SaaS] for the [Turkish/European] Market\n\nDear Boğaziçi Ventures Team,\n\nMy name is [Your Name], CEO of [Your Company Name]. We are developing [briefly describe your AI/SaaS solution] to address the significant challenge of [pain point] for [target audience] in [Turkey/Europe].\n\nOur [product/platform] offers [key benefit/differentiation] and has already achieved [mention crucial milestones, e.g., successful MVP, X beta users, Y initial customers, early revenue]. We project reaching [future milestone] within the next 12-18 months.\n\nWe are raising a Seed round of [$X] to [explain fund usage: e.g., expand our engineering team and scale our go-to-market efforts]. We are particularly drawn to Boğaziçi Ventures' expertise in [mention relevant sector, e.g., Fintech, SaaS, AI] and your commitment to supporting high-growth Turkish and regional startups.\n\nWe would appreciate the opportunity to share a detailed deck and discuss how our vision aligns with your investment thesis. Would you be available for a quick chat next week?\n\nSincerely,\n[Your Name]\n[Your Title]\n[Your Website]\n[Link to Pitch Deck]",
      "pitchTips": [
        "Emphasize your connection to or understanding of the Turkish startup ecosystem if applicable, as Boğaziçi Ventures has a strong local presence.",
        "Clearly articulate the innovative aspect of your solution and its technological edge, as they invest in tech-driven startups.",
        "Provide specific and quantifiable traction metrics (e.g., 'acquired 5 enterprise clients,' 'achieved 15% MoM user growth') early in the email to demonstrate progress and potential."
      ]
    }
  },
  {
    "id": "apy-ventures",
    "name": "APY Ventures",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "AI, SaaS, Fintech, Deep Tech, Health Tech, Gaming, Agri-tech, Sustainability, Marketplaces",
    "ticketSize": "$50,000 - $300,000",
    "contactEmail": null,
    "contactForm": "https://apyventures.com/apply/",
    "logo": "https://logo.clearbit.com/apyventures.com",
    "dna": {
      "requirements": "Strong and dedicated team, innovative and scalable product/service, clear market fit, early traction (MVP, pilot projects, initial users/revenue) desirable. Focus on companies with global ambitions.",
      "dealStructure": "Equity investment. Standard terms for early-stage VCs.",
      "pitchHelper": "Subject: Pre-Seed Pitch: [Your Company Name] - Global SaaS Solution for [Industry]\n\nDear APY Ventures Team,\n\nI'm [Your Name], Founder & CEO of [Your Company Name]. We are developing an [AI-powered SaaS platform] that addresses [specific problem] for [target customers] by [unique value proposition].\n\nOur solution is designed for global scalability from day one, targeting the $X billion [specific market] market. We have successfully [mention key achievement, e.g., launched our MVP, secured 3 pilot customers, demonstrated X% efficiency improvement].\n\nWe are currently raising a Pre-Seed round of [$X] to [detail fund allocation: e.g., finalize product development, secure initial paid customers, expand into specific European markets]. APY Ventures' focus on early-stage, globally-minded tech companies, especially in SaaS and AI, makes you an ideal partner for our journey.\n\nWe would be thrilled to share our deck and discuss how [Your Company Name] is poised for significant international growth. Are you available for a brief introductory call next week?\n\nBest regards,\n[Your Name]\n[Your Title]\n[Your Website]\n[Link to Pitch Deck]",
      "pitchTips": [
        "Clearly articulate your international strategy and how your product can scale beyond Turkey from the outset, as APY Ventures looks for companies with global potential.",
        "Highlight the expertise and experience of your founding team, especially if you have a strong technical co-founder or relevant domain knowledge in AI/SaaS.",
        "Clearly define the problem you're solving and how your AI/SaaS solution uniquely addresses it, backed by any early validation or user feedback."
      ]
    }
  },
  {
    "id": "galata-business-angels",
    "name": "Galata Business Angels (GBA)",
    "type": "investor",
    "investorType": "Angel Network",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "SaaS, AI, Fintech, E-commerce, Health Tech, Gaming, Mobility, Broad Tech",
    "ticketSize": "$50,000 - $250,000",
    "contactEmail": null,
    "contactForm": "https://www.galatabusinessangels.com/en/for-entrepreneurs/",
    "logo": "https://logo.clearbit.com/galatabusinessangels.com",
    "dna": {
      "requirements": "Strong, committed team, innovative idea with market potential, clear business model, preferably an MVP or proof of concept, scalable. Looking for high-growth potential, primarily in Turkey and with regional/global potential.",
      "dealStructure": "Equity investment, typically alongside other angels or lead investors. Terms can be flexible depending on the round.",
      "pitchHelper": "Subject: Pitch: [Your Company Name] - Pre-Seed AI/SaaS for [Target Market]\n\nDear GBA Team,\n\nI am [Your Name], Co-founder of [Your Company Name]. We are developing a [AI-driven SaaS solution] designed to revolutionize [specific industry] by [unique selling proposition].\n\nOur platform addresses [pain point] for [target customers] and has already achieved [mention key traction, e.g., MVP launch, X beta users, positive feedback from Y pilot customers]. We are targeting a rapidly growing market in [Turkey/Europe] with a clear path to profitability.\n\nWe are seeking a Pre-Seed investment of [$X] to [explain use of funds, e.g., expand our product features and initiate early user acquisition]. We believe our vision aligns well with GBA's focus on innovative, early-stage startups with strong teams and significant growth potential.\n\nCould we schedule a brief call next week to introduce our team and share our detailed business plan?\n\nThank you for your time,\n[Your Name]\n[Your Title]\n[Your Website]\n[Link to Pitch Deck]",
      "pitchTips": [
        "If possible, mention any connection or reference point you might have to GBA members or their portfolio companies, as angel networks often value warm introductions.",
        "As an angel network, GBA places strong emphasis on the founding team. Emphasize your team's experience, dedication, and complementary skills.",
        "Clearly define your target market and articulate how your product can achieve significant scale quickly, as angels look for rapid return potential."
      ]
    }
  },
  {
    "id": "simya-vc",
    "name": "Simya VC",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed",
    "sectors": "AI, SaaS, Deep Tech, Fintech, Gaming, E-commerce, Health, Logistics, Agri-food",
    "ticketSize": "$100,000 - $500,000",
    "contactEmail": null,
    "contactForm": "https://simya.vc/tr/iletisim/",
    "logo": "https://logo.clearbit.com/simya.vc",
    "dna": {
      "requirements": "Strong founding team, innovative product/technology, clear market need, scalable business model, early traction (MVP completed, initial users/revenue, pilot projects). Emphasis on technology-driven solutions for Turkey and regional markets.",
      "dealStructure": "Equity investment. Standard Seed round terms.",
      "pitchHelper": "Subject: Seed Stage: [Your Company Name] - SaaS/AI Solution for [Specific Market]\n\nDear Simya VC Team,\n\nI'm [Your Name], Co-founder of [Your Company Name]. We are developing a [description of your AI-powered SaaS solution] to solve [specific problem] for [target customers] in the [Turkish/European] market.\n\nOur approach leverages [mention key tech/differentiation] to deliver [quantifiable benefit]. We have successfully [mention traction: e.g., launched our MVP, onboarded X pilot clients, achieved Y MRR, secured Z LOIs]. We project to reach [next key milestone] within the next 12 months.\n\nWe are currently raising a Seed round of [$X] to [explain how funds will be used: e.g., accelerate product development, expand our sales team, enter new geographies]. Simya VC's deep focus on early-stage, tech-centric ventures, particularly in AI and SaaS, makes you an ideal partner for us.\n\nWe've attached our pitch deck for your review and would greatly appreciate the opportunity for a brief introductory meeting.\n\nSincerely,\n[Your Name]\n[Your Title]\n[Your Website]\n[Link to Pitch Deck]",
      "pitchTips": [
        "Clearly articulate the technological uniqueness and IP of your AI/SaaS product, as Simya VC has a strong focus on deep tech and innovative solutions.",
        "Immediately present your most compelling traction points (e.g., 'X paying customers,' 'Y% MoM growth'), as Simya VC looks for demonstrable progress and market validation.",
        "Emphasize your potential or current presence in Turkey or the surrounding region, as Simya VC has a strong regional focus."
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = INVESTORS_DATA;
}
