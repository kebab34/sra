import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { aderkaData } from '../../data/aderkaData';
import './AderkaDetailPage.css';

const SERIES_SPEC_KEYS = {
  Exclusive: 'exclusive',
  Stoneline: 'stoneline',
  Elegance: 'elegance',
  Woodline: 'woodline',
};

const FEATURE_KEYS = ['aluminium', 'pivotSystem', 'insulation', 'customFinish'];

const FEATURE_ICONS = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12a9 9 0 1018 0A9 9 0 003 12z" />
      <path d="M12 8v4l3 3" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
];

const AderkaDetailPage = () => {
  const { t } = useTranslation();
  const { series, slug } = useParams();
  const door = aderkaData.find(d => d.slug === slug);

  if (!door) {
    return (
      <div className="adkd-notfound">
        <p>{t('aderka.notFound', 'Modèle introuvable.')}</p>
        <Link to="/portes-pivot">← {t('aderka.backToSeries', 'Retour aux séries')}</Link>
      </div>
    );
  }

  const specKey = SERIES_SPEC_KEYS[door.series] || 'elegance';
  const specs = {
    finition: t(`aderka.seriesFinish.${specKey}`),
    style: t(`aderka.seriesStyle.${specKey}`),
    description: t(`aderka.seriesLongDescriptions.${specKey}`),
  };

  const sameSeries = aderkaData.filter(d => d.slug !== slug && d.series === door.series);
  const otherSeries = aderkaData.filter(d => d.slug !== slug && d.series !== door.series);
  const related = [...sameSeries, ...otherSeries].slice(0, 4);

  return (
    <div className="adkd-page">
      {/* ── Hero split ── */}
      <div className="adkd-hero">
        {/* Left — full-height image */}
        <div className="adkd-hero-img-col">
          <img
            src={door.image}
            alt={door.name}
            className="adkd-hero-img"
            onError={e => { e.target.style.opacity = '0.2'; }}
          />
          <div className="adkd-hero-img-overlay" />
        </div>

        {/* Right — info panel */}
        <div className="adkd-hero-info-col">
          {/* Breadcrumb */}
          <nav className="adkd-breadcrumb">
            <Link to="/">{t('aderka.breadcrumbHome', 'Accueil')}</Link>
            <span>›</span>
            <Link to="/portes-pivot">{t('aderka.breadcrumbPivotDoors', 'Portes Pivot')}</Link>
            <span>›</span>
            <Link to={`/portes-pivot/${series}`}>{door.series}</Link>
            <span>›</span>
            <span>{door.name}</span>
          </nav>

          <div className="adkd-gold-line" />
          <span className="adkd-series-badge">{door.series} Series</span>
          <h1 className="adkd-name">{door.name.toUpperCase()}</h1>

          <p className="adkd-description">{specs.description}</p>

          {/* Specs grid */}
          <div className="adkd-specs">
            <div className="adkd-spec-item">
              <span className="adkd-spec-label">{t('aderka.material', 'Matériau')}</span>
              <span className="adkd-spec-value">{t('aderka.materialAluminium', 'Aluminium')}</span>
            </div>
            <div className="adkd-spec-item">
              <span className="adkd-spec-label">{t('aderka.finish', 'Finition')}</span>
              <span className="adkd-spec-value">{specs.finition}</span>
            </div>
            <div className="adkd-spec-item">
              <span className="adkd-spec-label">{t('aderka.style', 'Style')}</span>
              <span className="adkd-spec-value">{specs.style}</span>
            </div>
            <div className="adkd-spec-item">
              <span className="adkd-spec-label">{t('aderka.dimensions', 'Dimensions')}</span>
              <span className="adkd-spec-value">{t('aderka.dimensionsCustom', 'Sur-mesure')}</span>
            </div>
            <div className="adkd-spec-item">
              <span className="adkd-spec-label">{t('aderka.series', 'Série')}</span>
              <span className="adkd-spec-value">{door.series}</span>
            </div>
            <div className="adkd-spec-item">
              <span className="adkd-spec-label">{t('aderka.usage', 'Usage')}</span>
              <span className="adkd-spec-value">{t('aderka.usageExterior', 'Extérieur')}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="adkd-cta">
            <Link to="/contact" className="adkd-btn-gold">
              {t('aderka.requestQuote', 'Demander un devis')}
            </Link>
            <Link to={`/portes-pivot/${series}`} className="adkd-btn-outline">
              {t('aderka.seriesLinkPrefix', 'Série')} {door.series}
            </Link>
          </div>
        </div>
      </div>

      {/* ── Features bar ── */}
      <div className="adkd-features">
        {FEATURE_KEYS.map((key, i) => (
          <div key={i} className="adkd-feature-item">
            <div className="adkd-feature-icon">{FEATURE_ICONS[i]}</div>
            <div>
              <p className="adkd-feature-label">{t(`aderka.features.${key}.label`)}</p>
              <p className="adkd-feature-sub">{t(`aderka.features.${key}.sub`)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Related models ── */}
      {related.length > 0 && (
        <div className="adkd-related">
          <div className="adkd-related-header">
            <div className="adkd-gold-line" />
            <h2 className="adkd-related-title">{t('aderka.sameRangeModels', 'MODÈLES DE LA MÊME GAMME')}</h2>
          </div>
          <div className="adkd-related-grid">
            {related.map(r => (
              <Link key={r.id} to={`/portes-pivot/${r.series.toLowerCase()}/${r.slug}`} className="adkd-related-card">
                <div className="adkd-related-img-wrap">
                  <img src={r.image} alt={r.name} loading="lazy" />
                  <div className="adkd-related-overlay">
                    <span>{t('aderka.viewModel', 'Voir le modèle')}</span>
                  </div>
                </div>
                <div className="adkd-related-info">
                  <h3 className="adkd-related-name">{r.name}</h3>
                  <span className="adkd-related-series">{r.series}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AderkaDetailPage;
