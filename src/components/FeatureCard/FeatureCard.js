import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ feature, index }) => {
  return (
    <div className={`feature-card slide-in-up stagger-item`} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="feature-icon">{feature.icon}</div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
