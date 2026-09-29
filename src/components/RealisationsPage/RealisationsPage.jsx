import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../SEO/SEO';
import useReveal from '../../hooks/useReveal';
import useDragScroll from '../../hooks/useDragScroll';
import { projectsData } from '../../data/projectsData';
import './RealisationsPage.css';

const Reveal = ({ as: Tag = 'div', className = '', children }) => {
  const [ref, inView] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in-view' : ''} ${className}`}>
      {children}
    </Tag>
  );
};

const ProjectSection = ({ project }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('fr') ? 'fr' : 'en';
  const { trackRef, dragHandlers } = useDragScroll();

  return (
    <article className="project-feature">
      {/* Hero */}
      <div
        className="project-hero"
        style={{ backgroundImage: `url(${project.heroImage})` }}
      >
        <div className="project-hero-overlay">
          <span className="project-status">{project.status[lang]}</span>
          <h1 className="project-hero-title">{project.name}</h1>
          <p className="project-hero-location">{project.location} — {project.address[lang]}</p>
        </div>
      </div>

      {/* Intro */}
      <div className="section project-intro">
        <Reveal className="section-header">
          <div className="gold-line"></div>
          <h2 className="section-title">{t('realisations.historyTitle')}</h2>
        </Reveal>
        <Reveal as="p" className="project-lead">{project.intro[lang]}</Reveal>
        {project.history.map((paragraph, i) => (
          <Reveal as="p" className="project-paragraph" key={i}>{paragraph[lang]}</Reveal>
        ))}
      </div>

      {/* Stats */}
      <Reveal className="project-stats">
        {project.stats.map((stat, i) => (
          <div className="project-stat" key={i}>
            <span className="project-stat-value">{stat.value}</span>
            <span className="project-stat-label">{stat.label[lang]}</span>
          </div>
        ))}
      </Reveal>

      {/* Zones */}
      <div className="section">
        <Reveal className="section-header">
          <div className="gold-line"></div>
          <h2 className="section-title">{t('realisations.zonesTitle')}</h2>
        </Reveal>
        <div className="project-zones">
          {project.zones.map((zone, i) => (
            <Reveal as="div" className="project-zone-card" key={i}>
              <span className="project-zone-value">{zone.value[lang]}</span>
              <h3 className="project-zone-title">{zone.title[lang]}</h3>
              <p className="project-zone-detail">{zone.detail[lang]}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Renders */}
      <div className="section">
        <Reveal className="section-header">
          <div className="gold-line"></div>
          <h2 className="section-title">{t('realisations.imagesTitle')}</h2>
        </Reveal>
        <div className="project-renders-grid">
          {project.renders.map((render, i) => (
            <div className="project-render" key={i}>
              <img src={render.src} alt={render.caption[lang]} loading="lazy" />
              <span className="project-render-caption">{render.caption[lang]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Site progress */}
      <div className="section">
        <Reveal className="section-header">
          <div className="gold-line"></div>
          <h2 className="section-title">{t('realisations.progressTitle')}</h2>
          <p className="section-subtitle">{t('realisations.progressSubtitle')}</p>
        </Reveal>

        {project.video && (
          <Reveal className="project-video-wrapper">
            <video
              src={project.video}
              poster={project.videoPoster}
              controls
              muted
              playsInline
              className="project-video"
            />
          </Reveal>
        )}

        <div className="project-progress-track" ref={trackRef} {...dragHandlers}>
          {project.siteProgress.map((photo, i) => (
            <div className="project-progress-card" key={i} draggable={false}>
              <img src={photo.src} alt={photo.caption[lang]} loading="lazy" draggable={false} />
              <span className="project-progress-caption">{photo.caption[lang]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Promoter + CTA */}
      <Reveal className="project-footer">
        <p className="project-promoter">{t('realisations.developedBy')} {project.promoter}</p>
        <div className="project-cta-group">
          {project.brochure && (
            <a href={project.brochure} target="_blank" rel="noopener noreferrer" className="view-all-btn">
              {t('realisations.downloadBrochure')}
            </a>
          )}
        </div>
      </Reveal>
    </article>
  );
};

const RealisationsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="Our Projects — Ongoing Developments"
        description="Discover Village Notre Père in Abidjan, a 23,000 sqm mixed-use development combining hospitality, offices, retail and restaurants."
        canonical="/realisations"
      />
      <div className="section-header realisations-header">
        <div className="gold-line"></div>
        <h1 className="section-title">{t('realisations.pageTitle')}</h1>
        <p className="section-subtitle">{t('realisations.pageSubtitle')}</p>
      </div>

      {projectsData.map((project) => (
        <ProjectSection project={project} key={project.slug} />
      ))}
    </>
  );
};

export default RealisationsPage;
