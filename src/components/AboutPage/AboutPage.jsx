import React from 'react';
import { Link } from 'react-router-dom';
import { statsData } from '../../data/content';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="about-page-header">
        <div className="gold-line"></div>
        <h1 className="about-page-title">ABOUT US</h1>
        <p className="about-page-subtitle">SRA Global Trading — Dubai, UAE</p>
      </div>

      <div className="about-page-content">
        <div className="about-story">
          <div className="story-text-col">
            <h2 className="story-title">Who We Are</h2>
            <p className="story-text">
              SRA Global Trading is a Dubai-based company specialising in the sourcing, supply and
              distribution of premium quality products across the construction, interior design and
              general trading sectors.
            </p>
            <p className="story-text">
              Located in the heart of Dubai's business district at Latifa Tower on Sheikh Zayed Road,
              we are ideally positioned to serve markets across the Middle East, Africa and beyond.
              Our strategic location gives us access to a vast network of international suppliers and
              logistics partners.
            </p>
            <p className="story-text">
              We take pride in delivering excellence at every stage — from product selection and quality
              control to timely delivery and after-sales support. Our experienced team brings decades of
              combined expertise in trading and procurement.
            </p>
          </div>

          <div className="story-image-col">
            <div className="story-image-frame">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"
                alt="Dubai — SRA Global Trading"
                className="story-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats-section">
          <div className="gold-line" style={{ margin: '0 auto 40px' }}></div>
          <div className="about-stats-row">
            {statsData.map((stat, index) => (
              <div key={index} className="about-stat-box">
                <span className="about-stat-value">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="about-values">
          <div className="values-header">
            <div className="gold-line" style={{ margin: '0 auto 25px' }}></div>
            <h2 className="values-title">OUR VALUES</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">◆</div>
              <h3 className="value-name">Excellence</h3>
              <p className="value-desc">We source only the highest quality products from certified suppliers worldwide.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">◆</div>
              <h3 className="value-name">Integrity</h3>
              <p className="value-desc">Transparency and honesty are the foundation of every partnership we build.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">◆</div>
              <h3 className="value-name">Partnership</h3>
              <p className="value-desc">We invest in long-term relationships with clients and suppliers alike.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">◆</div>
              <h3 className="value-name">Innovation</h3>
              <p className="value-desc">We constantly evolve our product range to meet the demands of modern markets.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <p className="about-cta-text">Ready to work with us?</p>
          <Link to="/contact" className="view-all-btn">CONTACT US</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
