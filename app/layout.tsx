import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Cursor from '@/components/Cursor';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://sherryleads.com'), // Replace with actual domain when ready
  title: 'Sherry Leads | Digital Premium',
  description: 'Sistemas automáticos para captar clientes online. Diseño web premium y automatización con IA.',
  keywords: ['agencia de marketing', 'desarrollo web premium', 'sistemas IA', 'meta ads', 'captación de clientes'],
  openGraph: {
    title: 'Sherry Leads | Digital Premium',
    description: 'Sistemas automáticos para captar clientes online.',
    url: 'https://sherryleads.com',
    siteName: 'Sherry Leads',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sherry Leads | Digital Premium',
    description: 'Sistemas automáticos para captar clientes online.',
    images: ['/og-image.png'],
  },
  icons: { icon: '/logo.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} /> : null}
    </html>
  );
}
