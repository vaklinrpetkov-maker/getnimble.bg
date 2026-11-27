import { ACCENT } from "../accent";
import LogoMark from "./LogoMark";

// Paths of the service pages. With `trailingSlash: true` every link ends in a slash.
export const PAGES = {
  ai: { href: "/izkustven-intelekt-za-biznesa/", label: "Изкуствен интелект за бизнеса" },
  training: { href: "/obuchenie-izkustven-intelekt/", label: "Обучение по изкуствен интелект" },
  geo: { href: "/optimizatsiya-za-ai-tarsachki/", label: "Оптимизация за AI търсачки (GEO)" },
};

// Header shared by every page. On the homepage the menu scrolls within the page.
// On other pages the same links lead back to the homepage sections.
export function SiteHeader({ home = false }: { home?: boolean }) {
  const base = home ? "" : "/";
  return (
    <header style={{ maxWidth: '1200px', margin: '0 auto', padding: '28px 32px', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1E1B16' }}>
      <a href={home ? "#top" : "/"} aria-label="Nimble — начало" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', fontFamily: "'Literata', Georgia, serif", fontSize: '26px', letterSpacing: '-0.01em' }}><LogoMark size={30} />Nimble</a>
      <nav aria-label="Основно меню" style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', fontSize: '15px', alignItems: 'center' }}>
        <a href={`${base}#automations`} style={{ textDecoration: 'none' }}>Автоматизации</a>
        <a href={`${base}#services`} style={{ textDecoration: 'none' }}>Решения</a>
        <a href={`${base}#integration`} style={{ textDecoration: 'none' }}>Интеграция</a>
        <a href={`${base}#training`} style={{ textDecoration: 'none' }}>Обучение</a>
        <a href={`${base}#contact`} data-consult style={{ textDecoration: 'underline', textUnderlineOffset: '4px', color: ACCENT, minHeight: '44px', display: 'flex', alignItems: 'center' }}>Заявете консултация</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ maxWidth: '1200px', margin: '0 auto', padding: '28px 32px', borderTop: '1px solid #1E1B16', display: 'flex', flexWrap: 'wrap', gap: '16px 32px', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: '#55504A' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><LogoMark size={20} />© 2026 Нимбъл ЕООД · ЕИК 208021692 · София</span>
      <nav aria-label="Услуги" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
        <a href={PAGES.ai.href} style={{ color: '#55504A' }}>{PAGES.ai.label}</a>
        <a href={PAGES.training.href} style={{ color: '#55504A' }}>{PAGES.training.label}</a>
        <a href={PAGES.geo.href} style={{ color: '#55504A' }}>{PAGES.geo.label}</a>
        <a href="mailto:office@getnimble.bg" style={{ color: '#55504A' }}>office@getnimble.bg</a>
      </nav>
    </footer>
  );
}
