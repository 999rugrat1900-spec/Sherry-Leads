"use client";

import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import Link from 'next/link';
import styles from './precios.module.css';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter / Económico',
    description: 'Perfecto para negocios locales que están empezando.',
    price: '< 299€',
    features: ['Landing page de 1 sección', 'Diseño responsivo', 'Formulario de contacto básico', 'Soporte vía email'],
    isPopular: false,
    btnText: 'Elegir Starter',
  },
  {
    id: 'basico',
    name: 'Básico',
    description: 'Para negocios establecidos buscando presencia online seria.',
    price: '799€',
    features: ['Web multi-página (hasta 5)', 'Optimización SEO On-Page', 'Blog / Casos de Estudio', 'Integración con Google Analytics'],
    isPopular: false,
    btnText: 'Elegir Básico',
  },
  {
    id: 'profesional',
    name: 'Profesional',
    description: 'Solución completa para captar clientes en automático.',
    price: '1.499€',
    features: ['Diseño UX/UI Premium', 'Landing pages enfocadas a conversión', 'Automatizaciones iniciales (IA)', 'Campañas Meta Ads Setup', 'Soporte Prioritario'],
    isPopular: true,
    btnText: 'Elegir Profesional',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Para empresas escalando: todo incluido sin límites.',
    price: 'Cotización',
    features: ['Desarrollo Web Custom o App Básica', 'Pipeline de Ventas Completo', 'Automatización IA 24/7 Avanzada', 'Dashboard de Métricas a Medida', 'Director de Marketing Dedicado'],
    isPopular: false,
    btnText: 'Elegir Premium',
  }
];

export default function PreciosPage() {
  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>
          Planes <span className="chrome-text">Transparentes</span>
        </h1>
        <p className={styles.subtitle}>
          Soluciones escalables para cada fase de tu negocio. Sin costes ocultos.
        </p>
      </motion.div>

      <div className={styles.pricingGrid}>
        {pricingPlans.map((plan, index) => (
          <motion.div 
            key={plan.id}
            className={`${styles.pricingCard} ${plan.isPopular ? styles.popularCard : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {plan.isPopular && <div className={styles.popularBadge}>Recomendado</div>}
            
            <div className={styles.cardHeader}>
              <h2 className={styles.planName}>{plan.name}</h2>
              <p className={styles.planDesc}>{plan.description}</p>
              <div className={styles.planPrice}>
                <span className={plan.isPopular ? "chrome-text" : ""}>{plan.price}</span>
              </div>
            </div>

            <ul className={styles.featuresList}>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <Check size={18} className={styles.checkIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href={`/contacto?paquete=${plan.id}`} className={`${styles.chooseBtn} ${plan.isPopular ? styles.popularBtn : ''}`}>
              {plan.btnText}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className={styles.faq}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.faqHeader}>
          <Info size={24} className="chrome-text" />
          <p>¿No estás seguro de qué plan encaja mejor o necesitas un formato a plazos? <Link href="/contacto" className={styles.faqLink}>Hablemos y diseñaremos algo a medida para tu empresa.</Link></p>
        </div>
      </motion.div>
    </main>
  );
}
