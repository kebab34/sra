import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [collections] = useState(getFeaturedCollections);
  const [headerRef, headerInView] = useReveal();
  const { trackRef, dragHandlers, onClickCapture } = useDragScroll();

  return (
    <section className="section collections-showcase">
      <div className={`section-header reveal ${headerInView ? 'in-view' : ''}`} ref={headerRef}>
        <div className="gold-line"></div>
        <h2 className="section-title">Collections Signature</h2>
        <p className="section-subtitle">Faites glisser pour explorer nos créations les plus emblématiques</p>
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
          Voir toutes nos collections
        </Link>
      </div>
    </section>
  );
};

export default CollectionsShowcase;
