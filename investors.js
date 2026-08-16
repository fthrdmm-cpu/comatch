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
    "logo": "",
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
    "contactEmail": "info@212.vc",
    "contactForm": "https://212.vc/pitch-us/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=212.vc",
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
    "contactEmail": "info@bogaziciventures.com",
    "contactForm": "https://bogaziciventures.com/apply/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=bogaziciventures.com",
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
    "contactEmail": "info@apyventures.com",
    "contactForm": "https://apyventures.com/apply/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=apyventures.com",
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
    "contactEmail": "info@galatabusinessangels.com",
    "contactForm": "https://www.galatabusinessangels.com/en/for-entrepreneurs/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=galatabusinessangels.com",
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
    "contactEmail": "info@simya.vc",
    "contactForm": "https://simya.vc/tr/iletisim/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=simya.vc",
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
  },
  {
    "id": "point-nine",
    "name": "Point Nine",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "SaaS, Fintech, B2B Marketplaces",
    "ticketSize": "€500k - €2M",
    "contactEmail": "hello@pointnine.com",
    "contactForm": "https://pointnine.typeform.com/to/W8m891",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=pointnine.com",
    "dna": {
      "requirements": "Strong founding team, large market opportunity, early traction (even if pre-revenue, could be users, waitlist, strong vision). Focus on capital-efficient models.",
      "dealStructure": "Standard venture equity terms for Seed rounds. Point Nine often leads or co-leads. Typical dilution for Seed is 15-25%.",
      "pitchHelper": "Subject: [Company Name] - Solving [Problem] for [Target Market] with [Key Metric/Insight]\n\nDear Point Nine Team,\n\nWe are [Company Name], tackling the [specific problem] faced by [target market/industry]. Our [SaaS/Fintech/B2B marketplace] solution allows [target users] to [achieve benefit] by [how it works].\n\nSince our launch [X months/weeks ago], we've achieved [impressive traction metric, e.g., 'X paying customers', 'X% MoM growth', 'X users on waitlist', '€X MRR']. This demonstrates strong product-market fit in a [€X billion] market.\n\nOur capital-efficient approach has enabled us to [achieve a specific milestone] with minimal funding. We're raising a [Pre-Seed/Seed] round of [€ amount] to [specific use of funds, e.g., 'scale product development', 'expand into new markets', 'grow our team'].\n\nWe believe Point Nine's deep expertise in [SaaS/Fintech/B2B] would be invaluable as we aim to [future vision]. Attached is our deck for your review. We're available for a brief call to discuss further.\n\nBest regards,\n[Your Name]\n[Your Title]\n[Company Website]",
      "pitchTips": [
        "**Hyper-specific Subject Line:** Start with a subject line that immediately communicates value and relevance to Point Nine's SaaS/Fintech focus, e.g., 'SaaS: [Company Name] - 15% MoM Growth in B2B Payments for SMBs'.",
        "**Data-Driven & Concise:** Present your key traction metrics (MRR, user growth, retention) upfront and keep your email under 150 words. Point Nine values brevity and concrete numbers.",
        "**Show Capital Efficiency:** Briefly mention how you've achieved your milestones with limited resources. This aligns well with their investment thesis and can act as a positive signal to bypass initial skepticism."
      ]
    }
  },
  {
    "id": "seedcamp",
    "name": "Seedcamp",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "AI, Deep Tech, SaaS, Fintech, Health Tech, Future of Work (broad multi-sector)",
    "ticketSize": "£250k - £1M",
    "contactEmail": "hello@seedcamp.com",
    "contactForm": "https://seedcamp.com/apply-for-funding/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=seedcamp.com",
    "dna": {
      "requirements": "Exceptional founding team with a big vision and global ambition. Early product or strong idea with potential for significant impact. Strong belief in the team's ability to execute.",
      "dealStructure": "Standard Seed equity terms, typically an initial cheque of £250k for a minority stake. Often convertible notes in the earliest stages, with provisions for follow-on funding.",
      "pitchHelper": "Subject: Global Vision: [Company Name] - [Brief, Intriguing Hook related to sector]\n\nHi Seedcamp Team,\n\nI'm [Your Name], Co-founder of [Company Name], a [Deep Tech/AI/SaaS/Fintech] startup building [describe core product/solution] to revolutionize [specific industry/problem]. Our mission is to [state your ambitious, global vision].\n\nOur team, comprising [briefly mention key backgrounds/achievements], is uniquely positioned to execute on this. We've already [mention key early milestone: e.g., 'developed a working prototype', 'secured X pilot customers', 'achieved X user engagement'].\n\nWe are currently raising a [Pre-Seed/Seed] round of [£ amount] to [explain immediate next steps, e.g., 'launch MVP', 'grow user base', 'hire key talent']. We are particularly excited about Seedcamp's track record and network in [a specific sector relevant to you, e.g., 'Deep Tech'], and believe your support would be instrumental in achieving our global aspirations.\n\nHere’s a link to our deck: [Link to deck]. We'd appreciate the opportunity for a quick chat.\n\nBest regards,\n[Your Name]\n[Your Title]\n[Company Website]",
      "pitchTips": [
        "**Emphasize Team & Vision:** Seedcamp invests heavily in founders. Clearly articulate your team's unique capabilities and your audacious, global vision early in the email to grab attention and reduce 'spam' flags from generic content.",
        "**Personalize the 'Why Seedcamp':** Instead of a generic 'why you', reference specific Seedcamp portfolio companies or their investment themes (e.g., 'Your investments in X and Y resonate with our vision for Z'). This signals genuine research and bypasses filters looking for mass outreach.",
        "**Concise & Direct:** Keep your initial email extremely brief (3-4 paragraphs max) and get straight to the point. Long, rambling emails are often discarded. Include a clear call to action (e.g., 'a quick 15-minute call') and ensure all links are professional and working."
      ]
    }
  },
  {
    "id": "creandum",
    "name": "Creandum",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed / Series A",
    "sectors": "SaaS, Consumer Tech, Fintech, Deep Tech, AI (global leaders)",
    "ticketSize": "€1M - €5M",
    "contactEmail": "contact@creandum.com",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=creandum.com",
    "dna": {
      "requirements": "Ambitious founding team, clear vision for global impact, strong product-market fit indicators, substantial market opportunity. They seek companies with the potential to become category leaders.",
      "dealStructure": "Creandum typically acts as a lead investor, offering standard equity terms for Seed/Series A rounds. Expected dilution is usually in the 15-25% range.",
      "pitchHelper": "Subject: [Company Name] - Global Category Leader in [Specific Niche] - Seed Round\n\nDear Creandum Team,\n\nI am [Your Name], CEO of [Company Name], a [SaaS/Fintech/AI] platform poised to become the global leader in [specific, rapidly growing market]. We empower [target users] to [achieve primary benefit] through our [unique technology/approach].\n\nOur vision is to [describe bold, global ambition]. We've already demonstrated strong traction with [X customers/€X ARR/X% retention] and a clear path to dominating this [€X billion] market. Our team's expertise in [relevant field] and our early market validation confirm our potential.\n\nWe are raising a Seed round of [€ amount] to [key milestone: e.g., 'expand our engineering team', 'accelerate international expansion', 'launch new product features']. We admire Creandum's track record with companies like [mention a relevant Creandum portfolio company] and believe our global ambitions align perfectly with your investment thesis.\n\nOur full investor deck is available here: [Link to deck]. I'd be delighted to schedule a brief introductory call.\n\nSincerely,\n[Your Name]\n[Your Title]\n[Company Website]",
      "pitchTips": [
        "**Targeted Partner Outreach:** If possible, identify a specific Creandum partner whose investment focus aligns with your sector. Addressing them directly by name significantly increases open rates and bypasses general inbox filters, signalling a personalized approach.",
        "**Highlight Global Ambition:** Creandum seeks companies with global potential. Frame your company's vision and market opportunity through a global lens in the subject and opening paragraph to immediately resonate with their investment criteria and avoid being flagged as too niche or regional.",
        "**Concise & Impactful Metrics:** Lead with your most compelling traction metrics (MRR, growth rates, key users) within the first few sentences. Overly verbose descriptions without clear, quantifiable achievements are often filtered out as less serious or spammy. Keep it to the essentials."
      ]
    }
  },
  {
    "id": "accel",
    "name": "Accel",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed / Series A",
    "sectors": "Enterprise Software (SaaS), Fintech, Consumer, Deep Tech, AI, Cybersecurity",
    "ticketSize": "$500k - $3M",
    "contactEmail": "info@accel.com",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=accel.com",
    "dna": {
      "requirements": "Exceptional founding team, demonstrated market traction (users, revenue, engagement), large addressable market, disruptive technology or business model. They look for scalable businesses.",
      "dealStructure": "Accel often acts as a lead or co-lead investor, providing standard venture equity terms for Seed/Series A rounds. Expect typical Seed dilution of 15-25%, with significant potential for follow-on capital.",
      "pitchHelper": "Subject: [Company Name] - Disrupting [Industry] with [Key Metric] - Seed Opportunity\n\nDear Accel Team,\n\nI'm [Your Name], Co-founder & CEO of [Company Name], a [SaaS/Fintech/Deep Tech] company developing [briefly explain your disruptive solution]. We address the critical need for [problem statement] within the [target market] sector.\n\nOur traction since launch [X months ago] has been strong, with [e.g., '$X ARR', 'X,000 active users', 'X% MoM growth in key metric']. We've achieved this by [briefly explain unique advantage or approach]. This validates our product-market fit in a [large market size] opportunity.\n\nOur seasoned team, including [mention 1-2 key team member credentials], is currently raising a Seed round of [$ amount] to [specific use of funds, e.g., 'scale our engineering team', 'expand sales & marketing efforts']. We are deeply impressed by Accel's history of backing category leaders like [mention a relevant Accel portfolio company] and see strong synergy with your enterprise/Fintech investment focus.\n\nWe would welcome a brief conversation to explore how our vision aligns with Accel's expertise. Our deck is attached/available at [Link to deck].\n\nBest regards,\n[Your Name]\n[Your Title]\n[Company Website]",
      "pitchTips": [
        "**Prioritize Warm Intros (But if cold, make it count):** While Accel prefers warm introductions, if pitching cold, ensure your email's subject line and first paragraph are so compelling that they cut through the noise. Mentioning key traction or a disruptive element instantly signals seriousness.",
        "**Metrics, Metrics, Metrics:** Accel is data-driven. Lead with your strongest, most tangible metrics (e.g., MRR, user growth, conversion rates) in the initial email. Vague statements increase spam flags; specific numbers demonstrate professionalism and legitimate progress.",
        "**Personalize with Portfolio Relevance:** Show you've done your homework. Reference specific Accel partners or portfolio companies in your pitch that resonate with your sector or business model. This personalization helps bypass generic filters and shows a genuine connection, not just a mass email."
      ]
    }
  },
  {
    "id": "balderton-capital",
    "name": "Balderton Capital",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed / Series A",
    "sectors": "SaaS, Fintech, Deep Tech, AI, Gaming, Consumer (European focus, global ambition)",
    "ticketSize": "$1M - $5M",
    "contactEmail": "startups@balderton.com",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=balderton.com",
    "dna": {
      "requirements": "Ambitious European founders, large market opportunity, strong product vision, early signs of product-market fit. They value resilience, deep industry knowledge, and European companies with global ambition.",
      "dealStructure": "Balderton typically leads Seed/Series A rounds with standard equity terms. Expected dilution for Seed stage investments is generally 15-25%.",
      "pitchHelper": "Subject: [Company Name] - European [SaaS/AI] Leader Poised for Global Scale - Seed Round\n\nDear Balderton Capital Team,\n\nI'm [Your Name], Co-founder of [Company Name], a [European-based SaaS/Fintech/Deep Tech] company dedicated to [solve a specific problem] for [target audience/industry]. Our unique approach in [mention specific technology/methodology] is driving significant growth.\n\nWe are building a category-defining company in [specific market], currently demonstrating [e.g., 'X% MoM growth', '€X ARR', 'X active enterprise clients']. Our robust [product/platform] is designed for global scalability from day one, serving [mention European/global customer base].\n\nWe are raising a Seed round of [$ amount] to [specific use of funds, e.g., 'accelerate product development', 'expand our European presence', 'begin US market entry']. Balderton's commitment to nurturing European tech giants, as seen with [mention a relevant Balderton portfolio company], aligns perfectly with our ambition.\n\nWe've attached our pitch deck for your review and would greatly appreciate the chance for a brief discussion to delve deeper into our vision. Thank you for your time.\n\nKind regards,\n[Your Name]\n[Your Title]\n[Company Website]",
      "pitchTips": [
        "**Highlight European Roots & Global Ambition:** Balderton strongly focuses on European founders with global scale-up potential. Make sure to explicitly state your European origin and global vision in the subject line and opening paragraphs to immediately filter for relevance and avoid spam traps.",
        "**Show, Don't Just Tell - Quantify:** Instead of generic claims, use specific numbers to back your statements (e.g., '15% MoM revenue growth' vs. 'rapid growth'). Data-driven pitches are less likely to be seen as spam and demonstrate professionalism.",
        "**Concise & Action-Oriented:** Keep your email to the point, ideally readable in under 60 seconds. Include a clear call to action ('request a 15-minute call') and ensure your pitch deck link is easily accessible and not buried, signalling efficient communication rather than a mass-market email."
      ]
    }
  },
  {
    "id": "localglobe",
    "name": "LocalGlobe",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "SaaS, AI, Fintech, Deep Tech, Consumer, Marketplaces",
    "ticketSize": "£250,000 - £1,000,000",
    "contactEmail": "info@localglobe.com",
    "contactForm": "https://localglobe.com/contact/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=localglobe.com",
    "dna": {
      "requirements": "Strong founding team, clear vision, large market potential, evidence of product-market fit or a clear path to achieving it. Focus on building category-defining companies from inception, often based in or looking to expand to the UK/Europe.",
      "dealStructure": "Standard equity investment for pre-seed/seed rounds. Typically takes 10-20% dilution for seed-stage investments.",
      "pitchHelper": "Subject: [Company Name] | [Brief Value Proposition] | LocalGlobe\n\nHi [Investor Name/Team],\n\nI’m writing from [Company Name] ([Website URL]), where we are building [describe your company in one concise sentence, e.g., \"the AI-powered platform revolutionizing X for Y\"].\n\nWe’ve observed [the problem you're solving] in the [target market] space, which affects [target customer] by [negative impact]. Our [product/solution] addresses this by [how it solves the problem uniquely], enabling [key benefit].\n\nWe've already achieved [1-2 key metrics, e.g., \"X customers onboarded,\" \"Y% month-over-month growth,\" \"Z MRR,\" \"successful pilot with X enterprise\"]. We believe our [unique technology/team's expertise] positions us strongly to capture a significant share of the [market size] opportunity.\n\nWe are currently raising a [Pre-Seed/Seed] round of [amount] to [achieve key milestones, e.g., \"scale our engineering team,\" \"expand into new markets,\" \"further develop our AI models\"]. We admire LocalGlobe's early-stage focus and your track record with [mention a relevant portfolio company if possible, or their general thesis around a sector].\n\nWould you be open to a brief 15-minute call to discuss how [Company Name] fits your investment thesis?\n\nThanks,\n[Your Name]\n[Your Title]\n[Your LinkedIn]\n[Your Contact Number]",
      "pitchTips": [
        "Personalize Beyond Name: Reference specific LocalGlobe investments, articles by their partners, or their stated investment thesis on their website. Show you've done your homework beyond a mail merge.",
        "Concise & Clear Subject Line: Keep it under 50 characters, clearly stating your company name and core value. Avoid buzzwords like \"disruptive\" without immediate context.",
        "Warm Intro (Preferred): While direct emails are possible, LocalGlobe highly values warm introductions from trusted founders, angels, or LPs. If possible, seek an intro first."
      ]
    }
  },
  {
    "id": "atomico",
    "name": "Atomico",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed / Series A",
    "sectors": "Deep Tech, SaaS, Fintech, AI, Marketplaces, Gaming, Health (focus on ambitious European tech)",
    "ticketSize": "$1,000,000 - $20,000,000 (first cheque)",
    "contactEmail": "info@atomico.com",
    "contactForm": "https://atomico.com/contact-us/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=atomico.com",
    "dna": {
      "requirements": "European founder/company, significant market opportunity, strong technical founders, mission-driven approach, often with early product and/or customer validation. Seeking exceptional founders with bold visions for the future.",
      "dealStructure": "Standard equity investment. Atomico often acts as the lead investor in Seed and Series A rounds.",
      "pitchHelper": "Subject: [Company Name] - Revolutionizing [Sector] with [Key Technology] | Seed Investment\n\nDear Atomico Team,\n\nI’m [Your Name], CEO of [Company Name] ([Website URL]), and we are building [a concise description of your company, e.g., \"the intelligent platform leveraging AI to automate complex financial compliance for enterprises\"].\n\nWe're tackling [the significant problem] within the [target European market], a challenge exacerbated by [current inefficiencies/lack of solutions]. Our [product/solution] uniquely addresses this by [explain core differentiation and technology], resulting in [quantifiable benefits for customers, e.g., \"a 40% reduction in processing time and 20% cost savings\"].\n\nCurrently, we have [1-2 impressive metrics, e.g., \"secured X LOIs from enterprise clients,\" \"achieved Y MRR with Z% MoM growth,\" \"a successful beta with X users and glowing feedback\"]. Our team, based in [City, Country], brings deep expertise in [relevant areas], making us uniquely suited to execute this vision.\n\nWe are seeking Seed funding of [amount] to [specific use of funds and milestones, e.g., \"expand our engineering team to accelerate product development and secure first commercial contracts\"]. Atomico's commitment to supporting ambitious European deep tech startups, exemplified by your investment in [mention a relevant portfolio company if possible], deeply resonates with our mission.\n\nWould you be available for a brief call to explore how [Company Name] aligns with Atomico's investment focus?\n\nBest regards,\n[Your Name]\n[Your Title]\n[Your Company]\n[Contact Information]",
      "pitchTips": [
        "Hyper-Specific European Angle: Highlight your European base and market focus explicitly. Atomico is very focused on European tech innovation.",
        "Strong Tech & Mission Focus: Emphasize the deep tech aspect, your intellectual property, and the grand vision or 'mission' behind your company, as this aligns with Atomico's stated criteria.",
        "Concise & Metric-Driven: Get straight to your most impressive metrics and traction. Atomico receives many pitches; clear, data-backed statements cut through the noise."
      ]
    }
  },
  {
    "id": "kima-ventures",
    "name": "Kima Ventures",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "SaaS, AI, Fintech, Deep Tech, Consumer, Marketplaces (broad focus, aim to be first money in)",
    "ticketSize": "€100,000 - €300,000",
    "contactEmail": "pitch@kimaventures.com",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=kimaventures.com",
    "dna": {
      "requirements": "Strong founding team, global ambition, early traction (even an MVP or strong idea), clear problem/solution. Known for investing fast, globally, and at pre-seed/seed, seeking strong teams with big ambitions.",
      "dealStructure": "Often convertible notes or simple equity. Aim for speed and founder-friendliness with typical seed-stage dilution.",
      "pitchHelper": "Subject: [Company Name] | [One-liner] | Kima Ventures Pitch\n\nHi Kima Team,\n\nI’m [Your Name], co-founder of [Company Name] ([Website URL]), and we are developing [a concise description, e.g., \"an AI-powered SaaS platform that automates lead qualification for B2B sales teams\"].\n\nWe're solving [the specific problem] for [target audience], who currently struggle with [current pain point/inefficiency]. Our [product/solution] offers a [unique benefit/approach], allowing them to [key outcome, e.g., \"save 20 hours per week on manual prospecting and increase conversion rates by 15%\"].\n\nSince launching our [MVP/beta] [X weeks/months ago], we've achieved [1-2 critical metrics, e.g., \"X active users,\" \"Y% weekly growth,\" \"Z customer testimonials,\" \"secured X pilots\"]. We have a clear roadmap to [next milestone, e.g., \"reach €10k MRR by Q3\" or \"expand into X new markets\"].\n\nWe are currently raising a Pre-Seed round of [amount] and are particularly drawn to Kima Ventures' speed, global outlook, and founder-friendly approach, having seen your early support for companies like [mention a relevant Kima portfolio company if applicable, or their general investment philosophy].\n\nWe would appreciate the opportunity for a quick chat to elaborate on our vision. Please find our deck attached for your review.\n\nThanks,\n[Your Name]\n[Your Title]\n[Your LinkedIn]",
      "pitchTips": [
        "Direct & Concise to `pitch@`: Use their specified pitch email. Keep the email extremely short and to the point. Kima is known for reviewing pitches quickly.",
        "Focus on Traction & Vision: Clearly articulate your current traction, even if early, and your global ambition. Kima appreciates founders who can move fast and think big.",
        "Attach a Deck: Include a concise, well-designed pitch deck as an attachment (or a link to one) with your initial email to streamline their review process."
      ]
    }
  },
  {
    "id": "cherry-ventures",
    "name": "Cherry Ventures",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed / Series A",
    "sectors": "SaaS, AI, Fintech, Deep Tech, Consumer, Marketplaces (European focus)",
    "ticketSize": "€300,000 - €1,000,000 (Pre-Seed/Seed)",
    "contactEmail": "hello@cherry.vc",
    "contactForm": "https://www.cherry.vc/pitch-us",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=cherry.vc",
    "dna": {
      "requirements": "Exceptional founders, clear vision for market leadership, often technical or product-focused teams, strong initial insights or early traction. Primarily focused on European founders at the earliest stage.",
      "dealStructure": "Standard equity investment for early-stage companies, supporting founders from pre-seed through series A and beyond.",
      "pitchHelper": "Subject: [Company Name] | [Concise Problem Solved] | Pre-Seed/Seed Pitch for Cherry Ventures\n\nDear Cherry Ventures Team,\n\nI’m [Your Name], CEO & Co-founder of [Company Name] ([Website URL]), based in [City, Europe]. We are developing [describe your company in one sentence, e.g., \"a Deep Tech platform utilizing quantum-inspired algorithms to optimize logistics for complex supply chains\"].\n\nWe are addressing the critical challenge of [specific problem] for [target industry/customer], which costs them [quantifiable negative impact]. Our proprietary [technology/solution] provides [unique advantage/differentiation], leading to [key benefits, e.g., \"a 30% reduction in operational costs and 15% improvement in efficiency\"].\n\nWe've made significant progress since our inception [X months ago], including [1-2 key achievements, e.g., \"securing our first pilot with a Fortune 500 company,\" \"developing a functional MVP with early user validation,\" \"assembling a world-class team with X years of combined experience in Y\"].\n\nWe are currently raising a Pre-Seed round of [amount] to [achieve next milestones, e.g., \"expand our R&D team,\" \"secure 3 additional pilot customers,\" \"file key patents\"]. Cherry Ventures' reputation for backing ambitious European founders at the very beginning, particularly in deep tech and B2B SaaS, makes you an ideal partner. Your support for [mention a relevant portfolio company if possible] is particularly inspiring.\n\nWould you be open to a brief introductory call to discuss our vision?\n\nSincerely,\n[Your Name]\n[Your Title]\n[Your LinkedIn]\n[Contact Number]",
      "pitchTips": [
        "Highlight European Origin & Scale: Clearly state your European base and emphasize the potential for global scale from day one, aligning with Cherry's investment thesis for European champions.",
        "Focus on Founder Quality & Deep Insights: Emphasize your team's unique expertise, the depth of your understanding of the problem, and your \"bold vision.\" Cherry highly values the founders themselves.",
        "Refer to Specific Cherry Partners/Thesis: If you can find a specific partner whose investment focus aligns with your company or an article/podcast where they discuss a relevant thesis, reference it directly in your email to show targeted research."
      ]
    }
  },
  {
    "id": "index-ventures",
    "name": "Index Ventures",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed / Series A / Growth",
    "sectors": "SaaS, AI, Fintech, Deep Tech, Consumer, Gaming, Healthcare (global focus)",
    "ticketSize": "$500,000 - $3,000,000+ (for Seed)",
    "contactEmail": "info@indexventures.com",
    "contactForm": "https://www.indexventures.com/contact/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=indexventures.com",
    "dna": {
      "requirements": "Ambitious founders, large market opportunity, often disruptive technology or business model, early traction or exceptional team. Strong focus on companies with global potential.",
      "dealStructure": "Standard equity investment. Index Ventures is highly competitive and often leads seed and later-stage rounds.",
      "pitchHelper": "Subject: [Company Name] | [One-sentence problem/solution] | Seed Opportunity\n\nDear Index Ventures Team,\n\nI'm [Your Name], Co-founder & CEO of [Company Name] ([Website URL]), and we are pioneering [a concise description of your company, e.g., \"an AI-driven platform transforming supply chain resilience for global manufacturers\"].\n\nWe are tackling the immense challenge of [specific problem] within the [target global market], an issue that leads to [quantifiable negative impact, e.g., \"$X billion in losses annually\"]. Our [proprietary technology/innovative approach] offers a unique solution by [how it solves the problem], providing [key benefits, e.g., \"real-time risk prediction and automated mitigation strategies\"].\n\nSince our inception, we have [1-2 impressive metrics, e.g., \"secured X LOIs with tier-1 enterprises,\" \"achieved Y% MoM growth on our pilot program,\" \"built an exceptional team with X relevant industry experience\"]. We believe our scalable technology and clear market entry strategy position us to become a leader in this [market size] opportunity.\n\nWe are raising a Seed round of [amount] to [achieve key milestones, e.g., \"expand our R&D efforts,\" \"scale our go-to-market team,\" \"secure X paying customers\"]. Index Ventures' unparalleled track record in backing category-defining companies from their earliest stages, particularly in the enterprise SaaS and AI space, makes you an ideal partner. We especially admire your investment in [mention a relevant Index portfolio company].\n\nWhile we understand Index often prefers warm introductions, we felt compelled to share our vision directly given the strong alignment. Would you be open to a brief 15-minute introductory call?\n\nThank you,\n[Your Name]\n[Your Title]\n[Your Company]\n[Contact Information]",
      "pitchTips": [
        "Acknowledge Warm Intro Preference: Explicitly mention you understand they prefer warm intros, but make a strong case for why your direct outreach is warranted due to clear alignment. This shows respect for their process while still making your pitch.",
        "Focus on Global Scale & Disruptive Potential: Index seeks global category leaders. Emphasize the massive market opportunity, your unique disruption, and clear path to international expansion.",
        "High-Quality, Concise Deck/Summary: Given their volume, any attached material (or link to a deck) must be exceptionally polished, visual, and convey the core story quickly. Avoid overly dense text."
      ]
    }
  },
  {
    "id": "speedinvest",
    "name": "Speedinvest",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "AI, SaaS, Deep Tech, Fintech",
    "ticketSize": "€500,000 - €1,500,000",
    "contactEmail": "info@speedinvest.com",
    "contactForm": "https://www.speedinvest.com/pitch-us",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=speedinvest.com",
    "dna": {
      "requirements": "Strong founding team, compelling vision, significant market potential, early traction (MVP, initial users/revenue depending on sector), innovative technology, deep understanding of their market, ambition, and ability to execute.",
      "dealStructure": "Standard Seed stage equity investment, often leading or co-leading rounds. Focus on supporting growth, board representation possible depending on stage/size. Dilution typical for seed rounds (10-20% for first institutional round).",
      "pitchHelper": "Subject: [Company Name] - Revolutionizing [Sector] with [Key Innovation] | Seeking Seed Investment\nHi [Investor Name/Team],\n\nI'm [Your Name], Co-founder & CEO of [Company Name] ([Website URL]). We're building [brief, compelling description of what your company does and the problem it solves, e.g., 'a SaaS platform that uses AI to automate X for Y businesses'].\n\nOur traction includes [mention 1-2 key metrics: e.g., '$X MRR with Y customers', 'Z% month-over-month growth', 'successful pilot with X enterprise']. We believe we're uniquely positioned to capitalize on the [Market Size] market opportunity because [unique insight/advantage].\n\nWe're currently raising a [e.g., €1M Seed round] to [briefly state what funds will be used for, e.g., 'expand our engineering team and scale customer acquisition']. We're particularly impressed by Speedinvest's expertise in [mention relevant Speedinvest sector, e.g., 'SaaS & Infrastructure / Fintech'] and your portfolio companies like [mention one or two relevant Speedinvest portfolio companies if possible].\n\nWould you be open to a brief call to discuss how [Company Name] is set to disrupt [Industry]?\n\nThanks,\n[Your Name]\n[Your Title]\n[Your LinkedIn Profile]",
      "pitchTips": [
        "Personalize the subject line with their relevant sector focus (e.g., 'SaaS Innovation' or 'Deep Tech Breakthrough') and your company's unique value, avoiding generic buzzwords.",
        "Engage with Speedinvest's partners and associates on LinkedIn or X (formerly Twitter) by commenting on their posts or sharing relevant industry insights before sending any email.",
        "Prioritize a warm introduction if possible. If not, explicitly mention a relevant Speedinvest portfolio company or their investment thesis in your email to show you've done your homework, then direct them to your application via their form, stating you're also providing this direct outreach for awareness."
      ]
    }
  },
  {
    "id": "antler",
    "name": "Antler",
    "type": "investor",
    "investorType": "Accelerator",
    "targetStage": "Pre-Seed",
    "sectors": "AI, SaaS, Deep Tech, Fintech",
    "ticketSize": "$100,000 - $150,000 (initial)",
    "contactEmail": "hello@antler.co",
    "contactForm": "https://www.antler.co/apply",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=antler.co",
    "dna": {
      "requirements": "Exceptional founders (often solo founders at the start), strong domain expertise, ambition, problem-solving skills, ability to attract talent. They invest in people and ideas, providing resources to build a company from scratch. Focus on global scalability.",
      "dealStructure": "Standard deal for their program is typically ~10% equity for initial investment ($100k-$150k) plus program support. Follow-on rounds are negotiated.",
      "pitchHelper": "Subject: [Your Name] - Vision for [Problem/Opportunity] in [Sector] | Antler Cohort Application\nHi Antler Team,\n\nMy name is [Your Name], and I am an experienced [Your Background/Expertise, e.g., 'AI Engineer with 10+ years at Google' or 'Fintech product leader who scaled X product to Y users']. I am passionate about solving [Specific Problem] in the [Sector, e.g., 'future of work SaaS'] space.\n\nI am deeply impressed by Antler's model of backing exceptional individuals to build groundbreaking companies from scratch, particularly in areas like [mention relevant Antler focus, e.g., 'AI-driven solutions' or 'Fintech innovation']. My initial concept involves [briefly describe your idea or problem you want to solve, e.g., 'leveraging generative AI to personalize professional development at scale'].\n\nWhile I am actively exploring forming a co-founding team, I have a clear vision and initial market validation for [your idea/problem]. I am eager to discuss how my expertise and drive align with Antler's program to transform this vision into a high-growth venture.\n\nI've also submitted an application via your platform, but wanted to reach out directly to highlight my fit. Would you be open to a brief discussion about my profile and vision?\n\nBest regards,\n[Your Name]\n[Your LinkedIn Profile]",
      "pitchTips": [
        "Keep the subject line concise and founder-centric, emphasizing your unique background and alignment with Antler's venture-builder model rather than a fully-formed company pitch.",
        "Attend Antler's online or in-person events and engage with their local partners or program managers on platforms like LinkedIn *before* sending an email.",
        "Clearly articulate *why* you are an ideal founder for Antler's program, highlighting your individual strengths, domain expertise, and global ambition rather than focusing solely on a product idea."
      ]
    }
  },
  {
    "id": "entrepreneur-first",
    "name": "Entrepreneur First",
    "type": "investor",
    "investorType": "Accelerator",
    "targetStage": "Pre-Seed",
    "sectors": "AI, SaaS, Deep Tech, Fintech",
    "ticketSize": "£80,000 - £100,000 (initial)",
    "contactEmail": "hello@joinef.com",
    "contactForm": "https://www.joinef.com/apply",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=joinef.com",
    "dna": {
      "requirements": "Exceptional individual talent (technical or commercial), deep domain expertise, high ambition, ability to find a co-founder and build a disruptive company from scratch. They look for individuals with 'unfair advantages' – unique skills, experiences, or insights.",
      "dealStructure": "Initial investment (around £80k-£100k) for ~8-10% equity, usually split between EF and the co-founders formed during the program. Follow-on capital from EF and other VCs.",
      "pitchHelper": "Subject: [Your Name] - [Your Expertise] Founder Seeking EF Program | [Specific Idea/Problem Area]\nHi EF Team,\n\nMy name is [Your Name], and I am a [Your Expertise, e.g., 'PhD in AI from Cambridge' or 'Senior Product Manager at Stripe with a focus on B2B SaaS']. I'm reaching out because I'm deeply impressed by EF's unique model for building high-potential, deep tech companies from individual talent, particularly your success in areas like [mention relevant EF sector, e.g., 'generative AI' or 'Fintech infrastructure'].\n\nMy 'unfair advantage' lies in [briefly state your unique skill/insight, e.g., 'my research on novel neural network architectures' or 'my experience scaling a payments platform in emerging markets']. I am passionate about tackling [Specific Problem/Opportunity, e.g., 'the inefficiencies in enterprise data synthesis' or 'the lack of accessible financial tools for SMEs'].\n\nI have a strong inclination to build a company around [briefly describe potential problem/idea] and am actively seeking a co-founder with complementary skills. I believe my profile aligns perfectly with the caliber of founders EF attracts and develops.\n\nI have submitted my application for the next cohort and would appreciate the opportunity for a brief conversation to discuss how my background and ambition fit within the EF ecosystem.\n\nThank you,\n[Your Name]\n[Your LinkedIn Profile]",
      "pitchTips": [
        "Frame the subject line around your individual 'unfair advantage' and alignment with EF's talent-first approach, rather than a fully-formed startup pitch, to signal relevance.",
        "Engage directly with EF's Talent team or program managers on LinkedIn, sharing insights related to deep tech or founder journeys, demonstrating your intellectual curiosity.",
        "Clearly articulate your unique expertise and what specific 'deep tech' or 'frontier tech' problem you're passionate about solving, emphasizing your individual potential over a pre-existing company."
      ]
    }
  },
  {
    "id": "hoxton-ventures",
    "name": "Hoxton Ventures",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed / Series A",
    "sectors": "AI, SaaS, Deep Tech, Fintech",
    "ticketSize": "$500,000 - $3,000,000",
    "contactEmail": "info@hoxtonventures.com",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=hoxtonventures.com",
    "dna": {
      "requirements": "Ambitious founders targeting large global markets, strong product-market fit indicators (early traction, customer testimonials, clear growth potential), defensible technology. They look for companies with the potential to become category leaders.",
      "dealStructure": "Standard Seed/Series A equity investment, often leading or co-leading rounds. Active board participation is common. Dilution typically 15-25% for Series A, lower for Seed.",
      "pitchHelper": "Subject: [Company Name] - Disrupting [Industry] with [Key Technology] | Seed/Series A Round\nHi Hoxton Ventures Team,\n\nMy name is [Your Name], Co-founder & CEO of [Company Name] ([Website URL]). We are building [brief, compelling description of what your company does, e.g., 'an AI-powered SaaS platform that automates X for Y enterprises'].\n\nWe've achieved significant early traction including [mention 1-2 impressive metrics: e.g., '$X ARR with Y paying customers in Z months', 'successful pilot with X Fortune 500 companies', 'Z% MoM growth']. We address a critical need in the [Market Size] market, which we believe is ripe for disruption through our [unique technology/approach].\n\nWe are currently raising a [e.g., $2M Seed round] to [briefly state use of funds, e.g., 'accelerate product development and expand our sales team']. We are particularly impressed by Hoxton Ventures' focus on backing ambitious founders building category leaders, and your portfolio in [mention relevant Hoxton sector, e.g., 'B2B SaaS / Deep Tech'] like [mention one or two relevant Hoxton portfolio companies if possible].\n\nWould you be open to a brief introductory call to discuss our vision for [Company Name] and its potential to dominate the [Target Market]?\n\nThanks,\n[Your Name]\n[Your Title]\n[Your LinkedIn Profile]",
      "pitchTips": [
        "Ensure your subject line highlights a clear problem solved and measurable traction, avoiding overly generic 'opportunity' language, to signal immediate value.",
        "Personalize the email by referencing a specific partner's recent article or investment thesis that aligns with your startup, showing genuine research.",
        "Clearly articulate your path to becoming a 'category leader' in a global market, reflecting Hoxton's investment philosophy, and back it up with a tangible, defensible competitive advantage."
      ]
    }
  },
  {
    "id": "partech",
    "name": "Partech",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed",
    "sectors": "AI, SaaS, Deep Tech, Fintech",
    "ticketSize": "€300,000 - €1,500,000",
    "contactEmail": "contact@partechpartners.com",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=partechpartners.com",
    "dna": {
      "requirements": "Strong product and team, clear vision for global scalability, significant market opportunity, early commercial traction or strong MVP, defensible technology. They value diverse teams and look for companies with a strong understanding of their target customers.",
      "dealStructure": "Standard Seed stage equity investment, often leading or co-leading. Active involvement and strategic support. Dilution typical for seed rounds (10-20%).",
      "pitchHelper": "Subject: [Company Name] - Scaling [Solution] in [Market] with [Technology] | Seed Round\nHi Partech Team,\n\nMy name is [Your Name], Co-founder & CEO of [Company Name] ([Website URL]). We are developing [brief, compelling description of what your company does, e.g., 'a B2B SaaS platform leveraging AI for predictive analytics in X industry'].\n\nWe have already achieved [mention 1-2 key metrics: e.g., '$X MRR with Y enterprise clients', 'Z% weekly active users with an impressive retention rate', 'successful proof-of-concept with a leading player']. Our solution addresses a critical pain point in the [Market Size] market, which we are uniquely positioned to capture due to [our unique differentiation/IP].\n\nWe are currently raising a [e.g., €1M Seed round] to [briefly state use of funds, e.g., 'expand our product features and penetrate new European markets']. We are particularly drawn to Partech's global reach and deep expertise in supporting Seed-stage companies in sectors like [mention relevant Partech sector, e.g., 'SaaS / AI / Fintech'] and your success with portfolio companies such as [mention one or two relevant Partech portfolio companies if possible].\n\nWould you be available for a quick chat to explore how [Company Name] aligns with Partech's investment thesis?\n\nThank you,\n[Your Name]\n[Your Title]\n[Your LinkedIn Profile]",
      "pitchTips": [
        "Use a clear, benefit-driven subject line that includes your company name and the core value proposition, ensuring it's concise and impactful.",
        "Research specific Partech partners or analysts active in your sector (AI, SaaS, Fintech) and tailor your outreach to mention their recent insights or investments.",
        "Highlight your potential for *global* scalability early in the pitch, as Partech has a strong international footprint and seeks companies with broad market ambition."
      ]
    }
  },
  {
    "id": "notion-capital",
    "name": "Notion Capital",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "SaaS, Cloud, Fintech, Future of Work",
    "ticketSize": "$250k - $2M",
    "contactEmail": "info@notion.vc",
    "contactForm": "https://notion.vc/pitch-deck",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=notion.vc",
    "dna": {
      "requirements": "We back exceptional European entrepreneurs building category-leading B2B SaaS and cloud companies. Strong team, compelling product, large addressable market, early signs of product-market fit or strong vision.",
      "dealStructure": "Standard equity investment. Active involvement and strategic support for portfolio companies.",
      "pitchHelper": "Subject: [Company Name] - Revolutionizing [Your Niche] with AI SaaS - Seed Round\n\nDear Notion Capital Team,\n\nI'm writing to introduce [Company Name], a [briefly describe your company - e.g., AI-powered SaaS platform] designed to [solve specific problem for target customer]. We're addressing the growing need for [market pain point], which represents a [size of market] opportunity in the [SaaS/Cloud/Fintech] sector.\n\nOur solution, [product name], leverages [key technology/feature] to provide [unique benefit/value proposition]. We've achieved [mention key traction - e.g., X users, Y MRR, Z partnerships, MVP ready]. Our team, [briefly mention key founders and their relevant experience], is uniquely positioned to execute on this vision.\n\nWe are currently raising a [e.g., $1.5M Seed round] to [use of funds - e.g., expand product features, scale sales & marketing]. We believe our mission aligns perfectly with Notion Capital's focus on category-leading B2B SaaS, and we'd be thrilled to share our deck and discuss how we're set to redefine [your market].\n\nThank you for your time and consideration.\n\nBest regards,\n[Your Name]\n[Your Title]\n[Your Company Website]\n[Link to Pitch Deck]",
      "pitchTips": [
        "Clearly articulate your company's alignment with Notion Capital's strict B2B SaaS and cloud focus in the subject line and opening. Avoid generic intros.",
        "Show tangible traction (even early indicators like pilot programs, user growth, or strong product engagement for Pre-Seed) rather than just ideas. Notion values execution.",
        "Reference their portfolio companies or specific partners whose investment theses align with your venture to demonstrate thorough research and a targeted outreach."
      ]
    }
  },
  {
    "id": "first-round-capital",
    "name": "First Round Capital",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "SaaS, AI, Developer Tools, Fintech, Consumer, Broad Tech",
    "ticketSize": "$500k - $3M",
    "contactEmail": "info@firstround.com",
    "contactForm": "https://firstround.com/apply/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=firstround.com",
    "dna": {
      "requirements": "We back companies that are just getting started. Exceptional founders with a strong vision, clear understanding of their market, innovative product or unique approach. Focus on the team and product at very early stages.",
      "dealStructure": "Standard equity investment, founder-friendly terms, strong emphasis on community and support for founders through resources and network.",
      "pitchHelper": "Subject: [Company Name] - Empowering [Target Users] with [Your Solution] - Seed Investment\n\nDear First Round Capital Team,\n\nMy name is [Your Name], and I'm the founder of [Company Name]. We're building [briefly describe your product/service, e.g., an AI-powered platform] to help [target users] achieve [specific outcome] by [how your solution works]. We're addressing a massive opportunity in the [SaaS/AI/Fintech] space, currently valued at [market size] and growing rapidly.\n\nWhat makes us unique is [explain your differentiation or key innovation]. We've recently [mention early milestones - e.g., launched our MVP, onboarded X beta users, received positive feedback from Y industry experts]. Our vision is to [state your ambitious long-term goal].\n\nAs a founder, my journey through [relevant past experience] has uniquely prepared me to tackle this challenge. We are seeking [e.g., $2M Seed funding] to [use of funds, e.g., expand our engineering team and accelerate user acquisition]. We admire First Round's commitment to early-stage founders and believe our values align perfectly.\n\nI've attached our pitch deck for your review and would be grateful for the opportunity to discuss further.\n\nThank you,\n[Your Name]\n[Your Title]\n[Your Company Website]\n[Link to Pitch Deck]",
      "pitchTips": [
        "Prioritize a warm introduction if possible; First Round highly values network referrals. If cold, highlight mutual connections or interests.",
        "Focus your pitch heavily on the founding team's unique insights, passion, and ability to execute. First Round invests primarily in founders at the earliest stages.",
        "Show, don't just tell: if you have an MVP or a compelling demo, include a concise link or screenshot that quickly conveys your product's core value."
      ]
    }
  },
  {
    "id": "project-a-ventures",
    "name": "Project A Ventures",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed / Series A",
    "sectors": "SaaS, Data & AI, Fintech, Digital Health, Supply Chain & Logistics, B2B Marketplaces",
    "ticketSize": "€500k - €2M",
    "contactEmail": "contact@project-a.com",
    "contactForm": "https://www.project-a.com/contact",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=project-a.com",
    "dna": {
      "requirements": "Strong founding team, large market opportunity, robust business model, clear plan for operational excellence, and a desire for an active investor partnership. They seek companies they can actively support with their operational team.",
      "dealStructure": "Equity investment with significant operational support from their in-house team (e.g., marketing, data, HR, tech).",
      "pitchHelper": "Subject: [Company Name] - Scaling [Your Solution] with Project A's Operational Expertise - Seed Round\n\nDear Project A Team,\n\nI'm [Your Name], founder of [Company Name], a [briefly describe your AI/SaaS/Fintech solution] that addresses [specific market inefficiency or customer need]. We've identified a [size] market opportunity within [relevant sector, e.g., B2B SaaS for supply chain logistics], currently underserved by existing solutions.\n\nOur proprietary [technology/approach] offers [key benefits, e.g., X% efficiency gains, Y cost reduction] to [target customers]. We're currently at [stage, e.g., MVP launched, X active users, €Y MRR] and have a clear roadmap to [next major milestone].\n\nWe are raising a [e.g., €1.5M Seed round] to [use of funds, e.g., further develop our core platform and accelerate market entry]. Knowing Project A's unique operational venture approach and expertise in areas like [mention relevant Project A domain like data, marketing, or tech], we believe a partnership with you would be instrumental in achieving our ambitious growth targets. We're particularly keen on leveraging your [specific operational strength].\n\nI've attached our pitch deck and would welcome the chance to discuss how our vision aligns with your investment thesis and operational support model.\n\nThank you,\n[Your Name]\n[Your Title]\n[Your Company Website]\n[Link to Pitch Deck]",
      "pitchTips": [
        "Explicitly mention how you envision leveraging Project A's operational team (e.g., marketing, tech, data) to accelerate your growth. This shows you understand their unique model.",
        "Highlight your team's operational competence and readiness to scale. Project A values strong execution capabilities alongside vision.",
        "Research specific Project A partners or investment managers whose domain expertise aligns directly with your sector (SaaS, AI, Fintech, etc.) and address your email to them directly if possible."
      ]
    }
  },
  {
    "id": "eqt-ventures",
    "name": "EQT Ventures",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed / Series A",
    "sectors": "SaaS, AI, Deep Tech, Fintech, Gaming, Healthtech, Broad Tech",
    "ticketSize": "€500k - €5M",
    "contactEmail": "info@eqtventures.com",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=eqtventures.com",
    "dna": {
      "requirements": "Ambitious founders, large addressable markets, innovative technology (especially Deep Tech, AI), strong product vision. They like companies with the potential to become global leaders. They use their proprietary 'Motherbrain' AI platform to identify companies.",
      "dealStructure": "Equity investment, long-term partnership with access to EQT's global network and resources, including support from Motherbrain insights.",
      "pitchHelper": "Subject: [Company Name] - Disrupting [Industry] with [AI/Deep Tech] - Seed Round\n\nDear EQT Ventures Team,\n\nI'm writing as [Your Name], founder of [Company Name], a [briefly describe your Deep Tech/AI/SaaS solution] set to transform [industry or market]. We're tackling [major problem] within a global market estimated at [market size], with a unique approach using [key technology, e.g., proprietary AI algorithms, novel deep learning architecture].\n\nOur product, [product name], has already achieved [key milestones, e.g., successful pilot with X enterprise, Y% improvement in Z metric, MVP launch with strong user feedback]. We believe our technology has the potential to become a category leader in the [AI/Deep Tech/SaaS] space, aligning with EQT Ventures' focus on ambitious, game-changing companies.\n\nWe are currently raising [e.g., €3M Seed capital] to [use of funds, e.g., expand our engineering team and accelerate product development for enterprise clients]. We are particularly drawn to EQT Ventures' expertise in scaling deep tech globally and the insights from your Motherbrain platform.\n\nI've attached our pitch deck and would greatly appreciate the opportunity to discuss our vision for global impact.\n\nSincerely,\n[Your Name]\n[Your Title]\n[Your Company Website]\n[Link to Pitch Deck]",
      "pitchTips": [
        "Highlight the 'deep tech' or 'AI-first' aspect of your solution, even if it's SaaS. EQT Ventures has a strong interest in groundbreaking technology.",
        "Demonstrate a clear understanding of your global market potential and how your product can scale internationally, as EQT Ventures thinks globally.",
        "If you have an impressive technical team or unique intellectual property, make sure to emphasize this early in your communication."
      ]
    }
  },
  {
    "id": "blossom-capital",
    "name": "Blossom Capital",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed / Series A",
    "sectors": "Deep Tech, SaaS, Fintech, Consumer, Future of Work",
    "ticketSize": "$1M - $5M",
    "contactEmail": "hello@blossomcap.com",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=blossomcap.com",
    "dna": {
      "requirements": "We back the audacious European founders of tomorrow. Ambitious founders solving huge problems, clear product differentiation, significant market opportunity, strong team, typically European focus with global ambitions.",
      "dealStructure": "Equity investment, highly engaged support for founders, strong belief in building long-term relationships.",
      "pitchHelper": "Subject: [Company Name] - Audaciously Redefining [Your Niche] with [Deep Tech/SaaS] - Seed Round\n\nDear Blossom Capital Team,\n\nI'm [Your Name], co-founder of [Company Name], a [briefly describe your Deep Tech/SaaS/Fintech solution] that is audaciously tackling [a significant, often overlooked, problem] for [target customers] in the [European/Global] market. We are building [state your unique value proposition, e.g., the next-gen AI platform for X industry] with the potential to reach [ambitious market size].\n\nOur approach involves [briefly explain your unique technology or insight]. We've made significant progress, including [key milestones, e.g., securing X pilots, validating our MVP with Y customer feedback, achieving Z early traction]. We are a team of [number] experienced individuals with backgrounds in [relevant areas], committed to building a generational company.\n\nWe are raising a [e.g., $3M Seed round] to [use of funds, e.g., accelerate product development and scale our initial go-to-market efforts]. We deeply resonate with Blossom Capital's focus on audacious European founders and believe our bold vision aligns perfectly with your investment thesis.\n\nAttached is our pitch deck, and we'd be thrilled to connect for a brief discussion.\n\nBest regards,\n[Your Name]\n[Your Title]\n[Your Company Website]\n[Link to Pitch Deck]",
      "pitchTips": [
        "Emphasize the 'audacity' and ambitious nature of your vision and problem-solving approach. Blossom Capital looks for founders with big, bold ideas.",
        "Clearly articulate your European roots or strong connection to the European tech ecosystem, while also demonstrating global potential.",
        "Personalize your outreach to a specific partner at Blossom Capital if you can find a direct connection to their background or prior investments."
      ]
    }
  },
  {
    "id": "playfair-capital",
    "name": "Playfair Capital",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "SaaS, AI, Deep Tech, Fintech, Marketplaces, Digital Health, Future of Work",
    "ticketSize": "£250,000 - £1,000,000",
    "contactEmail": "hello@playfair.vc",
    "contactForm": "https://playfair.vc/pitch/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=playfair.vc",
    "dna": {
      "requirements": "Strong founding team, large market opportunity, early traction (users, partnerships, etc.), clear vision, focus on solving real problems. Primarily UK/European B2B tech startups.",
      "dealStructure": "Standard equity investment, convertible notes for pre-seed. Often lead investor, typical seed stage dilution (15-25% for a lead).",
      "pitchHelper": "Subject: [Company Name] - Solving [Problem] with [Unique Solution] (Pre-Seed/Seed)\n\nDear Playfair Team,\n\nI’m writing to you today because of your strong focus on early-stage B2B SaaS/Deep Tech startups, particularly your interest in [mention a specific portfolio company or thesis that aligns with Playfair, e.g., 'companies leveraging AI for enterprise efficiency' or 'innovative solutions in the future of work'].\n\nOur company, [Company Name], is building [briefly describe what you do, e.g., 'an AI-powered platform for X professionals to Y, dramatically increasing Z efficiency']. We address the critical problem of [specific problem] for [target audience], a market we estimate at $[TAM].\n\nWe’ve achieved [key traction metric - e.g., 'secured 5 pilot customers including two Fortune 500 companies,' or 'grown our user base to 10,000 active users with 30% month-over-month growth,' or 'developed a patent-pending technology that achieves X breakthrough'].\n\nOur ask is for £[Amount] in seed funding to [specific use of funds, e.g., 'expand our engineering team, refine our MVP for commercial launch, and scale our initial customer acquisition efforts']. This will enable us to reach [next key milestone, e.g., '£10k MRR within 12 months'].\n\nWe believe our [unique aspect, e.g., 'proprietary algorithm' or 'deep industry expertise'] and the team's background in [relevant experience] position us uniquely to win this market.\n\nI’ve attached our pitch deck for your review and would love to schedule a brief call to discuss how [Company Name] aligns with Playfair Capital's investment thesis.\n\nThank you for your time and consideration.\n\nBest regards,\n\n[Your Name]\n[Your Title]\n[Company Website]",
      "pitchTips": [
        "Personalize with Portfolio Insight: Reference a specific Playfair portfolio company or investment thesis that directly aligns with your startup to show you've done your homework and aren't just mass emailing.",
        "Highlight UK/European Connection: Playfair has a strong UK and European focus. If you're based in or targeting these markets, explicitly mention how this aligns with their geographic interest.",
        "Concise Traction & Vision: Get straight to your most compelling traction and your bold vision in the first few sentences. Playfair emphasizes strong teams and big market opportunities, so demonstrate both immediately."
      ]
    }
  },
  {
    "id": "earlybird-venture-capital",
    "name": "Earlybird Venture Capital",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed to Growth (focus on Seed/Series A for Digital East Fund)",
    "sectors": "Deep Tech, AI, SaaS, Fintech, Health Tech, Web3",
    "ticketSize": "€500,000 - €5,000,000 (Seed/Series A)",
    "contactEmail": "info@earlybird.com",
    "contactForm": "https://earlybird.typeform.com/to/Bf0N0P",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=earlybird.com",
    "dna": {
      "requirements": "Visionary founders, disruptive technology, strong market fit, early traction (evidence of product-market fit or strong customer interest), scalable business model, focus on European startups.",
      "dealStructure": "Standard equity investment. Can lead or co-invest. Typical European seed/Series A terms.",
      "pitchHelper": "Subject: Disrupting [Industry] with [Company Name] - Seed Investment Opportunity\n\nDear Earlybird Team,\n\nI’m reaching out today as a founder of [Company Name], a [briefly describe your solution, e.g., 'deep tech platform leveraging quantum computing for X problem'] based in [Your City/Country]. We are aware of Earlybird's leading role in backing visionary European deep tech and enterprise SaaS companies, particularly your investments in [mention a relevant portfolio company or their thesis, e.g., 'companies pushing the boundaries of AI'].\n\nWe are tackling [major problem] in the [target industry] market, which currently relies on [outdated solution/process]. Our proprietary [technology/approach] offers a [quantifiable improvement, e.g., '10x speed increase and 50% cost reduction'], positioning us to capture a significant share of the €[TAM] market.\n\nSince our inception, we have [key traction, e.g., 'secured LOIs from 3 major enterprises,' 'developed a robust MVP with 1,000 active beta users,' or 'completed a successful technical pilot demonstrating X capabilities']. Our team of [number] brings together [relevant expertise/backgrounds].\n\nWe are currently raising a Seed round of €[Amount] to [specific use of funds, e.g., 'scale our engineering team, accelerate product development, and expand into key European markets']. This funding will enable us to reach [next key milestone, e.g., '€50k MRR and solidify our IP portfolio'].\n\nWe would be grateful for the opportunity to share our deck and discuss how our vision aligns with Earlybird's focus on groundbreaking European startups.\n\nThank you for your time.\n\nSincerely,\n\n[Your Name]\nFounder & CEO, [Company Name]\n[Company Website]",
      "pitchTips": [
        "Emphasize European Roots: Earlybird is a pan-European VC. Clearly state your European base and/or your focus on European markets early in the email to resonate with their geographic mandate.",
        "Focus on Deep Tech/Disruption: Earlybird has a strong appetite for technically challenging, disruptive innovations. Frame your problem/solution in terms of fundamental technological advancement or significant market disruption.",
        "Demonstrate Scalability: Highlight how your business model is inherently scalable across multiple markets or industries, aligning with their goal of backing future European tech leaders."
      ]
    }
  },
  {
    "id": "passion-capital",
    "name": "Passion Capital",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed",
    "sectors": "SaaS, Fintech, AI, Marketplaces, Consumer (primarily UK-based tech)",
    "ticketSize": "£500,000 - £1,000,000 (initial)",
    "contactEmail": "hello@passioncapital.com",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=passioncapital.com",
    "dna": {
      "requirements": "Strong founding team (passionate, resilient, experienced), large market opportunity, innovative product/service, clear vision for scalability, UK focus. They love to be the first institutional money in.",
      "dealStructure": "Lead investor, standard equity terms for seed rounds. Often take a board seat.",
      "pitchHelper": "Subject: Seed Round: [Company Name] - Powering [Specific Outcome] for [Target Audience]\n\nDear Passion Capital Team,\n\nI’m writing to you today as a founder of [Company Name], a [briefly describe your solution, e.g., 'SaaS platform transforming how X businesses manage Y']. Having followed Passion Capital's dedication to backing the UK's most ambitious founders at the very earliest stages, with successes like [mention a relevant portfolio company if possible, e.g., 'Monzo' or 'GoCardless' if your sector aligns], I believe we are a strong fit.\n\nWe are solving the acute problem of [specific problem] for [target audience] within the [industry] sector, a market valued at £[TAM]. Our unique approach involves [key differentiator/technology, e.g., 'leveraging predictive AI to automate Z task'].\n\nDespite being pre-seed/seed, we've already achieved [key traction, e.g., 'secured 10 paying pilot customers,' 'developed a fully functional MVP with positive user feedback,' or 'built a waiting list of 500+ interested users']. Our team, comprised of [relevant experience of founders], is uniquely positioned to execute on this vision.\n\nWe are currently raising a £[Amount] seed round, aiming to [specific use of funds, e.g., 'onboard our first 100 customers, expand our product features, and prove out our go-to-market strategy']. This will allow us to reach [next key milestone, e.g., '£20k MRR within 9-12 months'].\n\nWe’re looking for a lead investor who shares our conviction in building a category-defining company. I've attached our deck and would welcome the opportunity for a brief discussion to explore how [Company Name] can become the next Passion Capital success story.\n\nThank you,\n\n[Your Name]\nCo-founder & CEO, [Company Name]\n[Company Website]",
      "pitchTips": [
        "Strong UK Focus: Clearly state your UK presence and/or market focus early, as Passion Capital is deeply ingrained in the UK startup ecosystem.",
        "Founder-Market Fit: Highlight the founding team's passion, resilience, and relevant experience. Passion Capital places a huge emphasis on the founders themselves, so showcase why *you* are the right team.",
        "Concise Storytelling: Get to the point quickly, clearly articulating the problem, your unique solution, and early validation. Passion Capital partners are known for their direct communication and appreciate clarity."
      ]
    }
  },
  {
    "id": "la-famiglia",
    "name": "La Famiglia",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed to Series A",
    "sectors": "B2B SaaS, AI, Fintech, Deep Tech, Enterprise software",
    "ticketSize": "€1,000,000 - €5,000,000 (initial for Seed/Series A)",
    "contactEmail": "info@lafamiglia.vc",
    "contactForm": "https://airtable.com/shra7xU0qLg3L0TgF",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=lafamiglia.vc",
    "dna": {
      "requirements": "Visionary founders, strong B2B focus, scalable business model, early product validation/traction, strong team, European relevance. Emphasize network effects, community, and platform potential.",
      "dealStructure": "Lead or co-investor. Standard equity terms.",
      "pitchHelper": "Subject: [Company Name]: Building the Next-Gen [B2B Sector] Platform (Seed Round)\n\nDear La Famiglia Team,\n\nI’m writing to you today as the founder of [Company Name], a [briefly describe your B2B SaaS solution, e.g., 'AI-powered platform streamlining X for enterprise clients']. Your commitment to supporting B2B disruptors and your belief in network effects, as demonstrated by investments like [mention a relevant portfolio company, e.g., 'Personio' or a specific thesis they've published], deeply resonates with our vision.\n\nWe are addressing the critical pain point of [specific problem] for [target B2B customer] within the €[TAM] market. Our platform offers a [key benefit, e.g., 'unified solution that enhances Y efficiency by Z% and fosters collaboration across teams'], replacing fragmented legacy systems.\n\nWe’ve achieved significant early traction, including [key metric - e.g., 'signed LOIs with 3 pilot enterprises,' 'secured €50k ARR from initial customers,' or 'developed an MVP with high engagement from 20 beta companies']. Our team's expertise in [relevant areas] positions us to build a category leader.\n\nWe are raising a Seed round of €[Amount] to [specific use of funds, e.g., 'accelerate product development, expand our sales and marketing efforts across Europe, and onboard our first 50 paying customers']. This investment will enable us to reach [next key milestone, e.g., '€150k ARR within 12 months'].\n\nWe believe [Company Name]'s potential for strong network effects and its B2B focus align perfectly with La Famiglia’s investment thesis. We would appreciate the opportunity to share our detailed pitch deck and discuss how we can build a significant European tech company together.\n\nThank you for your time.\n\nBest regards,\n\n[Your Name]\nFounder & CEO, [Company Name]\n[Company Website]",
      "pitchTips": [
        "Emphasize B2B Network Effects: Clearly articulate how your solution creates network effects or leverages community to drive value and growth, as this is a core thesis for La Famiglia.",
        "Highlight European Market Potential: As a Europe-focused fund, stress your plans for expansion within the European market and how your solution is tailored for its enterprise landscape.",
        "Showcase Strategic Partnerships/Traction: La Famiglia values founders who can execute. Any early strategic partnerships, strong customer testimonials, or significant pilot programs should be highlighted to demonstrate execution capability and market validation."
      ]
    }
  },
  {
    "id": "elaia-partners",
    "name": "Elaia Partners",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed to Series B (with dedicated Seed fund)",
    "sectors": "Deep Tech, SaaS, AI, Digital, Fintech",
    "ticketSize": "€300,000 - €1,000,000 (Seed)",
    "contactEmail": "contact@elaia.com",
    "contactForm": "https://www.elaia.com/submit-your-project/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=elaia.com",
    "dna": {
      "requirements": "Deep Tech / science-based innovation, strong IP, ambitious and technical founding team, large market opportunity, European focus (especially France), early product development or significant scientific progress.",
      "dealStructure": "Lead or co-investor. Standard equity terms. Value hands-on support.",
      "pitchHelper": "Subject: Seed Round: [Company Name] - Revolutionizing [Industry] with Deep Tech AI\n\nDear Elaia Partners Team,\n\nI’m reaching out today as the founder of [Company Name], a [briefly describe your deep tech solution, e.g., 'pioneering AI platform leveraging novel neuro-symbolic techniques for X complex problem']. We are inspired by Elaia’s consistent support for groundbreaking European deep tech and enterprise software companies, particularly your expertise in nurturing science-based innovations from their earliest stages, as seen with [mention a relevant portfolio company, e.g., 'Shift Technology' or 'Criteo' for their deep tech roots'].\n\nWe are addressing the critical challenge of [specific, technically complex problem] within the [target industry], a market we estimate at €[TAM]. Our unique [technology/approach, e.g., 'patent-pending algorithm' or 'proprietary hardware design'] offers a [quantifiable advantage, e.g., 'breakthrough in data processing speed and accuracy'] that is currently unmatched.\n\nDespite our early stage, we have already achieved [key technical or commercial traction, e.g., 'developed a functional prototype demonstrating X performance,' 'secured a research grant of €Y,' 'published a peer-reviewed paper on Z breakthrough,' or 'engaged with 3 enterprise partners for pilot projects']. Our team comprises [relevant technical/scientific backgrounds and experience].\n\nWe are seeking €[Amount] in seed funding to [specific use of funds, e.g., 'further develop our core AI engine, secure key IP, and expand our scientific and engineering team']. This investment will enable us to reach [next key milestone, e.g., 'commercialize our MVP and demonstrate initial market adoption within 18 months'].\n\nWe are confident that [Company Name]'s deep tech foundation and significant market potential align perfectly with Elaia's investment thesis. I’ve attached our detailed deck and would welcome a discussion to elaborate on our technology and vision.\n\nThank you for your consideration.\n\nSincerely,\n\n[Your Name]\nFounder & CTO, [Company Name]\n[Company Website]",
      "pitchTips": [
        "Emphasize Deep Tech & IP: Lead with the technical innovation, scientific breakthrough, or unique intellectual property. Elaia highly values true deep tech and strong defensible technology.",
        "Highlight Founder's Technical Expertise: Showcase the founding team's deep technical or scientific background. Elaia invests in founders who are experts in their domain.",
        "Mention European/French Nexus: If applicable, highlight your connection to the European (especially French) ecosystem, as Elaia is a prominent player there. Demonstrate how your solution can thrive in this market."
      ]
    }
  },
  {
    "id": "fabric-ventures",
    "name": "Fabric Ventures",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "Web3 Infrastructure, DeFi, Gaming, Deep Tech",
    "ticketSize": "€500k - €2M",
    "contactEmail": "info@fabric.vc",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=fabric.vc",
    "dna": {
      "requirements": "Visionary founders building foundational Web3/decentralized technology. Demonstrable technical progress (MVP, whitepaper, early code). Clear understanding of market need in the decentralized space. Strong community engagement or potential.",
      "dealStructure": "Standard equity investment with typical VC terms for early-stage rounds. Convertible notes or SAFEs for very early rounds.",
      "pitchHelper": "Subject: Seed Pitch: [Company Name] - Revolutionizing [Specific Web3 Niche] with [Key Innovation]\n\nDear Fabric Ventures Team,\n\nI'm writing to introduce [Company Name], a [brief description of company, e.g., \"decentralized protocol\" or \"Web3 infrastructure provider\"] that is [explain the problem it solves and its innovative solution in 1-2 sentences].\n\nWe are building [Specific Product/Service] which targets the rapidly growing [Specific Web3 Market, e.g., \"DeFi lending market\" or \"interoperable gaming assets\"]. Our unique approach, centered around [mention a key differentiator like \"zero-knowledge proofs\" or \"community-governed DAO structure\"], has already achieved [mention key traction like \"alpha launch,\" \"X active users,\" \"Y integrations,\" or \"successful testnet\"].\n\nWe are currently raising a €[X]M Seed round to [explain how funds will be used, e.g., \"expand our engineering team,\" \"launch mainnet,\" \"acquire initial users\"]. We believe Fabric Ventures' deep expertise in Web3 infrastructure and token economics makes you an ideal partner.\n\nYou can learn more at [Link to your Website/Whitepaper] or our [Link to Pitch Deck]. We would be grateful for the opportunity to discuss how [Company Name] can contribute to the decentralized future.\n\nBest regards,\n\n[Your Name]\n[Your Title]\n[Your Company]\n[Your Contact Info]",
      "pitchTips": [
        "Tailor Web3-Specific Language: Use precise Web3 terminology in your subject line and intro. Avoid generic startup jargon. Highlight a unique technical or community aspect of your project relevant to Fabric's portfolio.",
        "Highlight Technical / Protocol-level Innovation: Fabric Ventures focuses on foundational Web3 tech. Your pitch should clearly articulate the deep tech or protocol-level innovation rather than just a dApp or use case, to show alignment with their investment thesis.",
        "Mention Specific Portfolio Companies or Theses: Show you've done your homework by briefly referencing a Fabric portfolio company or a specific investment thesis they've published, and how your project aligns or complements it."
      ]
    }
  },
  {
    "id": "frontline-ventures",
    "name": "Frontline Ventures",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed",
    "sectors": "B2B SaaS, Cloud, AI/ML, Fintech, Security",
    "ticketSize": "€1M - €5M",
    "contactEmail": "pitch@frontline.vc",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=frontline.vc",
    "dna": {
      "requirements": "European B2B SaaS teams, clear path to Product-Market Fit, early revenue traction (MRR is a strong indicator), strong founder-market fit, global ambitions (especially US expansion potential).",
      "dealStructure": "Standard VC equity investment, typically leading or co-leading Seed rounds.",
      "pitchHelper": "Subject: Seed Pitch: [Company Name] - Scaling B2B SaaS in [Specific Vertical] (MRR: €[X]K)\n\nDear Frontline Ventures Team,\n\nI'm reaching out from [Company Name], a [brief description of company, e.g., \"B2B SaaS platform\"] that empowers [target customer] to [solve specific problem] by [your unique value proposition].\n\nWe've developed [Product Name], a [describe product type] that utilizes [mention a key technology like AI/ML] to deliver [quantifiable benefit, e.g., \"reduce operational costs by X%\"]. Since our launch [X] months ago, we've achieved significant traction, including €[X]K in monthly recurring revenue (MRR), serving [number] paying customers like [mention 1-2 recognizable customer names if possible].\n\nWe are currently raising a €[Y]M Seed round to [explain use of funds, e.g., \"accelerate product development,\" \"expand sales team across Europe,\" \"lay groundwork for US market entry\"]. Frontline's expertise in B2B SaaS and trans-Atlantic growth makes you an ideal partner for our ambitious plans.\n\nOur pitch deck is available here: [Link to Pitch Deck]. We'd be thrilled to share more about our vision for [Company Name].\n\nBest regards,\n\n[Your Name]\n[Your Title]\n[Your Company]\n[Your Contact Info]",
      "pitchTips": [
        "Lead with Traction & B2B Focus: Immediately state your current MRR or key B2B traction in the subject line or opening sentence. Frontline values quantifiable progress in B2B SaaS.",
        "Emphasize European Roots & US Ambition: Explicitly mention your European base and your clear strategy for US market entry. This aligns directly with their core investment thesis and value proposition.",
        "Reference Specific Partner or Portfolio Company: Demonstrate you've researched their team by mentioning a specific partner whose interests align with your sector, or a portfolio company that resonates with your market, showcasing a thoughtful approach rather than a mass email."
      ]
    }
  },
  {
    "id": "mangrove-capital-partners",
    "name": "Mangrove Capital Partners",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed",
    "sectors": "SaaS, Fintech, Deep Tech, Marketplaces, AI",
    "ticketSize": "€500k - €3M",
    "contactEmail": "info@mangrove.vc",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=mangrove.vc",
    "dna": {
      "requirements": "Disruptive technology or business model, visionary founders, large market potential, strong product vision, early indications of market validation. They look for bold ideas.",
      "dealStructure": "Standard VC equity, often leading or co-leading early rounds.",
      "pitchHelper": "Subject: Seed Investment: [Company Name] - Disrupting [Industry/Problem] with [Unique Tech/Approach]\n\nDear Mangrove Capital Partners Team,\n\nI am [Your Name], Co-founder of [Company Name], a [brief description, e.g., \"Deep Tech startup\" or \"SaaS platform\"] that is poised to [explain the disruptive vision, e.g., \"fundamentally change how X operates\" or \"unlock Y market opportunity\"].\n\nOur core innovation, [describe key technology or business model innovation, e.g., \"an AI-driven predictive engine\" or \"a novel peer-to-peer marketplace protocol\"], addresses [specific problem or inefficiency]. We believe this approach will enable us to [quantifiable impact or market disruption]. We have [mention early proof points like \"successful pilot,\" \"validated MVP with X users,\" or \"pre-orders from Y key customers\"].\n\nWe are currently raising a €[X]M Seed round to [explain use of funds, e.g., \"scale our R&D efforts,\" \"launch commercially,\" \"expand our user base\"]. Given Mangrove's history of backing transformative companies like [mention a Mangrove portfolio company if relevant], we believe there's a strong strategic fit.\n\nYou can find our deck and learn more at [Link to Pitch Deck]. We look forward to the possibility of discussing this further.\n\nBest regards,\n\n[Your Name]\n[Your Title]\n[Your Company]\n[Your Contact Info]",
      "pitchTips": [
        "Focus on Disruptive Innovation: Frame your subject line and opening around the \"disruptive\" or \"transformative\" nature of your solution. Mangrove explicitly seeks out bold, paradigm-shifting ideas.",
        "Highlight Visionary Founders: Briefly articulate why your founding team is uniquely positioned to execute this bold vision, emphasizing relevant experience or unique insights that align with their value for strong founders.",
        "Connect to a Mangrove Success Story: If your vision shares parallels with a past Mangrove investment (e.g., Skype, Wix, Walkme), subtly draw that connection in your email to demonstrate alignment and genuine interest."
      ]
    }
  },
  {
    "id": "lightspeed-venture-partners",
    "name": "Lightspeed Venture Partners",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed",
    "sectors": "Enterprise SaaS, Fintech, Deep Tech, AI/ML, Consumer",
    "ticketSize": "$1M - $5M",
    "contactEmail": "info@lsvp.com",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=lsvp.com",
    "dna": {
      "requirements": "Category-defining ambition, exceptional founding teams, significant market opportunity, strong defensible technology/product, early product-market fit indications. Often seek high-growth potential.",
      "dealStructure": "Standard VC equity. Will typically lead or co-lead large Seed rounds.",
      "pitchHelper": "Subject: Seed Investment: [Company Name] - Building the Next [Category] for [Target Market]\n\nDear Lightspeed Team,\n\nI am writing to you as the founder of [Company Name], a [brief description of company, e.g., \"Enterprise AI platform\" or \"Deep Tech solution\"] set to redefine [specific industry or problem space].\n\nWe are developing [Product Name], which leverages [key technology, e.g., \"proprietary AI algorithms\" or \"novel blockchain architecture\"] to solve [critical problem] for [target customers]. Our solution offers [quantifiable benefit, e.g., \"Xx efficiency gains\" or \"Y% cost reduction\"], positioning us to become the market leader in [specific niche]. We have already secured [mention early validation like \"X enterprise pilot customers,\" \"achieved Y MRR,\" or \"developed Z breakthrough technology\"].\n\nWe are currently raising a $C M Seed round to [explain use of funds, e.g., \"scale our engineering team,\" \"expand into new geographies,\" \"accelerate product roadmap\"]. Given Lightspeed's impressive track record in backing transformative enterprise and deep tech companies, we believe our vision aligns well with your investment thesis.\n\nOur detailed deck is available at [Link to Pitch Deck]. We would appreciate the opportunity to discuss how [Company Name] is poised for category leadership.\n\nBest regards,\n\n[Your Name]\n[Your Title]\n[Your Company]\n[Your Contact Info]",
      "pitchTips": [
        "Aim for a Warm Introduction: Lightspeed strongly prefers warm introductions. While using the general email, state if you've been referred by a mutual connection or if you attempted to get an intro, making the email more credible.",
        "Focus on Category-Defining Ambition: Your subject and opening should immediately convey the scale of your ambition – how you're building a \"category leader\" or a \"new paradigm,\" which resonates with Lightspeed's investment philosophy.",
        "Showcase Deep Tech/Enterprise Expertise: Clearly articulate the technical depth, competitive moat, and enterprise-readiness of your solution. Lightspeed values robust, defensible technology and a clear path to significant enterprise adoption."
      ]
    }
  },
  {
    "id": "episode1-ventures",
    "name": "Episode 1 Ventures",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed",
    "sectors": "UK B2B SaaS, AI/ML, Marketplaces, Fintech",
    "ticketSize": "£500k - £2M",
    "contactEmail": "hello@episode1.com",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=episode1.com",
    "dna": {
      "requirements": "UK-based team, strong technical founders, MVP with early commercial traction (or clear path to it), large addressable B2B market, clear differentiator.",
      "dealStructure": "Standard VC equity, typically leading or co-leading Seed rounds.",
      "pitchHelper": "Subject: Seed Pitch: [Company Name] - UK B2B SaaS for [Target Industry] with £[X]K MRR\n\nDear Episode 1 Team,\n\nI'm [Your Name], co-founder of [Company Name], a UK-based [brief description, e.g., \"B2B SaaS platform\" or \"AI-driven solution\"] designed to help [target customer] [solve specific problem].\n\nOur product, [Product Name], provides [key functionality] and has quickly gained traction in the [specific UK B2B market] by [explain unique benefit or differentiator]. We're proud to have achieved £[X]K in monthly recurring revenue (MRR) within [Y] months, serving [number] active customers. Our team is based in [City, UK] and comprises [mention key technical/domain expertise].\n\nWe are currently raising a £[Z]M Seed round to [explain use of funds, e.g., \"expand our product roadmap,\" \"grow our sales and marketing efforts across the UK,\" \"further develop our AI capabilities\"]. Episode 1's deep focus on early-stage UK B2B SaaS makes you an ideal partner to help us scale.\n\nOur pitch deck is available here: [Link to Pitch Deck]. We'd welcome the opportunity to connect and discuss our growth journey.\n\nBest regards,\n\n[Your Name]\n[Your Title]\n[Your Company]\n[Your Contact Info]",
      "pitchTips": [
        "Clearly State UK Focus & B2B SaaS: Immediately mention your UK base and B2B SaaS nature in the subject line or opening. Episode 1 has a strong geographic and sector focus.",
        "Highlight Technical Founder & Early Traction: Emphasize the technical strength of your founding team and any early commercial traction (e.g., MRR, pilot successes) early in the email, as these are key criteria for Seed investments.",
        "Reference a Specific UK B2B Market Insight: Show awareness of the UK B2B landscape or specific trends in your industry within the UK. This demonstrates alignment and a tailored approach to a UK-focused investor."
      ]
    }
  },
  {
    "id": "heartcore-capital",
    "name": "Heartcore Capital",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "Consumer Tech, AI (consumer-focused), SaaS (consumer-focused), Deep Tech (consumer-focused), Fintech (consumer-focused)",
    "ticketSize": "€500,000 - €1,500,000",
    "contactEmail": "contact@heartcore.com",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=heartcore.com",
    "dna": {
      "requirements": "Strong founding team, compelling vision for a consumer product, significant market opportunity within consumer technology, evidence of early traction or strong product-market fit indicators. Focus on European B2C startups.",
      "dealStructure": "Standard equity investment for early-stage venture capital, typical for Seed rounds in Europe.",
      "pitchHelper": "Subject: [Your Company Name] - Revolutionizing [Specific Consumer Problem] with [Key Differentiator]\n\nDear Heartcore Capital Team,\n\nI'm [Your Name], founder of [Your Company], and we're building [briefly describe your consumer product/service] to solve [specific consumer problem]. We've identified a massive opportunity in [market size/trend] and are seeing incredible traction, with [1-2 key metrics, e.g., 10k active users, 20% MoM growth, €X ARR].\n\nOur [product/service] uniquely [explain your differentiation and how it captures consumer attention/solves the problem better]. We believe this aligns perfectly with Heartcore's deep expertise in backing visionary consumer tech companies like [mention one of their portfolio companies if relevant].\n\nWe're raising a €[X]M Seed round to [briefly state use of funds, e.g., scale user acquisition, expand product features, hire key talent]. Our goal is to become the leading [category] in Europe. I've attached our deck for your review and would be grateful for a brief call to discuss our vision further.\n\nThank you for your time and consideration.\n\nBest regards,\n[Your Name]\n[Your Website]\n[Link to Deck]",
      "pitchTips": [
        "Emphasize Consumer Insights: Start by clearly articulating your deep understanding of the consumer problem you're solving and why your product resonates with modern users.",
        "Show, Don't Just Tell Traction: Instead of just numbers, include a compelling visual or user story link (e.g., short video, user testimonial page) to demonstrate user engagement for your consumer product.",
        "Align with their B2C Thesis: Explicitly connect your venture to Heartcore's investment philosophy in 'consumer technology' by highlighting how your product captivates and grows a loyal user base."
      ]
    }
  },
  {
    "id": "reimann-investors",
    "name": "Reimann Investors",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "Fintech, SaaS, E-commerce, Digital Health, AI",
    "ticketSize": "€250,000 - €1,000,000",
    "contactEmail": "info@reimann-investors.com",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=reimann-investors.com",
    "dna": {
      "requirements": "Strong founding team, scalable business model, initial product or MVP, significant market potential, clear path to profitability. Focus on German-speaking (DACH) region and broader Europe.",
      "dealStructure": "Standard equity investment. They typically take a minority stake and look for long-term partnerships.",
      "pitchHelper": "Subject: [Your Company Name] - Seed Investment Opportunity: [Clear Value Proposition/Traction]\n\nDear Reimann Investors Team,\n\nMy name is [Your Name], and I'm the founder of [Your Company], a [SaaS/Fintech/etc.] solution addressing [specific problem] for [target audience]. We've developed [briefly describe your solution] and are already seeing strong market validation with [1-2 key metrics, e.g., €X ARR, Y paying customers, Z% conversion rate].\n\nOur vision is to [briefly state ambition, e.g., become the leading provider of X in the DACH region] by [unique approach/technology]. We are actively looking for strategic partners for our €[X]M Seed round, and your expertise in [mention a relevant sector, e.g., fintech, digital health] and focus on the German market makes you an ideal fit.\n\nWe've attached our pitch deck for your review, detailing our team, product, and financial projections. We'd appreciate the opportunity for a brief introductory call.\n\nThank you for your consideration.\n\nSincerely,\n[Your Name]\n[Your Website]\n[Link to Deck]",
      "pitchTips": [
        "Highlight Tangible Value & Profitability: In your subject or opening, quickly convey how your solution generates clear revenue or cost savings, appealing to their pragmatic family office approach.",
        "Mention DACH/European Relevance: If applicable, briefly state your market focus or expansion plans within Germany/DACH or wider Europe, showing alignment with their regional interests.",
        "Keep it Concise and Data-Driven: Reimann Investors appreciates directness. Focus on quantifiable achievements and market data in a succinct manner, avoiding overly verbose language."
      ]
    }
  },
  {
    "id": "possible-ventures",
    "name": "Possible Ventures",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "SaaS, Fintech, AI, Deep Tech, Future of Work, Developer Tools, B2B Marketplaces",
    "ticketSize": "€200,000 - €700,000",
    "contactEmail": "hello@possible.ventures",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=possible.ventures",
    "dna": {
      "requirements": "European founders, strong technical teams, innovative B2B solutions, large market potential, early product/user feedback, sometimes pre-product. They emphasize backing 'exceptional founders building frontier technologies'.",
      "dealStructure": "Standard equity investment, aiming for 10-20% dilution in Seed rounds.",
      "pitchHelper": "Subject: Pre-Seed: [Your Company] - Pioneering [Specific B2B Sector] with [Unique Tech/Approach]\n\nDear Possible Ventures Team,\n\nI'm [Your Name], co-founder of [Your Company], and we're a team of [number] technical founders based in [City, Country], building [briefly describe your innovative B2B SaaS/Deep Tech solution] for [target industry/problem]. We believe [existing solutions are lacking/market is ripe for disruption] and our [proprietary technology/unique approach] gives us a significant edge.\n\nThough early-stage, we've achieved [1-2 key milestones, e.g., robust MVP, first pilots secured, strong early user feedback from X companies]. Our vision is to [state ambitious goal, e.g., redefine how X is done in enterprise].\n\nWe are raising a €[X]K Pre-Seed round to [briefly state use of funds, e.g., finalize product, onboard first paying customers, expand technical team]. Given your focus on technical B2B founders building frontier tech in Europe, we believe there's a strong alignment. Our deck is linked below for your review.\n\nWould you be open to a quick 15-minute chat to hear more about what we're building?\n\nSincerely,\n[Your Name]\n[Your Website]\n[Link to Deck]",
      "pitchTips": [
        "Showcase Technical Depth: For deep tech or B2B, ensure your pitch clearly articulates the innovative technology or unique intellectual property behind your solution, even at a high level.",
        "Focus on Founder-Market Fit: Emphasize the unique expertise and background of your founding team that makes them uniquely positioned to solve the specific problem you're tackling in your niche.",
        "European Founder Perspective: Briefly mention your European roots or your plan to build a category leader from Europe, aligning with their focus on backing European founders."
      ]
    }
  },
  {
    "id": "atlantic-labs",
    "name": "Atlantic Labs",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "Deep Tech, AI, Health Tech, Future of Work, Enterprise SaaS, Fintech, Creator Economy",
    "ticketSize": "€500,000 - €1,500,000",
    "contactEmail": "hello@atlanticlabs.de",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=atlanticlabs.de",
    "dna": {
      "requirements": "Strong founders with a unique vision, disruptive technology focus, large market opportunity, often looking for founders to join their venture building process or invest in very early-stage teams. Strong technical defensibility is key.",
      "dealStructure": "Equity investment, often with significant involvement in company building through their platform. Terms are typical for early-stage venture capital.",
      "pitchHelper": "Subject: Deep Tech Seed: [Your Company Name] - Solving [Critical Industry Problem] with [Novel Technology]\n\nDear Atlantic Labs Team,\n\nI'm [Your Name], founder of [Your Company], a [Deep Tech/AI/Enterprise SaaS] venture addressing [critical industry problem] in the [specific sector]. We've developed [briefly describe your disruptive technology/approach] that offers a [quantifiable improvement/unique capability] compared to existing solutions.\n\nWe are operating in a market with immense potential ([market size]) and have already achieved [1-2 key technical milestones, e.g., functional prototype, patent filed, initial pilot success]. Our team brings [relevant expertise, e.g., PhD in AI, 10+ years in X industry].\n\nWe're raising a €[X]M Seed round to [briefly state use of funds, e.g., further develop our IP, expand pilot programs, recruit core engineering talent]. Your expertise in fostering deep tech and enterprise solutions from the ground up makes Atlantic Labs an ideal partner. I've attached our deck for your review and would welcome a brief discussion.\n\nThank you for your time.\n\nSincerely,\n[Your Name]\n[Your Website]\n[Link to Deck]",
      "pitchTips": [
        "Articulate the 'Why Now': For disruptive deep tech, clearly explain the market shifts or technological breakthroughs that make your solution uniquely viable and impactful *right now*.",
        "Demonstrate Venture Building Potential: Frame your pitch not just as a product, but as a potential category-defining business, highlighting areas where strategic support could accelerate growth, appealing to their company-builder mindset.",
        "Highlight Technical Defensibility: Clearly state what makes your technology proprietary or difficult to replicate, as they are keen on foundational, defensible innovations."
      ]
    }
  },
  {
    "id": "target-global",
    "name": "Target Global",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed",
    "sectors": "Fintech, SaaS, AI, Deep Tech, Health Tech, Mobility, PropTech, Consumer",
    "ticketSize": "$500,000 - $2,000,000",
    "contactEmail": "info@targetglobal.vc",
    "contactForm": null,
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=targetglobal.vc",
    "dna": {
      "requirements": "Strong team, large market potential, compelling product, evidence of early traction, scalable business model. European and Israeli focus with global ambitions.",
      "dealStructure": "Standard VC equity investment with a focus on long-term partnerships and follow-on rounds.",
      "pitchHelper": "Subject: Seed Round: [Your Company Name] - Scaling [Solution] in [Large Market] (X% MoM Growth)\n\nDear Target Global Team,\n\nI'm [Your Name], CEO of [Your Company], and we are building [briefly describe your scalable tech solution] for the [large, growing market]. We are tackling [specific problem] and have achieved impressive early traction, including [1-2 impressive KPIs, e.g., $X ARR in Y months, Z active users, strong retention metrics].\n\nOur product [explain your core offering and competitive advantage] is poised for significant expansion, and we're targeting a [regional/global] leadership position. We believe our vision aligns with Target Global's track record of backing high-growth companies with global potential, particularly in [mention a relevant sector, e.g., Fintech, SaaS].\n\nWe are currently raising a $[X]M Seed round to [briefly state use of funds, e.g., accelerate market entry, expand our engineering team, invest in sales & marketing]. Our detailed pitch deck is linked below. We would greatly appreciate the opportunity for an introductory call to share more about our progress and plans.\n\nThank you,\n[Your Name]\n[Your Website]\n[Link to Deck]",
      "pitchTips": [
        "Emphasize Market Scale & Ambition: From the outset, articulate the massive market opportunity and your global or regional leadership ambitions, as Target Global looks for ventures with significant scale potential.",
        "Highlight Key Performance Indicators (KPIs) Clearly: Provide your most impressive and relevant KPIs (e.g., rapid user growth, revenue metrics, retention) upfront to demonstrate traction and scalability.",
        "Structured and Professional: Given their broad investment scope and large fund, present a well-structured, professional, and easily digestible pitch that quickly conveys your value proposition and potential."
      ]
    }
  },
  {
    "id": "andreessen-horowitz",
    "name": "Andreessen Horowitz (a16z)",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed / Series A",
    "sectors": "AI, SaaS, Fintech, Deep Tech, Bio, Crypto",
    "ticketSize": "$500k - $2M+",
    "contactEmail": "info@a16z.com",
    "contactForm": "",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=a16z.com",
    "dna": {
      "requirements": "Exceptional founders with deep technical insights or unique market understanding. Disruptive technology or business model with the potential for significant market impact. Focus on large, expanding markets.",
      "dealStructure": "Typically equity investments, convertible notes for earlier stages. Standard Silicon Valley VC terms, often leading rounds with significant ownership percentages.",
      "pitchHelper": "Subject: [Company Name] - Revolutionizing [Specific Industry/Problem] with [Your Solution/Tech]\n\nDear a16z Team,\n\nI'm writing to introduce [Company Name], where we are building [brief, compelling problem statement] for [target market]. Our [unique technology/approach] allows us to [key differentiator/impact], achieving [early traction or proof of concept, e.g., 'X users in Y months', 'Z MRR', or 'successful pilot with A customer'].\n\nOur founding team, [Co-founder 1 Name] ([relevant background, e.g., 'ex-Google AI researcher']) and [Co-founder 2 Name] ([relevant background, e.g., 'successful SaaS entrepreneur']), combines deep domain expertise with a proven ability to execute. We believe [Company Name] is uniquely positioned to become a leader in the [specific market] space, aligning with a16z's thesis on [mention a specific a16z sector/theme, e.g., 'the future of enterprise AI' or 'creator economy infrastructure'].\n\nWe are currently raising a [Pre-Seed/Seed] round of [$X] to [achieve key milestones, e.g., 'scale our engineering team', 'launch v2', 'acquire X customers']. I've attached a brief deck outlining our vision, team, and early progress. We would be thrilled to share more about how we are [big vision statement] and explore how a16z's expertise could accelerate our journey.\n\nBest regards,\n[Your Name]\n[Your Title]\n[Company Website]\n[LinkedIn Profile]",
      "pitchTips": [
        "Seek a warm introduction from a mutual connection, as a16z highly values network referrals. This significantly increases the likelihood of your email being read and taken seriously.",
        "Your subject line should be clear, concise, and immediately convey your value proposition. Avoid buzzwords and focus on the core problem you solve and the innovative nature of your solution.",
        "Given their deep expertise, tailor your pitch to show a profound understanding of the market you're entering and how your technology uniquely addresses it. Highlight any proprietary research or fundamental breakthroughs."
      ]
    }
  },
  {
    "id": "general-catalyst",
    "name": "General Catalyst",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed / Series A",
    "sectors": "AI, SaaS, Fintech, Deep Tech, Health, Climate",
    "ticketSize": "$500k - $3M+",
    "contactEmail": "info@generalcatalyst.com",
    "contactForm": "",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=generalcatalyst.com",
    "dna": {
      "requirements": "Exceptional founders tackling large, important problems with a vision to build enduring companies. Focus on companies with significant potential for positive impact and scalable business models.",
      "dealStructure": "Flexible investment approach ranging from convertible notes at Seed to significant equity stakes at Series A and beyond. Emphasis on long-term partnership.",
      "pitchHelper": "Subject: [Company Name] - Building the Future of [Specific Industry] with [Key Innovation]\n\nDear General Catalyst Team,\n\nMy name is [Your Name], and I am the [Founder/CEO] of [Company Name]. We are addressing the critical challenge of [specific problem statement] for [target audience], a market we estimate to be worth [$X billion]. Our [AI-driven platform/deep tech solution/innovative SaaS] is designed to [describe unique value proposition], providing [tangible benefits, e.g., '50% efficiency gains' or 'unlocking new revenue streams'].\n\nWe have already achieved [mention key traction, e.g., 'signed X pilot customers', 'generated Y MRR in Z months', 'successful MVP with strong user engagement'] and are seeing [positive trend or market validation]. Our team, including [Co-founder 1, relevant expertise] and [Co-founder 2, relevant expertise], is uniquely qualified to execute on this vision, having previously [mention relevant achievements/backgrounds].\n\nWe are currently raising a [Pre-Seed/Seed] round of [$X] to [outline immediate goals, e.g., 'expand our product roadmap', 'grow our sales team', 'penetrate new markets']. We are particularly drawn to General Catalyst's commitment to 'enduring companies' and believe our long-term vision aligns perfectly with your investment philosophy, especially your work in [mention relevant GC portfolio area or partner interest].\n\nAttached is our deck for your review. We would appreciate the opportunity to discuss how [Company Name] is poised to make a significant impact in [your sector].\n\nSincerely,\n[Your Name]\n[Your Title]\n[Company Website]\n[LinkedIn Profile]",
      "pitchTips": [
        "Research individual partners at General Catalyst who have relevant sector expertise or express interest in your specific problem space. Address your email directly to them for higher impact.",
        "Focus on the 'why' – why your problem is massive and why your team is uniquely equipped to solve it. General Catalyst looks for bold, foundational ideas, so emphasize the long-term potential and impact.",
        "Keep your initial email concise, highlighting key metrics or milestones that demonstrate clear progress and market validation. Avoid overly technical jargon; explain your innovation in terms of its business value and impact."
      ]
    }
  },
  {
    "id": "northzone",
    "name": "Northzone",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed / Series A",
    "sectors": "SaaS, Fintech, Deep Tech, Health, Consumer",
    "ticketSize": "€1M - €10M+",
    "contactEmail": "info@northzone.com",
    "contactForm": "https://northzone.com/pitch-us/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=northzone.com",
    "dna": {
      "requirements": "Strong founding team, compelling product vision solving a significant problem, clear market opportunity, and a scalable business model. European focus or global ambition starting from Europe. Initial traction is highly valued.",
      "dealStructure": "Typical European Seed/Series A equity investments. Participates in rounds from €1M up to €10M+, often co-leading or leading rounds.",
      "pitchHelper": "Subject: Pitch: [Company Name] - [Concise Value Proposition] for the European Market\n\nDear Northzone Team,\n\nI am [Your Name], Co-founder & CEO of [Company Name], a [brief description of your company, e.g., 'AI-powered SaaS platform'] revolutionizing [specific industry] by [solve problem/provide benefit]. We are building a solution that addresses [specific European market pain point/opportunity], estimated to be a €[X] billion market.\n\nOur [product/service] provides [key features/benefits] to [target customer segment]. We've achieved strong early traction, including [mention specific metrics, e.g., '€Y ARR', 'Z active users', 'X enterprise pilot customers'], demonstrating clear product-market fit. Our team, composed of [Co-founder 1, key experience] and [Co-founder 2, key experience], possesses the unique blend of technical and commercial expertise required to dominate this space.\n\nWe are currently raising a [Seed/Series A] round of €[X] to [outline use of funds, e.g., 'expand our engineering team', 'accelerate market penetration in key European cities', 'further develop our AI capabilities']. We are particularly impressed by Northzone's track record in scaling European tech giants and believe your deep understanding of the [SaaS/Fintech/Deep Tech] landscape would be invaluable as we grow.\n\nAttached is our investor deck. We would be grateful for the opportunity to present our vision and discuss how [Company Name] can become a leader in [our sector] with Northzone's support.\n\nBest regards,\n[Your Name]\n[Your Title]\n[Company Website]\n[LinkedIn Profile]",
      "pitchTips": [
        "Clearly articulate your company's European focus or global ambitions stemming from a strong European base. Northzone is a European fund, and showing you understand this context is crucial.",
        "When submitting through their 'Pitch Us' form, ensure all requested fields are thoroughly completed. Pay special attention to the 'What problem are you solving?' and 'What's unique about your solution?' sections.",
        "Highlight your traction and key performance indicators early in your pitch. Northzone looks for evidence of execution and market validation, so concrete numbers (MRR, user growth, pilot agreements) are highly impactful."
      ]
    }
  },
  {
    "id": "connect-ventures",
    "name": "Connect Ventures",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Pre-Seed / Seed",
    "sectors": "SaaS, Fintech, AI, Deep Tech, Marketplaces",
    "ticketSize": "£250k - £1.5M",
    "contactEmail": "hello@connectventures.co",
    "contactForm": "",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=connectventures.co",
    "dna": {
      "requirements": "Exceptional founders with compelling vision and deep passion. Early-stage focus on pre-seed and seed. Strong preference for UK-based teams or those with clear UK/European market entry strategy. Prioritizes product-led growth and innovative tech.",
      "dealStructure": "Flexible Seed investment terms, often convertible notes or equity. Typically leads or co-leads Pre-Seed/Seed rounds.",
      "pitchHelper": "Subject: Pre-Seed Pitch: [Company Name] - [Brief, Intriguing Problem Solved] for [Target Market]\n\nDear Connect Ventures Team,\n\nMy name is [Your Name], Co-founder of [Company Name], a [brief description, e.g., 'Pre-Seed SaaS startup'] tackling the challenge of [specific problem] for [target audience]. We believe the existing solutions are inadequate because [explain why], leading to [negative consequences for users/businesses]. Our [innovative approach/AI-powered solution] offers a superior way to [key benefit], creating [positive impact].\n\nWe are a [UK/European]-based team of [X] founders, bringing together [Co-founder 1's key expertise, e.g., 'ex-DeepMind ML engineer'] and [Co-founder 2's key expertise, e.g., 'proven SaaS operator']. While early stage, we have [mention any early traction, e.g., 'a functional MVP with X early adopters', 'strong customer interest validated through Y interviews', 'initial pilots underway'].\n\nWe are currently raising a [Pre-Seed/Seed] round of £[X] to [outline specific use of funds, e.g., 'build out our core engineering team', 'launch our beta product', 'acquire initial paying customers']. We are particularly impressed by Connect Ventures' focus on backing founders from day zero and your expertise in nurturing early-stage SaaS and AI companies, exemplified by your investment in [mention a relevant Connect portfolio company, if known].\n\nI've attached a concise deck that dives deeper into our vision and early progress. We'd love the opportunity to share our story and discuss how we can partner to build a category-defining company.\n\nWarmly,\n[Your Name]\n[Your Title]\n[Company Website]\n[LinkedIn Profile]",
      "pitchTips": [
        "Connect Ventures emphasizes a founder-first approach. In your pitch, clearly articulate your personal story, vision, and the 'why' behind building your company. Authenticity resonates.",
        "Keep your email concise and focus on the core problem, your unique solution, and any early evidence of potential. Avoid attaching large documents; a brief, compelling deck linked or attached is sufficient.",
        "Demonstrate a clear understanding of the UK/European market, even if your ambition is global. Connect Ventures is deeply embedded in the European ecosystem, and showing this awareness is beneficial."
      ]
    }
  },
  {
    "id": "nauta-capital",
    "name": "Nauta Capital",
    "type": "investor",
    "investorType": "Venture Capital",
    "targetStage": "Seed / Series A",
    "sectors": "B2B SaaS, AI (within B2B), Fintech (within B2B), Deep Tech (within B2B)",
    "ticketSize": "€1M - €5M",
    "contactEmail": "info@nautacapital.com",
    "contactForm": "https://www.nautacapital.com/contact/",
    "logo": "https://www.google.com/s2/favicons?sz=128&domain=nautacapital.com",
    "dna": {
      "requirements": "Strong focus on B2B SaaS companies. Scalable business model targeting enterprise clients or significant B2B verticals. Demonstrated initial traction (e.g., pilot customers, early recurring revenue) and a clear path to market leadership in a specific niche.",
      "dealStructure": "Typically leads or co-leads Seed/Series A rounds for B2B SaaS companies. Equity investments ranging from €1M to €5M, with the ability to follow on in subsequent rounds.",
      "pitchHelper": "Subject: B2B SaaS Seed Round: [Company Name] - Automating [Specific Enterprise Pain Point]\n\nDear Nauta Capital Team,\n\nI'm [Your Name], Co-founder & CEO of [Company Name], a B2B SaaS platform designed to [solve specific enterprise problem] for [target industry/segment]. We've identified a significant gap in the market for [describe current inefficient process/lack of solution], costing enterprises an estimated €[X] annually.\n\nOur [AI-driven/deep tech] solution provides [key features, e.g., 'real-time analytics', 'automated workflows', 'enhanced security'] that directly translate into [tangible business benefits, e.g., 'X% cost reduction', 'Y% increase in productivity']. We are proud to already be working with [mention 1-2 pilot/early paying customers, if applicable] and have achieved [key metric, e.g., '€Z MRR after 6 months', 'X active enterprise users'].\n\nThe founding team, comprising [Co-founder 1, relevant B2B/tech background] and [Co-founder 2, relevant sales/domain expertise], has a proven track record in building and scaling enterprise software. We are raising a Seed round of €[X] to [outline specific use of funds, e.g., 'expand our engineering team', 'launch a robust sales & marketing engine', 'enter new European markets'].\n\nWe are particularly drawn to Nauta Capital's deep expertise and singular focus on B2B SaaS, and believe our vision for [Company Name] aligns perfectly with your portfolio of transformative enterprise solutions. Attached is our investor deck, and we'd be delighted to discuss how we can solve critical challenges for businesses globally.\n\nSincerely,\n[Your Name]\n[Your Title]\n[Company Website]\n[LinkedIn Profile]",
      "pitchTips": [
        "Explicitly state your company's B2B SaaS nature in the subject line and throughout the pitch. Nauta Capital has a clear investment thesis, and aligning with it immediately is crucial.",
        "Focus on quantifiable business value for your target enterprise customers. Highlight how your solution drives efficiency, saves costs, or unlocks new revenue streams, using any available early traction data.",
        "When using their contact form, provide a concise summary of your business plan that clearly outlines the problem, solution, market size, team, and current traction. Ensure it's easy to grasp the B2B value proposition."
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = INVESTORS_DATA;
}
