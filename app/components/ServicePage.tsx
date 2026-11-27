import { ACCENT } from "../accent";
import ConsultDialog from "./ConsultDialog";
import { SiteFooter, SiteHeader } from "./SiteChrome";

const SITE_URL = "https://getnimble.bg";
const SERIF = "'Literata', Georgia, serif";
const MONO = "'JetBrains Mono', monospace";

export type ServiceSection = {
  heading: string;
  intro?: string;
  // Rows with a title and one line of text. `href` turns the title into a link.
  items?: { title: string; text: string; href?: string }[];
  // Numbered steps.
  steps?: { title: string; text: string }[];
};

export type ServicePageData = {
  path: string; // e.g. "/obuchenie-izkustven-intelekt/"
  eyebrow: string;
  title: string; // the H1
  lead: string; // direct answer: what, for whom, where
  serviceName: string; // name used in structured data
  sections: ServiceSection[];
  faq: { q: string; a: string }[];
  related: { href: string; label: string; text: string };
  cta: { title: string; text: string };
};

// Structured data for one service page: the service, its FAQ and the breadcrumb.
function jsonLd(page: ServicePageData) {
  const url = SITE_URL + page.path;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: page.serviceName,
      description: page.lead,
      url,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "България" },
      inLanguage: "bg",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Nimble", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: page.eyebrow, item: url },
      ],
    },
  ];
}

