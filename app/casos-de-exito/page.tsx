"use client";

import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';
import styles from './casos.module.css';

const cases = [
  {
    id: 'restaurante',
    niche: 'Restaurante Premium',
    clientName: 'Atelier Gastronómico',
    beforeStat: 'Reservas por teléfono, agenda manual.',
    afterStat: '+300% de reservas automáticas el primer mes.',
    metrics: [
      { label: 'Crecimiento de Leads', value: '+187%', icon: TrendingUp },
      { label: 'Nuevos Clientes/Mes', value: '+42', icon: Users },
    ],
    accent: 'var(--pink-primary)'
  },
  {
    id: 'dental',
    niche: 'Clínica Dental Moderna',
    clientName: 'Smile Studio',
    beforeStat: 'Web anticuada, sin captación online.',
    afterStat: 'Sistema de captación de pacientes de alto valor activo 24/7.',
    metrics: [
      { label: 'Facturación Mensual', value: '3x', icon: DollarSign },
      { label: 'Coste por Lead', value: '-65%', icon: TrendingUp },
    ],
    accent: 'var(--chrome-end)'
  },
  {
    id: 'barberia',
    niche: 'Barbería de Élite',
    clientName: 'The Gentleman\'s Club',
    beforeStat: 'Citas por DM de Instagram, clientes perdidos.',
    afterStat: 'Reserva conectada con IA, agendas llenas a 2 semanas.',
    metrics: [
      { label: 'Retención Clientes', value: '100%', icon: Users },
      { label: 'Productividad', value: '+20h/semana', icon: TrendingUp },
    ],
    accent: 'var(--chrome-end)'
  },
  {
    id: 'gimnasio',
    niche: 'Gimnasio Boutique',
    clientName: 'Iron & Zen',
    beforeStat: 'Tráfico web nulo, alta rotación de socios.',
    afterStat: 'Campaña Meta Ads + Landing de conversión agresiva.',
    metrics: [
      { label: 'Nuevas Altas', value: '+150/mes', icon: Users },
      { label: 'Ventas Online', value: '+300%', icon: DollarSign },
    ],
    accent: 'var(--pink-primary)'
  },
  {
    id: 'moda',
    niche: 'Joyería de Lujo',
    clientName: 'Aura Jewels',
    beforeStat: 'Ventas estancadas, e-commerce sin identidad.',
    afterStat: 'Rebranding digital total y embudo de ticket alto.',
    metrics: [
      { label: 'Ticket Medio', value: '+400€', icon: DollarSign },
      { label: 'Conversión E-commerce', value: '4.5%', icon: TrendingUp },
    ],
    accent: 'var(--chrome-end)'
  }
];

export default function CasosExitoPage() {
  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>
          Casos de <span className="chrome-text">Éxito</span>
        </h1>
        <p className={styles.subtitle}>
          No vendemos webs. Vendemos resultados demostrables, sistemas de captación y crecimiento real para tu negocio.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {cases.map((project, index) => (
          <motion.div 
            key={project.id}
            className={styles.caseCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Visual Header Placeholder for Before / After */}
            <div className={styles.visualHeader}>
              <div className={styles.visualSplit}>
                <div className={styles.beforeHalf}>
                  <span className={styles.badgeLabel}>ANTES</span>
                  <div className={styles.abstractBefore}></div>
                </div>
                <div className={styles.afterHalf}>
                  <div className={styles.glowOverlay} style={{ background: project.accent }}></div>
                  <span className={styles.badgeLabel}>DESPUÉS</span>
                  <div className={styles.abstractAfter}></div>
                </div>
              </div>
            </div>

            <div className={styles.caseContent}>
              <div className={styles.caseHeader}>
                <span className={styles.nicheLabel}>{project.niche}</span>
                <h2>{project.clientName}</h2>
              </div>

              <div className={styles.comparison}>
                <div className={styles.compareBlock}>
                  <h4>El Problema</h4>
                  <p>{project.beforeStat}</p>
                </div>
                <div className={styles.compareBlock}>
                  <h4>La Solución</h4>
                  <p className={styles.highlightText}>{project.afterStat}</p>
                </div>
              </div>

              <div className={styles.metricsContainer}>
                {project.metrics.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <div className={styles.metricBox} key={i}>
                      <Icon className={styles.metricIcon} size={24} style={{ color: project.accent }} />
                      <span className={styles.metricValue}>{metric.value}</span>
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </div>
                  );
                })}
              </div>

              <button className={styles.caseBtn}>
                Ver sitio web en vivo <ExternalLink size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
