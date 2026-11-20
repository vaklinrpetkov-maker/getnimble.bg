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

## Placeholders to fill before launch

Search `app/page.tsx` for square brackets:

- `[ИМЕЙЛ]`, `[ТЕЛЕФОН]`, `[ЕИК]`: contact details in the CTA and footer
- `[N]`, `[X ч/седм.]`: case-study figures
- `[ЦИТАТ ОТ КЛИЕНТА …]`, `[ИМЕ]`, `[ДЛЪЖНОСТ]`: client quote
