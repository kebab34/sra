import React from 'react';
import { statsData } from '../../../data/content';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-inner">
        <div className="about-text-col">
          <div className="gold-line"></div>
          <h2 className="about-title">ABOUT SRA GLOBAL TRADING</h2>
          <p className="about-text">
            SRA Global Trading is a Dubai-based trading company dedicated to sourcing and supplying
            premium quality products to clients across the Middle East, Africa, and beyond.
          </p>
          <p className="about-text">
            Established in the heart of Dubai's business district, we leverage our strategic location
            on Sheikh Zayed Road to connect international suppliers with regional buyers, ensuring
            the highest standards of quality, reliability and service.
          </p>
          <p className="about-text">
            Our portfolio spans building materials, interior products, tiles and surfaces, sanitary ware,
            luxury fittings, and general trading — offering a comprehensive one-stop solution for
            contractors, developers and retailers.
          </p>
          <div className="about-signature">
            <div className="signature-line"></div>
            <span className="signature-text">Excellence · Integrity · Partnership</span>
          </div>
        </div>

        <div className="about-stats-col">
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"
              alt="Dubai skyline — SRA Global Trading"
              className="about-image"
              loading="lazy"
            />
            <div className="about-image-frame"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
