import React from 'react';
import '../assets/css/AboutPage.css';
import heroImage from '../assets/images/03.png';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>Sobre Nós</h1>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Fundada em 2019, a nossa empresa é uma referência em educação e tecnologia</h2>
              <p>Especializada em oferecer cursos e soluções inovadoras para os setores de programação, petróleo e gás, informática, e inglês técnico. Nosso objectivo é capacitar profissionais e empresas com conhecimento prático e atualizado, preparando-os para os desafios do mercado global.</p>
              <button className="btn-signup">Somos eternos aprendizes</button>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Programa VIP" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;