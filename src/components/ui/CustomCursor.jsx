import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const particleId = useRef(0);

  useEffect(() => {
    if (reducedMotion || 'ontouchstart' in window) return undefined;

    document.body.classList.add('has-custom-cursor');

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      const id = particleId.current++;
      const color = id % 2 === 0 ? '#00f5ff' : '#bf00ff';
      setParticles((prev) => [
        ...prev.slice(-12),
        { id, x: e.clientX, y: e.clientY, color, born: Date.now() },
      ]);
    };

    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const interval = setInterval(() => {
      setParticles((prev) => prev.filter((p) => Date.now() - p.born < 600));
    }, 100);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  if (reducedMotion || (typeof window !== 'undefined' && 'ontouchstart' in window)) {
    return null;
  }

  return (
    <>
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: 36,
          height: 36,
          border: '1.5px solid rgba(0,245,255,0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: 10,
          height: 10,
          background: '#00f5ff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {particles.map((p) => {
        const age = Date.now() - p.born;
        const opacity = 1 - age / 600;
        return (
          <div
            key={p.id}
            style={{
              position: 'fixed',
              left: p.x,
              top: p.y - age * 0.05,
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: p.color,
              opacity,
              pointerEvents: 'none',
              zIndex: 9997,
              transform: 'translate(-50%, -50%)',
            }}
          />
        );
      })}
    </>
  );
}
