"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.nav 
        className={styles.navbar}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image 
              src="/logo.png" 
              alt="Sherry Leads Logo" 
              width={0} 
              height={0} 
              sizes="32px"
              style={{ width: 'auto', height: '32px', objectFit: 'contain', marginRight: '8px' }}
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

          <Link href="/contacto" className={styles.ctaDesktop}>
            <span className={styles.ctaText}>EMPEZAR PROYECTO</span>
          </Link>

          <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileLinks}>
              <Link href="/" className={styles.mobileLink} onClick={closeMenu}>HOME</Link>
              <Link href="/servicios" className={styles.mobileLink} onClick={closeMenu}>SERVICIOS</Link>
              <Link href="/casos-de-exito" className={styles.mobileLink} onClick={closeMenu}>ÉXITOS</Link>
              <Link href="/precios" className={styles.mobileLink} onClick={closeMenu}>PRECIOS</Link>
              <Link href="/contacto" className={`${styles.mobileLink} ${styles.mobileCta}`} onClick={closeMenu}>
                EMPEZAR PROYECTO
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
