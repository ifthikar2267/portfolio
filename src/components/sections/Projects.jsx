import { useState, useCallback } from 'react';
import SectionTransition from '../ui/SectionTransition';
import NeonButton from '../ui/NeonButton';
import { projects } from '../../data/projects';

function ProjectImageCarousel({ project }) {
  const images = [project.image, ...(project.galleryImages || [])].filter(Boolean);
  const [index, setIndex] = useState(0);

  const stop = (e) => {
    e.stopPropagation();
  };

  const go = (dir, e) => {
    stop(e);
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  if (!images.length) return null;

  return (
    <div className="project-carousel" onClick={stop} onPointerDown={stop}>
      <img
        src={images[index]}
        alt={project.imageAlt || `${project.title} screenshot ${index + 1}`}
        className="project-carousel__img"
        draggable={false}
      />
      {images.length > 1 && (
        <>
          <button
            type="button"
            className="carousel-btn carousel-btn--prev"
            aria-label="Previous image"
            onClick={(e) => go(-1, e)}
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-btn carousel-btn--next"
            aria-label="Next image"
            onClick={(e) => go(1, e)}
          >
            ›
          </button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel-dot${i === index ? ' carousel-dot--active' : ''}`}
                aria-label={`Image ${i + 1}`}
                onClick={(e) => {
                  stop(e);
                  setIndex(i);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project, featured }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const liveUrl = project.liveUrl || project.liveDemo;
  const githubUrl = project.githubUrl || project.github;
  const accent = project.id === 3 ? 'purple' : 'cyan';
  const borderColor = accent === 'purple' ? 'rgba(191,0,255,0.12)' : 'rgba(0,245,255,0.12)';

  const handleCardClick = useCallback((e) => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (e.target.closest('a, button, .project-carousel')) return;
    setIsFlipped((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped((prev) => !prev);
    }
  }, []);

  return (
    <div
      className={`project-card${featured ? ' project-card--featured' : ''}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={`${project.title} project card. ${isFlipped ? 'Showing details' : 'Tap to flip for details'}`}
    >
      <div className={`project-card-inner${isFlipped ? ' project-card-inner--flipped' : ''}`}>
        <div className="project-face project-face--front" style={{ borderColor }}>
          {featured && <span className="featured-badge">Featured</span>}
          <ProjectImageCarousel project={project} />
          <div className="project-card__body">
            <h3 className="project-card__title gradient-text">{project.title}</h3>
            <span className="skill-pill project-card__category">{project.category}</span>
            <p className="project-card__desc">{project.shortDescription}</p>
            <div className="project-card__techs">
              {project.technologies?.slice(0, 3).map((t) => (
                <span key={t} className="skill-pill skill-pill--purple">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="project-face project-face--back">
          <p className="project-card__back-desc">{project.description}</p>
          <div className="project-card__actions">
            {liveUrl && (
              <NeonButton href={liveUrl} variant="cyan">
                Visit Site →
              </NeonButton>
            )}
            {githubUrl && (
              <NeonButton href={githubUrl} variant="purple">
                View Source →
              </NeonButton>
            )}
          </div>
          <div className="project-card__meta">
            <span className="skill-pill">{project.year}</span>
            <span className="skill-pill">{project.duration}</span>
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
              <ProjectCard key={p.id} project={p} featured={Boolean(p.featured)} />
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
          height: 420px;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .project-card--featured {
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
        @media (hover: hover) and (pointer: fine) {
          .project-card:hover .project-card-inner {
            transform: rotateY(180deg);
          }
        }
        @media (hover: none) {
          .project-card-inner--flipped {
            transform: rotateY(180deg);
          }
        }
        .project-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 12px;
          padding: 20px;
          border: 1px solid;
          display: flex;
          flex-direction: column;
          background: var(--gradient-card);
          overflow: hidden;
        }
        .project-face--front {
          padding: 0;
        }
        .project-face--back {
          transform: rotateY(180deg);
          background: var(--bg-card-hover);
          border-color: rgba(0,245,255,0.3);
          box-shadow: var(--border-glow-cyan);
        }
        .featured-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          background: linear-gradient(135deg, #00f5ff, #bf00ff);
          color: #0a0a0f;
        }
        .project-carousel {
          position: relative;
          width: 100%;
          margin: 0;
          flex: 1;
          min-height: 260px;
          overflow: hidden;
          border-radius: 12px 12px 0 0;
          background: rgba(0,0,0,0.4);
        }
        .project-carousel__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
          user-select: none;
        }
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 28px;
          height: 28px;
          border: none;
          border-radius: 50%;
          background: rgba(10,10,15,0.75);
          color: #fff;
          font-size: 18px;
          line-height: 1;
          cursor: pointer;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .carousel-btn--prev { left: 8px; }
        .carousel-btn--next { right: 8px; }
        .carousel-dots {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 2;
        }
        .carousel-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          border: none;
          padding: 0;
          background: rgba(255,255,255,0.35);
          cursor: pointer;
        }
        .carousel-dot--active {
          background: var(--accent-cyan);
          box-shadow: 0 0 6px var(--accent-cyan);
        }
        .project-card__body {
          flex-shrink: 0;
          padding: 12px 14px 14px;
        }
        .project-card__title {
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          margin-bottom: 6px;
          line-height: 1.2;
        }
        .project-card__category {
          margin-bottom: 6px;
          display: inline-block;
          align-self: flex-start;
          font-size: 10px;
          padding: 3px 8px;
        }
        .project-card__desc {
          color: var(--text-muted);
          font-size: 11px;
          line-height: 1.45;
          margin-bottom: 8px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .project-card__techs {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .project-card__techs .skill-pill {
          font-size: 10px;
          padding: 3px 8px;
        }
        .project-card__back-desc {
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 20px;
          flex: 1;
          overflow-y: auto;
        }
        .project-card__actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .project-card__meta {
          display: flex;
          gap: 8px;
          margin-top: 16px;
          flex-wrap: wrap;
        }
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
          .project-card { height: 400px; }
          .project-carousel { min-height: 240px; }
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
          .project-card { height: 380px; }
          .project-carousel { min-height: 220px; }
        }
        @media (max-width: 480px) {
          .project-face--back { padding: 16px; }
          .project-card__body { padding: 10px 12px 12px; }
        }
      `}</style>
    </section>
  );
}
