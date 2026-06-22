const variants = {
  cyan: {
    background: 'rgba(0,245,255,0.1)',
    border: '1px solid #00f5ff',
    color: '#00f5ff',
    glow: 'var(--border-glow-cyan)',
  },
  purple: {
    background: 'rgba(191,0,255,0.1)',
    border: '1px solid #bf00ff',
    color: '#bf00ff',
    glow: 'var(--border-glow-purple)',
  },
  outline: {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#ffffff',
    glow: 'var(--border-glow-cyan)',
  },
};

export default function NeonButton({
  children,
  href,
  onClick,
  variant = 'cyan',
  fullWidth = false,
  type = 'button',
}) {
  const v = variants[variant] || variants.cyan;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 28px',
    borderRadius: '1rem',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s var(--transition-smooth)',
    background: v.background,
    border: v.border,
    color: v.color,
    width: fullWidth ? '100%' : 'auto',
  };

  const hoverProps = {
    onMouseEnter: (e) => {
      e.currentTarget.style.boxShadow = v.glow;
      e.currentTarget.style.transform = 'scale(1.04)';
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'scale(1)';
    },
  };

  if (href) {
    return (
      <a
        href={href}
        className="neon-button"
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        style={style}
        data-cursor="pointer"
        {...hoverProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className="neon-button" onClick={onClick} style={style} data-cursor="pointer" {...hoverProps}>
      {children}
    </button>
  );
}
