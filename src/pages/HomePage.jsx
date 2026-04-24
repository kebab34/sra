import React from 'react';
import SEO from '../components/SEO/SEO';
import Carousel from '../components/HomePage/Carousel/Carousel';
import RoomCategories from '../components/HomePage/RoomCategories/RoomCategories';
import ProductCategories from '../components/HomePage/ProductCategories/ProductCategories';
import FeaturedProducts from '../components/HomePage/FeaturedProducts/FeaturedProducts';
import CTASection from '../components/HomePage/CTASection/CTASection';

const HomePage = () => {
  return (
    <>
      <SEO
        title="SRA Global Trading — Tiles, Bathrooms & Interiors — Dubai, UAE"
        description="SRA Global Trading, your showroom in Dubai: tiles, sanitary ware, bathroom furniture, custom kitchens, faucets, pergolas and joinery. 244 collections available."
        canonical="/"
      />
      <Carousel />
      <RoomCategories />
      <ProductCategories />
      <FeaturedProducts />
      <CTASection />
    </>
  );
};

export default HomePage;
