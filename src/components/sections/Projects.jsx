import SectionTransition from '../ui/SectionTransition';
import NeonButton from '../ui/NeonButton';
import { projects } from '../../data/projects';

function ProjectCard({ project, featured }) {
  const liveUrl = project.liveUrl || project.liveDemo;
  const accent = project.id === 3 ? 'purple' : 'cyan';
  const borderColor = accent === 'purple' ? 'rgba(191,0,255,0.12)' : 'rgba(0,245,255,0.12)';

  return (
    <div className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      <div className="project-card-inner">
        <div className="project-face project-face--front" style={{ borderColor }}>
          {featured && <span className="featured-badge">Featured</span>}
          <h3 className="gradient-text" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', marginBottom: 12 }}>
            {project.title}
          </h3>
          <span className="skill-pill" style={{ marginBottom: 16, display: 'inline-block' }}>
            {project.category}
          </span>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
            {project.shortDescription}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {project.technologies?.slice(0, 4).map((t) => (
              <span key={t} className="skill-pill skill-pill--purple">{t}</span>
            ))}
          </div>
        </div>
        <div className="project-face project-face--back">
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
            {project.description}
          </p>
          <NeonButton href={liveUrl} variant="cyan">
            Visit Site →
          </NeonButton>
          <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
            <span className="skill-pill">Live in UAE</span>
            <span className="skill-pill">{project.technologies?.[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const displayProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="section-block">
      <div className="section-inner">
        <SectionTransition direction="up">
          <p className="section-label section-label--cyan">/ WORK</p>
          <h2 className="section-heading" style={{ marginBottom: 32 }}>Recent Projects</h2>
          <div className="projects-grid">
            {displayProjects.map((p) => (
              <ProjectCard key={p.id} project={p} featured={p.title.includes('RigelMedBill')} />
            ))}
          </div>
        </SectionTransition>
      </div>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .project-card {
          perspective: 1000px;
          height: 360px;
        }
        .project-card--featured {
          grid-column: span 1;
          animation: glowPulse 3s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(0,245,255,0.2)); }
          50% { filter: drop-shadow(0 0 16px rgba(191,0,255,0.35)); }
        }
        .project-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s var(--transition-smooth);
          transform-style: preserve-3d;
        }
        .project-card:hover .project-card-inner {
          transform: rotateY(180deg);
        }
        .project-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 12px;
          padding: 28px;
          border: 1px solid;
          display: flex;
          flex-direction: column;
          background: var(--gradient-card);
        }
        .project-face--back {
          transform: rotateY(180deg);
          background: var(--bg-card-hover);
          border-color: rgba(0,245,255,0.3);
          box-shadow: var(--border-glow-cyan);
        }
        .featured-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          background: linear-gradient(135deg, #00f5ff, #bf00ff);
          color: #0a0a0f;
        }
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
          .project-card { height: auto; perspective: none; }
          .project-card-inner { transform: none !important; }
          .project-face { position: relative; backface-visibility: visible; }
          .project-face--back { transform: none; display: none; }
          .project-card:active .project-face--back,
          .project-card:focus-within .project-face--back { display: flex; }
          .project-card:active .project-face--front,
          .project-card:focus-within .project-face--front { display: none; }
        }
        @media (max-width: 480px) {
          .project-face { padding: 20px; }
        }
      `}</style>
    </section>
  );
}
