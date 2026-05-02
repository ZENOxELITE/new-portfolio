'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('about');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', number: '01' },
    { label: 'Projects', href: '#projects', number: '02' },
    { label: 'Growth', href: '#learning', number: '03' },
    { label: 'Contact', href: '#contact', number: '04' },
  ];

  const handleLinkClick = (href: string, label: string) => {
    setActiveLink(label.toLowerCase());
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  if (!isMobile) return null;

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
        backgroundColor: '#09090c',
        borderBottom: '1px solid #1a1a22',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 20px',
      }}>
        <a href="#" style={{
          display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 11, color: '#eeecea',
          textDecoration: 'none', letterSpacing: '0.03em',
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#f5a623', display: 'inline-block', flexShrink: 0,
          }} />
          Muneer Ahmed
        </a>

        <button onClick={() => setIsOpen(!isOpen)} style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="3.5" width="12" height="1.2" rx="0.6" fill="#eeecea"/>
            <rect x="2" y="7.4" width="8" height="1.2" rx="0.6" fill="#f5a623"/>
            <rect x="2" y="11.3" width="10" height="1.2" rx="0.6" fill="#eeecea"/>
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 40,
                backgroundColor: 'rgba(0,0,0,0.6)',
              }}
            />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              style={{
                position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
                backgroundColor: '#0f0f14',
                borderTopLeftRadius: 24, borderTopRightRadius: 24,
                maxHeight: '90vh', overflowY: 'auto',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0 24px' }}>
                <div style={{ width: 48, height: 4, background: '#1a1a22', borderRadius: 2 }} />
              </div>

              <div style={{ padding: '0 24px 24px' }}>
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href, link.label)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '13px 16px', borderRadius: 12, marginBottom: 4,
                      background: activeLink === link.label.toLowerCase()
                        ? 'rgba(245,166,35,0.1)' : 'transparent',
                      border: 'none', cursor: 'pointer',
                    }}
                  >
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 15, fontWeight: 500, color: '#eeecea',
                    }}>
                      {link.label}
                    </span>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 10, color: '#f5a623',
                    }}>
                      {link.number}
                    </span>
                  </button>
                ))}

                <div style={{ height: 1, background: '#1a1a22', margin: '16px 0' }} />

                <div style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: 12,
                }}>
                  <a href="mailto:muneerahmed.devx@gmail.com" style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 11, color: '#666',
                    textDecoration: 'none', flex: 1,
                  }}>
                    muneerahmed.devx@gmail.com
                  </a>
                  <a href="/resume.pdf" style={{
                    padding: '8px 16px', background: '#f5a623',
                    color: '#09090c', fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 10, fontWeight: 700, borderRadius: 20,
                    textDecoration: 'none', whiteSpace: 'nowrap',
                  }}>
                    CV
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}