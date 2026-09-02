import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast-notification">
      <i className="fa-solid fa-circle-check" style={{ color: 'var(--wa-green)', fontSize: '1.2rem' }}></i>
      <span>{message}</span>
    </div>
  );
}
