import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

const edu = [
  { degree: 'M.Sc Data Science', institute: 'Loyola Academy, Hyderabad', year: '2023 – 2025', score: 'CGPA 8.03' },
  { degree: 'B.Sc Statistics', institute: 'Little Flower College', year: '2019 – 2022', score: 'CGPA 8.2' },
  { degree: 'Intermediate (MPC)', institute: 'Gayatri College', year: '2017 – 2019', score: '780 / 1000' },
]

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" style={{ padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader label="// education" title="Education" />

        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {edu.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ borderColor: 'rgba(255,255,255,0.14)', background: '#131313' }}
              style={{
                background: '#111', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 10, padding: '22px 28px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                flexWrap: 'wrap', gap: 12, transition: 'background 0.2s, border-color 0.2s',
              }}
            >
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e8e8e8', marginBottom: 3 }}>{e.degree}</div>
                <div style={{ fontSize: '0.82rem', color: '#555', fontWeight: 500 }}>{e.institute}</div>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '0.73rem', color: '#555',
                  background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.07)',
                  padding: '4px 10px', borderRadius: 5,
                }}>{e.year}</span>
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '0.73rem', color: '#4f7ef7',
                  background: 'rgba(79,126,247,0.08)', border: '1px solid rgba(79,126,247,0.2)',
                  padding: '4px 10px', borderRadius: 5,
                }}>{e.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
