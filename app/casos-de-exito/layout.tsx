import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casos de Éxito | Sherry Leads',
  description: 'Descubre cómo hemos ayudado a empresas locales a multiplicar sus reservas, leads y facturación. Ejemplos reales y transparentes.',
};

export default function CasosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
