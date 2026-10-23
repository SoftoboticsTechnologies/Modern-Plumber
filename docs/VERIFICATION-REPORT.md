# Verification Report

Date: 2026-10-23 · Original: https://modernplumber.online/ (7 pages) · Recreated: 7 pages

## Summary

| Check | Method | Result |
|---|---|---|
| Text content preserved | Script: every visible text node of each original page (body, header, form, footer, chat widget) must appear verbatim in the matching new page | **322 / 322 strings found, 0 missing** |
| No invented content | Reverse script: every visible text node of each new page must exist on the matching original | **0 added strings** on all 7 pages |
| Page title, meta description, og:title, og:description, canonical | Script, compared field by field against the original `<head>` | **All match** on all 7 pages |
| Layout / horizontal overflow | Headless Chrome at 320, 375, 425, 768, 1024, 1280, 1440px × 7 pages | **49 / 49 pass** (no overflow) |
| Broken images, 404s, JS console errors | Same run, all lazy images forced to load | **0** |
| Internal links & anchors | Script over all `<a href>` | **0 broken, 0 dead `#` links** |
| Mobile menu | Automated: open, aria-expanded, Escape closes, link navigates | Pass |
| FAQ accordion | Automated: toggle, one-open-at-a-time, keyboard Enter | Pass |
| Quote form | Automated: 6 required-field errors on empty submit, focus moves to first error, invalid-email message, valid submit opens WhatsApp with the fields pre-filled | Pass |
| Visual review | Full-page screenshots at 375px and 1440px reviewed for all pages | Done; two issues found and fixed (low-contrast payment text; oversized portrait photo on phones) |

## Page checklist

| Page | Content | Meta | Responsive (7 widths) | Links | Interactive |
|---|---|---|---|---|---|
| index.html (/) | ✅ 86/86 | ✅ | ✅ | ✅ | ✅ form, videos |
| pages/home.html | ✅ 50/50 | ✅ | ✅ | ✅ | n/a |
| pages/about.html | ✅ 37/37 | ✅ | ✅ | ✅ | n/a |
| pages/services.html | ✅ 41/41 | ✅ | ✅ | ✅ | n/a |
| pages/testimonials.html | ✅ 39/39 | ✅ | ✅ | ✅ | n/a |
| pages/faq.html | ✅ 39/39 | ✅ | ✅ | ✅ | ✅ accordion |
| pages/contact.html | ✅ 30/30 | ✅ | ✅ | ✅ | ⚠️ map not verified |

## Not verified

- **Real browsers other than Chrome** (Safari, Firefox, Edge) and **real devices**. All automated testing used headless Chrome.
- **Google Maps iframe**: it's an external embed and didn't render in the headless screenshots. The URL is the original one, unchanged.
- **Form email delivery**: no endpoint is configured, so nothing is emailed (see README). The WhatsApp hand-off was verified up to the WhatsApp page opening with the message pre-filled.
- **Video autoplay** on iOS low-power mode: the videos are muted + `playsinline`, which normally allows autoplay, but this wasn't tested on a device.

## Intentional differences from the original

1. **Dead links made functional.** On the original, several buttons pointed to `#`: header "Get a Free Quote", root "Read More", "More" ×6, "View All", and the footer address/email/phone. They now go to the quote form, About, Services, Testimonials, Google Maps, `mailto:` and `tel:`. For "More" and "View All" these are the same targets the original `/home/` page uses. Phone numbers in body text are now `tel:` links. The visible text is unchanged in every case.
2. **Payment QR.** The original "SCAN & PAY" card contained a broken image (`src="PASTE_YOUR_QR_LINK_HERE"`), and the real PhonePe QR image was shown separately underneath. The redesign puts the real QR image inside the card instead of the broken placeholder.
3. **Heading levels.**
   - The root page's second `<h1>` ("Secure Payment") is now an `<h2>`, so there's one h1 per page.
   - The Contact page's duplicated "Contact" h1 (theme title + Elementor heading) appears once.
   - FAQ questions are `<button>`s inside `<h5>` (the original used `<a>` without `href`), which is better for accessibility.
4. **Alt text.**
   - The 4 review-platform logos had the alts "logo 0X free img". They now say "Google Reviews", "BBB Accredited Business, BBB Rating: A+", "Facebook reviews" and "Yelp".
   - The WhatsApp gallery photos and QR had empty alts and now have short descriptions.
   - Testimonial avatars are marked decorative (`alt=""`) because the name is right beside them.
   - All other images keep their original alt text.
5. **Form submission.** The form can't post to the WordPress/SureForms endpoint (it needs a server-generated nonce). It now hands off to WhatsApp, or POSTs to a configurable `data-endpoint`. Labels, help texts, options, required markers and error messages are the originals.
6. **Favicon.** The original has none (404). An SVG favicon was made from the original logo mark.
7. **Icons.** Font Awesome icons were replaced with an inline SVG icon set that matches the redesign. Each icon keeps its meaning (phone, wrench, fire, tools, toolbox, building, tape, quote, map pin, envelope).
8. **Section order** is kept on every page. Layouts were redesigned: split heroes, card grids, zig-zag service rows, a masonry testimonial wall, an accordion with a side image column, and a sticky header.

## Content preserved as-is (owner may want to fix these)

These are on the live site and were kept verbatim, as the brief required. They look like mistakes or leftover template text:

| Page | Item |
|---|---|
| Services, #02 Gas Line Services | Second paragraph is placeholder Latin: "luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet" |
| Services, #05 | Heading reads "Commercial Plumbings" |
| / (root), service cards | Descriptions are shifted by one card: "Gas Line Services" has the drain-cleaning text, "Commercial Plumbing" has the gas-line text, "Remodeling Services" has the commercial text |
| /home/ | Service cards have only numbers 01.–06. and "More" (no titles or descriptions) |
| /home/, /contact/ | "This form has been deleted or is unavailable." |
| / vs /home/ | "Serving Our Clients Since 1984" vs "For Over 15 Years" (and the About text says "over 15 years") |
| About | Company Mission paragraph ends with a stray backtick: "…every time.`" |
| Testimonials | CTA paragraph ends "…you can trust.1" |
| Testimonials | "Amit Kumar, New York" and "Rachel Hudson, Pennsylvania" (template locations), and "Sonu" appears twice |
| FAQ | "What services do you provide?" is answered with the cost-estimate text |
| FAQ | Section numbering is "02." above "Frequently Asked Questions" and "01." above "General Questions" |
| Footer | The "Facebook" social icon links to the Instagram profile (both icons → same Instagram URL) |
| Root | Review logos (Google, BBB A+, Facebook, Yelp) are stock template images with no links to actual review profiles |
