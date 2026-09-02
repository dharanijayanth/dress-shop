import React from 'react';

export default function Gallery() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=600&q=80', tag: '@zinzudressshop' },
    { url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80', tag: 'View Inspiration' },
    { url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80', tag: '#ZinzuStyle' },
    { url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80', tag: '@zinzudressshop' },
    { url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80', tag: 'Boutique Aesthetic' },
    { url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80', tag: '#ZinzuDresses' }
  ];

  return (
    <section id="gallery" className="gallery-section section bg-soft">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Pinterest Moodboard</span>
          <h2 className="section-title">The Lookbook Gallery</h2>
          <p className="section-subtitle">Visual inspiration & aesthetic glimpses from our boutique studio</p>
        </div>

        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={img.url} alt={`Lookbook ${idx}`} loading="lazy" />
              <div className="gallery-hover">
                <i className="fa-brands fa-instagram"></i>
                <span>{img.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
