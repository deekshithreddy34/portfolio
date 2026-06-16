import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '120px 0 80px', position: 'relative', zIndex: 1,
    }}>
      {/* very subtle top-left glow, not centered */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: 600, height: 600, pointerEvents: 'none',
        background: 'radial-gradient(circle at 20% 20%, rgba(79,126,247,0.06) 0%, transparent 60%)',
      }} />

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px', width: '100%' }}>
        <div style={{ maxWidth: 720 }}>

          <motion.div {...fade(0)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '5px 12px', borderRadius: 6, marginBottom: 32,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#22c55e', display: 'inline-block',
            }} />
            <span style={{ fontSize: '0.78rem', color: '#888', fontFamily: "'JetBrains Mono',monospace" }}>
              Available for full-time roles
            </span>
          </motion.div>

          <motion.h1 {...fade(0.1)} style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.03em', color: '#e8e8e8',
            marginBottom: 16,
          }}>
            S. Deekshith Reddy
          </motion.h1>

          <motion.div {...fade(0.2)} style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: '1rem', color: '#4f7ef7',
            marginBottom: 24, minHeight: '1.6em',
          }}>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Backend Systems Engineer', 2000,
                'React & Next.js Developer', 2000,
                'Data Science Graduate', 2000,
              ]}
              speed={55}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p {...fade(0.3)} style={{
            color: '#888', fontSize: '1rem', lineHeight: 1.85,
            maxWidth: 560, marginBottom: 40,
          }}>
            M.Sc Data Science graduate and software developer with experience building
            AI-powered platforms, event-driven microservices, and production-grade full-stack applications.
            Based in Hyderabad, India.
          </motion.p>

          <motion.div {...fade(0.4)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="#projects"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                background: '#4f7ef7', color: '#fff',
                padding: '11px 24px', borderRadius: 8,
                fontWeight: 600, fontSize: '0.875rem',
                textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#3a6ae4'}
              onMouseLeave={e => e.currentTarget.style.background = '#4f7ef7'}
            >View Projects</a>

            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#e8e8e8', padding: '11px 24px', borderRadius: 8,
                fontWeight: 600, fontSize: '0.875rem',
                textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
            >Get in Touch</a>

            <a href="https://linkedin.com/in/deekshith-reddy-b301551a4" target="_blank" rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#888', padding: '11px 18px', borderRadius: 8,
                fontSize: '0.875rem', fontWeight: 500,
                textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#e8e8e8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
            ><i className="fab fa-linkedin" /> LinkedIn</a>

            <a href="https://github.com/deekshithreddy34" target="_blank" rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#888', padding: '11px 18px', borderRadius: 8,
                fontSize: '0.875rem', fontWeight: 500,
                textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#e8e8e8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
            ><i className="fab fa-github" /> GitHub</a>
          </motion.div>

          {/* quick stats row */}
          <motion.div {...fade(0.5)} style={{
            display: 'flex', gap: 32, marginTop: 56,
            paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.07)',
            flexWrap: 'wrap',
          }}>
            {[
              { n: '1+', l: 'Year Experience' },
              { n: '250+', l: 'LeetCode Problems' },
              { n: '4', l: 'Projects Shipped' },
              { n: '8.03', l: 'M.Sc CGPA' },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#e8e8e8', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: '0.76rem', color: '#555', marginTop: 4, fontWeight: 500 }}>{s.l}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
