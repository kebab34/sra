import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ className = '' }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('fr') ? 'fr' : 'en';

  const setLang = (lng) => {
    if (lng !== currentLang) i18n.changeLanguage(lng);
  };

  return (
    <div className={`lang-switcher ${className}`}>
      <button
        type="button"
        className={`lang-option ${currentLang === 'fr' ? 'active' : ''}`}
        onClick={() => setLang('fr')}
        aria-label="Français"
      >
        FR
      </button>
      <span className="lang-separator">/</span>
      <button
        type="button"
        className={`lang-option ${currentLang === 'en' ? 'active' : ''}`}
        onClick={() => setLang('en')}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
