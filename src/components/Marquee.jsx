import React from 'react';

export default function Marquee() {
  const items = [
    'Traditional Silk Sarees',
    'Casual Cotton Co-ords',
    'Lucknowi Chikankari Anarkalis',
    'Printed Casual Tunics',
    'Kanjivaram Silk Lehengas',
    'Everyday Casual Wear'
  ];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.concat(items).map((item, idx) => (
          <div className="marquee-item" key={idx}>
            {item} <span className="marquee-dot">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
