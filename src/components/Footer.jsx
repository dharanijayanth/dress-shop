import React, { useState } from 'react';

export default function Footer({ onSelectCategory }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const handleCategoryFilter = (cat) => {
    onSelectCategory(cat);
    const element = document.getElementById('products');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#home" className="logo">
            <span className="logo-title">Zinzu</span>
            <span className="logo-subtitle">Women & Girls Fashion</span>
          </a>
          <p className="footer-tagline">
            Handmade co-ords, ethnic suits & dresses for women and girls. Crafted with pure natural fabrics, soft cotton linings, and growth-friendly tailoring for life's precious moments.
          </p>
          <p className="footer-email-link" style={{ marginTop: '10px', fontSize: '0.9rem', fontWeight: '500' }}>
            <i className="fa-solid fa-envelope" style={{ color: 'var(--dusty-rose)', marginRight: '6px' }}></i>
            <a href="mailto:amokha0124@gmail.com" style={{ color: 'var(--bg-base)', textDecoration: 'underline' }}>amokha0124@gmail.com</a>
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#products">Collections</a></li>
            <li><a href="#craft">Our Craft</a></li>
            <li><a href="#about">About Atelier</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Shop Collections</h4>
          <ul>
            <li><button onClick={() => handleCategoryFilter('Casual Wear')}>LIVA Viscose Casual Co-ords</button></li>
            <li><button onClick={() => handleCategoryFilter('Casual Wear')}>Pure Linen & Cotton Sets</button></li>
            <li><button onClick={() => handleCategoryFilter('Traditional Wear')}>Traditional Silk Pattu Pavadai</button></li>
            <li><button onClick={() => handleCategoryFilter('Traditional Wear')}>Lucknowi Chikankari Anarkalis</button></li>
            <li><button onClick={() => handleCategoryFilter('Traditional Wear')}>Chanderi Kurti Palazzo Sets</button></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4 className="footer-heading">Boutique VIP Club</h4>
          <p>Subscribe for exclusive lookbook previews and new drop alerts.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button type="submit" className="btn btn-primary">Join</button>
          </form>
          {subscribed && <span className="newsletter-success">Thank you for joining Zinzu VIP list! ✨</span>}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zinzu Atelier. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><i className="fa-brands fa-pinterest-p"></i></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
        </div>
      </div>
    </footer>
  );
}
