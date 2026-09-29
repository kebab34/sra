import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { collectionsData } from '../../../data/collectionsData';
import useReveal from '../../../hooks/useReveal';
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
  const trackRef = useRef(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0, moved: false });

  const onPointerDown = (e) => {
    const track = trackRef.current;
    dragState.current = {
      isDown: true,
      startX: e.pageX - track.offsetLeft,
      scrollLeft: track.scrollLeft,
      moved: false
    };
    track.classList.add('dragging');
  };

  const onPointerMove = (e) => {
    if (!dragState.current.isDown) return;
    e.preventDefault();
    const track = trackRef.current;
    const x = e.pageX - track.offsetLeft;
    const walk = x - dragState.current.startX;
    if (Math.abs(walk) > 5) dragState.current.moved = true;
    track.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const endDrag = () => {
    dragState.current.isDown = false;
    trackRef.current?.classList.remove('dragging');
  };

  const onCardClick = (e) => {
    if (dragState.current.moved) e.preventDefault();
  };

  return (
    <section className="section collections-showcase">
      <div className={`section-header reveal ${headerInView ? 'in-view' : ''}`} ref={headerRef}>
        <div className="gold-line"></div>
        <h2 className="section-title">Collections Signature</h2>
        <p className="section-subtitle">Faites glisser pour explorer nos créations les plus emblématiques</p>
      </div>

      <div
        className="collections-track"
        ref={trackRef}
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
      >
        {collections.map(([name, data]) => (
          <Link
            key={name}
            to={`/collection/${encodeURIComponent(name)}`}
            className="collection-card"
            onClickCapture={onCardClick}
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
