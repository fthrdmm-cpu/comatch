const nodemailer = require('nodemailer');
require('dotenv').config();

const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER || "hello@comatch.org";
const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS || "Fatiherdem.1";
const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
const smtpPort = process.env.SMTP_PORT || 465;

const pendingBrands = [
    { name: "RegionMirror", contactEmail: "matt@regionmirror.com" },
    { name: "Swooni", contactEmail: "hello@swooni.io" },
    { name: "HeizerDesk", contactEmail: "hello@heizerdesk.com" },
    { name: "Interview Practice AI", contactEmail: "ben@bengallagher.dev" }
];

const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort),
    secure: parseInt(smtpPort) === 465,
    auth: {
        user: smtpUser,
        pass: smtpPass
    }
});

async function dispatchAll() {
    console.log(`[*] Starting email dispatch to ${pendingBrands.length} brands via ${smtpUser}...`);
    for (const brand of pendingBrands) {
        try {
            const subject = `${brand.name} is listed on CoMatch + A quick preview of what's next 🚀`;
            const textContent = `Hi ${brand.name} team,\n\nThank you for sharing ${brand.name} on CoMatch! We are excited to have your product added to our B2B ecosystem.\n\nYour submission has been processed and is now indexed for creators, brands, and partners searching for active B2B collaborations.\n\n🚀 A Two-Way Growth Network (Get Sponsored & Sponsor Others):\nCoMatch is built as a two-way hub for founders: whether you want to get VC funding and brand sponsorships for your own startup, or acquire creators/users to promote your product.\n\nWe are currently building a dedicated Developer Showcase & Launch Hub directly on CoMatch where very soon you will be able to:\n- Pitch ${brand.name} directly to registered VC funds, angel networks, and enterprise sponsors in our directory.\n- Partner with creators and business influencers via custom trials or affiliate perks to scale your user base.\n- Feature ${brand.name} in our dedicated product spotlight for maximum exposure.\n\nAs one of our early registered partners, we will grant you VIP Early Access the moment this new showcase feature goes live.\n\nIf you have any specific partnership requests in the meantime, simply reply to this email!\n\nWelcome aboard, and keep building!\n\nBest regards,\nThe CoMatch Team\nhttps://comatch.org`;

            const htmlContent = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #2563eb; margin-top: 0;">Welcome to CoMatch, ${brand.name}! 🚀</h2>
                <p>Hi <strong>${brand.name}</strong> team,</p>
                <p>Thank you for sharing your product on <strong>CoMatch</strong>! We are thrilled to have you in our B2B ecosystem.</p>
                <p>Your listing has been approved and is now indexed for creators, founders, and partners searching for active B2B collaborations.</p>
                
                <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0; border-radius: 4px;">
                    <h3 style="margin-top: 0; color: #0f172a;">🚀 A Two-Way Growth Network (Get Sponsored & Sponsor Others)</h3>
                    <p style="margin-bottom: 0;">CoMatch is built as a two-way hub for founders: whether you want to get VC funding and brand sponsorships for your own startup, or acquire creators to promote your product.</p>
                </div>
                
                <p>We are currently building a dedicated <strong>Developer Showcase & Launch Hub</strong> directly on CoMatch where very soon you will be able to:</p>
                <ul>
                    <li><strong>Get Sponsored & Funded:</strong> Pitch ${brand.name} directly to registered VC funds, angel networks, and enterprise sponsors in our directory.</li>
                    <li><strong>Offer Partnerships & Deals:</strong> Partner with top creators and influencers to scale your user base.</li>
                    <li><strong>VIP Showcase Visibility:</strong> Feature ${brand.name} in our dedicated developer spotlight for maximum exposure.</li>
                </ul>
                
                <p>As one of our early registered partners, we will grant you <strong>VIP Early Access</strong> the moment this new showcase feature goes live.</p>
                
                <p>If you have any specific partnership requests in the meantime, simply reply to this email!</p>
                
                <p style="margin-top: 30px;">Welcome aboard, and keep building!<br><strong>The CoMatch Team</strong><br><a href="https://comatch.org" style="color: #2563eb;">https://comatch.org</a></p>
            </div>
            `;

            await transporter.sendMail({
                from: `"CoMatch Team" <${smtpUser}>`,
                to: brand.contactEmail,
                subject: subject,
                text: textContent,
                html: htmlContent
            });

            console.log(`[+] Successfully sent email to ${brand.name} (${brand.contactEmail})`);
        } catch (err) {
            console.error(`[-] Error sending email to ${brand.name}:`, err.message);
        }
    }
}

dispatchAll();
