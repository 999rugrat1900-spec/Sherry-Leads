"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import styles from './DemoModal.module.css';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string | null;
  title: string;
}

export default function DemoModal({ isOpen, onClose, serviceId, title }: DemoModalProps) {
  // Map service IDs to the generated image paths
  const imageMap: Record<string, string> = {
    web: '/demo-web.png',
    marketing: '/demo-marketing.png',
    ia: '/demo-ia.png',
    dashboard: '/demo-dashboard.png',
  };

  const imageSrc = serviceId ? imageMap[serviceId] : '';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className={styles.modal}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className={styles.header}>
              <h3 className="chrome-text">{title} - Demo</h3>
              <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar demo">
                <X size={24} />
              </button>
            </div>
            <div className={styles.content}>
              {imageSrc ? (
                <div className={styles.imageWrapper}>
                  <Image 
                    src={imageSrc} 
                    alt={`Demo de ${title}`} 
                    fill
                    style={{ objectFit: 'contain' }}
                    className={styles.demoImage}
                  />
                </div>
              ) : (
                <p>Cargando demo...</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
