"use client";

import { useActionState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import styles from './contacto.module.css';
import { sendContactEmail } from './actions';

export default function Contacto() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, null);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={`${styles.splitLayout} chrome-border`}>
          {/* LEFT: FORM */}
          <div className={styles.formSide}>
            <motion.div 
               initial={{ opacity: 0, x: -30 }} 
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
            >
              <h1 className={styles.title}>Empezar <span className="chrome-text">Proyecto</span></h1>
              <p className={styles.subtitle}>Cuéntanos qué necesitas y te contactaremos en menos de 24h.</p>
              
              {state?.success ? (
                <div className={`${styles.successMessage} glowing-pink`}>
                  {state.message}
                </div>
              ) : (
                <form action={formAction} className={styles.formBody}>
                  <div className={styles.formGroup}>
                    <label htmlFor="nombre">Nombre Completo *</label>
                    <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email de Empresa *</label>
                    <input type="email" id="email" name="email" required placeholder="email@empresa.com" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="servicio">Servicio de Interés</label>
                    <div className={styles.selectWrapper}>
                      <select id="servicio" name="servicio">
                        <option value="web">Diseño Web Premium</option>
                        <option value="ia">Sistemas con IA</option>
                        <option value="ads">Meta Ads & Embudos</option>
                        <option value="completo">Paquete Completo</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="mensaje">Detalles del Proyecto *</label>
                    <textarea id="mensaje" name="mensaje" rows={4} required placeholder="¿Cuáles son tus objetivos?"></textarea>
                  </div>
                  <button type="submit" className={`${styles.btnSubmit} glowing-pink`} disabled={isPending}>
                    {isPending ? 'Enviando...' : 'Enviar Solicitud'} <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* RIGHT: INFO */}
          <div className={`${styles.infoSide} gradient-pink`}>
            <motion.div 
               initial={{ opacity: 0, x: 30 }} 
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Contacto Directo</h2>
              <p>Si prefieres hablar directamente, aquí tienes nuestras líneas.</p>
              
              <div className={styles.infoBlocks}>
                <div className={styles.infoBlock}>
                   <MessageCircle size={32} />
                   <div>
                     <h4>WhatsApp</h4>
                     <span>629 13 78 00</span>
                   </div>
                </div>
                <div className={styles.infoBlock}>
                   <Mail size={32} />
                   <div>
                     <h4>Email</h4>
                     <span>sherryleads@outlook.es</span>
                   </div>
                </div>
              </div>

              <div className={styles.officeBlock}>
                 <h4>UBICACIÓN</h4>
                 <p>España</p>
                 <span className={styles.tag}>Remoto - Toda la península</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}
