import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl } from '../data/products';

export default function QuickViewModal({ dress, onClose, onAddToCart }) {
  if (!dress) return null;

  const [selectedSize, setSelectedSize] = useState('M');

  useEffect(() => {
    if (dress.sizeRange) {
      const defaultS = dress.sizeRange.split('–')[0].trim();
      if (defaultS) setSelectedSize(defaultS);
    }
  }, [dress]);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Custom Fit'];
  const waUrl = getWhatsAppUrl(dress.name, selectedSize, dress.price);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-body">
          <div className="modal-img-col">
            <img src={dress.image} alt={dress.name} />
          </div>

          <div className="modal-info-col">
            <span className="product-category-badge">{dress.category}</span>
            <h2 className="modal-title">{dress.name}</h2>
            <div className="modal-price-row">
              <span className="modal-price">₹{dress.price}</span>
              <span className="modal-stock">
                <i className="fa-solid fa-circle-check"></i> Handcrafted & In Stock
              </span>
            </div>

            <p className="modal-description">{dress.description}</p>

            <div className="modal-meta-list">
              <div className="meta-item">
                <i className="fa-solid fa-seedling"></i> <span>Fabric: 100% Organic Linen / Pure Silk</span>
              </div>
              <div className="meta-item">
                <i className="fa-solid fa-feather"></i> <span>Lining: Zero-Itch Soft Cotton Lining</span>
              </div>
              <div className="meta-item">
                <i className="fa-solid fa-scissors"></i> <span>Fit: Growth-Friendly Seam Margins</span>
              </div>
            </div>

            <div className="modal-size-select">
              <label>Select Size ({dress.sizeRange}):</label>
              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="modal-actions" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary"
                style={{ flex: '1', padding: '14px 20px' }}
                onClick={() => {
                  onAddToCart(dress, selectedSize);
                  onClose();
                }}
              >
                <i className="fa-solid fa-bag-shopping"></i> Add to Cart
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa-large"
                style={{ flex: '1', padding: '14px 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <i className="fa-brands fa-whatsapp"></i> Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
