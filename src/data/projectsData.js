// Données des projets présentés sur la page "Nos Réalisations" (bilingue FR/EN)
export const projectsData = [
  {
    slug: 'village-notre-pere',
    name: 'Village Notre Père',
    location: 'Abidjan, Côte d\'Ivoire',
    address: {
      fr: 'Le Plateau — Îlot Saint-Paul',
      en: 'Le Plateau — Îlot Saint-Paul'
    },
    status: {
      fr: 'Projet en cours',
      en: 'Ongoing project'
    },
    heroImage: '/projects/village-notre-pere/render-01-vue-angle.jpg',
    promoter: 'Pelegrina Immobilier, filiale du Groupe Duval en Afrique',
    intro: {
      fr: 'Au cœur du Plateau d\'Abidjan, là où l\'histoire rencontre la modernité, prend vie un projet d\'exception de 23 000 m², réunissant appartements-hôtels, bureaux, commerces et centre commercial.',
      en: 'In the heart of Le Plateau in Abidjan, where history meets modernity, an exceptional 23,000 sqm project is taking shape, bringing together an aparthotel, offices, shops and a shopping centre.'
    },
    history: [
      {
        fr: 'Ce lieu emblématique puise son âme dans la chapelle de l\'Externat Saint-Paul, première église du plateau datant de 1905. Conservée et rénovée, elle devient le cœur vivant du projet, autour duquel s\'articulent bureaux, commerces et la résidence de tourisme d\'affaires Odalys.',
        en: 'This landmark site draws its soul from the Externat Saint-Paul chapel, the first church on the plateau, dating back to 1905. Preserved and renovated, it becomes the living heart of the project, around which the offices, shops and the Odalys business-tourism residence are arranged.'
      },
      {
        fr: 'Les visiteurs se laissent guider par une galerie piétonne et un mail végétalisé, créant une expérience shopping unique et immersive. Avec un supermarché de plus de 1 500 m² et de nombreuses enseignes internationales et locales, le centre devient un véritable lieu de rencontre au cœur de la ville.',
        en: 'Visitors are guided through a pedestrian gallery and a landscaped mall, creating a unique and immersive shopping experience. With a supermarket of more than 1,500 sqm and numerous international and local brands, the centre becomes a genuine meeting place in the heart of the city.'
      },
      {
        fr: 'Conçu dans une démarche durable, le projet est certifié EDGE, permettant une réduction de 20 % de la consommation énergétique. Les arbres centenaires en limite de propriété sont préservés pendant toute la durée des travaux, et 85 nouveaux arbres seront plantés pour renforcer le couvert végétal du site.',
        en: 'Designed with sustainability in mind, the project is EDGE certified, delivering a 20% reduction in energy consumption. Century-old trees on the property boundary are preserved throughout the works, and 85 new trees will be planted to reinforce the site\'s green cover.'
      }
    ],
    stats: [
      { value: '23 000', label: { fr: 'm² de surface', en: 'sqm of floor area' } },
      { value: '9 280', label: { fr: 'm² de terrain', en: 'sqm of land' } },
      { value: '370', label: { fr: 'places de parking', en: 'parking spaces' } },
      { value: '4', label: { fr: 'zones', en: 'zones' } }
    ],
    zones: [
      {
        title: { fr: 'Hôtellerie', en: 'Hospitality' },
        value: { fr: '132 clés', en: '132 keys' },
        detail: {
          fr: 'Hôtel de standing 4 étoiles, résidence de tourisme d\'affaires exploitée par Odalys.',
          en: 'A 4-star upscale hotel, a business-tourism residence operated by Odalys.'
        }
      },
      {
        title: { fr: 'Bureaux', en: 'Offices' },
        value: { fr: '9 400 m²', en: '9,400 sqm' },
        detail: {
          fr: 'Immeuble de bureaux en R+8, intégrant au R+1 un centre d\'affaires et un espace de coworking.',
          en: 'An 8-storey office building, with a business centre and coworking space on the 1st floor.'
        }
      },
      {
        title: { fr: 'Commerces', en: 'Retail' },
        value: { fr: '3 500 m²', en: '3,500 sqm' },
        detail: {
          fr: 'Un supermarché de plus de 1 500 m² et des boutiques en pied d\'immeuble.',
          en: 'A supermarket of more than 1,500 sqm and street-level shops.'
        }
      },
      {
        title: { fr: 'Restaurants', en: 'Restaurants' },
        value: { fr: '1 500 m²', en: '1,500 sqm' },
        detail: {
          fr: 'Food court et restaurants au sein de la galerie piétonne.',
          en: 'Food court and restaurants within the pedestrian gallery.'
        }
      }
    ],
    renders: [
      { src: '/projects/village-notre-pere/render-01-vue-angle.jpg', caption: { fr: 'Entrée mail Sud-Ouest', en: 'South-West mall entrance' } },
      { src: '/projects/village-notre-pere/render-02-odalys.jpg', caption: { fr: 'Résidence de tourisme d\'affaires Odalys', en: 'Odalys business-tourism residence' } },
      { src: '/projects/village-notre-pere/render-03-galerie-pietonne.jpg', caption: { fr: 'Galerie piétonne végétalisée', en: 'Landscaped pedestrian gallery' } },
      { src: '/projects/village-notre-pere/render-04-facade-commerces.jpg', caption: { fr: 'Façade des commerces en pied d\'immeuble', en: 'Street-level shop façade' } }
    ],
    siteProgress: [
      { src: '/projects/village-notre-pere/chantier-06-fondations.jpg', caption: { fr: 'Coulage des fondations', en: 'Pouring the foundations' } },
      { src: '/projects/village-notre-pere/chantier-01.jpg', caption: { fr: 'Terrassement et préservation de la chapelle historique', en: 'Earthworks and preservation of the historic chapel' } },
      { src: '/projects/village-notre-pere/chantier-02.jpg', caption: { fr: 'Vue du chantier depuis le boulevard', en: 'View of the site from the boulevard' } },
      { src: '/projects/village-notre-pere/chantier-03-facade.jpg', caption: { fr: 'Palissade de chantier, boulevard de la République', en: 'Site hoarding, Boulevard de la République' } },
      { src: '/projects/village-notre-pere/chantier-04-facade.jpg', caption: { fr: 'Palissade de chantier, boulevard de la République', en: 'Site hoarding, Boulevard de la République' } },
      { src: '/projects/village-notre-pere/chantier-05-nuit.jpg', caption: { fr: 'Le chantier de nuit', en: 'The site at night' } }
    ],
    video: '/projects/village-notre-pere/chantier-video.mp4',
    videoPoster: '/projects/village-notre-pere/chantier-01.jpg',
    brochure: '/projects/village-notre-pere/brochure-village-notre-pere.pdf'
  }
];
