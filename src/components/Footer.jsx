export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '28px 40px',
      textAlign: 'center',
      color: '#475569',
      fontSize: '0.8rem',
      position: 'relative', zIndex: 1,
      fontFamily: "'JetBrains Mono',monospace",
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span>Built by <span style={{ color: '#6366f1' }}>S. Deekshith Reddy</span> · 2025</span>
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { icon: 'fab fa-github', href: 'https://github.com/deekshithreddy34' },
            { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/deekshith-reddy-b301551a4' },
            { icon: 'fas fa-code', href: 'https://leetcode.com/u/deekshithsripati' },
            { icon: 'fas fa-envelope', href: 'mailto:sripatideekshtih@gmail.com' },
          ].map(l => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
              style={{ color: '#475569', fontSize: '1rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#6366f1'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}
            >
              <i className={l.icon} />
            </a>
          ))}
        </div>
        <span>React · Framer Motion · Vite</span>
      </div>
    </footer>
  )
}
