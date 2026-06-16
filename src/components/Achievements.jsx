import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="achievements" style={{ padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader label="// achievements" title="Achievements" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          whileHover={{ borderColor: 'rgba(255,255,255,0.14)' }}
          style={{
            background: '#111', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12, padding: '32px 36px',
            display: 'flex', alignItems: 'flex-start', gap: 28,
            transition: 'border-color 0.2s',
          }}
          className="ach-row"
        >
          <div style={{
            width: 44, height: 44, borderRadius: 9, background: '#1a1a1a',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.3rem', flexShrink: 0,
          }}>🏆</div>

          <div>
            <h3 style={{ fontSize: '0.975rem', fontWeight: 700, color: '#e8e8e8', marginBottom: 6 }}>
              LeetCode 100-Day Streak Badge
            </h3>
            <p style={{ color: '#666', fontSize: '0.855rem', lineHeight: 1.8, marginBottom: 14 }}>
              Maintained a 100-day coding streak on LeetCode, solving{' '}
              <span style={{ color: '#ccc', fontWeight: 600 }}>250+ problems</span> across
              data structures, algorithms, and dynamic programming.
            </p>
            <a
              href="https://leetcode.com/u/deekshithsripati"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                color: '#4f7ef7', textDecoration: 'none',
                fontSize: '0.82rem', fontWeight: 600,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#7da4f9'}
              onMouseLeave={e => e.currentTarget.style.color = '#4f7ef7'}
            >
              View LeetCode Profile <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.65rem' }} />
            </a>
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:600px){.ach-row{flex-direction:column!important;}}`}</style>
    </section>
  )
}
