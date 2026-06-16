import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

const links = [
  { icon: 'fab fa-linkedin', label: 'LinkedIn', sub: 'deekshith-reddy-b301551a4', href: 'https://linkedin.com/in/deekshith-reddy-b301551a4' },
  { icon: 'fab fa-github', label: 'GitHub', sub: 'deekshithreddy34', href: 'https://github.com/deekshithreddy34' },
  { icon: 'fas fa-code', label: 'LeetCode', sub: 'deekshithsripati', href: 'https://leetcode.com/u/deekshithsripati' },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText('sripatideekshtih@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" style={{ padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader label="// contact" title="Get in Touch" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}
          className="contact-grid"
        >
          {/* left */}
          <div>
            <p style={{ color: '#666', fontSize: '0.925rem', lineHeight: 1.9, marginBottom: 28 }}>
              I'm actively looking for full-time software engineering roles. If you have an opportunity,
              a project to discuss, or just want to connect — I'd love to hear from you.
            </p>

            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: '0.75rem', color: '#555', fontFamily: "'JetBrains Mono',monospace", marginBottom: 8 }}>EMAIL</div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 0,
                background: '#111', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8, overflow: 'hidden', width: 'fit-content',
              }}>
                <span style={{ padding: '10px 16px', fontSize: '0.875rem', color: '#ccc', fontFamily: "'JetBrains Mono',monospace" }}>
                  sripatideekshtih@gmail.com
                </span>
                <button onClick={copy} style={{
                  background: '#1a1a1a', border: 'none', borderLeft: '1px solid rgba(255,255,255,0.08)',
                  color: copied ? '#22c55e' : '#555', padding: '10px 14px',
                  cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600,
                  display: 'flex', alignItems: 'center', gap: 5,
                  transition: 'color 0.2s', fontFamily: 'inherit',
                }}
                  onMouseEnter={e => !copied && (e.currentTarget.style.color = '#e8e8e8')}
                  onMouseLeave={e => !copied && (e.currentTarget.style.color = '#555')}
                >
                  <i className={`fas fa-${copied ? 'check' : 'copy'}`} />
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <a href="mailto:sripatideekshtih@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#4f7ef7', color: '#fff',
              padding: '11px 24px', borderRadius: 8,
              fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#3a6ae4'}
              onMouseLeave={e => e.currentTarget.style.background = '#4f7ef7'}
            >
              <i className="fas fa-paper-plane" style={{ fontSize: '0.8rem' }} /> Send Email
            </a>
          </div>

          {/* right — social links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  background: '#111', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 10, padding: '18px 22px', textDecoration: 'none',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.background = '#131313' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = '#111' }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 8,
                  background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#555', fontSize: '1rem', flexShrink: 0,
                }}>
                  <i className={l.icon} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e8e8e8', marginBottom: 2 }}>{l.label}</div>
                  <div style={{ fontSize: '0.75rem', color: '#555' }}>{l.sub}</div>
                </div>
                <i className="fas fa-arrow-up-right-from-square" style={{ marginLeft: 'auto', color: '#333', fontSize: '0.7rem' }} />
              </a>
            ))}
            <a href="tel:+919573031796" style={{
              display: 'flex', alignItems: 'center', gap: 16,
              background: '#111', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 10, padding: '18px 22px', textDecoration: 'none',
              transition: 'border-color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.background = '#131313' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = '#111' }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 8,
                background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#555', fontSize: '1rem', flexShrink: 0,
              }}>
                <i className="fas fa-phone" />
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e8e8e8', marginBottom: 2 }}>Phone</div>
                <div style={{ fontSize: '0.75rem', color: '#555' }}>+91-9573031796</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
