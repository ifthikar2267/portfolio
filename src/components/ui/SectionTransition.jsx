import { useInView } from 'react-intersection-observer';

export default function SectionTransition({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });

  const transforms = {
    up: 'translateY(40px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate(0)' : transforms[direction] || transforms.up,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
