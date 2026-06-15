import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

const projects = [
  {
    emoji: '💳',
    name: 'Payment Gateway Platform',
    desc: 'Full-stack peer-to-peer payment platform with wallet management, user authentication, and secure concurrent transaction handling.',
    bullets: [
      <><strong>ACID-compliant transactions</strong> using PostgreSQL transactions and row-level locking to prevent race conditions during concurrent payments.</>,
      <>Designed using a <strong>monorepo architecture with Turborepo</strong>, improving modular development and code sharing across services.</>,
      <>Containerized with <strong>Docker</strong> ensuring consistent development and deployment environments.</>,
    ],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'Turborepo'],
    github: 'https://github.com/deekshithreddy34/payments-gateway',
    color: '#6366f1',
  },
  {
    emoji: '⚡',
    name: 'Zapier-Style Workflow Engine',
    desc: 'Event-driven workflow automation platform where external services trigger actions through webhooks with guaranteed delivery.',
    bullets: [
      <>Designed <strong>event-driven architecture using Apache Kafka</strong>, where incoming webhook events are persisted as ZapRun records and processed asynchronously via workers.</>,
      <>Implemented <strong>Transactional Outbox Pattern</strong> to guarantee atomic consistency between the database and Kafka queue, preventing data loss.</>,
      <>Built with <strong>Node.js, Express, PostgreSQL and Prisma ORM</strong> for a robust, type-safe backend.</>,
    ],
    tech: ['Node.js', 'Express', 'Apache Kafka', 'PostgreSQL', 'Prisma ORM'],
    github: 'https://github.com/deekshithreddy34/Zapier',
    color: '#8b5cf6',
  },
]

function ProjectCard({ p, i, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      whileHover={{ y: -8 }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 18, padding: 32,
        backdropFilter: 'blur(10px)',
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(99,102,241,0.12)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.boxShadow = ''
      }}
    >
      {/* top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${p.color}, #06b6d4)`,
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div style={{
          width: 50, height: 50, borderRadius: 13,
          background: `${p.color}1a`, border: `1px solid ${p.color}33`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem',
        }}>{p.emoji}</div>
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            color: '#475569', fontSize: '0.85rem', textDecoration: 'none',
            transition: 'color 0.2s', fontWeight: 600,
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
          onMouseLeave={e => e.currentTarget.style.color = '#475569'}
        >
          <i className="fab fa-github" style={{ fontSize: '1.1rem' }} />
          GitHub
          <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.7rem' }} />
        </a>
      </div>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 10 }}>{p.name}</h3>
      <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: 18 }}>{p.desc}</p>

      <ul style={{ listStyle: 'none', marginBottom: 24, flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {p.bullets.map((b, j) => (
          <li key={j} style={{
            color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.7,
            paddingLeft: 16, position: 'relative',
          }}>
            <span style={{ position: 'absolute', left: 0, color: '#06b6d4' }}>→</span>
            {b}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {p.tech.map(t => (
          <span key={t} style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: '0.7rem', color: '#06b6d4',
            background: 'rgba(6,182,212,0.08)',
            border: '1px solid rgba(6,182,212,0.2)',
            padding: '3px 8px', borderRadius: 5,
          }}>{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <SectionHeader label="// projects" title="Things I've Built" sub="Real-world projects showcasing system design, backend engineering, and full-stack development." />

        <div ref={ref} style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24,
        }}>
          {projects.map((p, i) => <ProjectCard key={p.name} p={p} i={i} inView={inView} />)}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: 40 }}
        >
          <a
            href="https://github.com/deekshithreddy34"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#94a3b8', padding: '12px 28px', borderRadius: 10,
              fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = '' }}
          >
            <i className="fab fa-github" /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