// Layout shared by the service pages. Each page file only supplies the text.
export default function ServicePage({ page }: { page: ServicePageData }) {
  return (
    <div style={{ background: '#F4F1EA', color: '#1E1B16', fontFamily: "'Golos Text', 'Segoe UI', Arial, sans-serif", fontSize: '17px', lineHeight: '1.6' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(page)) }} />
      <SiteHeader />

      <main>
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '88px 32px 72px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <p style={{ margin: '0', fontFamily: MONO, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A' }}>
            <a href="/" style={{ color: '#55504A', textDecoration: 'none' }}>Nimble</a> · {page.eyebrow}
          </p>
          <h1 style={{ margin: '0', maxWidth: '980px', fontFamily: SERIF, fontWeight: '400', fontSize: 'clamp(38px, 5vw, 72px)', lineHeight: '1.06', letterSpacing: '-0.025em', textWrap: 'balance' }}>{page.title}</h1>
          <p style={{ margin: '0', maxWidth: '760px', fontSize: '21px', color: '#3C3832' }}>{page.lead}</p>
          <a href="/#contact" data-consult className="nb-btn" style={{ textDecoration: 'none', background: '#1E1B16', color: '#F4F1EA', padding: '15px 22px', alignSelf: 'flex-start', minHeight: '24px', display: 'flex', alignItems: 'center', fontWeight: '500' }}>Заявете консултация</a>
        </section>

        {page.sections.map((section) => (
          <section key={section.heading} style={{ borderTop: '1px solid #1E1B16' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 32px', display: 'flex', flexWrap: 'wrap', gap: '32px 64px' }}>
              <h2 style={{ flex: '1 1 280px', margin: '0', fontFamily: SERIF, fontWeight: '400', fontSize: 'clamp(28px, 3vw, 38px)', lineHeight: '1.15', letterSpacing: '-0.015em', textWrap: 'balance' }}>{section.heading}</h2>
              <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {section.intro && <p style={{ margin: '0', fontSize: '19px', color: '#3C3832', maxWidth: '680px' }}>{section.intro}</p>}
                {section.items && (
                  <ul style={{ margin: '0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                    {section.items.map((item) => (
                      <li key={item.title} style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 32px', padding: '20px 0', borderTop: '1px solid #C9C2B4' }}>
                        <span style={{ flex: '1 1 220px', fontFamily: SERIF, fontSize: '22px', lineHeight: '1.3' }}>
                          {item.href ? <a href={item.href} style={{ textUnderlineOffset: '4px' }}>{item.title}</a> : item.title}
                        </span>
                        <span style={{ flex: '2 1 320px', color: '#3C3832' }}>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.steps && (
                  <ol style={{ margin: '0', padding: '0', listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))', gap: '32px 28px' }}>
                    {section.steps.map((step, i) => (
                      <li key={step.title} style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #1E1B16', paddingTop: '16px' }}>
                        <span aria-hidden="true" style={{ fontFamily: SERIF, fontSize: '44px', lineHeight: '1', color: ACCENT }}>{i + 1}</span>
                        <span style={{ fontFamily: SERIF, fontSize: '22px', lineHeight: '1.25' }}>{step.title}</span>
                        <span style={{ color: '#3C3832' }}>{step.text}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </section>
        ))}

        <section style={{ borderTop: '1px solid #1E1B16', background: '#EBE6DB' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 32px', display: 'flex', flexWrap: 'wrap', gap: '32px 64px' }}>
            <h2 style={{ flex: '1 1 280px', margin: '0', fontFamily: SERIF, fontWeight: '400', fontSize: 'clamp(28px, 3vw, 38px)', lineHeight: '1.15', letterSpacing: '-0.015em' }}>Често задавани въпроси</h2>
            <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
              {page.faq.map(({ q, a }) => (
                <div key={q} style={{ padding: '22px 0', borderTop: '1px solid #C9C2B4', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ margin: '0', fontFamily: SERIF, fontWeight: '500', fontSize: '22px', lineHeight: '1.3' }}>{q}</h3>
                  <p style={{ margin: '0', color: '#3C3832', maxWidth: '680px' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ borderTop: '1px solid #1E1B16' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 32px', display: 'flex', flexWrap: 'wrap', gap: '12px 64px', alignItems: 'baseline' }}>
            <p style={{ flex: '1 1 280px', margin: '0', fontFamily: MONO, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A' }}>Вижте още</p>
            <p style={{ flex: '999 1 560px', minWidth: '0', margin: '0', fontSize: '19px' }}>
              <a href={page.related.href} style={{ fontFamily: SERIF, fontSize: '24px', textUnderlineOffset: '4px' }}>{page.related.label}</a>
              <span style={{ display: 'block', color: '#3C3832', marginTop: '6px' }}>{page.related.text}</span>
            </p>
          </div>
        </section>

        <section style={{ background: '#1E1B16', color: '#F4F1EA' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px', display: 'flex', flexWrap: 'wrap', gap: '32px 64px', alignItems: 'flex-end' }}>
            <h2 style={{ flex: '999 1 560px', minWidth: '0', margin: '0', fontFamily: SERIF, fontWeight: '400', fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: '1.08', letterSpacing: '-0.02em', textWrap: 'balance' }}>{page.cta.title}</h2>
            <div style={{ flex: '1 1 280px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p style={{ margin: '0', color: '#D6D0C4' }}>{page.cta.text}</p>
              <a href="mailto:office@getnimble.bg" data-consult style={{ textDecoration: 'none', background: ACCENT, color: '#FFFFFF', padding: '16px 24px', fontWeight: '500', alignSelf: 'flex-start', minHeight: '24px', display: 'flex', alignItems: 'center' }}>Заявете консултация</a>
              <a href="mailto:office@getnimble.bg" style={{ fontSize: '15px', color: '#D6D0C4' }}>office@getnimble.bg</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ConsultDialog />
    </div>
  );
}

// Page metadata with the page's own canonical URL. Without this, a page would
// inherit the homepage canonical from the root layout.
// A page that sets its own openGraph block loses the image inherited from the
// root, so the shared preview image is named here again.
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: "Nimble: автоматизация на бизнес процеси и AI решения за бизнеса" };

export function serviceMetadata(page: ServicePageData, title: string, description: string) {
  return {
    title,
    description,
    alternates: { canonical: page.path },
    openGraph: { title, description, url: SITE_URL + page.path, siteName: "Nimble", locale: "bg_BG", type: "website" as const, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image" as const, title, description, images: [OG_IMAGE.url] },
  };
}
