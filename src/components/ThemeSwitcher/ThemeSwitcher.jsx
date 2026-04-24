import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css';

const themes = [
  { id: 'onyx',    label: 'Onyx',    preview: ['#060606', '#e8c848', '#0c0c0c'] },
  { id: 'lapis',   label: 'Lapis',   preview: ['#080e20', '#d4af37', '#1a3080'] },
  { id: 'hammam',  label: 'Hammam',  preview: ['#0a1210', '#d4903a', '#1a6858'] },
  { id: 'majlis',  label: 'Majlis',  preview: ['#100a04', '#c8982a', '#5a3810'] },
  { id: 'marble',  label: 'Marble',  preview: ['#f9f8f6', '#b8906a', '#f0ede8'] },
  { id: 'smoke',   label: 'Smoke',   preview: ['#111318', '#a8b8c8', '#0c0e12'] },
];

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => localStorage.getItem('sra-theme') || 'dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', active);
    localStorage.setItem('sra-theme', active);
  }, [active]);

  return (
    <div className={`theme-switcher ${open ? 'open' : ''}`}>
      <button className="theme-toggle-btn" onClick={() => setOpen(o => !o)} title="Change theme">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      </button>

      {open && (
        <div className="theme-panel">
          <p className="theme-panel-title">THEME</p>
          {themes.map(t => (
            <button
              key={t.id}
              className={`theme-option ${active === t.id ? 'active' : ''}`}
              onClick={() => { setActive(t.id); setOpen(false); }}
            >
              <div className="theme-preview">
                {t.preview.map((c, i) => <span key={i} style={{ background: c }} />)}
              </div>
              <span className="theme-name">{t.label}</span>
              {active === t.id && <span className="theme-check">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
