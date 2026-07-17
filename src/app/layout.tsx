import type { Metadata } from 'next';
import Script from 'next/script';
import { Archivo, Space_Grotesk } from 'next/font/google';
import './globals.css';
import content from '@/content/fr';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ─── Font Configuration (UI/UX Pro Max — Exaggerated Minimalism) ─────────────
// Skill recommends: Archivo / Space Grotesk for agency/portfolio/minimalist style

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  keywords: [
    'création site web Algérie',
    'studio digital Tlemcen',
    'studio digital Oran',
    'développement web Algérie',
    'identité visuelle Algérie',
    'application sur mesure Algérie',
    'Zianide Digital',
    'agence web algérienne',
  ],
  authors: [{ name: 'Zianide Digital' }],
  creator: 'Zianide Digital',
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    locale: content.meta.locale,
    type: 'website',
    siteName: 'Zianide Digital',
  },
  robots: {
    index: true,
    follow: true,
  },
};

import ScrollProgress from '@/components/ScrollProgress';

// ─── Root Layout ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir={content.meta.dir} className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Umami Analytics — sans cookies, RGPD-friendly */}
        {/* Remplace data-website-id par ton ID Umami une fois le compte créé sur cloud.umami.is */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="REMPLACE-PAR-TON-ID-UMAMI"
          strategy="afterInteractive"
          data-auto-track="true"
        />
      </head>
      <body className={archivo.className}>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
