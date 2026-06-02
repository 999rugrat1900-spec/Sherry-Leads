"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Trophy, TrendingUp, Users, MonitorSmartphone, Bot, ShieldCheck } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.heroImageWrapper}>
             {/* Cereza Chrome Grande simulated with 3D text styling */}
             <div className={styles.cherryChrome}>🍒</div>
             <div className={styles.cherryGlow}></div>
          </div>
          
          <h1 className={styles.title}>
            Creamos Sistemas de <br />
            <span className="chrome-text">Facturación Automática</span>
          </h1>
          <p className={styles.subtitle}>
            Diseñamos experiencias premium, ultra-rápidas y automatizadas con IA para captar clientes de alto valor sin mover un dedo.
          </p>
          
          <div className={styles.heroCtas}>
            <Link href="/servicios" className={`${styles.primaryBtn} glowing-pink`}>
              Descubrir Servicios
            </Link>
            <Link href="/contacto" className={styles.secondaryBtn}>
              Reservar Consultoría <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar (No mention of Jerez) */}
      <div className={styles.trustBar}>
        <p>CON LA CONFIANZA DE MARCAS PREMIUM EN TODA ESPAÑA</p>
        <div className={styles.trustLogos}>
           <span>+50 Marcas</span>
           <span className={styles.dot}>•</span>
           <span>Agencia Certificada</span>
           <span className={styles.dot}>•</span>
           <span>Resultados Garantizados</span>
        </div>
      </div>

      {/* Qué Hacemos (Cards) */}
      <section className={styles.servicesGrid}>
        <div className={styles.container}>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Qué <span className="chrome-text">Hacemos.</span>
          </motion.h2>

          <div className={styles.grid}>
             <div className={`${styles.card} chrome-border`}>
                <MonitorSmartphone className={styles.cardIcon} />
                <h3>Diseño Web Élite</h3>
                <p>Sitios web ultra-rápidos que dominan con estética premium y conversión brutal.</p>
             </div>
             <div className={`${styles.card} chrome-border`}>
                <Bot className={styles.cardIcon} />
                <h3>Sistemas IA</h3>
                <p>Chatbots y agentes autónomos que cierran clientes por ti 24/7/365.</p>
             </div>
             <div className={`${styles.card} chrome-border`}>
                <ShieldCheck className={styles.cardIcon} />
                <h3>Meta Ads Avanzados</h3>
                <p>Máximo ROI aplicando estrategias y embudos comprobados de alta conversión.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Mini Carousel / Casos de exito */}
      <section className={styles.carouselSection}>
        <div className={styles.container}>
           <div className={styles.carouselHeader}>
             <h2>Casos de <span className="chrome-text">Éxito Real</span></h2>
             <Link href="/casos-de-exito" className={styles.viewMore}>Ver todo →</Link>
           </div>
           
           <div className={styles.carousel}>
              <div className={`${styles.carouselItem} chrome-border`}>
                 <div className={styles.metrics}>
                    <h4>Atelier Gastronómico</h4>
                    <span>+300% Reservas IA</span>
                 </div>
              </div>
              <div className={`${styles.carouselItem} chrome-border`}>
                 <div className={styles.metrics}>
                    <h4>Smile Studio Dental</h4>
                    <span>3x Facturación</span>
                 </div>
              </div>
              <div className={`${styles.carouselItem} chrome-border`}>
                 <div className={styles.metrics}>
                    <h4>The Gentleman Club</h4>
                    <span>100% Agendas Llenas</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Strong CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
           <div className={`${styles.ctaBox} glowing-pink`}>
              <h2>¿Listo para subir el nivel?</h2>
              <p>Agenda una llamada sin compromiso y veamos si somos un fit perfecto para escalar tu negocio.</p>
              <Link href="/contacto" className={styles.primaryBtn}>Empezar Ahora</Link>
           </div>
        </div>
      </section>
    </main>
  );
}
