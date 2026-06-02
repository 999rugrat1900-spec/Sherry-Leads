"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="Sherry Leads Logo" 
            width={32} 
            height={32} 
            className={styles.logoImage} 
          />
          <span className="chrome-text">SHERRY LEADS</span>
        </Link>
        
        <div className={styles.links}>
          <Link href="/" className={styles.link}>HOME</Link>
          <Link href="/servicios" className={styles.link}>SERVICIOS</Link>
          <Link href="/casos-de-exito" className={styles.link}>ÉXITOS</Link>
          <Link href="/precios" className={styles.link}>PRECIOS</Link>
        </div>

        <Link href="/contacto" className={styles.cta}>
          <span className={styles.ctaText}>EMPEZAR PROYECTO</span>
        </Link>
      </div>
    </motion.nav>
  );
}
