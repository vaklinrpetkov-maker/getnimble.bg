# getnimble.bg

Homepage for Нимбъл ЕООД, built with Next.js as a static site.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for hosting

```bash
npm run build
```

This writes a plain static website to `out/`. You can:

- **Vercel:** import the repo; it detects Next.js and deploys automatically.
- **SuperHosting / any cPanel host:** upload the contents of `out/` to `public_html`.

## Where things are

| File | What it holds |
| --- | --- |
| `app/page.tsx` | The whole homepage: all sections and copy |
| `app/components/RotatingWord.tsx` | The rotating word in the headline (рутината / фактурите / …) |
| `app/components/LiveLog.tsx` | The live automation log under the hero |
| `app/globals.css` | Animations (marquee, word swap, blinking dot, travelling dots) and reduced-motion support |
| `app/accent.ts` | The accent colour (`#7A2E24`); change it once to restyle every accent |
| `app/layout.tsx` | Page title, description, social preview tags and fonts (Literata, Golos Text, JetBrains Mono) |

## Hidden until real content is ready

The client quote and the case-study figures are switched off with `SHOW_TESTIMONIAL` at the top of `app/page.tsx`. Fill in the quote, name, position and figures there, then set it to `true`.

## SEO files

- `app/layout.tsx`: page title, description, canonical URL and the structured data (company and services)
- `app/opengraph-image.tsx`: the social preview image, generated at build time
- `public/robots.txt`, `public/sitemap.xml`: add every new page to the sitemap
- `public/.htaccess`: HTTPS redirect, 404 page and the preview image content type

## Service pages

- `app/izkustven-intelekt-za-biznesa/page.tsx` and `app/obuchenie-izkustven-intelekt/page.tsx` hold only the text of each page.
- `app/components/ServicePage.tsx` is their shared layout and structured data (service, FAQ, breadcrumb).
- `app/components/SiteChrome.tsx` is the header and footer used by every page.
- `public/llms.txt` is a plain-text summary of the company for AI assistants. Update it when a page is added.
