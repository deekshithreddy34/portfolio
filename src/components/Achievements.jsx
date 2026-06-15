import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="achievements" style={{ padding: '80px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <SectionHeader label="// achievements" title="Milestones" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          whileHover={{ boxShadow: '0 20px 60px rgba(99,102,241,0.15)', borderColor: 'rgba(99,102,241,0.4)' }}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 18, padding: '36px 40px',
            backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', gap: 32,
            transition: 'border-color 0.3s, box-shadow 0.3s',
          }}
          className="ach-card"
        >
          <motion.div
            animate={inView ? { rotate: [0, -10, 10, -5, 0] } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              width: 80, height: 80, borderRadius: 20, flexShrink: 0,
              background: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.4rem',
            }}
          >🏆</motion.div>

          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 8 }}>
              LeetCode 100-Day Streak Badge
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: 14 }}>
              Maintained a <strong style={{ color: '#e2e8f0' }}>100-day coding streak</strong> on LeetCode, solving{' '}
              <strong style={{ color: '#e2e8f0' }}>250+ problems</strong> across data structures, algorithms, and
              dynamic programming — demonstrating consistency and disciplined problem-solving.
            </p>
            <a
              href="https://leetcode.com/u/deekshithsripati"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: '#f59e0b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600,
                background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)',
                padding: '7px 16px', borderRadius: 8,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.08)'; e.currentTarget.style.transform = '' }}
            >
              <i className="fas fa-code" /> View LeetCode Profile
              <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.7rem' }} />
            </a>
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:600px){.ach-card{flex-direction:column!important;text-align:center;}}`}</style>
    </section>
  )
}
