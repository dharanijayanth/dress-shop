import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">Curated Fashion • Traditional & Casual Collections</span>
          <h1 className="hero-title">Timeless Traditional Elegance & Modern Casual Wear</h1>
          <p className="hero-subtitle">
            Discover handcrafted Kanjivaram silk lehengas, Lucknowi Chikankari Anarkali suits, and breezy LIVA viscose casual co-ord sets crafted for everyday comfort & celebration.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">
              <span>Shop All Collection</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#categories" className="btn btn-secondary">Explore Categories</a>
          </div>
          <div className="hero-perks">
            <div className="perk-item">
              <i className="fa-solid fa-sparkles"></i>
              <span>Handcrafted Silk & Cotton</span>
            </div>
            <div className="perk-item">
              <i className="fa-solid fa-truck-fast"></i>
              <span>Fast Shipping Across India</span>
            </div>
            <div className="perk-item">
              <i className="fa-solid fa-heart"></i>
              <span>4.9★ Customer Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
