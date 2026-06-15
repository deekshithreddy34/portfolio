import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionHeader({ label, title, sub }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: 56 }}
    >
      <p style={{
        fontFamily: "'JetBrains Mono',monospace", fontSize: '0.78rem',
        color: '#6366f1', letterSpacing: '0.15em', textTransform: 'uppercase',
        marginBottom: 10,
      }}>{label}</p>
      <h2 style={{
        fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 800,
        letterSpacing: '-0.02em', marginBottom: 14, color: '#e2e8f0',
      }}>{title}</h2>
      <div style={{
        width: 48, height: 3, borderRadius: 2, marginBottom: sub ? 16 : 0,
        background: 'linear-gradient(90deg,#6366f1,#06b6d4)',
      }} />
      {sub && <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: 520, lineHeight: 1.8 }}>{sub}</p>}
    </motion.div>
  )
}
