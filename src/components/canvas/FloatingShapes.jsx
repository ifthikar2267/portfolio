import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

const SHAPE_TYPES = ['icosahedron', 'torus', 'octahedron'];

function FloatingShape({ type, position, color, speed }) {
  const ref = useRef();
  const initial = useMemo(() => position, [position]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed;
    ref.current.position.y = initial[1] + Math.sin(t) * 0.4;
    ref.current.rotation.x += 0.003;
    ref.current.rotation.z += 0.002;
    ref.current.position.z += 0.002;
    if (ref.current.position.z > 0) ref.current.position.z = -8;
  });

  return (
    <mesh ref={ref} position={initial}>
      {type === 'icosahedron' && <icosahedronGeometry args={[0.45, 1]} />}
      {type === 'torus' && <torusGeometry args={[0.3, 0.12, 16, 32]} />}
      {type === 'octahedron' && <octahedronGeometry args={[0.35, 0]} />}
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.25}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

export default function FloatingShapes() {
  const shapes = useMemo(() => {
    const list = [];
    for (let i = 0; i < 12; i++) {
      list.push({
        id: i,
        type: SHAPE_TYPES[i % 3],
        position: [
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 10,
          -3 - Math.random() * 5,
        ],
        color: i % 2 === 0 ? '#00f5ff' : '#bf00ff',
        speed: 0.5 + Math.random() * 0.5,
      });
    }
    return list;
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#00f5ff" intensity={0.6} />
      {shapes.map((s) => (
        <FloatingShape key={s.id} {...s} />
      ))}
    </>
  );
}
