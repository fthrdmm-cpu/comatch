// CoMatch - Global B2B Matching Directory

document.addEventListener("DOMContentLoaded", () => {
    // Database state
    let dbData = [];
    
    // Active API Server URL (points to Render when live on Vercel)
    const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? '' 
        : 'https://comatch-33as.onrender.com';
    
    // English Fallback database (in case brands.js is not loaded yet)
    const fallbackData = [
        {
            "id": "logitech-g",
            "name": "Logitech G",
            "type": "brand",
            "category": "Gaming",
            "sponsorType": "Product Gifting / Affiliate",
            "creatorSize": "Micro (10k-50k)",
            "contactEmail": "mediarelations@logitech.com",
            "contactForm": "https://www.logitech.com/en-us/influencers-creators-program.html",
            "dna": {
                "requirements": "High-quality camera/webcam setup, consistent weekly streaming or content schedule, clean brand-friendly community guidelines.",
                "dealStructure": "Initial setup hardware package (headset, mouse, keyboard) + 10% affiliate link/code. Performance-based flat-fee upgrades.",
                "pitchHelper": "Hi Logitech G Partnerships Team,\n\nMy name is [Name], and I create content focused on [Game/Topic] on [Platform/Channel Link]. I have been using Logitech G peripherals for years and love their reliability. I would love to explore a partnership through your Creator Program. I've attached my channel analytics below.\n\nBest regards,\n[Name]\n[Channel Link]"
            },
            "logo": "https://logo.clearbit.com/logitechg.com"
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
            "dna": {
                "requirements": "Active YouTube or Twitch channel, hardware/peripheral reviews, esports tournament participation, or active streaming profile.",
                "dealStructure": "Official entry to the Team Razer program. Free peripheral kits, early access to new releases, and affiliate commissions up to 10%.",
                "pitchHelper": "Hi Team Razer,\n\nI am [Name], a content creator at [Channel Link] specializing in [Game/Tech]. I am a long-time fan of Razer hardware and would love to collaborate under your Creator Program. I'd love to showcase Razer products to my active audience of [Subscriber Count] gamers.\n\nBest regards,\n[Name]"
            },
            "logo": "https://logo.clearbit.com/razer.com"
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
            "dna": {
                "requirements": "Excellent English communication skills, global audience. Highly active on social media with a humorous, meme-friendly vibe.",
                "dealStructure": "Global marketing campaign integrations, co-branded sponsor gear allocations, streamer salary/commission pools.",
                "pitchHelper": "Hi G2 Esports Partnerships Team,\n\nI am [Name], a content creator with a global gaming audience on [Link]. I love G2's social media style and competitive dominance. I would love to pitch a collaboration idea for your creator roster. Attached is my media kit.\n\nLet's make some noise,\n[Name]"
            },
            "logo": "https://logo.clearbit.com/g2esports.com"
        }
    ];

    // Initial data load placeholder (will call loadBrands below)

    // Active filters
    let activeFilters = {
        search: "",
        category: "all",
        sponsorType: "all",
        creatorSize: "all",
        type: "all"
    };

    // DOM Elements
    const brandGrid = document.getElementById("brand-grid");
    const searchInput = document.getElementById("search-input");
    const resultsCountEl = document.getElementById("results-count");
    
    // Stats elements
    const statTotalOpportunities = document.getElementById("stat-total-opportunities");
    
    // Filters buttons
    const categoryBtns = document.querySelectorAll("#filter-category .filter-btn");
    const typeBtns = document.querySelectorAll("#filter-type .filter-btn");
    const sizeBtns = document.querySelectorAll("#filter-size .filter-btn");
    const typePills = document.querySelectorAll(".type-filter-pills .pill");
    
    // Submit Brand triggers
    const btnSidebarSubmit = document.getElementById("btn-sidebar-submit");
    const btnBannerSubmit = document.getElementById("btn-banner-submit");
    
    // Modals
    const detailModal = document.getElementById("detail-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalBodyContent = document.getElementById("modal-body-content");
    
    const submitModal = document.getElementById("submit-modal");
    const submitModalClose = document.getElementById("submit-modal-close");
    const submitBrandForm = document.getElementById("submit-brand-form");
    
    // Guide Modal
    const guideModal = document.getElementById("guide-modal");
    const btnSidebarGuide = document.getElementById("btn-sidebar-guide");
    const guideModalClose = document.getElementById("guide-modal-close");

    // About Modal
    const aboutModal = document.getElementById("about-modal");
    const btnSidebarAbout = document.getElementById("btn-sidebar-about");
    const aboutModalClose = document.getElementById("about-modal-close");

    // Matchmaker Modal
    const matchmakerModal = document.getElementById("matchmaker-modal");
    const btnSidebarMatchmaker = document.getElementById("btn-sidebar-matchmaker");
    const matchmakerModalClose = document.getElementById("matchmaker-modal-close");
    const matchmakerDesc = document.getElementById("matchmaker-desc");
    const btnMatchmakerSubmit = document.getElementById("btn-matchmaker-submit");
    const matchmakerLoading = document.getElementById("matchmaker-loading");
    const matchmakerResultsTitle = document.getElementById("matchmaker-results-title");
    const matchmakerResults = document.getElementById("matchmaker-results");

    // Load saved API Key from localStorage & handle visibility
    const apiKeyInput = document.getElementById("form-api-key");
    const apiKeyContainer = document.getElementById("api-key-container");
    
    if (apiKeyInput) {
        apiKeyInput.value = localStorage.getItem("gemini_api_key") || "";
    }
    
    if (apiKeyContainer) {
        if (window.location.protocol.startsWith('http')) {
            apiKeyContainer.style.display = "none";
        } else {
            apiKeyContainer.style.display = "block";
        }
    }

    // Initialize layout
    loadBrands();

    // Event Listeners
    searchInput.addEventListener("input", (e) => {
        activeFilters.search = e.target.value.toLowerCase().trim();
        renderBrands();
    });

    // Category button selection
    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilters.category = btn.getAttribute("data-category");
            renderBrands();
        });
    });

    // Sponsor Type selection
    typeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            typeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilters.sponsorType = btn.getAttribute("data-sponsortype");
            renderBrands();
        });
    });

    // Creator Size selection
    sizeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            sizeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilters.creatorSize = btn.getAttribute("data-size");
            renderBrands();
        });
    });

    // Brand vs Team Pills
    typePills.forEach(pill => {
        pill.addEventListener("click", () => {
            typePills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            activeFilters.type = pill.getAttribute("data-type");
            renderBrands();
        });
    });

    // Modal Close Triggers
    modalCloseBtn.addEventListener("click", () => closeModal(detailModal));
    detailModal.addEventListener("click", (e) => {
        if (e.target === detailModal) closeModal(detailModal);
    });

    // Submit Brand Modal Triggers
    btnSidebarSubmit.addEventListener("click", () => {
        openModal(submitModal);
        updateLivePreview();
    });
    btnBannerSubmit.addEventListener("click", () => {
        openModal(submitModal);
        updateLivePreview();
    });
    submitModalClose.addEventListener("click", () => closeModal(submitModal));
    submitModal.addEventListener("click", (e) => {
        if (e.target === submitModal) closeModal(submitModal);
    });

    // Sponsorship Guide Modal Triggers
    btnSidebarGuide.addEventListener("click", () => openModal(guideModal));
    guideModalClose.addEventListener("click", () => closeModal(guideModal));
    guideModal.addEventListener("click", (e) => {
        if (e.target === guideModal) closeModal(guideModal);
    });

    // About Modal Triggers
    if (btnSidebarAbout) {
        btnSidebarAbout.addEventListener("click", () => openModal(aboutModal));
        aboutModalClose.addEventListener("click", () => closeModal(aboutModal));
        aboutModal.addEventListener("click", (e) => {
            if (e.target === aboutModal) closeModal(aboutModal);
        });
    }

    // AI Matchmaker Modal Triggers
    if (btnSidebarMatchmaker) {
        btnSidebarMatchmaker.addEventListener("click", () => {
            openModal(matchmakerModal);
            if (matchmakerDesc) matchmakerDesc.value = "";
            if (matchmakerResults) matchmakerResults.innerHTML = "";
            if (matchmakerResultsTitle) matchmakerResultsTitle.style.display = "none";
        });
        matchmakerModalClose.addEventListener("click", () => closeModal(matchmakerModal));
        matchmakerModal.addEventListener("click", (e) => {
            if (e.target === matchmakerModal) closeModal(matchmakerModal);
        });
    }
    // Handle brand submission form
    submitBrandForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        // Extract values
        const name = document.getElementById("form-name").value;
        const type = document.getElementById("form-type").value;
        const category = document.getElementById("form-category").value;
        const sponsorType = document.getElementById("form-sponsor-type").value;
        const creatorSize = document.getElementById("form-creator-size").value;
        const email = document.getElementById("form-email").value;
        const url = document.getElementById("form-url").value;
        const logoUrl = document.getElementById("form-logo").value;
        const reqs = document.getElementById("form-reqs").value;
        const apiKey = apiKeyInput ? apiKeyInput.value.trim() : "";

        // Save API key if provided
        if (apiKey) {
            localStorage.setItem("gemini_api_key", apiKey);
        }

        // Visual indicator that request is loading
        const submitBtn = submitBrandForm.querySelector('button[type="submit"]');
        const originalBtnHtml = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';

        // Check if server API is active
        if (window.location.protocol.startsWith('http')) {
            try {
                const response = await fetch(`${API_BASE_URL}/api/submit-brand`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        url,
                        email,
                        description: reqs,
                        logoUrl
                    })
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    // Prepend new listing from AI
                    dbData.unshift(result.brand);
                    
                    // Reset and close
                    submitBrandForm.reset();
                    closeModal(submitModal);
                    
                    calculateStats();
                    renderBrands();
                    showNotification(`Success! ${result.brand.name} approved by AI and added.`);
                } else {
                    // Show validation error (Spam, NSFW, domain offline)
                    showNotification(`Error: ${result.error || 'Failed to submit.'}`, true);
                }
            } catch (err) {
                console.error("[-] API Submit failed:", err);
                showNotification("Error: Backend server unreachable.", true);
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
                if (apiKeyInput) apiKeyInput.value = apiKey;
            }
            return;
        }

        // Local Offline Mode (Direct Gemini API Call)
        if (apiKey) {
            try {
                const prompt = `You are the auto-moderator and submission processor bot for CoMatch, a web directory of B2B brand partnerships and sponsorships.
Evaluate this brand submission:
Brand Name: "${name}"
Website URL: "${url}"
Contact Email: "${email || 'Not provided'}"
Description: "${reqs}"
User-provided Logo URL: "${logoUrl || 'Not provided'}"

SAFETY / MODERATION CHECKS:
- Check if this brand or description contains adult/sexually explicit (NSFW), violence, drugs, gambling, hate speech, or illegal activities.
- Check if it is spam or gibberish (e.g. random letters, advertisements for unrelated services).
- Verify if it represents an actual brand or esports team that could reasonably offer creator sponsorships (hardware, tech, gaming, energy drinks, clothing, hosting, etc.).

If it is unsafe, spam, or completely irrelevant, you MUST reject it by returning the following JSON:
{
  "approved": false,
  "reason": "Specify a clear rejection reason in English (e.g., Content violates platform guidelines because it contains illegal, adult, or spam material)."
}

If it is safe and relevant, you MUST accept it and enrich the data by returning the following JSON:
{
  "approved": true,
  "brand": {
    "id": "${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}",
    "name": "${name}",
    "type": "${type}",
    "category": "${category}",
    "sponsorType": "${sponsorType}",
    "creatorSize": "${creatorSize}",
    "contactEmail": "${email || null}",
    "contactForm": "${url}",
    "logo": "Use the user-provided logo URL if valid. Otherwise generate: https://images.weserv.nl/?url=logo.clearbit.com/domain-name-extracted-from-url",
    "dna": {
      "requirements": "Write a professional summary of requirements for creators based on the brand's profile in English.",
      "dealStructure": "Write what kind of deal the brand likely offers (e.g., Product gifting, Affiliate code, Flat fee payout).",
      "pitchHelper": "Write a customized, professional introductory pitch email template in English. Include brackets like [Name] and [Channel Link]."
    }
  }
}

Return ONLY the raw JSON text block. Do not wrap it in markdown code blocks like \`\`\`json.`;

                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: prompt
                            }]
                        }]
                    })
                });

                if (!response.ok) {
                    throw new Error(`Google API returned status ${response.status}`);
                }

                const responseData = await response.json();
                if (!responseData.candidates || responseData.candidates.length === 0) {
                    throw new Error("No response candidates from Gemini API");
                }

                let responseText = responseData.candidates[0].content.parts[0].text;
                responseText = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
                const aiResponse = JSON.parse(responseText);

                if (!aiResponse.approved) {
                    showNotification(`Error: ${aiResponse.reason || "Rejected by AI moderator."}`, true);
                    return;
                }

                const enrichedBrand = aiResponse.brand;
                enrichedBrand.premium = false;

                // Enforce the user-provided logo if valid, else keep the AI generated one
                if (logoUrl && (logoUrl.startsWith('http://') || logoUrl.startsWith('https://'))) {
                    enrichedBrand.logo = logoUrl;
                }

                // Add to database in-memory
                dbData.unshift(enrichedBrand);

                // Save to localStorage so it persists on page refresh!
                const customBrands = JSON.parse(localStorage.getItem("custom_brands") || "[]");
                customBrands.unshift(enrichedBrand);
                localStorage.setItem("custom_brands", JSON.stringify(customBrands));

                // Reset and close
                submitBrandForm.reset();
                closeModal(submitModal);
                
                calculateStats();
                renderBrands();
                showNotification(`Success! ${enrichedBrand.name} approved by AI and added!`);
            } catch (err) {
                console.error("[-] Client-side AI Moderation failed:", err);
                showNotification("Error: Direct Gemini API call failed. Verify your API key.", true);
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
                if (apiKeyInput) apiKeyInput.value = apiKey;
            }
            return;
        }

        // Local Offline Mode Fallback (Simulated, no API key provided)
        try {
            // Generate clean ID
            const id = name.toLowerCase().replace(/[^a-z0-9]/g, "-");
            const domainGuess = url ? getDomain(url) : `${id}.com`;
            const logo = logoUrl ? logoUrl : `https://www.google.com/s2/favicons?domain=${domainGuess}&sz=128`;

            const newListing = {
                id,
                name,
                type,
                category,
                sponsorType,
                creatorSize,
                contactEmail: email || null,
                contactForm: url,
                dna: {
                    requirements: reqs || "Not specified by submitter.",
                    dealStructure: "Inquire for specific details.",
                    pitchHelper: `Hi ${name} Partnerships,\n\nMy name is [Name], and I run the channel [Channel Link]. I would love to explore a sponsorship relationship with ${name}. I have attached my media kit and details for your review.\n\nBest,\n[Name]`
                },
                logo,
                premium: false
            };

            dbData.unshift(newListing);

            // Save to localStorage
            const customBrands = JSON.parse(localStorage.getItem("custom_brands") || "[]");
            customBrands.unshift(newListing);
            localStorage.setItem("custom_brands", JSON.stringify(customBrands));
            
            submitBrandForm.reset();
            closeModal(submitModal);
            
            calculateStats();
            renderBrands();
            showNotification(`Offline mode: ${name} added in-memory!`);
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;
            if (apiKeyInput) apiKeyInput.value = apiKey;
        }
    });

    // Helper to extract domain name for Clearbit
    function getDomain(url) {
        try {
            let hostname = new URL(url).hostname;
            hostname = hostname.replace("www.", "");
            return hostname;
        } catch(e) {
            return url.replace(/https?:\/\//i, "").replace("www.", "").split('/')[0];
        }
    }

    // Fetch Brands from Server API (Dual-Mode loading)
    async function loadBrands() {
        try {
            // Check if we are running in an HTTP/HTTPS context rather than file:///
            if (window.location.protocol.startsWith('http')) {
                const response = await fetch(`${API_BASE_URL}/api/brands`);
                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data) && data.length > 0) {
                        dbData = data;
                        console.log(`[+] Loaded ${dbData.length} brands dynamically from Express API`);
                        calculateStats();
                        renderBrands();
                        return;
                    }
                }
            }
        } catch (e) {
            console.warn("[-] Express API server offline or unreachable. Falling back to local script memory.");
        }

        // Fallback to static brands.js file
        if (typeof BRANDS_DATA !== 'undefined' && Array.isArray(BRANDS_DATA)) {
            dbData = [...BRANDS_DATA];
            console.log(`[+] Loaded ${dbData.length} brands from local static memory`);
        } else {
            console.warn("[-] brands.js not loaded. Using English fallback data.");
            dbData = [...fallbackData];
        }

        // Load custom offline brands from localStorage
        try {
            const customBrands = JSON.parse(localStorage.getItem("custom_brands") || "[]");
            if (Array.isArray(customBrands) && customBrands.length > 0) {
                dbData = [...customBrands, ...dbData];
                console.log(`[+] Prepended ${customBrands.length} custom brands from localStorage`);
            }
        } catch (err) {
            console.error("[-] Failed to load custom brands from localStorage:", err);
        }

        calculateStats();
        renderBrands();
    }

    // Helper functions
    function calculateStats() {
        if (statTotalOpportunities) {
            statTotalOpportunities.textContent = dbData.length;
        }
    }

    function renderBrands() {
        brandGrid.innerHTML = "";
        
        const filtered = dbData.filter(item => {
            // Search criteria
            const matchesSearch = item.name.toLowerCase().includes(activeFilters.search) || 
                                  item.category.toLowerCase().includes(activeFilters.search) ||
                                  (item.sponsorType && item.sponsorType.toLowerCase().includes(activeFilters.search));
            
            // Category criteria
            const matchesCategory = activeFilters.category === "all" || item.category === activeFilters.category;
            
            // Sponsor Type criteria
            const matchesSponsorType = activeFilters.sponsorType === "all" || 
                                      (item.sponsorType && item.sponsorType.includes(activeFilters.sponsorType));
            
            // Creator Size criteria
            const matchesSize = activeFilters.creatorSize === "all" || 
                                (item.creatorSize && item.creatorSize.includes(activeFilters.creatorSize));
            
            // Entity type (brand / team) criteria
            const matchesType = activeFilters.type === "all" || item.type === activeFilters.type;

            return matchesSearch && matchesCategory && matchesSponsorType && matchesSize && matchesType;
        });

        resultsCountEl.textContent = `${filtered.length} opportunit${filtered.length === 1 ? 'y' : 'ies'} found`;

        if (filtered.length === 0) {
            brandGrid.innerHTML = `
                <div class="no-results">
                    <i class="fa-solid fa-face-frown"></i>
                    <h3>No results found</h3>
                    <p>Try adjusting your search criteria or resetting the filters.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(item => {
            const card = document.createElement("div");
            card.className = "brand-card";
            card.setAttribute("data-id", item.id);
            
            const contactStatus = item.contactEmail ? 'available' : 'form-only';
            const contactText = item.contactEmail ? 'Email Available' : 'Application Link';
            const contactIcon = item.contactEmail ? 'fa-envelope' : 'fa-clipboard-list';
            
            // Initials for avatar fallback
            const initials = item.name.substring(0, 2).toUpperCase();

            card.innerHTML = `
                <div class="card-header">
                    <div class="brand-logo-container">
                        <img src="${item.logo}" alt="${item.name}" referrerpolicy="no-referrer" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="avatar-fallback" style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(135deg, var(--color-primary), var(--color-premium)); color: #fff; font-weight: bold; font-size: 1.15rem; border-radius: var(--border-radius-sm);">${initials}</div>
                    </div>
                    <span class="badge-type ${item.type === 'team' ? 'team-badge' : 'brand-badge'}">
                        ${item.type === 'team' ? 'PARTNERSHIP' : 'BRAND'}
                    </span>
                </div>
                <h3>${item.name}</h3>
                <p class="brand-category">${item.category}</p>
                
                <div class="card-tags">
                    <span class="tag-capsule"><i class="fa-solid fa-tag"></i> ${getSponsorTypeLabel(item.sponsorType)}</span>
                    <span class="tag-capsule"><i class="fa-solid fa-users"></i> ${getScaleLabel(item.creatorSize)}</span>
                </div>
                
                <div class="card-contact-indicator ${contactStatus}">
                    <i class="fa-solid ${contactIcon}"></i> ${contactText}
                </div>
            `;

            card.addEventListener("click", () => openBrandDetails(item.id));
            brandGrid.appendChild(card);
        });
    }

    function openBrandDetails(id) {
        window.openBrandDetails = openBrandDetails; // Expose globally for matchmaker card clicks
        const item = dbData.find(b => b.id === id);
        if (!item) return;

        modalBodyContent.innerHTML = "";

        const contactHTML = item.contactEmail 
            ? `<p><i class="fa-solid fa-envelope" style="color: var(--color-primary); margin-right: 8px;"></i> <strong>${item.contactEmail}</strong></p>`
            : `<p><i class="fa-solid fa-globe" style="color: var(--color-primary); margin-right: 8px;"></i> <a href="${item.contactForm}" target="_blank" style="color: #60A5FA; text-decoration: underline;">Official Application Form</a></p>`;

        const pitchTemplate = item.dna.pitchHelper || "";
        const initials = item.name.substring(0, 2).toUpperCase();

        modalBodyContent.innerHTML = `
            <div class="modal-header-block">
                <div style="width: 64px; height: 64px; border-radius: var(--border-radius-sm); overflow: hidden; border: 1px solid var(--border-color); display: flex; flex-shrink: 0; background: var(--bg-main);">
                    <img src="${item.logo}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" referrerpolicy="no-referrer" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="avatar-fallback" style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(135deg, var(--color-primary), var(--color-premium)); color: #fff; font-weight: bold; font-size: 1.5rem;">${initials}</div>
                </div>
                <div class="modal-title-desc">
                    <h2>${item.name}</h2>
                    <div class="modal-badges">
                        <span class="badge-type ${item.type === 'team' ? 'team-badge' : 'brand-badge'}">
                            ${item.type === 'team' ? 'PARTNERSHIP' : 'BRAND'}
                        </span>
                        <span class="tag-capsule"><i class="fa-solid fa-tag"></i> ${item.category}</span>
                        <span class="tag-capsule"><i class="fa-solid fa-users"></i> ${getScaleLabel(item.creatorSize)}</span>
                        <span class="tag-capsule"><i class="fa-solid fa-handshake"></i> ${getSponsorTypeLabel(item.sponsorType)}</span>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4><i class="fa-solid fa-bullseye"></i> Sponsorship DNA (Requirements)</h4>
                <p>${item.dna.requirements || 'Not specified.'}</p>
            </div>

            <div class="modal-section">
                <h4><i class="fa-solid fa-handshake"></i> Compensation Structure</h4>
                <p>${item.dna.dealStructure || 'Not specified.'}</p>
            </div>

            <div class="modal-section">
                <h4><i class="fa-solid fa-envelope-open-text"></i> Contact Channels</h4>
                <div style="background-color: var(--bg-main); border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); padding: 16px;">
                    ${contactHTML}
                    ${item.contactForm && item.contactEmail ? `<p style="margin-top: 8px;"><i class="fa-solid fa-link" style="color: var(--text-muted); margin-right: 8px;"></i> <a href="${item.contactForm}" target="_blank" style="color: #60A5FA; text-decoration: none; font-size: 0.85rem;">Alternative Form Link</a></p>` : ''}
                </div>
            </div>

            <div class="modal-section">
                <h4><i class="fa-solid fa-magic"></i> Pitch Helper Template</h4>
                <div class="pitch-box-wrapper">
                    <pre class="pitch-code-block" id="pitch-text">${pitchTemplate}</pre>
                    <button class="btn-copy" id="btn-copy-pitch">
                        <i class="fa-solid fa-copy"></i> Copy
                    </button>
                </div>
            </div>

            <div class="modal-actions-footer">
                <a href="${item.contactForm || '#'}" target="_blank" class="btn btn-action-primary">
                    <i class="fa-solid fa-paper-plane"></i> Apply for Sponsorship
                </a>
                ${item.contactEmail ? `
                    <a href="mailto:${item.contactEmail}?subject=Sponsorship Inquiry&body=${encodeURIComponent(pitchTemplate)}" class="btn btn-action-secondary">
                        <i class="fa-solid fa-envelope"></i> Send Email
                    </a>
                ` : ''}
            </div>
        `;

        // Pitch template copy button logic
        const copyBtn = document.getElementById("btn-copy-pitch");
        copyBtn.addEventListener("click", () => {
            const text = document.getElementById("pitch-text").textContent;
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.classList.add("success");
                copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
                setTimeout(() => {
                    copyBtn.classList.remove("success");
                    copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i> Copy`;
                }, 2000);
            }).catch(err => {
                console.error("Clipboard copy failed: ", err);
            });
        });

        openModal(detailModal);
    }

    function openModal(modal) {
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function closeModal(modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "auto";
    }

    // Custom Toast Notification function
    function showNotification(message, isError = false) {
        const toast = document.createElement("div");
        toast.style.position = "fixed";
        toast.style.bottom = "24px";
        toast.style.right = "24px";
        toast.style.backgroundColor = isError ? "#ef4444" : "var(--color-accent)";
        toast.style.color = "#fff";
        toast.style.padding = "16px 24px";
        toast.style.borderRadius = "var(--border-radius-sm)";
        toast.style.boxShadow = isError ? "0 4px 15px rgba(239, 68, 68, 0.3)" : "0 4px 15px rgba(16, 185, 129, 0.3)";
        toast.style.zIndex = "300";
        toast.style.fontSize = "0.9rem";
        toast.style.fontWeight = "bold";
        toast.style.display = "flex";
        toast.style.alignItems = "center";
        toast.style.gap = "10px";
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        toast.style.transition = "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
        
        const icon = isError ? "fa-circle-xmark" : "fa-circle-check";
        toast.innerHTML = `<i class="fa-solid ${icon}" style="font-size: 1.1rem;"></i> ${message}`;
        
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.style.opacity = "1";
            toast.style.transform = "translateY(0)";
        }, 50);

        // Animate out
        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(10px)";
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    // B2B Label Translation Helpers
    function getSponsorTypeLabel(val) {
        if (!val) return 'Deal';
        if (val.includes('Product Gifting')) return 'Barter / Product';
        if (val.includes('Flat Fee')) return 'Sponsorship / Paid';
        if (val.includes('Affiliate')) return 'Affiliate / Referral';
        if (val.includes('B2B Partnership')) return 'B2B Collab';
        return val;
    }
    
    function getScaleLabel(val) {
        if (!val) return 'Any Scale';
        if (val.includes('Micro')) return 'Startup / Mid-Scale';
        if (val.includes('Macro')) return 'Enterprise / Tier-1';
        if (val.includes('Any Size')) return 'Any Scale';
        return val;
    }

    // Live Preview Logic for Submit Modal
    const formName = document.getElementById("form-name");
    const formType = document.getElementById("form-type");
    const formCategory = document.getElementById("form-category");
    const formSponsorType = document.getElementById("form-sponsor-type");
    const formCreatorSize = document.getElementById("form-creator-size");
    const formEmail = document.getElementById("form-email");
    const formLogo = document.getElementById("form-logo");
    const liveCardPreview = document.getElementById("live-card-preview");

    function updateLivePreview() {
        if (!liveCardPreview) return;
        
        const nameVal = (formName ? formName.value.trim() : "") || "Partner Name";
        const typeVal = formType ? formType.value : "brand";
        const categoryVal = formCategory ? formCategory.value : "Gaming";
        const sponsorTypeVal = formSponsorType ? formSponsorType.value : "Product Gifting";
        const creatorSizeVal = formCreatorSize ? formCreatorSize.value : "Any Size";
        const emailVal = formEmail ? formEmail.value.trim() : "";
        const logoVal = formLogo ? formLogo.value.trim() : "";
        
        const contactStatus = emailVal ? 'available' : 'form-only';
        const contactText = emailVal ? 'Email Available' : 'Application Link';
        const contactIcon = emailVal ? 'fa-envelope' : 'fa-clipboard-list';
        
        const initials = nameVal.substring(0, 2).toUpperCase();
        const logoUrl = logoVal || `https://www.google.com/s2/favicons?domain=${nameVal.toLowerCase().replace(/[^a-z0-9]/g, "") || "brand"}.com&sz=128`;
        
        liveCardPreview.innerHTML = `
            <div class="card-header">
                <div class="brand-logo-container">
                    <img src="${logoUrl}" alt="${nameVal}" referrerpolicy="no-referrer" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="avatar-fallback" style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(135deg, var(--color-primary), var(--color-premium)); color: #fff; font-weight: bold; font-size: 1.15rem; border-radius: var(--border-radius-sm);">${initials}</div>
                </div>
                <span class="badge-type ${typeVal === 'team' ? 'team-badge' : 'brand-badge'}">
                    ${typeVal === 'team' ? 'PARTNERSHIP' : 'BRAND'}
                </span>
            </div>
            <h3>${nameVal}</h3>
            <p class="brand-category">${categoryVal}</p>
            
            <div class="card-tags">
                <span class="tag-capsule"><i class="fa-solid fa-tag"></i> ${getSponsorTypeLabel(sponsorTypeVal)}</span>
                <span class="tag-capsule"><i class="fa-solid fa-users"></i> ${getScaleLabel(creatorSizeVal)}</span>
            </div>
            
            <div class="card-contact-indicator ${contactStatus}">
                <i class="fa-solid ${contactIcon}"></i> ${contactText}
            </div>
        `;
    }

    if (formName) {
        [formName, formEmail, formLogo].forEach(el => el.addEventListener("input", updateLivePreview));
        [formType, formCategory, formSponsorType, formCreatorSize].forEach(el => el.addEventListener("change", updateLivePreview));
    }

    // Handle AI Matchmaker Form Submission
    if (btnMatchmakerSubmit) {
        btnMatchmakerSubmit.addEventListener("click", async () => {
            const desc = matchmakerDesc.value.trim();
            if (desc.length < 10) {
                showNotification("Please write a description with at least 10 characters.", true);
                return;
            }

            // UI Loading state
            btnMatchmakerSubmit.disabled = true;
            const originalBtnHtml = btnMatchmakerSubmit.innerHTML;
            btnMatchmakerSubmit.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Finding Matches...`;
            matchmakerLoading.style.display = "block";
            matchmakerResults.innerHTML = "";
            if (matchmakerResultsTitle) matchmakerResultsTitle.style.display = "none";

            try {
                let matches = [];

                // Dual-Mode Matchmaking (Online API vs Client-Side Direct AI)
                if (window.location.protocol.startsWith('http')) {
                    // Online Mode: Fetch from Express backend server
                    const res = await fetch(`${API_BASE_URL}/api/match`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ description: desc })
                    });
                    
                    if (res.ok) {
                        matches = await res.json();
                    } else {
                        const errData = await res.json();
                        throw new Error(errData.error || "Failed to fetch AI matches from server.");
                    }
                } else {
                    // Offline Mode: Direct Gemini API query from browser
                    const apiKey = localStorage.getItem("gemini_api_key") || "";
                    if (!apiKey) {
                        // If offline and NO API key, do a simulated keyword match in browser!
                        matches = runSimulatedMatchOffline(desc);
                    } else {
                        matches = await runDirectGeminiMatchOffline(apiKey, desc);
                    }
                }

                // Render Results
                renderMatchmakerResults(matches);

            } catch (err) {
                console.error("[-] Matchmaker failed:", err);
                showNotification(`Error: ${err.message || "Matchmaker failed. Check console."}`, true);
            } finally {
                btnMatchmakerSubmit.disabled = false;
                btnMatchmakerSubmit.innerHTML = originalBtnHtml;
                matchmakerLoading.style.display = "none";
            }
        });
    }

    // Local Keyword-based matchmaking if offline and no API Key
    function runSimulatedMatchOffline(description) {
        const descLower = description.toLowerCase();
        const matches = [];
        const keywords = {
            "vercel": ["deploy", "next.js", "frontend", "hosting", "web", "site", "javascript", "code", "dev"],
            "shopify": ["shop", "e-commerce", "ecommerce", "store", "sell", "product", "sales", "business"],
            "printify": ["apparel", "merch", "t-shirt", "clothing", "wear", "print", "design"],
            "printful": ["apparel", "merch", "t-shirt", "clothing", "wear", "print", "design"],
            "faceit": ["tournament", "esports", "matchmaking", "cs2", "valorant", "game", "lobby", "competitive"],
            "challengermode": ["tournament", "esports", "bracket", "prize", "organizer", "compete", "gamer"],
            "wix": ["website", "wix", "studio", "blog", "portfolio", "no-code"],
            "digitalocean": ["cloud", "server", "linux", "hosting", "infrastructure", "deploy", "database"],
            "clickup": ["productivity", "workspace", "management", "task", "organization", "agency"],
            "hubspot": ["crm", "sales", "marketing", "customer", "b2b", "leads"],
            "slack": ["chat", "collaboration", "developer", "api", "communication", "team"],
            "razer": ["peripheral", "mouse", "keyboard", "gaming", "headset", "rgb"],
            "logitech-g": ["peripheral", "mouse", "keyboard", "gaming", "headset", "gear"],
            "g2-esports": ["esports", "pro", "competitive", "team", "organization"],
            "team-falcons": ["esports", "pro", "competitive", "team", "organization"]
        };

        for (const [id, keys] of Object.entries(keywords)) {
            if (keys.some(k => descLower.includes(k))) {
                const brand = dbData.find(b => b.id === id);
                if (brand && matches.length < 4) {
                    matches.push({
                        id: brand.id,
                        reason: `Matched locally based on keywords relating to ${brand.category}. Sells to similar target audiences.`,
                        strategy: `Highlight how your B2B project aligns with ${brand.name}'s products and userbase.`
                    });
                }
            }
        }

        if (matches.length === 0) {
            dbData.slice(0, 3).forEach(brand => {
                matches.push({
                    id: brand.id,
                    reason: `Recommended general B2B partner on CoMatch with active developer/creator channels.`,
                    strategy: `Reach out via their application link to introduce your collab project.`
                });
            });
        }
        return matches;
    }

    // Direct Gemini API matching if offline with API Key
    async function runDirectGeminiMatchOffline(apiKey, description) {
        const brandSummaries = dbData.map(item => ({
            id: item.id,
            name: item.name,
            category: item.category,
            sponsorType: item.sponsorType,
            creatorSize: item.creatorSize,
            requirements: item.dna ? item.dna.requirements : ""
        }));

        const prompt = `You are the expert B2B Matchmaker and Sponsorship advisor for CoMatch.
Analyze the user's project/channel description and recommend the top 3 to 5 best-matching B2B brands or partners from our database list.

User's Project/Request:
"${description}"

Database of Available Brands:
${JSON.stringify(brandSummaries)}

INSTRUCTIONS:
1. Select between 3 and 5 brands from the list that represent the absolute best strategic fit for the user's project.
2. For each recommendation, provide:
   - "id": The exact ID of the brand from the database list.
   - "reason": A brief 2-3 sentence explanation in English detailing WHY this brand is a great fit.
   - "strategy": A brief 1-2 sentence recommendation in English outlining how they should approach them.

Return ONLY a raw JSON array of recommendation objects matching this schema:
[
  {
    "id": "exact-brand-id",
    "reason": "Clear explanation of the strategic fit in English.",
    "strategy": "Actionable pitching strategy advice in English."
  }
]

Return ONLY the raw JSON text block. Do not wrap it in markdown code blocks.`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Gemini API error: ${errText || response.statusText}`);
        }

        const responseData = await response.json();
        let responseText = responseData.candidates[0].content.parts[0].text;
        responseText = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
        return JSON.parse(responseText);
    }

    // Render B2B Matchmaker Recommended Partner Cards
    function renderMatchmakerResults(matches) {
        if (!matchmakerResults) return;
        matchmakerResults.innerHTML = "";

        if (!Array.isArray(matches) || matches.length === 0) {
            matchmakerResults.innerHTML = `<p style="color: var(--text-muted); font-size: 0.88rem; text-align: center; padding: 16px 0;">No matches found. Try describing your project with different keywords.</p>`;
            return;
        }

        if (matchmakerResultsTitle) matchmakerResultsTitle.style.display = "block";

        matches.forEach(match => {
            const brand = dbData.find(b => b.id === match.id);
            if (!brand) return;

            const initials = brand.name.substring(0, 2).toUpperCase();
            const contactStatus = brand.contactEmail ? 'available' : 'form-only';
            const contactText = brand.contactEmail ? 'Email Available' : 'Application Link';
            const contactIcon = brand.contactEmail ? 'fa-envelope' : 'fa-clipboard-list';

            const cardContainer = document.createElement("div");
            cardContainer.style.background = "var(--bg-main)";
            cardContainer.style.border = "1px solid var(--border-color)";
            cardContainer.style.borderRadius = "var(--border-radius-sm)";
            cardContainer.style.padding = "16px";
            cardContainer.style.display = "flex";
            cardContainer.style.flexDirection = "column";
            cardContainer.style.gap = "12px";

            cardContainer.innerHTML = `
                <div class="card-header" style="margin-bottom: 0; display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 40px; height: 40px; border-radius: var(--border-radius-sm); overflow: hidden; border: 1px solid var(--border-color); display: flex; flex-shrink: 0; background: var(--bg-card);">
                            <img src="${brand.logo}" alt="${brand.name}" style="width: 100%; height: 100%; object-fit: cover;" referrerpolicy="no-referrer" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="avatar-fallback" style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(135deg, var(--color-primary), var(--color-premium)); color: #fff; font-weight: bold; font-size: 1rem;">${initials}</div>
                        </div>
                        <div>
                            <h4 style="color: #fff; margin: 0; font-size: 0.95rem; font-weight: 700;">${brand.name}</h4>
                            <span style="font-size: 0.72rem; color: var(--text-muted);">${brand.category}</span>
                        </div>
                    </div>
                    <span class="badge-type ${brand.type === 'team' ? 'team-badge' : 'brand-badge'}" style="font-size: 0.65rem; padding: 4px 8px;">
                        ${brand.type === 'team' ? 'PARTNERSHIP' : 'BRAND'}
                    </span>
                </div>

                <div style="background: rgba(16, 185, 129, 0.04); border: 1px solid rgba(16, 185, 129, 0.15); border-radius: var(--border-radius-sm); padding: 12px; font-size: 0.8rem; line-height: 1.45; text-align: left;">
                    <p style="color: #10B981; font-weight: bold; margin: 0 0 4px 0; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-brain"></i> AI Match Insights</p>
                    <p style="color: var(--text-main); margin: 0 0 6px 0;">${match.reason}</p>
                    <p style="color: var(--text-muted); margin: 0;"><strong style="color: var(--text-secondary);">Strategy:</strong> ${match.strategy}</p>
                </div>

                <div style="display: flex; justify-content: flex-end; gap: 8px;">
                    <button class="btn btn-sm btn-action-secondary" style="padding: 6px 12px; font-size: 0.75rem;" onclick="document.getElementById('matchmaker-modal').classList.remove('open'); document.body.style.overflow = 'auto'; window.openBrandDetails('${brand.id}');">
                        View Details <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            `;
            matchmakerResults.appendChild(cardContainer);
        });
    }
});
