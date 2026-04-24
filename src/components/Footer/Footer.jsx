import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img src="/sra.svg" alt="SRA Global Trading" className="logo" style={{ height: '55px', width: 'auto', marginBottom: '15px', objectFit: 'contain' }} />
          <p className="footer-tagline">{t('footer.tagline')}</p>
          <div className="gold-line"></div>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">OFFICE</h4>
          <p className="footer-text">Latifa Tower B2007</p>
          <p className="footer-text">Sheikh Zayed Road</p>
          <p className="footer-text">Dubai, UAE</p>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">{t('footer.contact')}</h4>
          <p className="footer-text">contact@sraglobaltrading.com</p>
          <p className="footer-text">+971 50 480 2902</p>
          <p className="footer-text">www.sraglobaltrading.com</p>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">{t('footer.followUs')}</h4>
          <div className="social-links">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="social-link">Pinterest</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">{t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
