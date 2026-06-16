import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

const s = {
  nav: (scrolled) => ({
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: scrolled ? '14px 64px' : '22px 64px',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    background: scrolled ? 'rgba(12,12,12,0.92)' : 'transparent',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    transition: 'padding 0.3s, background 0.3s, border-color 0.3s',
  }),
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={s.nav(scrolled)}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.95rem', fontWeight: 600, color: '#e8e8e8', letterSpacing: '0.02em',
        }}>deekshith<span style={{ color: '#4f7ef7' }}>.dev</span></span>
      </button>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: 36, listStyle: 'none' }} className="nav-links">
        {links.map(l => (
          <li key={l}>
            <button onClick={() => go(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#888', fontSize: '0.85rem', fontWeight: 500,
              fontFamily: 'inherit', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#e8e8e8'}
              onMouseLeave={e => e.target.style.color = '#888'}
            >{l}</button>
          </li>
        ))}
      </ul>

      <a
        href="mailto:sripatideekshtih@gmail.com"
        style={{
          background: '#4f7ef7', color: '#fff',
          padding: '8px 18px', borderRadius: 7,
          fontSize: '0.82rem', fontWeight: 600,
          textDecoration: 'none', transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#3a6ae4'}
        onMouseLeave={e => e.currentTarget.style.background = '#4f7ef7'}
        className="nav-cta"
      >Hire Me</a>

      {/* Mobile burger */}
      <button onClick={() => setOpen(o => !o)} className="nav-burger" style={{
        display: 'none', background: 'none', border: 'none',
        color: '#e8e8e8', fontSize: '1.2rem', cursor: 'pointer',
      }}>
        <i className={`fas fa-${open ? 'times' : 'bars'}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: '#111', borderBottom: '1px solid rgba(255,255,255,0.07)',
              padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 4,
            }}
          >
            {links.map(l => (
              <button key={l} onClick={() => go(l)} style={{
                background: 'none', border: 'none', color: '#888',
                fontSize: '0.95rem', fontWeight: 500, cursor: 'pointer',
                textAlign: 'left', fontFamily: 'inherit', padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#e8e8e8'}
                onMouseLeave={e => e.target.style.color = '#888'}
              >{l}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:768px){
          .nav-links,.nav-cta{display:none!important;}
          .nav-burger{display:block!important;}
          nav{padding:16px 24px!important;}
        }
      `}</style>
    </motion.nav>
  )
}
