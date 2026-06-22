import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function HeroText3D() {
  const meshRef = useRef();
  const { pointer } = useThree();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.001;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      pointer.y * 0.2,
      0.05
    );
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      pointer.x * 0.15,
      0.05
    );
    const pulse = 0.3 + Math.sin(clock.elapsedTime * 2) * 0.15;
    meshRef.current.material.emissiveIntensity = pulse;
  });

  return (
    <mesh ref={meshRef} position={[2.5, 0.5, -2]} scale={0.6}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#00f5ff"
        emissiveIntensity={0.5}
        wireframe
        metalness={0.8}
        roughness={0.1}
      />
    </mesh>
  );
}
