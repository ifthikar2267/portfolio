import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFade(true), 2500);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 2800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0a0a0f',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fade ? 0 : 1,
        transition: 'opacity 0.3s ease',
        pointerEvents: fade ? 'none' : 'auto',
      }}
    >
      <div style={{ position: 'relative', width: 80, height: 80, marginBottom: 32 }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: '2px solid #00f5ff',
            borderRadius: '50%',
            animation: 'spin 1.5s linear infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 15,
            border: '2px solid #bf00ff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite reverse',
          }}
        />
        <span
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 18,
            background: 'linear-gradient(135deg, #00f5ff, #bf00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          IF
        </span>
      </div>
      <div
        style={{
          width: 200,
          height: 3,
          background: 'rgba(255,255,255,0.1)',
          borderRadius: 2,
          overflow: 'hidden',
          marginBottom: 16,
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #00f5ff, #bf00ff)',
            animation: 'loadBar 2.5s ease forwards',
          }}
        />
      </div>
      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14 }}>Initializing...</p>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes loadBar { from { width: 0; } to { width: 100%; } }
      `}</style>
    </div>
  );
}
