import React, { useRef } from 'react';
import ProductCard from './ProductCard';

export default function FeaturedCarousel({ featuredProducts, onQuickView, onAddToCart }) {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="featured-carousel-wrapper">
      <div className="featured-carousel-header">
        <div className="carousel-title-group">
          <span className="section-tag" style={{ marginBottom: '4px' }}>Top Picks</span>
          <h3 className="featured-carousel-title">
            <i className="fa-solid fa-sparkles" style={{ color: 'var(--muted-gold)' }}></i> Featured Bestsellers
          </h3>
        </div>
        <div className="carousel-nav-btns">
          <button className="carousel-btn" onClick={scrollLeft} aria-label="Previous Slide">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="carousel-btn" onClick={scrollRight} aria-label="Next Slide">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="featured-carousel-track" ref={trackRef}>
        {featuredProducts.map((dress) => (
          <div className="carousel-item-card" key={dress.id}>
            <ProductCard dress={dress} onQuickView={onQuickView} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}
