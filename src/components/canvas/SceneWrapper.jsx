import { useEffect, useState } from 'react';
import SceneCanvas from './SceneCanvas';

export default function SceneWrapper() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    };
    checkMobile();
    onScroll();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const showHero3D = scrollProgress < 0.2 && !isMobile;

  return <SceneCanvas showHero3D={showHero3D} />;
}
