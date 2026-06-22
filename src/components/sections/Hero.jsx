import { useEffect, useRef, useState } from 'react';
import NeonButton from '../ui/NeonButton';
import useMousePosition from '../../hooks/useMousePosition';
import useReducedMotion from '../../hooks/useReducedMotion';

export default function Hero() {
  const { x, y } = useMousePosition();
  const reducedMotion = useReducedMotion();
  const [showScroll, setShowScroll] = useState(true);
  const contentRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!contentRef.current || reducedMotion) return;
    const tx = x * 12;
    const ty = y * 12;
    contentRef.current.style.transform = `translate(${tx}px, ${ty}px)`;
  }, [x, y, reducedMotion]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div
        style={{
          position: 'absolute',
          top: 24,
          left: 'var(--side-pad)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 13,
          color: 'var(--text-secondary)',
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#00ff88',
            animation: reducedMotion ? 'none' : 'pulse 2s infinite',
          }}
        />
        Available for Work
      </div>

      <div ref={contentRef} style={{ transition: 'transform 0.15s ease-out', maxWidth: 720 }}>
        <h1
          className="gradient-text"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 10vw, 7rem)',
            lineHeight: 1,
            marginBottom: 16,
          }}
        >
          IFTHIKAR
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(0.9rem, 2.5vw, 1.35rem)',
            color: 'var(--accent-cyan)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          Full Stack Developer
        </p>
        <p
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: 480,
            margin: '0 auto 32px',
          }}
        >
          Building intelligent web experiences with React, Next.js, and AI.
          Based in Dubai, UAE.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'center',
          }}
          className="hero-ctas"
        >
          <NeonButton variant="cyan" onClick={() => scrollTo('projects')}>
            View My Work
          </NeonButton>
          <NeonButton variant="outline" onClick={() => scrollTo('contact')}>
            Get in Touch
          </NeonButton>
        </div>
      </div>

      {showScroll && (
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            color: 'var(--accent-cyan)',
            animation: reducedMotion ? 'none' : 'bounce 2s infinite',
            fontSize: 24,
          }}
          aria-hidden
        >
          ↓
        </div>
      )}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-ctas { flex-direction: column; align-items: stretch; width: 100%; max-width: 280px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
