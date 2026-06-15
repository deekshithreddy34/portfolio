import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '120px 0 80px', position: 'relative', zIndex: 1,
    }}>
      {/* radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(99,102,241,0.12) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px', width: '100%' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 60, alignItems: 'center',
        }} className="hero-grid">

          {/* Left */}
          <div>
            <motion.div {...fadeUp(0)} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.3)',
              color: '#6366f1', fontFamily: "'JetBrains Mono',monospace",
              fontSize: '0.78rem', padding: '6px 14px', borderRadius: 100,
              marginBottom: 24,
            }}>
              <span style={{
                width: 7, height: 7, background: '#10b981',
                borderRadius: '50%', display: 'inline-block',
                boxShadow: '0 0 8px #10b981',
                animation: 'pulse-dot 2s infinite',
              }} />
              Open to Full-time Opportunities
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} style={{
              fontSize: 'clamp(2.6rem,5vw,4rem)',
              fontWeight: 900, lineHeight: 1.05,
              letterSpacing: '-0.03em', marginBottom: 16,
            }}>
              S. Deekshith<br />
              <span style={{
                background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Reddy</span>
            </motion.h1>

            <motion.div {...fadeUp(0.2)} style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: '1.05rem', color: '#94a3b8', marginBottom: 20,
              minHeight: '1.6em',
            }}>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2000,
                  'Backend Systems Engineer', 2000,
                  'React & Next.js Specialist', 2000,
                  'Data Science Graduate', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p {...fadeUp(0.3)} style={{
              color: '#94a3b8', fontSize: '1rem', lineHeight: 1.85,
              maxWidth: 500, marginBottom: 36,
            }}>
              M.Sc Data Science graduate & software developer who builds scalable full-stack systems —
              from AI-powered query platforms to event-driven microservices.
              I ship things that actually work.
            </motion.p>

            <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                  color: '#fff', padding: '13px 28px', borderRadius: 10,
                  fontWeight: 700, fontSize: '0.9rem',
                  boxShadow: '0 4px 20px rgba(99,102,241,0.35)',
                  transition: 'transform 0.2s,box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(99,102,241,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(99,102,241,0.35)' }}
              >
                <i className="fas fa-rocket" /> View Projects
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#e2e8f0', padding: '13px 28px', borderRadius: 10,
                  fontWeight: 700, fontSize: '0.9rem',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.background = 'rgba(99,102,241,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = '' }}
              >
                <i className="fas fa-paper-plane" /> Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/deekshith-reddy-b301551a4"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#94a3b8', padding: '13px 18px', borderRadius: 10,
                  fontSize: '1rem', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#0a66c2'; e.currentTarget.style.borderColor = '#0a66c2' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://github.com/deekshithreddy34"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#94a3b8', padding: '13px 18px', borderRadius: 10,
                  fontSize: '1rem', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.borderColor = '#e2e8f0' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >
                <i className="fab fa-github" />
              </a>
            </motion.div>
          </div>

          {/* Right – animated card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center' }}
            className="hero-right"
          >
            <div style={{ position: 'relative', width: 340 }}>
              {/* glow ring */}
              <div style={{
                position: 'absolute', inset: -2,
                borderRadius: '50%',
                background: 'linear-gradient(135deg,#6366f1,#06b6d4,#8b5cf6)',
                filter: 'blur(24px)', opacity: 0.35,
                animation: 'spin-slow 8s linear infinite',
              }} />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  background: 'rgba(11,15,26,0.9)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 20, padding: '32px 28px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
                  position: 'relative',
                }}
              >
                {/* top bar */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
                  {['#ff5f57','#febc2e','#28c840'].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                </div>

                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.82rem', lineHeight: 2 }}>
                  <div style={{ color: '#475569' }}>// developer.profile</div>
                  <div><span style={{ color: '#8b5cf6' }}>const</span> <span style={{ color: '#06b6d4' }}>dev</span> = {'{'}</div>
                  <div style={{ paddingLeft: 20 }}>
                    <div><span style={{ color: '#94a3b8' }}>name</span>: <span style={{ color: '#10b981' }}>"S. Deekshith Reddy"</span>,</div>
                    <div><span style={{ color: '#94a3b8' }}>role</span>: <span style={{ color: '#10b981' }}>"Full Stack Developer"</span>,</div>
                    <div><span style={{ color: '#94a3b8' }}>location</span>: <span style={{ color: '#10b981' }}>"Hyderabad, India"</span>,</div>
                    <div><span style={{ color: '#94a3b8' }}>exp</span>: <span style={{ color: '#f59e0b' }}>1</span>,</div>
                    <div><span style={{ color: '#94a3b8' }}>leetcode</span>: <span style={{ color: '#f59e0b' }}>250</span><span style={{ color: '#94a3b8' }}>+ problems</span>,</div>
                    <div><span style={{ color: '#94a3b8' }}>stack</span>: [<span style={{ color: '#10b981' }}>"React"</span>, <span style={{ color: '#10b981' }}>"Node"</span>, <span style={{ color: '#10b981' }}>"Kafka"</span>],</div>
                    <div><span style={{ color: '#94a3b8' }}>open</span>: <span style={{ color: '#6366f1' }}>true</span>,</div>
                  </div>
                  <div>{'}'}</div>
                </div>

                {/* status */}
                <div style={{
                  marginTop: 20, padding: '10px 14px',
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%', background: '#10b981',
                    boxShadow: '0 0 8px #10b981', animation: 'pulse-dot 2s infinite',
                  }} />
                  <span style={{ color: '#10b981', fontSize: '0.78rem', fontFamily: "'JetBrains Mono',monospace" }}>
                    Available for hire
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1) }
          50% { opacity:0.5; transform:scale(1.4) }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg) }
          to { transform: rotate(360deg) }
        }
        @media(max-width:768px){
          .hero-grid { grid-template-columns:1fr!important; }
          .hero-right { display:none!important; }
        }
      `}</style>
    </section>
  )
}
