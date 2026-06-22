import { useEffect, useState, useCallback } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function getActiveSection() {
  const offset = window.innerHeight * 0.35;
  let current = NAV_ITEMS[0].id;

  for (const item of NAV_ITEMS) {
    const el = document.getElementById(item.id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY + offset >= top) {
      current = item.id;
    }
  }

  return current;
}

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const onScroll = () => setActive(getActiveSection());
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollTo = useCallback((id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <nav
      className={`side-nav ${isMobile ? 'side-nav--mobile' : 'side-nav--desktop'}`}
      aria-label="Section navigation"
    >
      {!isMobile && <div className="side-nav__track" aria-hidden />}

      <ul className="side-nav__list">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <li
              key={item.id}
              className="side-nav__item"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <button
                type="button"
                className={`nav-dot ${isActive ? 'nav-dot--active' : ''}`}
                onClick={() => scrollTo(item.id)}
                aria-label={item.label}
                aria-current={isActive ? 'true' : undefined}
                data-cursor="pointer"
              >
                <span className="nav-dot__inner" />
              </button>

              {!isMobile && hovered === item.id && (
                <span className="side-nav__tooltip" role="tooltip">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
