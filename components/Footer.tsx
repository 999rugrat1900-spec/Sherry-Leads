import Link from 'next/link';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            <h2 className="chrome-text">SHERRY LEADS</h2>
            <p className={styles.description}>
              Agencia de desarrollo web premium y automatización de clientes. Escala tu negocio con sistemas probados y diseño impactante.
            </p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h3>Agencia</h3>
              <Link href="/servicios">Servicios</Link>
              <Link href="/casos-de-exito">Casos de Éxito</Link>
              <Link href="/precios">Precios</Link>
              <Link href="/contacto">Contacto</Link>
            </div>
            <div className={styles.linkColumn}>
              <h3>Legal</h3>
              <Link href="#">Aviso Legal</Link>
              <Link href="#">Política de Privacidad</Link>
              <Link href="#">Política de Cookies</Link>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Sherry Leads. Todos los derechos reservados.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="https://www.instagram.com/sherry.leads/?hl=es" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
