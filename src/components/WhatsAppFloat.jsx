import React, { useState, useEffect } from 'react';
import { SHOP_WHATSAPP_NUMBER } from '../data/products';

export default function WhatsAppFloat() {
  const [popoverActive, setPopoverActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopoverActive(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const waUrl = `https://wa.me/${SHOP_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi there! 👋 Welcome to Zinzu Atelier. I would like to inquire about dresses and custom fits.'
  )}`;

  return (
    <div className="wa-float-wrapper">
      <div className={`wa-popover ${popoverActive ? 'active' : ''}`}>
        <div className="wa-popover-header">
          <div className="wa-avatar">
            <i className="fa-solid fa-store"></i>
            <span className="online-dot"></span>
          </div>
          <div>
            <h5>Zinzu Concierge</h5>
            <span>Online • Replies in minutes</span>
          </div>
          <button onClick={() => setPopoverActive(false)} aria-label="Close message popover">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="wa-popover-body">
          <p className="wa-msg-bubble">
            Hi there! 👋 Welcome to Zinzu Atelier. Looking for a handmade dress or co-ord set for yourself or your daughter? Message us for sizing & custom tailoring!
          </p>
        </div>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="wa-popover-cta">
          <i className="fa-brands fa-whatsapp"></i> Start Chat
        </a>
      </div>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-btn"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
        <span className="wa-float-badge">1</span>
      </a>
    </div>
  );
}
