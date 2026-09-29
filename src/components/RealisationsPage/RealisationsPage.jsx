import React from 'react';
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
  const { trackRef, dragHandlers } = useDragScroll();

  return (
    <article className="project-feature">
      {/* Hero */}
      <div
        className="project-hero"
        style={{ backgroundImage: `url(${project.heroImage})` }}
      >
        <div className="project-hero-overlay">
          <span className="project-status">{project.status}</span>
          <h1 className="project-hero-title">{project.name}</h1>
          <p className="project-hero-location">{project.location} — {project.address}</p>
        </div>
      </div>

      {/* Intro */}
      <div className="section project-intro">
        <Reveal className="section-header">
          <div className="gold-line"></div>
          <h2 className="section-title">Un lieu riche en histoire</h2>
        </Reveal>
        <Reveal as="p" className="project-lead">{project.intro}</Reveal>
        {project.history.map((paragraph, i) => (
          <Reveal as="p" className="project-paragraph" key={i}>{paragraph}</Reveal>
        ))}
      </div>

      {/* Stats */}
      <Reveal className="project-stats">
        {project.stats.map((stat, i) => (
          <div className="project-stat" key={i}>
            <span className="project-stat-value">{stat.value}</span>
            <span className="project-stat-label">{stat.label}</span>
          </div>
        ))}
      </Reveal>

      {/* Zones */}
      <div className="section">
        <Reveal className="section-header">
          <div className="gold-line"></div>
          <h2 className="section-title">4 zones, un pôle urbain majeur</h2>
        </Reveal>
        <div className="project-zones">
          {project.zones.map((zone, i) => (
            <Reveal as="div" className="project-zone-card" key={i}>
              <span className="project-zone-value">{zone.value}</span>
              <h3 className="project-zone-title">{zone.title}</h3>
              <p className="project-zone-detail">{zone.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Renders */}
      <div className="section">
        <Reveal className="section-header">
          <div className="gold-line"></div>
          <h2 className="section-title">Le projet en images</h2>
        </Reveal>
        <div className="project-renders-grid">
          {project.renders.map((render, i) => (
            <div className="project-render" key={i}>
              <img src={render.src} alt={render.caption} loading="lazy" />
              <span className="project-render-caption">{render.caption}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Site progress */}
      <div className="section">
        <Reveal className="section-header">
          <div className="gold-line"></div>
          <h2 className="section-title">Le chantier avance</h2>
          <p className="section-subtitle">Faites glisser pour suivre l'évolution des travaux</p>
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
              <img src={photo.src} alt={photo.caption} loading="lazy" draggable={false} />
              <span className="project-progress-caption">{photo.caption}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Promoter + CTA */}
      <Reveal className="project-footer">
        <p className="project-promoter">Développé par {project.promoter}</p>
        <div className="project-cta-group">
          {project.brochure && (
            <a href={project.brochure} target="_blank" rel="noopener noreferrer" className="view-all-btn">
              Télécharger la brochure
            </a>
          )}
        </div>
      </Reveal>
    </article>
  );
};

const RealisationsPage = () => {
  return (
    <>
      <SEO
        title="Nos Réalisations — Projets en cours"
        description="Découvrez Village Notre Père à Abidjan, projet immobilier mixte de 23 000 m² réunissant hôtellerie, bureaux, commerces et restaurants."
        canonical="/realisations"
      />
      <div className="section-header realisations-header">
        <div className="gold-line"></div>
        <h1 className="section-title">Nos Réalisations</h1>
        <p className="section-subtitle">Des projets d'exception, au cœur de l'Afrique</p>
      </div>

      {projectsData.map((project) => (
        <ProjectSection project={project} key={project.slug} />
      ))}
    </>
  );
};

export default RealisationsPage;
