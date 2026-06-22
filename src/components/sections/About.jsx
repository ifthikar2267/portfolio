import SectionTransition from '../ui/SectionTransition';

const STATS = [
  { value: '4+', label: 'Projects Shipped' },
  { value: '4 months', label: 'Almosafer Internship' },
  { value: 'Dubai, UAE', label: 'Location' },
  { value: 'Open to', label: 'Opportunities' },
];

const TAGS = ['React', 'Next.js', 'AI/RAG', 'Node.js'];

export default function About() {
  return (
    <section id="about" className="section-block">
      <div className="section-inner">
        <SectionTransition direction="up">
          <p className="section-label section-label--cyan">/ ABOUT</p>
          <h2 className="section-heading">Who I Am</h2>
          <div className="about-grid">
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 16, marginBottom: 16 }}>
                I'm Ifthikar, a Full Stack Developer and AI Engineer based in Dubai, UAE.
                I specialize in building production-grade web applications powered by modern
                React ecosystems and AI integration from RAG-based systems to LLM powered chatbots.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 16 }}>
                I completed my internship at Almosafer (Seera Group) where I shipped 3 projects
                and contributed to the live Athar AI chatbot. I'm currently building AI powered
                SaaS products for UAE clients.
              </p>
            </div>
            <div className="glass-card" style={{ padding: 32 }}>
              <div className="stats-grid">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--accent-cyan)', fontSize: 20 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
                {TAGS.map((t) => (
                  <span key={t} className="skill-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </SectionTransition>
      </div>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>
    </section>
  );
}
