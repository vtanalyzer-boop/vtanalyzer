# VT Analyzer — YouTube Thumbnail Analyzer (Astro + Tailwind)

A fully responsive, SEO-optimized rebuild of the VT Analyzer website using **Astro**, **Tailwind CSS v4**, and vanilla TypeScript — ready to deploy on **Cloudflare Pages**.

## What's inside

- **9 pages**: Home (with a working, real client-side thumbnail analyzer), How It Works, FAQ, About, Contact, Privacy Policy, Terms of Service, Disclaimer, and a custom 404.
- **Real analyzer tool** — no fake random scores. It reads the image's pixels with the Canvas API in the visitor's own browser (contrast, saturation, brightness balance, a focal-point proxy, aspect ratio, resolution, and file size) and computes separate Mobile and Web scores. No image is ever uploaded to a server.
- **Dark / light mode toggle** in the header, built with Tailwind's standard class-based `dark:` variant (not a CSS-variable-swap hack), so every heading, paragraph, card, border, and form field has an explicit, guaranteed-correct pair of light/dark classes. Includes system-preference detection, `localStorage` persistence, and no flash-of-wrong-theme on load. The hero, analyzer, CTA, and footer bands stay permanently dark by design (a common pattern, like a dark footer on an otherwise light site); the rest of the UI fully adapts.
- **Logo as a real image asset** — `src/assets/logo.svg`, rendered through Astro's built-in `<Image>` component (`src/components/Logo.astro`), which outputs a proper hashed, cacheable `<img>` tag rather than inline SVG markup — the standard, Cloudflare-friendly way to ship a site logo.
- **Multi-language switcher** in the header (English, Spanish, Hindi, French, Portuguese, German, Arabic, Japanese), powered by the Google Website Translator engine with its default UI hidden in favor of a custom dropdown.
- **SEO**: unique title/meta description per page, canonical URLs, Open Graph + Twitter cards, `WebApplication` / `WebSite` / `FAQPage` JSON-LD structured data, auto-generated `sitemap-index.xml`, a static `sitemap.xml`, and `robots.txt`.
- **Target keyword**: "YouTube Thumbnail", with supporting keywords (thumbnail size, thumbnail maker, Fortnite thumbnail, Canva YouTube thumbnail, thumbnail checker, thumbnail analyzer, thumbnail score checker, thumbnail SEO) worked naturally into headings, copy, and the FAQ page.
- **Fully responsive** — mobile, tablet (iPad), and desktop breakpoints throughout. The mobile/tablet nav breakpoint is set at 1024px specifically so iPads in portrait mode reliably get the hamburger menu instead of a half-rendered desktop nav.
- **Deep, original content** — About, How It Works, and every legal page are written well past the 600–650 word minimum, and the FAQ page runs to roughly 1,700 words across 18 questions.
- **AdSense basics** — `ads.txt` (placeholder, see checklist below), 16px base font size with 1.65 line-height for readability, a real office address and working contact channel in the footer, and no broken internal links.

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

Requires Node 22+.

## Deploying to Cloudflare Pages

### Option A — Git integration (recommended)
1. Push this project to a GitHub/GitLab repo.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Framework preset: **Astro** (or set manually):
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Every push to your main branch will auto-deploy.

### Option B — Wrangler CLI
```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=vtanalyzer
```

A `wrangler.toml` is already included with `pages_build_output_dir = "dist"`.

### Included Cloudflare basics
- `wrangler.toml` — Pages project config.
- `public/_headers` — security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) and long-lived caching for hashed assets.
- `public/_redirects` — 301 redirects from the old flat `.html` URLs (`/about.html`, `/contact.html`, etc.) to the new clean routes, so any existing backlinks or search listings keep working.
- `public/robots.txt` and the auto-generated `sitemap-index.xml`.

## Before going live
- Update `site` in `astro.config.mjs` if your final domain differs from `https://www.vtanalyzer.site`.
- **Replace the placeholder AdSense Publisher ID** in `public/ads.txt` (`pub-0000000000000000`) with your real one before submitting for AdSense review.
- **Replace the placeholder social links** in `src/components/Footer.astro` (YouTube, LinkedIn, X, Instagram, Facebook currently point to `vtanalyzer` handles) with your real profile URLs.
- Double-check the office address in `src/components/Footer.astro` and `src/pages/about/index.astro` — it's currently set to the address you provided (202, Princes Business Park, Vijay Nagar, Indore, Madhya Pradesh, India, Pin 425010); update it if that pin code needs correcting.
- Swap `public/og-image.jpg` for a final branded social-share image if you'd like something custom.
- Point the contact form (`src/pages/contact/index.astro`) at a real form backend (e.g. Cloudflare Pages Functions, Formspree, or a Worker) if you'd rather not rely on `mailto:`.
- Add your real analytics snippet (e.g. Cloudflare Web Analytics) in `src/layouts/Layout.astro`.
- The language switcher uses Google's free Website Translator engine client-side — no API key needed, but translation quality is machine-generated. Swap in professionally translated static pages later if SEO in specific languages becomes a priority.

## Project structure

```
src/
  components/    Header, Footer, Seo, FaqAccordion, AnalyzerTool
  data/          faqs.ts — single source of truth for all FAQ content + schema
  layouts/       Layout.astro — shared <head>, header, footer
  pages/         index.astro + one folder per route (clean URLs)
  styles/        global.css — Tailwind v4 theme tokens (colors, fonts)
public/          favicon, robots.txt, og-image, _headers, _redirects
```
