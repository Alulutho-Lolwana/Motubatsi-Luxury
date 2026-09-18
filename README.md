# House of Motubatsi Luxury

## About Us

*House of Motubatsi* is a Basotho-inspired luxury fashion brand that celebrates heritage, identity and modern elegance.

We create timeless designs that blend traditional Basotho culture with contemporary style. Our brand represents pride, confidence, sophistication and appreciation for Basotho heritage.

## Our Vision

To become a recognised African luxury fashion house that proudly represents Basotho heritage on a global stage.

## Our Mission

To promote Basotho culture through refined fashion by creating designs that communicate pride, confidence and elegance.

## What We Offer

- Luxury Basotho-inspired clothing
- Traditional craftsmanship with modern designs
- Custom pieces for special occasions
- Timeless quality and attention to detail

## Website Pages

1. **Home** — Welcome to House of Motubatsi
2. **About Us** — Learn about our story, mission and values
3. **Our Story** — The heritage and journey behind the brand
4. **Products** — A quick overview of our collections
5. **Catalog** — The full catalog, organised by category (Dresses, Jackets, Blankets & Wraps, Headwear)
6. **Enquiry** — Submit an enquiry about our products or services
7. **Contact Us** — Get in touch with House of Motubatsi

## Our Inspiration

House of Motubatsi draws inspiration from Basotho culture, traditional clothing, the Basotho blanket and the iconic Mokorotlo. These cultural elements are incorporated into a modern luxury aesthetic.

## Our Values

- Heritage
- Quality
- Elegance
- Creativity
- Cultural Identity
- Confidence

## Contact

- **Email:** info@houseofmotubatsi.co.za
- **Phone:** +27 00 000 0000
- **Location:** South Africa
- **Instagram:** [@houseofmotubatsi](https://instagram.com/houseofmotubatsi)

---

## Project Structure

```
Motubatsi-Luxury/
├── index.html                  Home page
├── pages/
│   ├── about.html               About Us
│   ├── our-story.html           Our Story
│   ├── product.html             Products
│   ├── catalog.html             Full catalog, organised by category
│   ├── enquiry.html             Product enquiry form
│   └── contact.html             Contact form + map
├── assets/
│   ├── css/
│   │   └── styles.css           Site-wide stylesheet
│   ├── js/
│   │   └── main.js              Mobile navigation toggle
│   └── images/                  Logo, founder/CEO photos, gallery images
└── README.md
```

## Tech Stack

- **HTML5** — semantic markup across all pages
- **CSS3** — a single shared stylesheet (`assets/css/styles.css`) built around CSS custom properties (colours, fonts, spacing), CSS Grid/Flexbox layout, and responsive breakpoints for tablet and mobile
- **Vanilla JavaScript** — a small script (`assets/js/main.js`) powers the mobile navigation toggle
- **Google Fonts** — Cormorant Garamond (display) and Montserrat (body)

## Getting Started

This is a static site — no build step or dependencies required.

1. Clone the repository
2. Open `index.html` in a browser, or serve the folder locally (e.g. with the VS Code "Live Server" extension) so the relative links resolve correctly
3. Edit content directly in the HTML files, and shared styling in `assets/css/styles.css`

## Notes on This Revision

- Fixed a broken stylesheet `<link>` tag (missing `=`) on every page, which meant none of the pages were actually loading `styles.css`
- Corrected relative paths so the stylesheet and images resolve from both the root and the `pages/` folder
- Renamed image files (and the `pages/our story.html` file) to remove spaces and special characters, which can break links and URLs
- Applied the existing design system's CSS classes (`.navbar`, `.hero`, `.card-grid`, `.contact-form`, `.footer-grid`, etc.) consistently across all pages so the site now matches the intended luxury look
- Fixed malformed HTML (unclosed tags, stray characters, duplicate closing tags) found on several pages
- Added `assets/js/main.js` to power the mobile menu toggle already styled in the CSS
- Replaced the extensionless `README` file with this `README.md` so it renders properly on GitHub

---

Basotho Heritage. Modern Luxury.

© 2026 House of Motubatsi. All Rights Reserved.
