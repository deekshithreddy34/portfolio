import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

const edu = [
  {
    degree: 'M.Sc Data Science',
    institute: 'Loyola Academy, Hyderabad',
    year: '2023 – 2025',
    score: 'CGPA: 8.03',
    icon: '🎓',
    color: '#6366f1',
  },
  {
    degree: 'B.Sc Statistics',
    institute: 'Little Flower College',
    year: '2019 – 2022',
    score: 'CGPA: 8.2',
    icon: '📊',
    color: '#8b5cf6',
  },
  {
    degree: 'Intermediate (MPC)',
    institute: 'Gayatri College',
    year: '2017 – 2019',
    score: '780 / 1000',
    icon: '📐',
    color: '#06b6d4',
  },
]

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <SectionHeader label="// education" title="Academic Background" />

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {edu.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16, padding: 28,
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                position: 'relative', overflow: 'hidden',
              }}
              onMouseEnter={el => { el.currentTarget.style.borderColor = `${e.color}66`; el.currentTarget.style.boxShadow = `0 10px 40px ${e.color}15` }}
              onMouseLeave={el => { el.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; el.currentTarget.style.boxShadow = '' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${e.color},transparent)` }} />

              <div style={{ fontSize: '2rem', marginBottom: 16 }}>{e.icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 6 }}>{e.degree}</h3>
              <div style={{ color: e.color, fontSize: '0.85rem', fontWeight: 600, marginBottom: 4 }}>
                <i className="fas fa-university" style={{ marginRight: 6, fontSize: '0.75rem' }} />
                {e.institute}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '0.75rem', color: '#475569',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                  padding: '3px 9px', borderRadius: 5,
                }}>{e.year}</span>
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '0.75rem', color: '#10b981',
                  background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
                  padding: '3px 9px', borderRadius: 5,
                }}>{e.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
