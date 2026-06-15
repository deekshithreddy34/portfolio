import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

const links = [
  { icon: 'fas fa-envelope', label: 'sripatideekshtih@gmail.com', href: 'mailto:sripatideekshtih@gmail.com', color: '#6366f1' },
  { icon: 'fab fa-linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/deekshith-reddy-b301551a4', color: '#0a66c2' },
  { icon: 'fab fa-github', label: 'GitHub', href: 'https://github.com/deekshithreddy34', color: '#e2e8f0' },
  { icon: 'fas fa-code', label: 'LeetCode', href: 'https://leetcode.com/u/deekshithsripati', color: '#f59e0b' },
  { icon: 'fas fa-phone', label: '+91-9573031796', href: 'tel:+919573031796', color: '#10b981' },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('sripatideekshtih@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <SectionHeader label="// contact" title="Let's Connect" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 24, padding: '64px 40px',
            backdropFilter: 'blur(20px)',
            textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* bg glow */}
          <div style={{
            position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
            width: 500, height: 300,
            background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            style={{ fontSize: '3rem', marginBottom: 20 }}
          >👋</motion.div>

          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#e2e8f0', marginBottom: 16, letterSpacing: '-0.02em' }}>
            Open to Opportunities
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.975rem', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.9 }}>
            I'm actively looking for full-time software engineering roles. Whether you have a project, an opportunity,
            or just want to talk tech — I'd love to hear from you.
          </p>

          {/* email copy */}
          <div style={{ marginBottom: 36, display: 'flex', justifyContent: 'center' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 0,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12, overflow: 'hidden',
            }}>
              <span style={{
                padding: '12px 20px', fontFamily: "'JetBrains Mono',monospace",
                fontSize: '0.88rem', color: '#94a3b8',
              }}>sripatideekshtih@gmail.com</span>
              <button
                onClick={copyEmail}
                style={{
                  background: 'rgba(99,102,241,0.2)', border: 'none', borderLeft: '1px solid rgba(255,255,255,0.1)',
                  color: copied ? '#10b981' : '#6366f1', padding: '12px 18px',
                  cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600,
                  display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(99,102,241,0.35)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(99,102,241,0.2)'}
              >
                <i className={`fas fa-${copied ? 'check' : 'copy'}`} />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('mailto') || l.href.startsWith('tel') ? '_self' : '_blank'}
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#94a3b8', padding: '13px 22px', borderRadius: 12,
                  fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = l.color
                  e.currentTarget.style.color = l.color
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.background = `${l.color}10`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = '#94a3b8'
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                }}
              >
                <i className={l.icon} style={{ fontSize: '1rem' }} />
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
