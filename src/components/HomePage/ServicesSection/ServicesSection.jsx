import React from 'react';
import { Link } from 'react-router-dom';
import { servicesCategoriesData } from '../../../data/content';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="section services-section">
      <div className="section-header">
        <div className="gold-line"></div>
        <h2 className="section-title">OUR PRODUCT RANGE</h2>
        <p className="section-subtitle">Premium solutions for every project</p>
      </div>
      <div className="services-grid">
        {servicesCategoriesData.map((item, index) => (
          <Link
            key={index}
            to={`/products?cat=${encodeURIComponent(item.name.toLowerCase().replace(/\s+/g, '-'))}`}
            className="service-card"
          >
            <img src={item.image} alt={item.name} className="service-image" loading="lazy" />
            <div className="service-overlay">
              <h3 className="service-name">{item.name}</h3>
              <div className="service-line"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
