import type { Metadata } from "next";
import "./globals.css";
import { ACCENT } from "./accent";

const SITE_URL = "https://getnimble.bg";
const TITLE = "Автоматизация на бизнес процеси и AI решения за бизнеса | Nimble";
const DESCRIPTION =
  "Nimble автоматизира бизнес процеси с изкуствен интелект: AI асистенти и чатбот за сайт, CRM и ERP системи, интеграция на системи и обучение на екипа.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Nimble",
    locale: "bg_BG",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

// Structured data: tells search engines who the company is and what it offers.
const SERVICES = [
  "Автоматизация на бизнес процеси",
  "AI асистенти и чатбот за сайт",
  "CRM система",
  "ERP система",
  "Интеграция на системи",
  "Обучение по изкуствен интелект",
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Nimble",
  legalName: "Нимбъл ЕООД",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/nimble-mark.svg`,
  image: `${SITE_URL}/opengraph-image`,
  description: DESCRIPTION,
  email: "office@getnimble.bg",
  taxID: "208021692",
  address: { "@type": "PostalAddress", addressLocality: "София", addressCountry: "BG" },
  areaServed: { "@type": "Country", name: "България" },
  knowsLanguage: ["bg", "en"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги",
    itemListElement: SERVICES.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg" style={{ "--accent": ACCENT } as React.CSSProperties}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,500&family=Golos+Text:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
