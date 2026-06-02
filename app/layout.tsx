import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Cursor from '@/components/Cursor';

export const metadata: Metadata = {
  title: 'Sherry Leads | Digital Premium',
  description: 'Sistemas automáticos para captar clientes online.',
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
      </body>
    </html>
  );
}
