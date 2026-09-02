import React from 'react';
import { getCartCheckoutWhatsAppUrl } from '../data/products';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const totalCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const grandTotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const checkoutWaUrl = getCartCheckoutWhatsAppUrl(cartItems);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>
            <i className="fa-solid fa-bag-shopping" style={{ color: 'var(--dusty-rose)' }}></i> Shopping Bag ({totalCount})
          </h3>
          <button id="close-cart-btn" onClick={onClose} aria-label="Close cart">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-msg">
              <i className="fa-solid fa-bag-shopping" style={{ fontSize: '3rem', opacity: 0.3, marginBottom: '12px' }}></i>
              <p style={{ fontWeight: '500' }}>Your shopping bag is empty</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Explore our catalog to add your favorite dresses!</span>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item-card" key={item.cartKey}>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.name}</h4>
                  <div className="cart-item-meta">Size: {item.size}</div>
                  <div className="cart-item-price">₹{item.price * item.qty}</div>
                  <div className="cart-qty-controls">
                    <button className="cart-qty-btn" onClick={() => onUpdateQuantity(item.cartKey, -1)}>-</button>
                    <span className="cart-qty-val">{item.qty}</span>
                    <button className="cart-qty-btn" onClick={() => onUpdateQuantity(item.cartKey, 1)}>+</button>
                  </div>
                </div>
                <button className="cart-remove-item" onClick={() => onRemoveItem(item.cartKey)} title="Remove Item">
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span>Subtotal:</span>
              <span>₹{grandTotal}</span>
            </div>
            <div className="cart-summary-row shipping-row">
              <span>Delivery:</span>
              <span className="free-shipping">FREE Express Delivery</span>
            </div>
            <div className="cart-summary-row grand-total-row">
              <span>Total Amount:</span>
              <span className="cart-grand-total">₹{grandTotal}</span>
            </div>

            <div className="cart-actions">
              <a
                href={checkoutWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa-large btn-checkout"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <i className="fa-brands fa-whatsapp"></i> Checkout Order on WhatsApp
              </a>
              <button className="btn-clear-cart" onClick={onClearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
