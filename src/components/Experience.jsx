import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

const bullets = [
  <>Contributed to an <strong style={{ color: '#ccc', fontWeight: 600 }}>AI-powered database interaction platform</strong> enabling natural language querying — reducing manual SQL effort by ~60% for common data access tasks.</>,
  <>Built responsive frontend interfaces with <strong style={{ color: '#ccc', fontWeight: 600 }}>React and Next.js</strong> for prompt submission and structured query visualisation.</>,
  <>Integrated <strong style={{ color: '#ccc', fontWeight: 600 }}>4+ relational database systems</strong> into a unified query layer enabling dynamic cross-dataset data retrieval.</>,
  <>Optimised <strong style={{ color: '#ccc', fontWeight: 600 }}>REST API interactions</strong> in collaboration with backend engineers, reducing average API latency by ~25%.</>,
  <>Containerized application services using <strong style={{ color: '#ccc', fontWeight: 600 }}>Docker</strong>, enabling consistent development and deployment environments.</>,
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" style={{ padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader label="// experience" title="Work Experience" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            background: '#111', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12, padding: '36px 40px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e8e8e8', marginBottom: 4 }}>Software Developer</h3>
              <div style={{ fontSize: '0.875rem', color: '#4f7ef7', fontWeight: 500 }}>DX Engineers</div>
            </div>
            <span style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: '0.75rem', color: '#555',
              background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.07)',
              padding: '5px 12px', borderRadius: 6,
            }}>Sep 2022 – Sep 2023</span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                style={{
                  color: '#777', fontSize: '0.875rem', lineHeight: 1.8,
                  paddingLeft: 16, position: 'relative',
                }}
              >
                <span style={{ position: 'absolute', left: 0, color: '#4f7ef7', fontWeight: 700 }}>—</span>
                {b}
              </motion.li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {['React', 'Next.js', 'Node.js', 'REST API', 'Docker', 'SQL', 'TypeScript'].map(t => (
              <span key={t} style={{
                background: 'rgba(79,126,247,0.08)', border: '1px solid rgba(79,126,247,0.2)',
                color: '#4f7ef7', fontSize: '0.72rem', fontWeight: 500,
                padding: '3px 9px', borderRadius: 5,
                fontFamily: "'JetBrains Mono',monospace",
              }}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
