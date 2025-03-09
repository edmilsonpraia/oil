import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/CourseCard.css';

const CourseCard = ({ id, title, description, slug }) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Atualizar o botão para direcionar para a seção de cursos na página Educational */}
      <Link to="/educational#courses" className="btn-signup">Saiba Mais</Link>
    </div>
  );
};

export default CourseCard;