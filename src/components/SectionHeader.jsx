import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionHeader({ label, title, sub }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: 48 }}
    >
      <p style={{
        fontFamily: "'JetBrains Mono',monospace", fontSize: '0.75rem',
        color: '#4f7ef7', letterSpacing: '0.12em', textTransform: 'uppercase',
        marginBottom: 10, fontWeight: 500,
      }}>{label}</p>
      <h2 style={{
        fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', fontWeight: 800,
        color: '#e8e8e8', letterSpacing: '-0.02em', marginBottom: sub ? 12 : 0,
      }}>{title}</h2>
      {sub && <p style={{ color: '#666', fontSize: '0.9rem', maxWidth: 480, lineHeight: 1.8, marginTop: 8 }}>{sub}</p>}
    </motion.div>
  )
}
