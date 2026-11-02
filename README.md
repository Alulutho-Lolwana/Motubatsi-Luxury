# House of Motubatsi Luxury

**Basotho heritage. Modern luxury.**

House of Motubatsi is a Basotho-inspired luxury fashion brand celebrating heritage, identity and contemporary elegance. This repository contains the responsive static website for the brand.

## Project links

- **GitHub repository:** https://github.com/Alulutho-Lolwana/Motubatsi-Luxury
- **Default branch:** `main`
- **Live website:** Not yet confirmed. The repository is public, but a working deployment URL has not been supplied or verified. Do not treat the GitHub repository URL as the live website.

## Website pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Brand introduction and featured content |
| About Us | `pages/about.html` | Brand values and information |
| Our Story | `pages/our-story.html` | Heritage and brand story |
| Products | `pages/product.html` | Product overview |
| Catalog | `pages/catalog.html` | Searchable product catalogue |
| Enquiry | `pages/enquiry.html` | Product/service enquiry form |
| Contact Us | `pages/contact.html` | General contact form and location map |

## Features implemented

### User experience and JavaScript
- Responsive primary navigation with an accessible mobile menu.
- Product listings with search, category filters and sorting.
- **See more / See less** controls on the Products and Catalog pages (initially shows up to eight matching items).
- Product image lightbox/gallery with navigation and touch support.
- Interactive FAQ accordion and About page tabs.
- Scroll-reveal effects and a restrained cursor-follow accent, with reduced-motion support.
- Contact-page interactive map using Leaflet and OpenStreetMap map tiles.
- Shared footer links, skip navigation and Back to Top navigation.

### Forms and input handling
- Separate contact and product-enquiry forms with client-side HTML5 and JavaScript validation.
- Field-level validation feedback and submission status messaging.
- Honeypot fields and safer AJAX request options.
- Form delivery is configured to use `info@houseofmotubatsi.co.za`. The recipient/provider activation and successful real-world email delivery still need to be tested.
- Client-side checks improve the user experience but **do not replace server-side validation**. Any receiving service must validate submitted data independently.

### SEO, performance, security and accessibility
- Page-specific titles and meta descriptions, robots directives, theme colour and social preview metadata.
- Root `robots.txt`.
- Brand logo in the header and as the favicon.
- Deferred local JavaScript loading, lazy loading and asynchronous decoding for content images.
- Responsive layouts and mobile touch targets.
- Visible keyboard focus, skip link, accessible navigation states and Escape-key menu handling.
- Reduced-motion preferences are respected.

> Image loading behaviour has been improved, but the original JPEG image files have not yet all been compressed or converted to modern formats such as WebP/AVIF.

## Project structure

```
Motubatsi-Luxury/
├── index.html
├── pages/
│   ├── about.html
│   ├── our-story.html
│   ├── product.html
│   ├── catalog.html
│   ├── enquiry.html
│   └── contact.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   ├── js/map.js
│   ├── images/
│   └── vendor/leaflet/
├── robots.txt
└── README.md
```

## Technology and dependencies

- **HTML5** for semantic page structure and native form constraints.
- **CSS3** for the shared visual system, layouts, responsive breakpoints and interaction states.
- **Vanilla JavaScript** for navigation, product rendering, filters, sorting, galleries, tabs, accordions and form validation.
- **Leaflet** (locally stored under `assets/vendor/leaflet/`) for the contact map.
- **OpenStreetMap** for map data/tiles and attribution.
- **Google Fonts**: Cormorant Garamond and Montserrat, where available in the stylesheet.
- **FormSubmit** is used as the configured form submission service. Email delivery depends on recipient verification and service availability.

No build step or package installation is required for the static site.

## Run locally

1. Clone or download the repository:
   ```bash
   git clone https://github.com/Alulutho-Lolwana/Motubatsi-Luxury.git
   ```
2. Open the project folder in an editor such as Visual Studio Code.
3. Start a local static server (for example, the VS Code Live Server extension) from the repository root.
4. Open the local URL provided by the server. Serving from the root helps preserve relative paths for pages and assets.
5. Test all seven pages, navigation, product controls, gallery, map and both forms.

There is no npm install or compile command.

## Changelog

The entries below record changes visible in the repository history. The available project materials did **not** include the actual Part 2 lecturer feedback sheet/comments. Therefore, the earlier baseline fixes are recorded as repository corrections, not falsely attributed to specific lecturer comments. To make a complete Part 2 feedback-to-fix matrix, compare these changes with the original Part 2 feedback and add any missing items.

### Earlier project corrections carried into this version

| Area | Earlier issue/correction recorded in the project | Change and outcome |
|---|---|---|
| Stylesheet loading | Broken stylesheet link syntax prevented styles from loading | Corrected stylesheet links so the shared CSS is applied. |
| Relative paths | Root-page and nested-page asset paths did not consistently resolve | Corrected paths for CSS, images and page links. |
| File naming | Spaces/special characters in asset and page names made paths harder to manage | Normalised relevant filenames and page references. |
| HTML structure | Malformed, unclosed or duplicate markup was present | Corrected markup structure across affected pages. |
| Styling consistency | Pages did not consistently use the shared design-system classes | Applied shared layout, navigation, card, form and footer styling. |
| Mobile navigation | The menu needed JavaScript behaviour | Added the shared mobile menu toggle. |

