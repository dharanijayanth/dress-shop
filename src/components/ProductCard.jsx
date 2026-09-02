import React from 'react';
import { getWhatsAppUrl } from '../data/products';

export default function ProductCard({ dress, onQuickView, onAddToCart }) {
  const defaultSize = dress.sizeRange ? dress.sizeRange.split('–')[0].trim() : 'M';
  const waUrl = getWhatsAppUrl(dress.name, defaultSize, dress.price);

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={dress.image} alt={dress.name} loading="lazy" />
        {dress.badge && <span className="product-badge">{dress.badge}</span>}
        <button
          className="quick-view-btn"
          onClick={() => onQuickView(dress)}
          aria-label={`Quick View ${dress.name}`}
        >
          <i className="fa-solid fa-eye"></i> Quick View
        </button>
      </div>

      <div className="product-content">
        <div className="product-meta">
          <span className="product-category-tag">{dress.category}</span>
          <span className="age-badge">{dress.sizeRange}</span>
        </div>

        <h3 className="product-title">{dress.name}</h3>
        <p className="product-description-snippet">{dress.description}</p>

        <div className="product-card-footer">
          <div className="product-price" style={{ marginBottom: '12px' }}>₹{dress.price}</div>
          <div className="card-btn-group">
            <button
              className="btn-add-cart"
              onClick={() => onAddToCart(dress)}
            >
              <i className="fa-solid fa-bag-shopping"></i> Add to Bag
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa-card"
              style={{ flex: '1', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <i className="fa-brands fa-whatsapp"></i> Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
