import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

const groups = [
  { title: 'Languages', tags: ['JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML', 'CSS'] },
  { title: 'Frameworks & Libraries', tags: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Recoil', 'Prisma ORM'] },
  { title: 'Cloud & DevOps', tags: ['Docker', 'Kubernetes'] },
  { title: 'Databases & Messaging', tags: ['PostgreSQL', 'MySQL', 'Redis', 'Apache Kafka', 'REST APIs'] },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" style={{ padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader label="// skills" title="Technical Skills" sub="Technologies I work with day-to-day." />

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))', gap: 16 }}>
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ borderColor: 'rgba(255,255,255,0.14)' }}
              style={{
                background: '#111', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 10, padding: '24px 22px',
                transition: 'border-color 0.2s',
              }}
            >
              <h3 style={{
                fontSize: '0.8rem', fontWeight: 700, color: '#e8e8e8',
                letterSpacing: '0.04em', textTransform: 'uppercase',
                marginBottom: 16, fontFamily: "'JetBrains Mono',monospace",
              }}>{g.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {g.tags.map(t => (
                  <span key={t} style={{
                    background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)',
                    color: '#888', fontSize: '0.77rem', fontWeight: 500,
                    padding: '4px 10px', borderRadius: 5,
                    transition: 'color 0.2s, border-color 0.2s', cursor: 'default',
                  }}
                    onMouseEnter={e => { e.target.style.color = '#e8e8e8'; e.target.style.borderColor = 'rgba(255,255,255,0.18)' }}
                    onMouseLeave={e => { e.target.style.color = '#888'; e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                  >{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
