import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, image }) => {
  const siteName = 'SRA Global Trading';
  const defaultDesc = 'SRA Global Trading — Tiles, sanitary ware, bathroom furniture, custom kitchens, joinery and pergolas. Showroom in Dubai, UAE.';
  const defaultImage = 'https://www.sraglobaltrading.com/sra.svg';
  const baseUrl = 'https://www.sraglobaltrading.com';

  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Tiles & Interior — Dubai, UAE`;
  const desc = description || defaultDesc;
  const img = image || defaultImage;
  const url = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />

      {/* General */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="AE" />
      <meta name="geo.placename" content="Dubai" />
    </Helmet>
  );
};

export default SEO;
