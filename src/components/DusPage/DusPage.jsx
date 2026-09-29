import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../SEO/SEO';
import { dusData, dusCategories } from '../../data/dusData';
import './DusPage.css';

// Extrait les valeurs uniques triées pour un champ de specs
const uniqueVals = (field) =>
  [...new Set(dusData.map(p => p.specs[field]).filter(Boolean))].sort();

const SERIES  = uniqueVals('Série');
const COLORS  = uniqueVals('Couleur');
const TYPES   = uniqueVals('Type');

const FilterDropdown = ({ title, options, active, onSelect }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = options.filter(o => o.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="dus-filter-group">
      <p className="dus-filter-label">{title}</p>
      <div className="dus-dropdown">
        <button
          className={`dus-dropdown-trigger ${open ? 'open' : ''}`}
          onClick={() => setOpen(o => !o)}
        >
          <span>{active || t('shop.all', 'Tous')}</span>
          <svg className="dus-dropdown-arrow" viewBox="0 0 10 6">
            <path d="M0 0l5 6 5-6z" fill="currentColor"/>
          </svg>
        </button>
        {open && (
          <div className="dus-dropdown-content">
            {options.length > 6 && (
              <input
                className="dus-dropdown-search"
                placeholder={t('common.search', 'Rechercher...')}
                value={search}
                onChange={e => setSearch(e.target.value)}
                autoFocus
              />
            )}
            <div className="dus-dropdown-list">
              <div
                className={`dus-dropdown-item ${!active ? 'active' : ''}`}
                onClick={() => { onSelect(''); setOpen(false); setSearch(''); }}
              >
                {t('shop.all', 'Tous')}
              </div>
              {filtered.map(opt => (
                <div
                  key={opt}
                  className={`dus-dropdown-item ${active === opt ? 'active' : ''}`}
                  onClick={() => { onSelect(opt); setOpen(false); setSearch(''); }}
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const DusPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSerie,    setActiveSerie]    = useState('');
  const [activeColor,    setActiveColor]    = useState('');
  const [activeType,     setActiveType]     = useState('');
  const [search,         setSearch]         = useState('');
  const [sidebarOpen,    setSidebarOpen]    = useState(false);

  const filtered = useMemo(() => dusData.filter(p => {
    if (activeCategory && p.category !== activeCategory) return false;
    if (activeSerie    && p.specs['Série']   !== activeSerie)    return false;
    if (activeColor    && p.specs['Couleur'] !== activeColor)    return false;
    if (activeType     && p.specs['Type']    !== activeType)     return false;
    if (search) {
      const q = search.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.fullName.toLowerCase().includes(q);
    }
    return true;
  }), [activeCategory, activeSerie, activeColor, activeType, search]);

  const hasFilters = activeCategory || activeSerie || activeColor || activeType || search;

  const clearAll = () => {
    setActiveCategory(''); setActiveSerie('');
    setActiveColor('');    setActiveType('');
    setSearch('');
  };

  return (
    <section className="dus-page">
      <SEO
        title="Premium Shower Systems — Columns & Enclosures"
        description="Premium shower systems: columns, glass enclosures, ultra-flat trays. Complete shower solutions — SRA Global Trading Dubai."
        canonical="/douche"
      />
      <div className="dus-header">
        <div className="dus-gold-line"></div>
        <h2 className="dus-title">{t('dus.pageTitle', 'SYSTÈMES DE DOUCHE')}</h2>
        <p className="dus-subtitle">
          {t('shop.productsFoundCount', { count: filtered.length })}
        </p>
      </div>

      <div className="dus-layout">
        {/* ── Sidebar ─────────────────────────────────────── */}
        <aside className={`dus-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="dus-sidebar-header">
            <h3 className="dus-sidebar-title">{t('shop.filters', 'FILTRES')}</h3>
            {hasFilters && (
              <button className="dus-clear-btn" onClick={clearAll}>{t('shop.clearAll', 'Effacer tout')}</button>
            )}
          </div>

          {/* Catégorie */}
          <FilterDropdown
            title={t('shop.category', 'CATÉGORIE')}
            options={dusCategories}
            active={activeCategory}
            onSelect={setActiveCategory}
          />

          {/* Série */}
          <FilterDropdown
            title={t('shop.seriesCollection', 'SÉRIE / COLLECTION')}
            options={SERIES}
            active={activeSerie}
            onSelect={setActiveSerie}
          />

          {/* Couleur */}
          <FilterDropdown
            title={t('shop.colorFinish', 'COULEUR / FINITION')}
            options={COLORS}
            active={activeColor}
            onSelect={setActiveColor}
          />

          {/* Type */}
          <FilterDropdown
            title={t('shop.productType', 'TYPE DE PRODUIT')}
            options={TYPES}
            active={activeType}
            onSelect={setActiveType}
          />

          {/* Filtres actifs */}
          {hasFilters && (
            <div className="dus-active-filters">
              {activeCategory && <span className="dus-tag">{activeCategory} <button onClick={() => setActiveCategory('')}>×</button></span>}
              {activeSerie    && <span className="dus-tag">{activeSerie} <button onClick={() => setActiveSerie('')}>×</button></span>}
              {activeColor    && <span className="dus-tag">{activeColor} <button onClick={() => setActiveColor('')}>×</button></span>}
              {activeType     && <span className="dus-tag">{activeType} <button onClick={() => setActiveType('')}>×</button></span>}
              {search         && <span className="dus-tag">"{search}" <button onClick={() => setSearch('')}>×</button></span>}
            </div>
          )}
          <button className="dus-filters-close-btn" onClick={() => setSidebarOpen(false)}>{t('shop.close', 'Fermer')}</button>
        </aside>

        {sidebarOpen && (
          <div className="dus-filters-overlay" onClick={() => setSidebarOpen(false)} />
        )}

        {/* ── Main ────────────────────────────────────────── */}
        <div className="dus-main">
          {/* Barre de recherche */}
          <div className="dus-search-bar">
            <div className="dus-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder={t('common.searchProduct', 'Rechercher un produit...')}
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="dus-search-input"
              />
              {search && <button className="dus-search-clear" onClick={() => setSearch('')}>✕</button>}
            </div>
          </div>

          {/* Grille */}
          <div className="dus-grid">
            {filtered.map(product => (
              <Link key={product.id} to={`/douche/${product.id}`} className="dus-card">
                <div className="dus-img-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="dus-img"
                    loading="lazy"
                    onError={e => { e.target.style.opacity = '0.3'; }}
                  />
                </div>
                <div className="dus-card-info">
                  <span className="dus-card-cat">{product.category}</span>
                  <h3 className="dus-card-name">{product.fullName.split(' - ').slice(1).join(' - ') || product.name}</h3>
                  {product.specs['Couleur'] && (
                    <span className="dus-card-color">{product.specs['Couleur']}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="dus-empty">
              <p>{t('shop.noProductsFound', 'Aucun produit trouvé.')}</p>
              <button onClick={clearAll}>{t('shop.resetFilters', 'Réinitialiser les filtres')}</button>
            </div>
          )}
        </div>
      </div>

      <button className="dus-filters-fab" onClick={() => setSidebarOpen(true)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
          <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="14" y2="12"/><line x1="4" y1="18" x2="10" y2="18"/>
        </svg>
        {t('shop.filters', 'Filtres')}
        {[activeCategory, activeSerie, activeColor, activeType, search].filter(Boolean).length > 0 && (
          <span className="dus-filters-fab-badge">{[activeCategory, activeSerie, activeColor, activeType, search].filter(Boolean).length}</span>
        )}
      </button>
    </section>
  );
};

export default DusPage;
