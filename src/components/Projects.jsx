import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

const projects = [
  {
    name: 'Stock Exchange Platform',
    desc: 'Real-time trading platform with live market data, order books, and trade execution.',
    bullets: [
      'Live markets view with real-time price feeds and order book depth.',
      'Full trading engine supporting buy/sell order placement and execution.',
      'Deployed on GCP with a public production environment.',
    ],
    tech: ['React', 'Node.js', 'WebSockets', 'GCP'],
    github: 'https://github.com/deekshithreddy34/exchange',
    live: 'http://34.51.42.190/markets',
  },
  {
    name: 'Real-Time Chess App',
    desc: 'Multiplayer chess with real-time game sync, Google OAuth login, and draw/resign controls.',
    bullets: [
      'WebSocket-based real-time move synchronisation between players.',
      'Google OAuth authentication for secure, seamless sign-in.',
      'Draw and resign controls with server-side game state management.',
    ],
    tech: ['React', 'Node.js', 'WebSockets', 'Google OAuth'],
    github: 'https://github.com/deekshithreddy34',
    live: 'https://chess-app-frontend-one.vercel.app/',
  },
  {
    name: 'Payment Gateway Platform',
    desc: 'Full-stack peer-to-peer payment platform with wallet management and ACID-compliant transactions.',
    bullets: [
      'ACID-compliant transactions with PostgreSQL row-level locking to prevent race conditions.',
      'Monorepo architecture with Turborepo for modular code sharing across services.',
      'Containerized with Docker for consistent deployment environments.',
    ],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'Turborepo'],
    github: 'https://github.com/deekshithreddy34/payments-gateway',
    live: 'https://payments-gateway-7y5x.onrender.com',
  },
  {
    name: 'Zapier-Style Workflow Engine',
    desc: 'Event-driven workflow automation where external services trigger actions via webhooks.',
    bullets: [
      'Apache Kafka event-driven architecture with async worker-based execution pipeline.',
      'Transactional Outbox Pattern for atomic DB + Kafka consistency, preventing data loss.',
      'Webhook ingestion with persisted ZapRun records for reliable workflow tracking.',
    ],
    tech: ['Node.js', 'Express', 'Apache Kafka', 'PostgreSQL', 'Prisma ORM'],
    github: 'https://github.com/deekshithreddy34/Zapier',
    live: null,
  },
]

function Card({ p, i, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ borderColor: 'rgba(255,255,255,0.14)' }}
      style={{
        background: '#111', border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 12, padding: '28px 28px',
        display: 'flex', flexDirection: 'column',
        transition: 'border-color 0.2s',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <h3 style={{ fontSize: '0.975rem', fontWeight: 700, color: '#e8e8e8', lineHeight: 1.3 }}>{p.name}</h3>
        <div style={{ display: 'flex', gap: 10, marginLeft: 12, flexShrink: 0 }}>
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 5,
              background: 'rgba(79,126,247,0.1)', border: '1px solid rgba(79,126,247,0.25)',
              color: '#4f7ef7', padding: '4px 10px', borderRadius: 5,
              fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(79,126,247,0.18)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(79,126,247,0.1)'}
            ><i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.65rem' }} /> Live</a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 5,
              color: '#555', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#e8e8e8'}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}
            ><i className="fab fa-github" style={{ fontSize: '0.95rem' }} /> Code</a>
          )}
        </div>
      </div>

      <p style={{ color: '#666', fontSize: '0.845rem', lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>

      <ul style={{ listStyle: 'none', flex: 1, display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 20 }}>
        {p.bullets.map((b, j) => (
          <li key={j} style={{
            color: '#666', fontSize: '0.8rem', lineHeight: 1.7,
            paddingLeft: 14, position: 'relative',
          }}>
            <span style={{ position: 'absolute', left: 0, color: '#4f7ef7' }}>›</span>
            {b}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        {p.tech.map(t => (
          <span key={t} style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: '0.7rem', color: '#555',
            background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.07)',
            padding: '2px 8px', borderRadius: 4,
          }}>{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" style={{ padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader label="// projects" title="Projects" sub="Selected work — shipped and in production." />

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
          {projects.map((p, i) => <Card key={p.name} p={p} i={i} inView={inView} />)}
        </div>

        <div style={{ marginTop: 28 }}>
          <a href="https://github.com/deekshithreddy34" target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            border: '1px solid rgba(255,255,255,0.09)', color: '#666',
            padding: '9px 20px', borderRadius: 7,
            fontSize: '0.82rem', fontWeight: 500, textDecoration: 'none',
            transition: 'border-color 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = '#e8e8e8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#666'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)' }}
          ><i className="fab fa-github" /> View all repositories on GitHub</a>
        </div>
      </div>
    </section>
  )
}
