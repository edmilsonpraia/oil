import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import '../assets/css/CourseDetailsPage.css';
import heroImage from '../assets/images/02.png';

const CourseDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="course-details-page">
      <section className="course-header">
        <div className="container">
          <h1>Módulos {id}</h1>
        </div>
      </section>

      <section className="course-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Nossos cursos são organizados em módulos</h2>
              <p>Cada um projetado para desenvolver habilidades específicas de forma estruturada e eficaz. Preencha o formulário e comece sua jornada de aprendizado connosco hoje mesmo!</p>
              <button className="btn-signup">Somos eternos aprendizes</button>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Programa VIP" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default CourseDetailsPage;