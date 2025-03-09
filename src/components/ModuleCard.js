import React from 'react';
import '../assets/css/ModuleCard.css';

const ModuleCard = ({ number, description }) => {
  return (
    <div className="module-card">
      <div className="module-image"></div>
      <div className="module-content">
        <h3>Module {number}</h3>
        <p>{description || 'The first and unique online educational programming platform of its kind, created by experts in programming and the oil and gas industry'}</p>
      </div>
    </div>
  );
};

export default ModuleCard;