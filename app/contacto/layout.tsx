import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto y Consultoría | Sherry Leads',
  description: 'Agenda una llamada de descubrimiento sin compromiso o escríbenos para empezar tu próximo gran proyecto digital.',
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
