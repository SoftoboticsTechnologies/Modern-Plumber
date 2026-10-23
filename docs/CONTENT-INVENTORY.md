# Content Inventory: modernplumber.online

Scanned 2026-10-23. Platform: WordPress 7.1.3 + Astra theme + Elementor 4.3.5, SureForms, Click-to-Chat (WhatsApp).
Discovery sources: header/footer navigation, `wp-sitemap.xml` → `page-sitemap1.xml`, and the WP REST API (`/wp-json/wp/v2/pages`, `/posts`). **7 pages, 0 blog posts.** No page was inaccessible.

## 1. Pages

| Original URL | Title | Recreated as |
|---|---|---|
| https://modernplumber.online/ | Home - Modern Plumber | `index.html` |
| https://modernplumber.online/home/ | Home - Modern Plumber | `pages/home.html` |
| https://modernplumber.online/about/ | About - Modern Plumber | `pages/about.html` |
| https://modernplumber.online/services/ | Services - Modern Plumber | `pages/services.html` |
| https://modernplumber.online/testimonials/ | Testimonials - Modern Plumber | `pages/testimonials.html` |
| https://modernplumber.online/faq/ | FAQ - Modern Plumber | `pages/faq.html` |
| https://modernplumber.online/contact/ | Contact - Modern Plumber | `pages/contact.html` |

`/` and `/home/` are **two different pages** with different content (e.g. "Since 1984" vs "For Over 15 Years"). The logo links to `/`, while the "Home" menu item links to `/home/`. Both are recreated, and that link behaviour is kept.

## 2. Heading hierarchy per page

**`/` (index.html)**: h6 Plumbing Solutions · h1 Serving Our Clients Since 1984 · h6 Emergency Call - 24/7 · h3 Request A Free Quote · h6 About Us · h2 We Are A Group Of Professional Plumbers · h6 Services · h2 Available for 24/7 / Emergency Service · h6 01.–06. + h4 ×6 (Drain Cleaning & Repairs, Gas Line Services, Commercial Plumbing, Remodeling Services, Plumbing Services, Heating & Cooling) · h2 Testimonials · h4 See Our Reviews On · h3 Quick Service On Emergency Call - 24/7 · h1 Secure Payment (→ h2 in redesign) · h3 SCAN & PAY

**`/home/`**: same as above, except: h1 "Serving Our Clients For Over 15 Years"; form replaced by "This form has been deleted or is unavailable."; service cards contain only the numbers 01.–06. and "More" links (no titles or descriptions on the original); testimonial names shruti / Amit / Ayush; different CTA text; no video/gallery/payment sections.

**`/about/`**: h1 About Us · h6 Emergency Call - 24/7 · h2 We Are A Group Of Professional Plumbers · h3 We Offer A Full Line Of Services For All Your Plumbing · h2 Company Mission · h2 Why Choose Us (+ two 4- and 5-item lists)

**`/services/`**: h1 Services · h6 Emergency Call - 24/7 · h3 ×6 (Drain Cleaning & Repairs 01., Gas Line Services 02., Plumbing Services 03., Heating & Cooling 04., Commercial Plumbings 05., Remodeling Services 06.) · h3 Quick Service On Emergency Call - 24/7

**`/testimonials/`**: h1 Testimonials · h6 Emergency Call - 24/7 · 7 testimonials · h4 See Our Reviews On · h3 Quick Service On Emergency Call - 24/7

**`/faq/`**: h1 FAQ · h6 Emergency Call - 24/7 · h6 02. · h2 Frequently Asked Questions · h6 01. · h4 General Questions (4-item accordion) · h4 Services Info (2-item accordion) · h3 Quick Service On Emergency Call - 24/7

**`/contact/`**: h1 Contact (rendered twice on the original: theme title + Elementor heading) · h6 Emergency Call - 24/7 · h3 Get in Touch · h6 Address / Email / Call Us · h6 Emergency Plumbing · h3 Get A Free Quote · Google Map

**Global footer**: h2 Modern Plumber · h2 Contact Info · h2 Emergency Plumbing · copyright line · 2 social icons. **Floating:** "WhatsApp us" click-to-chat.

## 3. Navigation & links

Header menu: Home (`/home/`), About, Services, Testimonials, FAQ, Contact + "Get a Free Quote" button (`href="#"` on original).

| Original element | Original href | Redesign href |
|---|---|---|
| Logo | `/` | `index.html` |
| Get a Free Quote (header) | `#` (dead) | `index.html#quote` (the working form) |
| Root: Read More | `#` (dead) | `pages/about.html` |
| Root: More ×6 | `#` (dead) | `pages/services.html` (same as `/home/` uses) |
| Root: View All | `#` (dead) | `pages/testimonials.html` (same as `/home/` uses) |
| Footer address | `#` | Google Maps search link |
| Footer email | `#` | `mailto:Rehmansharief2003@gmail.com` |
| Footer phone | `#` | `tel:+919893336838` |
| Phone numbers in page body | plain text | `tel:` links (text unchanged) |
| Social "Facebook" + "Instagram" icons | both → Instagram URL | unchanged (both → Instagram URL) |
| WhatsApp float | number 919893336838 | `https://wa.me/919893336838` |

