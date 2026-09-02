import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="about-section section bg-soft">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="about-img-frame primary-frame">
              <img src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80" alt="Zinzu Studio" loading="lazy" />
            </div>
            <div className="about-img-frame secondary-frame">
              <img src="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=500&q=80" alt="Atelier Tailoring Details" loading="lazy" />
            </div>
            <div className="about-badge-floating">
              <span className="badge-number">100%</span>
              <span className="badge-text">Handmade with Love</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">Welcome to Zinzu</h2>
            <p className="about-text-lead">
              "Handmade fashion for women & girls — crafted for comfort, quiet luxury, and memories that last a lifetime."
            </p>
            <p className="about-text">
              Zinzu is a specialized fashion boutique born out of a desire to create beautiful, heirloom-quality ethnic and casual wear for women and girls. We reject scratchy synthetic fabrics, mass-produced plastic sequins, and stiff silhouettes in favor of breathable cottons, rich silks, and gentle tailoring.
            </p>
            <p className="about-text">
              Whether you need a contemporary co-ord set, a traditional silk Pattu Pavadai, a Lucknowi Chikankari Anarkali, or custom bespoke tailoring, every piece is made to order and can be discussed directly with us on WhatsApp.
            </p>

            <div className="about-features">
              <div className="about-feature-box">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                <div>
                  <h4>Bespoke Custom Fits</h4>
                  <p>Send your exact measurements (bust, waist & length) on WhatsApp for a custom fit.</p>
                </div>
              </div>
              <div className="about-feature-box">
                <i className="fa-solid fa-feather"></i>
                <div>
                  <h4>Zero-Itch Guarantee</h4>
                  <p>100% breathable organic cotton lining on every inner seam.</p>
                </div>
              </div>
            </div>

            <div className="about-signature">
              <div className="owner-info">
                <span className="owner-title">Boutique Founder & Master Tailor</span>
                <span className="owner-name">Zinzu Atelier Studio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
