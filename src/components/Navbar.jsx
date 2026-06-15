import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
    setActive(id)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: scrolled ? '12px 60px' : '20px 60px',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: scrolled ? 'rgba(5,8,16,0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '1.1rem', fontWeight: 600,
          color: '#6366f1', textDecoration: 'none',
        }}
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      >
        &lt;<span style={{ color: '#e2e8f0' }}>DR</span>/&gt;
      </a>

      {/* Desktop */}
      <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}
        className="nav-desktop">
        {links.map(l => (
          <li key={l}>
            <button
              onClick={() => scrollTo(l)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: active === l ? '#e2e8f0' : '#94a3b8',
                fontSize: '0.875rem', fontWeight: 500,
                fontFamily: 'inherit', letterSpacing: '0.02em',
                transition: 'color 0.2s', padding: '4px 0',
                borderBottom: active === l ? '1px solid #6366f1' : '1px solid transparent',
              }}
              onMouseEnter={e => e.target.style.color = '#e2e8f0'}
              onMouseLeave={e => e.target.style.color = active === l ? '#e2e8f0' : '#94a3b8'}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>

      <a
        href="mailto:sripatideekshtih@gmail.com"
        style={{
          background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
          color: '#fff', padding: '8px 20px', borderRadius: 8,
          fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(99,102,241,0.3)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 25px rgba(99,102,241,0.5)' }}
        onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '0 4px 15px rgba(99,102,241,0.3)' }}
      >
        Hire Me
      </a>

      {/* Mobile hamburger */}
      <button
        className="nav-burger"
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'none', background: 'none', border: 'none',
          color: '#e2e8f0', fontSize: '1.4rem', cursor: 'pointer',
        }}
      >
        <i className={`fas fa-${open ? 'times' : 'bars'}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'rgba(5,8,16,0.97)', backdropFilter: 'blur(20px)',
              padding: '24px 40px', display: 'flex', flexDirection: 'column', gap: 16,
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                style={{
                  background: 'none', border: 'none', color: '#94a3b8',
                  fontSize: '1rem', fontWeight: 500, cursor: 'pointer',
                  textAlign: 'left', fontFamily: 'inherit', padding: '8px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >{l}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: block !important; }
          nav { padding: 16px 24px !important; }
        }
      `}</style>
    </motion.nav>
  )
}
