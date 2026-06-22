import { useInView } from 'react-intersection-observer';
import SectionTransition from '../ui/SectionTransition';
import { educationTimeline } from '../../data/education';

function TimelineItem({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`timeline-item ${isLeft ? 'timeline-item--left' : 'timeline-item--right'}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : isLeft ? 'translateX(-30px)' : 'translateX(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className="timeline-card glass-card" style={{ padding: 24 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
        <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: 14, marginBottom: 8 }}>
          {item.institution}
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12 }}>{item.duration}</p>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.description}</p>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-block">
      <div className="section-inner">
        <SectionTransition direction="up">
          <p className="section-label section-label--cyan">/ BACKGROUND</p>
          <h2 className="section-heading">Education & Experience</h2>
          <div className="timeline-wrap">
            <div className="timeline-line" aria-hidden />
            {educationTimeline.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </SectionTransition>
      </div>
      <style>{`
        .timeline-wrap {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px 0;
        }
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          transform: translateX(-50%);
          background: linear-gradient(var(--accent-cyan), var(--accent-purple));
        }
        .timeline-item {
          position: relative;
          width: 46%;
          margin-bottom: 40px;
        }
        .timeline-item--left { margin-left: 0; margin-right: auto; padding-right: 32px; }
        .timeline-item--right { margin-left: auto; margin-right: 0; padding-left: 32px; }
        .timeline-item::before {
          content: '';
          position: absolute;
          top: 24px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00f5ff, #bf00ff);
          box-shadow: var(--border-glow-cyan);
        }
        .timeline-item--left::before { right: -39px; }
        .timeline-item--right::before { left: -39px; }
        @media (max-width: 768px) {
          .timeline-line { left: 12px; transform: none; }
          .timeline-item,
          .timeline-item--left,
          .timeline-item--right {
            width: calc(100% - 40px);
            margin-left: 40px;
            padding-left: 0;
            padding-right: 0;
          }
          .timeline-item::before { left: -34px !important; right: auto !important; }
        }
      `}</style>
    </section>
  );
}
