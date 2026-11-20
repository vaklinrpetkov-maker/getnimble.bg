import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nimble — AI автоматизации, AI асистенти и умни ERP/CRM системи",
  description:
    "Внедряваме AI асистенти, автоматизирани работни процеси и AI-задвижвани ERP и CRM системи, които се вграждат в начина, по който фирмата ви вече работи.",
  metadataBase: new URL("https://getnimble.bg"),
  openGraph: {
    title: "Nimble — умни системи, които поемат рутината вместо екипа ви",
    description:
      "AI асистенти, автоматизации, интеграция на системи и обучение на екипа за работа с AI.",
    url: "https://getnimble.bg",
    siteName: "Nimble",
    locale: "bg_BG",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,500&family=Golos+Text:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
