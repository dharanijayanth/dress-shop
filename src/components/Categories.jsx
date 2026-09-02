import React from 'react';

export default function Categories({ onSelectCategory }) {
  const handleClick = (catName) => {
    onSelectCategory(catName);
    const element = document.getElementById('products');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="occasions-section section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Featured Collections</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Explore our two primary style lines: Traditional Ethnic Wear & Contemporary Casual Wear</p>
        </div>

        <div className="occasion-grid">
          <div className="occasion-card" onClick={() => handleClick('Traditional Wear')}>
            <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80" alt="Traditional Wear" loading="lazy" />
            <div className="occasion-overlay">
              <span className="occasion-tag">Heritage & Festive</span>
              <h3 className="occasion-title">Traditional Wear</h3>
              <p className="occasion-subtitle">Kanjivaram Silk Sarees, Pattu Pavadai, Lucknowi Chikankari Anarkalis & Festive Lehengas</p>
            </div>
          </div>

          <div className="occasion-card" onClick={() => handleClick('Casual Wear')}>
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80" alt="Casual Wear" loading="lazy" />
            <div className="occasion-overlay">
              <span className="occasion-tag">Everyday Comfort</span>
              <h3 className="occasion-title">Casual Wear</h3>
              <p className="occasion-subtitle">LIVA Viscose Co-ord Sets, Cotton Midi Dresses, Printed Tops, Tunics & Daily Wear</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
