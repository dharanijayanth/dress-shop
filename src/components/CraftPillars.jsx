import React from 'react';

export default function CraftPillars() {
  return (
    <section id="craft" className="craft-section section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Atelier Philosophy</span>
          <h2 className="section-title">Our Craft & Tailoring</h2>
          <p className="section-subtitle">Every Zinzu dress is crafted with pure natural fabrics, zero-itch linings, and growth-friendly seams</p>
        </div>

        <div className="craft-pillars">
          <div className="craft-card">
            <div className="craft-number">01</div>
            <h3 className="craft-title">Pure Natural Fabrics</h3>
            <p className="craft-text">
              We use 100% organic cotton linen, handblock printed mulmul, and pure mulberry silk. Every dress is fully lined with ultra-soft zero-itch cotton so you stay comfortable all day.
            </p>
          </div>

          <div className="craft-card">
            <div className="craft-number">02</div>
            <h3 className="craft-title">Hand-Finished Details</h3>
            <p className="craft-text">
              From delicate hand-smocking to hand-stitched pearl highlights and enclosed French seams that prevent skin scratching or fraying.
            </p>
          </div>

          <div className="craft-card">
            <div className="craft-number">03</div>
            <h3 className="craft-title">Growth-Friendly Sizing</h3>
            <p className="craft-text">
              Our dresses feature hidden seam margins and adjustable back sashes so your favorite dress can be let out to fit across multiple seasons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
