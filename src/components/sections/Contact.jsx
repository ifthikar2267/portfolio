import { useState } from 'react';
import SectionTransition from '../ui/SectionTransition';
import NeonButton from '../ui/NeonButton';
import { sendContactMessage } from '../../utils/contactApi';

const CONTACT_LINKS = [
  { icon: '📧', label: 'meetifthikarhere@gmail.com', href: 'mailto:meetifthikarhere@gmail.com' },
  { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ifthikar-mj-59b8a8250' },
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/ifthikar2267' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.name?.trim() || !form.email?.trim() || !form.message?.trim()) {
      setError('Please fill in name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    try {
      await sendContactMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });
      setSent(true);
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-block" style={{ minHeight: 'auto' }}>
      <div className="section-inner">
        <SectionTransition direction="up">
          <p className="section-label section-label--purple">/ CONTACT</p>
          <h2 className="section-heading gradient-text">Let's Build Something</h2>

          <div className="contact-grid">
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 28 }}>
                Open to freelance projects, full-time roles, and AI collaboration.
              </p>
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-row"
                  data-cursor="pointer"
                >
                  <span style={{ fontSize: 20 }}>{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
              <span className="skill-pill" style={{ marginTop: 24, display: 'inline-block' }}>
                Currently in Dubai, UAE 🇦🇪
              </span>
            </div>

            <div className="contact-form-wrap">
              {sent ? (
                <div style={{ textAlign: 'center', padding: 48 }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                  <p style={{ fontSize: 18, color: 'var(--accent-cyan)' }}>
                    Message sent! I'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {['name', 'email', 'subject'].map((field) => (
                    <div key={field} style={{ marginBottom: 16 }}>
                      <label className="form-label">{field}</label>
                      <input
                        className="form-input"
                        type={field === 'email' ? 'email' : 'text'}
                        required={field !== 'subject'}
                        disabled={isSubmitting}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      />
                    </div>
                  ))}
                  <div style={{ marginBottom: 20 }}>
                    <label className="form-label">message</label>
                    <textarea
                      className="form-input"
                      rows={5}
                      required
                      disabled={isSubmitting}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  {error && (
                    <p
                      style={{
                        color: '#ff6b6b',
                        fontSize: 14,
                        marginBottom: 16,
                        lineHeight: 1.5,
                      }}
                      role="alert"
                    >
                      {error}
                    </p>
                  )}
                  <NeonButton type="submit" variant="cyan" fullWidth>
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                  </NeonButton>
                </form>
              )}
            </div>
          </div>

          <footer className="site-footer">
            <div className="site-footer__links">
              {CONTACT_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="site-footer__link"
                >
                  {l.label.split('@')[0] || l.label}
                </a>
              ))}
            </div>
            <p className="site-footer__credit">
              Designed & built by Ifthikar · {new Date().getFullYear()}
            </p>
          </footer>
        </SectionTransition>
      </div>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 40px;
          align-items: start;
        }
        .contact-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .contact-row:hover { color: #fff; }
        .contact-form-wrap {
          background: rgba(17,17,32,0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0,245,255,0.2);
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 0 40px rgba(0,245,255,0.05);
        }
        .form-label {
          display: block;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 6px;
        }
        .form-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 14px 18px;
          color: #fff;
          font-family: var(--font-body);
          font-size: 14px;
        }
        .form-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: var(--border-glow-cyan);
          outline: none;
        }
        .form-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .site-footer {
          margin-top: 64px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 10px;
        }
        .site-footer__links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 16px;
        }
        .site-footer__link {
          color: var(--text-muted);
          font-size: 12px;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .site-footer__link:hover {
          color: #fff;
        }
        .site-footer__credit {
          margin: 0;
          color: var(--text-muted);
          font-size: 12px;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 28px; }
          .contact-form-wrap { padding: 24px; }
        }
      `}</style>
    </section>
  );
}
