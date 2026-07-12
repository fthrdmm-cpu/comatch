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
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = INVESTORS_DATA;
}
