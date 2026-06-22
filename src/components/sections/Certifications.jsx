import SectionTransition from '../ui/SectionTransition';
import { certifications } from '../../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="section-block">
      <div className="section-inner">
        <SectionTransition direction="left">
          <p className="section-label section-label--purple">/ CREDENTIALS</p>
          <h2 className="section-heading">Certifications</h2>
          <div className="certs-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="cert-card">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: 'linear-gradient(135deg, #bf00ff, #00f5ff)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: 14,
                    marginBottom: 16,
                  }}
                >
                  {cert.issuer.slice(0, 2).toUpperCase()}
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 4 }}>{cert.issuer}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
                  {cert.name}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>{cert.earnedDate}</p>
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent-cyan)', fontSize: 13, textDecoration: 'none' }}
                    data-cursor="pointer"
                  >
                    View Credential →
                  </a>
                )}
              </div>
            ))}
          </div>
        </SectionTransition>
      </div>
      <style>{`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cert-card {
          background: rgba(13,13,21,0.9);
          border: 1px solid rgba(191,0,255,0.2);
          border-left: 3px solid var(--accent-purple);
          border-radius: 10px;
          padding: 24px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .cert-card:hover {
          transform: translateY(-3px);
          border-color: var(--accent-purple);
        }
        .cert-card a:hover { text-decoration: underline; }
        @media (max-width: 1024px) {
          .certs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .certs-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .cert-card { padding: 20px; }
        }
      `}</style>
    </section>
  );
}
