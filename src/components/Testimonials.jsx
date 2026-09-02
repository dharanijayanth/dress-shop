import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Meera Sundaram',
      tag: 'Mother of Ananya (5Y) • Chennai',
      avatar: 'Meera S.',
      quote: "The rose gold tulle frock for my daughter's 5th birthday was breathtaking! Most importantly, the inner lining was so soft that she wore it all evening without complaining once."
    },
    {
      name: 'Kavitha Raman',
      tag: 'Mother of Diya (8Y) • Bengaluru',
      avatar: 'Kavitha R.',
      quote: 'Ordered a custom Pattu Pavadai set for Diwali via WhatsApp. They guided me on sizing margins so it can be adjusted as she grows. Phenomenal craftsmanship!'
    },
    {
      name: 'Samantha Verma',
      tag: 'Verified Parent • Hyderabad',
      avatar: 'Samanth V.',
      quote: "We bought three flower girl gowns for my sister's wedding. The pearl embroidery was so subtle and luxurious. The girls looked like little angels!"
    }
  ];

  return (
    <section className="testimonials-section section testimonials-dark">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Kind Words from Parents</span>
          <h2 className="section-title">Loved by Parents & Daughters</h2>
          <p className="section-subtitle">Real feedback from mothers who trust Zinzu for their children's special moments</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, i) => (
            <div className="testimonial-card" key={i}>
              <div className="stars">
                {[...Array(5)].map((_, s) => (
                  <i className="fa-solid fa-star" key={s}></i>
                ))}
              </div>
              <p className="quote-text">"{rev.quote}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{rev.avatar}</div>
                <div>
                  <h4 className="author-name">{rev.name}</h4>
                  <span className="author-tag">{rev.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
