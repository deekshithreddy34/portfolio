import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

const groups = [
  {
    icon: 'fas fa-code', color: '#6366f1',
    title: 'Languages',
    tags: ['JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML', 'CSS'],
  },
  {
    icon: 'fas fa-layer-group', color: '#8b5cf6',
    title: 'Frameworks & Libraries',
    tags: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Recoil', 'Prisma ORM'],
  },
  {
    icon: 'fas fa-cloud', color: '#06b6d4',
    title: 'Cloud & DevOps',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Git'],
  },
  {
    icon: 'fas fa-database', color: '#10b981',
    title: 'Databases & Messaging',
    tags: ['PostgreSQL', 'MySQL', 'Redis', 'Apache Kafka', 'REST APIs', 'Prisma'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <SectionHeader label="// technical skills" title="My Toolkit" sub="Technologies I use to build reliable, scalable systems." />

        <div ref={ref} style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20,
        }}>
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: `0 20px 50px rgba(99,102,241,0.15)` }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16, padding: 28,
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            >
              <div style={{
                width: 46, height: 46, borderRadius: 12,
                background: `${g.color}1a`, border: `1px solid ${g.color}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.15rem', color: g.color, marginBottom: 16,
              }}>
                <i className={g.icon} />
              </div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 14 }}>{g.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {g.tags.map(t => (
                  <span key={t} style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#94a3b8', fontSize: '0.74rem', fontWeight: 500,
                    padding: '4px 10px', borderRadius: 6,
                    fontFamily: "'JetBrains Mono',monospace",
                    transition: 'all 0.2s', cursor: 'default',
                  }}
                    onMouseEnter={e => { e.target.style.borderColor = g.color; e.target.style.color = '#e2e8f0' }}
                    onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.color = '#94a3b8' }}
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
