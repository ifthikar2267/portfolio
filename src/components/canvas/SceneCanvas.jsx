import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import StarField from './StarField';
import FloatingShapes from './FloatingShapes';
import HeroText3D from './HeroText3D';
import useReducedMotion from '../../hooks/useReducedMotion';

export default function SceneCanvas({ showHero3D }) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <StarField />
          {!reducedMotion && <FloatingShapes />}
          {showHero3D && !reducedMotion && <HeroText3D />}
        </Suspense>
      </Canvas>
    </div>
  );
}
