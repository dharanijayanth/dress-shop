import React from 'react';
import { SHOP_WHATSAPP_NUMBER, SHOP_WHATSAPP_DISPLAY } from '../data/products';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-info">
            <span className="section-tag">Visit or Connect</span>
            <h2 className="section-title">We'd Love to Hear From You</h2>
            <p className="contact-desc">
              Have questions about fabric, custom sizes, or delivery timelines? Drop us a WhatsApp message or visit our boutique studio.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <h5>Studio Location</h5>
                  <p>Near Jothi Higher Secondary School, Narimedu, Madurai - 625002</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon"><i className="fa-brands fa-whatsapp"></i></div>
                <div>
                  <h5>Direct WhatsApp</h5>
                  <p>{SHOP_WHATSAPP_DISPLAY}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <h5>Email Atelier</h5>
                  <p><a href="mailto:amokha0124@gmail.com">amokha0124@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon"><i className="fa-solid fa-clock"></i></div>
                <div>
                  <h5>Working Hours</h5>
                  <p>Mon - Sat: 10:30 AM – 8:00 PM (Closed Sundays)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-action-box text-center">
            <div className="action-box-inner">
              <div className="action-icon">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <h3>Order or Inquire Instantly</h3>
              <p>Skip complicated checkout forms. Simply message our boutique concierge on WhatsApp with your favorite dress!</p>
              <a
                href={`https://wa.me/${SHOP_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa-large"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
