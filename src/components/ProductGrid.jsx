import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onQuickView, onAddToCart, onResetFilters }) {
  if (products.length === 0) {
    return (
      <div className="no-products text-center">
        <i className="fa-solid fa-shirt" style={{ fontSize: '3rem', color: 'var(--primary-accent)', marginBottom: '16px' }}></i>
        <h3>No dresses found</h3>
        <p>Try resetting your search filter or selecting another category.</p>
        <button onClick={onResetFilters} className="btn btn-secondary" style={{ marginTop: '16px' }}>
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((dress) => (
        <ProductCard
          key={dress.id}
          dress={dress}
          onQuickView={onQuickView}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