### Part 3 enhancements and corrections (2026-11-02)

| Area | Change | Reason / result | Commit |
|---|---|---|---|
| Forms | Added validated contact and product enquiry submissions | Provides a clearer form submission flow | [9ba1907](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/9ba1907) |
| Form validation | Moved validation into shared JavaScript | Centralises validation and feedback | [a372fe1](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/a372fe1) |
| Interactive content | Added FAQ accordion and motion effects | Makes brand information easier to explore | [bf7dc3d](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/bf7dc3d) |
| About page | Added interactive brand tabs and cursor-follow motion | Adds structured brand storytelling; motion respects reduced-motion preferences | [2775a1a](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/2775a1a) |
| Catalogue | Added product search, filtering and sorting | Helps visitors find products | [ce79c06](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/ce79c06) |
| Product gallery | Improved lightbox with gallery navigation and touch support | Makes product images easier to inspect | [68f2994](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/68f2994) |
| Product data | Added additional product entries and named variants | Expands the catalogue presentation; some colour variants reuse existing photographs and should not be assumed to be verified colour-specific stock | [872a4de](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/872a4de), [90c3127](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/90c3127) |
| Forms | Configured the published contact email for form delivery | Directs enquiries to the intended mailbox; delivery still requires a live submission test | [c7e61dc](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/c7e61dc) |
| Navigation/accessibility | Added skip navigation, quick links, footer navigation and accessible page landmarks | Improves navigation and keyboard access | [379ce85](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/379ce85), [69b4e4b](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/69b4e4b) |
| SEO | Added unique page titles, descriptions and social metadata | Improves page descriptions and link previews | [1c0941a](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/1c0941a) |
| Search engine access | Added `robots.txt` | Provides crawler instructions | [c27fc85](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/c27fc85) |
| Branding | Added header logo and browser favicon | Makes brand identity consistent across pages | [36e4a66](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/36e4a66), [37e876f](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/37e876f) |
| Image loading | Added lazy loading and asynchronous decoding to content images | Defers non-critical image loading; image file sizes remain to be optimised | [da2d67e](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/da2d67e) |
| Form security | Strengthened input checks, request options and honeypot protection; corrected validation character patterns | Improves client-side checks and basic spam resistance; server-side validation remains necessary | [77a10c2](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/77a10c2), [3777db8](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/3777db8) |
| Script/link safety | Deferred local scripts and removed a duplicate map script include | Reduces parser blocking and duplicate execution risk | [6bb2257](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/6bb2257) |
| Responsive layout | Added tablet/mobile layout safeguards and touch target sizing | Improves usability at narrower widths | [749560e](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/749560e) |
| Accessibility | Improved keyboard focus and mobile navigation keyboard behaviour | Supports keyboard and assistive-technology users | [8b4307a](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/8b4307a) |
| Product listing | Added See more / See less to Products and Catalog | Shows an initial set of products and lets visitors expand or collapse the listing | [fb35a07](https://github.com/Alulutho-Lolwana/Motubatsi-Luxury/commit/fb35a07) |

## References and resources

The following official resources document the technologies and services used by this project:

1. Mozilla Developer Network (MDN) (n.d.) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 2 November 2026).
2. Mozilla Developer Network (MDN) (n.d.) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 2 November 2026).
3. Mozilla Developer Network (MDN) (n.d.) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 2 November 2026).
4. Leaflet (n.d.) *Leaflet — an open-source JavaScript library for mobile-friendly interactive maps*. Available at: https://leafletjs.com/ (Accessed: 2 November 2026).
5. OpenStreetMap contributors (n.d.) *Copyright and attribution*. Available at: https://www.openstreetmap.org/copyright (Accessed: 2 November 2026).
6. Google Fonts (n.d.) *Google Fonts*. Available at: https://fonts.google.com/ (Accessed: 2 November 2026).
7. FormSubmit (n.d.) *FormSubmit — easy form endpoints*. Available at: https://formsubmit.co/ (Accessed: 2 November 2026).
8. GitHub (n.d.) *GitHub Docs: About repositories*. Available at: https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (Accessed: 2 November 2026).

## Testing and handover status

The code and commit history are present on the public `main` branch. A full browser/device test, accessibility audit, performance audit, and live form-delivery test have **not** been completed or evidenced in this repository. Before submission, complete the remaining items:

- Test every page at desktop, tablet and mobile widths.
- Test valid and invalid contact/enquiry submissions and confirm the message reaches the recipient.
- Check product search, category filters, sorting, See more/See less and lightbox interactions.
- Verify map tiles, image paths and all internal/external links on the deployed site.
- Compress oversized images and consider WebP/AVIF with suitable fallbacks.
- Run Lighthouse or equivalent performance/accessibility/SEO checks and retain evidence/screenshots.
- Confirm the Part 2 feedback sheet and map each actual lecturer comment to a completed correction in this changelog.
- Deploy the site, verify the live URL in a private browser window, then add that URL above and submit both the live-site and repository links as required.

---

© 2026 House of Motubatsi Luxury. All rights reserved.
