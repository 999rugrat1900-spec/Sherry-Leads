import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios Premium | Sherry Leads',
  description: 'Diseño web, embudos de ventas en Meta Ads y sistemas con Inteligencia Artificial para escalar tu facturación en automático.',
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
