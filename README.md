# Shri Balaji Jyotish Kendre — Website + Installable PWA

## Before publishing
1. Open `app.js`.
2. Replace `YOUR_WHATSAPP_NUMBER` with the real WhatsApp number, digits only.
   India format example: `919876543210`.
3. Edit the business name/contact details in `index.html` if required.
4. Replace demo catalogue information with real stock, prices, treatment details, and certificates. Do not claim certification/authenticity unless supported.

## Test on a computer
Use a local server (service workers and PWA installation do not work fully when opened as a `file://` page).
If Python is installed, from this folder run:
`python -m http.server 8000`
Then open `http://localhost:8000`.

## Publish free
Upload the folder contents to a static host such as GitHub Pages, Cloudflare Pages, or Netlify's free tier. Follow the host's current instructions. PWA installation generally requires HTTPS (localhost is an exception).

## Install on Android
1. Open the published HTTPS website in Chrome.
2. Use the browser menu and choose “Install app” or “Add to Home screen” when available.
3. Test on a real Android phone.

## Important limitations
- This is a static starter website and PWA, not a native APK.
- Appointment requests open a prefilled WhatsApp message; there is no server-side booking database or automatic confirmation.
- No payment gateway, inventory admin dashboard, shipping integration, or customer account system is included.
- The privacy page is a starter template and should be reviewed before launch.
- Gemstone cards and visual gemstone illustrations are placeholders; add real product photos and verified product details.
