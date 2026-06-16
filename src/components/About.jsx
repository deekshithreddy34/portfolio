import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" style={{ padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader label="// about" title="About Me" />

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {[
              <>I'm a <strong style={{ color: '#e8e8e8', fontWeight: 600 }}>full-stack developer</strong> with an M.Sc in Data Science from Loyola Academy, Hyderabad (CGPA 8.03). I combine engineering rigour with product thinking to build reliable, scalable software.</>,
              <>At <strong style={{ color: '#e8e8e8', fontWeight: 600 }}>DX Engineers</strong>, I contributed to an AI-powered database platform that let non-technical users query complex databases using plain English — reducing manual SQL effort by 60% and improving API latency by 25%.</>,
              <>I enjoy working across the full stack: designing REST APIs, building event-driven pipelines with <strong style={{ color: '#e8e8e8', fontWeight: 600 }}>Apache Kafka</strong>, writing ACID-compliant <strong style={{ color: '#e8e8e8', fontWeight: 600 }}>PostgreSQL</strong> transactions, and shipping clean React UIs.</>,
            ].map((t, i) => (
              <p key={i} style={{ color: '#777', lineHeight: 1.9, marginBottom: 18, fontSize: '0.925rem' }}>{t}</p>
            ))}

            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <a href="mailto:sripatideekshtih@gmail.com" style={{
                background: '#4f7ef7', color: '#fff',
                padding: '9px 20px', borderRadius: 7,
                fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#3a6ae4'}
                onMouseLeave={e => e.currentTarget.style.background = '#4f7ef7'}
              >Email Me</a>
              <a href="https://linkedin.com/in/deekshith-reddy-b301551a4" target="_blank" rel="noreferrer" style={{
                border: '1px solid rgba(255,255,255,0.1)', color: '#888',
                padding: '9px 20px', borderRadius: 7,
                fontWeight: 500, fontSize: '0.82rem', textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = '#e8e8e8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >LinkedIn</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, alignContent: 'start' }}
          >
            {[
              { n: '1+', l: 'Year Experience', d: 'Software Developer at DX Engineers' },
              { n: '250+', l: 'LeetCode Problems', d: '100-day streak badge' },
              { n: '4+', l: 'DB Systems', d: 'Integrated at DX Engineers' },
              { n: '8.03', l: 'M.Sc CGPA', d: 'Loyola Academy, Hyderabad' },
            ].map(s => (
              <motion.div
                key={s.l}
                whileHover={{ borderColor: 'rgba(79,126,247,0.3)' }}
                style={{
                  background: '#111', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 10, padding: '22px 20px',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#e8e8e8', lineHeight: 1, marginBottom: 6 }}>{s.n}</div>
                <div style={{ fontSize: '0.8rem', color: '#e8e8e8', fontWeight: 600, marginBottom: 3 }}>{s.l}</div>
                <div style={{ fontSize: '0.72rem', color: '#555', lineHeight: 1.5 }}>{s.d}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