External: `https://www.instagram.com/pelamaber_contactor?utm_source=qr&igsh=MXN5cmpybzRpdmVkaQ==`, Google Maps embed (Contact).

## 4. Contact details (verified identical)

- Address: `Asoka garden 80 feet Naya Thana , Karod veskarma Nagar(Bhopal)`
- Email: `Rehmansharief2003@gmail.com`
- Phones: `9893336838`, `+91 9893336838`, `9893336838 & 9340643745`
- Payment payee: `Mr Rafiq Qureshi` (PhonePe UPI QR)

## 5. Functional components

| Component | Original | Redesign |
|---|---|---|
| Responsive header / hamburger menu | Astra | Custom (`js/navigation.js`), keyboard + Escape + outside-click |
| Quote form (root only) | SureForms → WP REST + nonce | Client validation; WhatsApp hand-off or `data-endpoint` POST (`js/form.js`) |
| FAQ accordions ×2 | Elementor accordion | Accessible accordion (button + aria-expanded + region) |
| Hosted videos ×3 | autoplay, muted, controls; #1 loops and stops at 14s; #2 no loop | Same attributes; the 14s end is also enforced in JS |
| Google Map | iframe | iframe (same URL) |
| WhatsApp click-to-chat | plugin | Static floating link |
| Cookie notice, search, sliders | **None on original** | n/a |

## 6. Assets

All downloaded from `https://modernplumber.online/wp-content/uploads/` (full-size originals, not thumbnails). 0 failed downloads.

| Local file | Original path (`/wp-content/uploads/…`) | Used on |
|---|---|---|
| images/logo.svg | 2020/07/plumbing-service-logo-light.svg | all (header, footer) |
| images/favicon.svg | *new*: derived from the logo; the original has no favicon (`/favicon.ico` = 404) | all |
| images/backgrounds/blue-valve-with-metal-pipe.jpg | 2020/08/blue-valve-with-metal-pipe.jpg | /, /home/ hero; Services CTA |
| images/backgrounds/plumbing-metal-pipe-wrench.jpg | 2020/07/plumbing-metal-pipe-wrench.jpg | About/Services/Testimonials/FAQ hero |
| images/backgrounds/red-valve-with-metal-pipe.jpg | 2020/07/red-valve-with-metal-pipe.jpg | Contact hero |
| images/about/plumbing-pipe-wrench.jpg | 2020/08/plumbing-pipe-wrench.jpg (byte-identical to 2020/07 version) | /, /home/, Services #06, FAQ |
| images/about/plumber-handyman-repair.jpg | 2020/08/… (byte-identical to 2020/07 version) | /home/, About banner |
| images/about/screenshot-2026-04-09-135306.png | 2026/04/Screenshot-2026-04-09-135306.png | / |
| images/services/water-tap.jpeg | 2021/03/water-tap.jpeg | Services #01; CTA backgrounds |
| images/services/industrial-valve-with-pipe.jpg | 2020/07/… | Services #02 |
| images/services/water-pipe-valve.jpg | 2020/07/… | Services #03 |
| images/services/hot-water-faucet.jpg | 2020/07/… | Services #04 |
| images/services/commercial-plumbing.jpeg | 2021/03/… | Services #05 |
| images/testimonials/mike.jpg | 2021/03/mike.jpg | / (Amit verma) |
| images/testimonials/ava-woman-3.jpg | 2020/07/ava-woman-3.jpg | Testimonials (Sonu) |
| images/reviews/logo-01…04-free-img.png | 2018/10/logo-0X-free-img.png | /, /home/, Testimonials |
| images/gallery/work-photo-1.jpeg | 2026/04/WhatsApp-Image-2026-04-13-at-1.55.23-PM.jpeg | / |
| images/gallery/work-photo-2.jpeg | 2026/04/WhatsApp-Image-2026-04-13-at-1.55.22-PM-1.jpeg | / |
| images/gallery/work-photo-3.jpeg | 2026/04/WhatsApp-Image-2026-04-13-at-1.55.20-PM-1.jpeg | / |
| images/gallery/faq-photo.jpeg | 2026/04/WhatsApp-Image-2026-04-08-at-1.37.40-PM.jpeg | FAQ |
| images/payment/phonepe-qr-code.jpeg | 2026/04/WhatsApp-Image-2026-04-13-at-5.04.39-PM.jpeg | / |
| videos/work-video-1.mp4 | 2026/04/WhatsApp-Video-2026-04-13-at-1.55.26-PM-1.mp4 | / |
| videos/work-video-2.mp4 | 2026/04/WhatsApp-Video-2026-04-13-at-1.55.25-PM-1.mp4 | / |
| videos/work-video-3.mp4 | 2026/04/WhatsApp-Video-2026-04-13-at-1.55.23-PM-1.mp4 | / |

**Not collected:** the original's icon fonts (Font Awesome / eicons) were replaced by an inline SVG icon set, since they're theme dependencies rather than brand assets. The root page's "SCAN & PAY" card references `PASTE_YOUR_QR_LINK_HERE`, a broken placeholder with no real file behind it (see report).
