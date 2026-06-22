import { useInView } from 'react-intersection-observer';
import SectionTransition from '../ui/SectionTransition';
import { skillCategories } from '../../data/skills';

const PROFICIENCY = [
  { label: 'React / Next.js', value: 90 },
  { label: 'Node.js / Backend', value: 78 },
  { label: 'AI Integration (RAG/LLM)', value: 82 },
  { label: 'UI/UX & Design Systems', value: 75 },
  { label: 'PostgreSQL / Databases', value: 70 },
];

const ICONS = { frontend: '⚡', backend: '🗄️', ai: '🤖', tools: '🛠️', languages: '💻' };

function ProficiencyBar({ label, value, delay }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <div ref={ref} style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 14, color: '#fff' }}>{label}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--accent-cyan)' }}>
          {value}%
        </span>
      </div>
      <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: inView ? `${value}%` : '0%',
            background: 'linear-gradient(90deg, #00f5ff, #bf00ff)',
            borderRadius: 3,
            transition: `width 1.2s ease-out ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const entries = Object.entries(skillCategories);

  return (
    <section id="skills" className="section-block">
      <div className="section-inner">
        <SectionTransition direction="up">
          <p className="section-label section-label--purple">/ SKILLS</p>
          <h2 className="section-heading">Tools & Technologies</h2>

          <div className="skills-grid">
            {entries.map(([key, cat], i) => (
              <div
                key={key}
                className="skill-card"
                style={{ '--accent': i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)' }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--accent)', marginBottom: 16 }}>
                  {ICONS[key]} {cat.title}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.skills.map((s) => (
                    <span key={s.name} className={i % 2 === 0 ? 'skill-pill' : 'skill-pill skill-pill--purple'}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            {PROFICIENCY.map((p, i) => (
              <ProficiencyBar key={p.label} label={p.label} value={p.value} delay={i * 150} />
            ))}
          </div>
        </SectionTransition>
      </div>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .skill-card {
          background: var(--gradient-card);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 28px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .skill-card:hover {
          transform: translateY(-4px);
          border-color: rgba(191,0,255,0.3);
          box-shadow: var(--border-glow-purple);
        }
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr; }
          .skill-card { padding: 20px; }
        }
      `}</style>
    </section>
  );
}
