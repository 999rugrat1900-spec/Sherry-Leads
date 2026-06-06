import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planes y Precios | Sherry Leads',
  description: 'Soluciones escalables para cada fase de tu negocio. Descubre nuestros planes sin costes ocultos.',
};

export default function PreciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
