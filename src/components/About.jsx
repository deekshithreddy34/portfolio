import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

const stats = [
  { num: '1+', label: 'Year Professional Experience' },
  { num: '250+', label: 'LeetCode Problems Solved' },
  { num: '4+', label: 'DB Systems Integrated' },
  { num: '60%', label: 'Query Effort Reduced at DX Engineers' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <SectionHeader label="// about me" title="Who I Am" />

        <div ref={ref} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 60, alignItems: 'start',
        }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {[
              <>I'm a <strong style={{ color: '#e2e8f0' }}>full-stack developer</strong> with an M.Sc in Data Science from Loyola Academy, Hyderabad (CGPA 8.03). I combine engineering rigour with product intuition to build systems that are performant and delightful.</>,
              <>At <strong style={{ color: '#6366f1' }}>DX Engineers</strong>, I built an AI-powered database platform that let non-technical users query complex databases using plain English — cutting manual SQL effort by 60% and reducing API latency by 25%.</>,
              <>I work across the full stack: REST API design, <strong style={{ color: '#e2e8f0' }}>Apache Kafka</strong> event pipelines, <strong style={{ color: '#e2e8f0' }}>PostgreSQL</strong> transactions with ACID guarantees, Docker containerisation, and polished React frontends. I care about shipping fast and shipping right.</>,
            ].map((text, i) => (
              <p key={i} style={{
                color: '#94a3b8', lineHeight: 1.9, marginBottom: 20,
                fontSize: '0.95rem',
              }}>{text}</p>
            ))}

            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <a href="mailto:sripatideekshtih@gmail.com" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                color: '#fff', padding: '10px 22px', borderRadius: 9,
                fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(99,102,241,0.3)',
                transition: 'transform 0.2s,box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(99,102,241,0.45)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 15px rgba(99,102,241,0.3)' }}
              >
                <i className="fas fa-envelope" /> Email Me
              </a>
              <a href="https://linkedin.com/in/deekshith-reddy-b301551a4" target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#94a3b8', padding: '10px 22px', borderRadius: 9,
                fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0a66c2'; e.currentTarget.style.color = '#0a66c2' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#94a3b8' }}
              >
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16, padding: '28px 24px',
                  backdropFilter: 'blur(10px)',
                  transition: 'border-color 0.3s, transform 0.3s',
                  cursor: 'default',
                }}
                whileHover={{ y: -4, borderColor: 'rgba(99,102,241,0.5)' }}
              >
                <div style={{
                  fontSize: '2.2rem', fontWeight: 900, lineHeight: 1,
                  marginBottom: 8,
                  background: 'linear-gradient(135deg,#6366f1,#06b6d4)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>{s.num}</div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
