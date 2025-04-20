import React from 'react';
import './FeatureBar.css';

export default function FeatureBar({ services }) {
  return (
    <div className="feature-bar">
      <div className="feature-bar__search">
        <input
          type="text"
          placeholder="🔍 Type name of service, ministry, agency…"
        />
      </div>
      <div className="feature-bar__cards">
  {services.map((s, i) => (
    <div key={i} className="feature-card">
      <div className="feature-card__icon">
        <img src={s.icon} alt={s.label} />
      </div>
      <h3 className="feature-card__label">{s.label}</h3>
    </div>
  ))}
</div>

    </div>
  );
}