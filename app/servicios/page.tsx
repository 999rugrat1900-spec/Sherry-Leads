"use client";

import { useState } from 'react';

import { motion } from 'framer-motion';
import { MonitorSmartphone, BarChart4, Bot, LayoutDashboard, ArrowRight, PlayCircle } from 'lucide-react';
import styles from './servicios.module.css';
import DemoModal from '@/components/DemoModal';

const services = [
  {
    id: 'web',
    title: 'Webs Personalizadas',
    description: 'Diseño UX/UI y desarrollo de alto rendimiento creado por diseñadores y programadores senior.',
    icon: MonitorSmartphone,
    benefits: ['Velocidad extrema (95+ Lighthouse)', 'Diseño premium 100% a medida', 'Optimización para conversiones'],
  },
  {
    id: 'marketing',
    title: 'Marketing Digital y Meta Ads',
    description: 'Campañas hyper-segmentadas en Meta y Google para atraer a tu cliente ideal.',
    icon: BarChart4,
    benefits: ['Máximo Retorno de Inversión (ROI)', 'Gestión completa de creatividades', 'A/B Testing continuo'],
  },
  {
    id: 'ia',
    title: 'Automatización con IA',
    description: 'Integración de inteligencia artificial para agilizar consultas y reservas de clientes 24/7.',
    icon: Bot,
    benefits: ['Chatbots entrenados con IA', 'Auto-reservas automáticas', 'Libera tiempo de tu equipo'],
  },
  {
    id: 'dashboard',
    title: 'Dashboard de Resultados',
    description: 'Panel de control exclusivo y en tiempo real para que veas tus beneficios y leads al instante.',
    icon: LayoutDashboard,
    benefits: ['Métricas cristalinas', 'Seguimiento de leads', 'Transparencia total de costes'],
  }
];

export default function ServiciosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<{id: string, title: string} | null>(null);

  const openModal = (id: string, title: string) => {
    setActiveService({ id, title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>
          Servicios <span className="chrome-text">Premium</span>
        </h1>
        <p className={styles.subtitle}>
          Soluciones de élite diseñadas exclusivamente para que tu negocio arrase en facturación online.
        </p>
      </motion.div>

      <div className={styles.cardsGrid}>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={service.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} size={32} />
                  <div className={styles.glowReflect}></div>
                </div>
                <h2>{service.title}</h2>
              </div>
              
              <p className={styles.description}>{service.description}</p>
              
              <ul className={styles.benefitsList}>
                {service.benefits.map((benefit, i) => (
                  <li key={i}>
                    <ArrowRight size={16} className={styles.bulletIcon} />
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <div className={styles.cardFooter}>
                <button 
                  className={styles.demoBtn} 
                  onClick={() => openModal(service.id, service.title)}
                >
                  <PlayCircle size={18} /> Ver demo en vivo
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      <DemoModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        serviceId={activeService?.id || null} 
        title={activeService?.title || ''} 
      />
    </main>
  );
}
