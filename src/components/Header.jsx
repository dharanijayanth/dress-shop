import React, { useState, useEffect } from 'react';
import { SHOP_WHATSAPP_NUMBER } from '../data/products';

export default function Header({ cartCount, onOpenCart, onSelectCategory }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCatClick = (catName) => {
    onSelectCategory(catName);
    setMobileNavOpen(false);
    const element = document.getElementById('products');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="main-header" className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo">
          <span className="logo-title">Zinzu</span>
          <span className="logo-subtitle">Women & Girls Fashion</span>
        </a>

        <nav className={`nav-menu ${mobileNavOpen ? 'active' : ''}`} id="nav-menu">
          <a href="#home" className="nav-link" onClick={() => setMobileNavOpen(false)}>Home</a>
          <button className="nav-link" onClick={() => handleCatClick('Traditional Wear')}>Traditional</button>
          <button className="nav-link" onClick={() => handleCatClick('Casual Wear')}>Casual</button>
          <a href="#about" className="nav-link" onClick={() => setMobileNavOpen(false)}>About</a>
          <a href="#contact" className="nav-link" onClick={() => setMobileNavOpen(false)}>Contact</a>
        </nav>

        <div className="header-actions">
          <button id="cart-toggle-btn" className="btn-cart-icon" onClick={onOpenCart} aria-label="View Shopping Cart">
            <i className="fa-solid fa-bag-shopping"></i>
            <span id="cart-badge-count" className="cart-badge-count">{cartCount}</span>
          </button>

          <a
            href={`https://wa.me/${SHOP_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa-header"
            aria-label="Order on WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span>Order on WhatsApp</span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className={`fa-solid ${mobileNavOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
