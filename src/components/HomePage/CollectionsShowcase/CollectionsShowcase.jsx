import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { collectionsData } from '../../../data/collectionsData';
import useReveal from '../../../hooks/useReveal';
import useDragScroll from '../../../hooks/useDragScroll';
import './CollectionsShowcase.css';

const FEATURED_COUNT = 12;

const getFeaturedCollections = () => {
  const entries = Object.entries(collectionsData).filter(([, data]) => data.mainImage);
  const shuffled = [...entries].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, FEATURED_COUNT);
};

const CollectionsShowcase = () => {
  const { t } = useTranslation();
  const [collections] = useState(getFeaturedCollections);
  const [headerRef, headerInView] = useReveal();
  const { trackRef, dragHandlers, onClickCapture } = useDragScroll();

  return (
    <section className="section collections-showcase">
      <div className={`section-header reveal ${headerInView ? 'in-view' : ''}`} ref={headerRef}>
        <div className="gold-line"></div>
        <h2 className="section-title">{t('collectionsShowcase.title')}</h2>
        <p className="section-subtitle">{t('collectionsShowcase.subtitle')}</p>
      </div>

      <div className="collections-track" ref={trackRef} {...dragHandlers}>
        {collections.map(([name, data]) => (
          <Link
            key={name}
            to={`/collection/${encodeURIComponent(name)}`}
            className="collection-card"
            onClickCapture={onClickCapture}
            draggable={false}
          >
            <div className="collection-image-wrapper">
              <img
                src={data.mainImage}
                alt={name}
                className="collection-image"
                loading="lazy"
                draggable={false}
              />
              <div className="collection-overlay">
                {data.categories?.[0] && (
                  <span className="collection-category">{data.categories[0]}</span>
                )}
                <h3 className="collection-name">{name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="featured-cta">
        <Link to="/collections" className="view-all-btn">
          {t('collectionsShowcase.viewAll')}
        </Link>
      </div>
    </section>
  );
};

export default CollectionsShowcase;
