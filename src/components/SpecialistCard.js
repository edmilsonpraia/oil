import React from 'react';
import '../assets/css/SpecialistCard.css';

const SpecialistCard = ({ name, role }) => {
  return (
    <div className="specialist-card">
      <div className="specialist-image"></div>
      <h3>{name || 'Name'}</h3>
      <p>{role || 'The head of the educational department is a leading teacher'}</p>
      <button className="btn-details">More detailed</button>
    </div>
  );
};

export default SpecialistCard;