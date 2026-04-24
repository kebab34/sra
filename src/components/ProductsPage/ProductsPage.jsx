import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { productCategoriesData } from '../../data/content';
import './ProductsPage.css';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const activeCat = searchParams.get('cat');
  const [hovered, setHovered] = useState(null);

  const filteredProducts = activeCat
    ? productCategoriesData.filter(p =>
        p.path.includes(activeCat) || p.name.toLowerCase().includes(activeCat.replace(/-/g, ' '))
      )
    : productCategoriesData;

  return (
    <section className="products-page">
      <div className="products-page-header">
        <div className="gold-line"></div>
        <h1 className="products-page-title">OUR PRODUCTS</h1>
        <p className="products-page-subtitle">Premium quality products sourced from global partners</p>
      </div>

      {/* Category filter tabs */}
      <div className="products-filter">
        <Link
          to="/products"
          className={`filter-btn ${!activeCat ? 'active' : ''}`}
        >
          All
        </Link>
        {productCategoriesData.map((cat, i) => {
          const catKey = cat.path.split('cat=')[1] || '';
          return (
            <Link
              key={i}
              to={`/products?cat=${catKey}`}
              className={`filter-btn ${activeCat === catKey ? 'active' : ''}`}
            >
              {cat.name}
            </Link>
          );
        })}
      </div>

      <div className="products-page-grid">
        {filteredProducts.map((product, index) => (
          <Link
            key={index}
            to={product.path}
            className="product-page-card"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="product-page-img-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="product-page-img"
                loading="lazy"
              />
              <div className={`product-page-overlay ${hovered === index ? 'visible' : ''}`}>
                <span className="product-page-cta">EXPLORE</span>
              </div>
            </div>
            <div className="product-page-info">
              <h3 className="product-page-name">{product.name}</h3>
              <p className="product-page-desc">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="products-page-cta">
        <p className="products-cta-text">Looking for a specific product? Contact our team directly.</p>
        <Link to="/contact" className="view-all-btn">GET IN TOUCH</Link>
      </div>
    </section>
  );
};

export default ProductsPage;
