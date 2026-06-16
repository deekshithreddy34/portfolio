export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '24px 48px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
      }}>
        <span style={{ color: '#333', fontSize: '0.78rem', fontFamily: "'JetBrains Mono',monospace" }}>
          © 2025 S. Deekshith Reddy
        </span>
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { icon: 'fab fa-github', href: 'https://github.com/deekshithreddy34' },
            { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/deekshith-reddy-b301551a4' },
            { icon: 'fas fa-code', href: 'https://leetcode.com/u/deekshithsripati' },
            { icon: 'fas fa-envelope', href: 'mailto:sripatideekshtih@gmail.com' },
          ].map(l => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
              style={{ color: '#333', fontSize: '0.95rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#888'}
              onMouseLeave={e => e.currentTarget.style.color = '#333'}
            >
              <i className={l.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
