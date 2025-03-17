import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/AboutPage.css';
import heroImage from '../assets/images/03.png';

// Imagens para a primeira galeria
import img001 from '../assets/images/001.jpg';
import img002 from '../assets/images/002.jpg';
import img003 from '../assets/images/003.jpg';

// Imagens para a segunda galeria
import img004 from '../assets/images/img01.jpg';
import img005 from '../assets/images/imag02.jpg';
import img006 from '../assets/images/imag03.jpg';

// Imagens para a terceira galeria (nova seção)
// Você pode substituir estas importações pelos caminhos das suas novas imagens
import img007 from '../assets/images/4.jpg'; // Temporariamente reusando a mesma imagem
import img008 from '../assets/images/7.jpg'; // Temporariamente reusando a mesma imagem
import img009 from '../assets/images/5.jpg'; // Temporariamente reusando a mesma imagem

const AboutPage = () => {
  // Estado para contador de animação
  const [counts, setCounts] = useState({
    conferences: 0,
    students: 0,
    countries: 0
  });

  // Valores finais para os contadores
  const finalCounts = {
    conferences: 60,
    students: 700,
    countries: 11
  };

  // Estado para controlar animações baseadas em scroll
  const [isVisible, setIsVisible] = useState({
    stats: true, // Definido inicialmente como true para garantir que os contadores sejam mostrados
    gallery1: false,
    gallery2: false,
    gallery3: false  // Adicionado para a nova galeria
  });

  // Iniciar animação dos contadores com um approach diferente
  useEffect(() => {
    // Certifique-se de que os contadores começam com valores visíveis
    setCounts({
      conferences: 60,
      students: 700,
      countries: 11
    });
  }, []);

  // Observer para detectar quando elementos entram no viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observar todos os elementos que precisam de animação
    const elements = ['stats', 'gallery1', 'gallery2', 'gallery3'].map(
      id => document.getElementById(id)
    ).filter(el => el !== null);
    
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

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
              <img 
                src={heroImage} 
                alt="Programa VIP" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <section id="stats" className={`stats-section ${isVisible.stats ? 'animate' : ''}`}>
        <div className="container">
          <h2 className="section-title">Nosso Impacto Global</h2>
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-icon">🎓</div>
              <div className="stat-number">{counts.conferences}+</div>
              <div className="stat-title">Conferências Científicas</div>
              <div className="stat-description">Eventos científicos realizados online com especialistas renomados</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">👩‍🎓</div>
              <div className="stat-number">{counts.students}+</div>
              <div className="stat-title">Alunos Capacitados</div>
              <div className="stat-description">Profissionais que transformaram suas carreiras com nossos cursos</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">🌍</div>
              <div className="stat-number">{counts.countries}</div>
              <div className="stat-title">Países Conectados</div>
              <div className="stat-description">Alcance global com alunos e parceiros em diversos continentes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Missão, Visão e Valores */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-cards">
            <div className="mission-card">
              <h3>Missão</h3>
              <p>Transformar vidas através da educação tecnológica de qualidade, democratizando o acesso ao conhecimento e impulsionando carreiras profissionais globalmente.</p>
            </div>
            
            <div className="mission-card">
              <h3>Visão</h3>
              <p>Ser reconhecida como referência internacional em educação tecnológica aplicada, conectando talentos e oportunidades através das fronteiras.</p>
            </div>
            
            <div className="mission-card">
              <h3>Valores</h3>
              <ul className="values-list">
                <li><span>Excelência</span> em tudo que fazemos</li>
                <li><span>Inovação</span> como motor de transformação</li>
                <li><span>Acessibilidade</span> ao conhecimento</li>
                <li><span>Aplicabilidade</span> prática dos conteúdos</li>
                <li><span>Colaboração</span> global</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria 1 - Aulas e Laboratórios */}
      <section id="gallery1" className={`gallery-section ${isVisible.gallery1 ? 'animate' : ''}`}>
        <div className="container">
          <h2 className="section-title">Formação Profissional de Modelagem e Simulações de Reservatórios de Petróleo e Gás no ISPTEC</h2>
          <p className="section-subtitle">Ambiente de aprendizado avançado com tecnologia de formação profissional de Modelagem e Simulações de Reservatórios de Petróleo e Gás, proporcionando uma formação profissional de excelência no ISPTEC, Angola.</p>
          
          <div className="gallery-grid">
            <div className="gallery-item large">
              <img src={img001} alt="Laboratório de análise de dados" />
              <div className="gallery-overlay">
                <div className="gallery-caption">Laboratório de Análise Técnica e Visualização de Dados</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src={img002} alt="Análise de modelagem 3D" />
              <div className="gallery-overlay">
                <div className="gallery-caption">Modelagem Avançada em 3D para Engenharia</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src={img003} alt="Aula prática com instrutor" />
              <div className="gallery-overlay">
                <div className="gallery-caption">Aulas Práticas com Instrutores Especializados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria 2 - Projetos Especiais */}
      <section id="gallery2" className={`gallery-section alt-background ${isVisible.gallery2 ? 'animate' : ''}`}>
        <div className="container">
          <h2 className="section-title">Formação em Modelagem Estática de Reservatórios de Petróleo</h2>
          <p className="section-subtitle">Aulas especializadas em modelagem estática de reservatórios de petróleo, oferecidas em ambientes educacionais na Rússia e em Angola, proporcionando uma formação técnica de excelência e uma perspectiva internacional.</p>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={img004} alt="Laboratório técnico" />
              <div className="gallery-overlay">
                <div className="gallery-caption">Análise de Dados em Tempo Real</div>
              </div>
            </div>
            <div className="gallery-item large">
              <img src={img005} alt="Trabalho em equipe" />
              <div className="gallery-overlay">
                <div className="gallery-caption">Sessões Colaborativas de Resolução de Problemas</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src={img006} alt="Instrutor com alunos" />
              <div className="gallery-overlay">
                <div className="gallery-caption">Mentoria Personalizada em Projetos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria 3 - Nova seção de projetos/oficinas */}
      <section id="gallery3" className={`gallery-section ${isVisible.gallery3 ? 'animate' : ''}`}>
        <div className="container">
          <h2 className="section-title">Apresentação da Inteligência PetroChat na Ufa University of Science and Technology (UUST)</h2>
          <p className="section-subtitle">Experiências práticas e projetos reais que desenvolvem habilidades técnicas em aplicações do mundo real. Desenvolvemos a IA PetroChat, uma solução inovadora com expertise em tecnologia aplicada à indústria de petróleo, apresentada na Ufa University of Science and Technology (UUST) na Rússia.</p>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={img007} alt="Oficina prática" />
              <div className="gallery-overlay">
                <div className="gallery-caption">Oficinas de Desenvolvimento de Software</div>
              </div>
            </div>
            <div className="gallery-item large">
              <img src={img008} alt="Projeto em equipe" />
              <div className="gallery-overlay">
                <div className="gallery-caption">Projetos de Aplicação Real em Petróleo e Gás</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src={img009} alt="Workshop técnico" />
              <div className="gallery-overlay">
                <div className="gallery-caption">Workshops de Inteligência Artificial Aplicada</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção da Timeline */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Nossa Jornada</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2019</div>
              <div className="timeline-content">
                <h3>Fundação e Estruturação</h3>
                <p>Início das operações com foco em lives e webinares para estruturar a base da empresa.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2020</div>
              <div className="timeline-content">
                <h3>Primeiros Cursos Online</h3>
                <p>Expansão das atividades com o lançamento dos primeiros cursos online de Inglês e petróleo e gás.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2021</div>
              <div className="timeline-content">
                <h3>Primeira Conferência Internacional</h3>
                <p>Realização do primeiro evento científico, marcando um marco importante em nossa trajetória.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2022</div>
              <div className="timeline-content">
                <h3>Parcerias Estratégicas</h3>
                <p>Estabelecimento de parcerias com empresas de tecnologia.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h3>Expansão do Catálogo</h3>
                <p>Lançamento de novos cursos focados em Modelagem Estática e Dinâmica de reservatórios de petróleo e Gás, e inglês técnico.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2024</div>
              <div className="timeline-content">
                <h3>Presença Global</h3>
                <p>Alcance de mais de 700 alunos em 11 países diferentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Transforme Sua Carreira Conosco</h2>
            <p>Conheça nossos cursos e descubra como podemos ajudar você a alcançar seus objetivos profissionais.</p>
            {/* Usar uma abordagem híbrida para garantir que a navegação funcione */}
            <a 
              href="/educational" 
              className="btn-primary"
              onClick={(e) => {
                // Prevenir comportamento padrão
                e.preventDefault();
                // Redirecionar manualmente usando window.location
                window.location.href = '/educational';
              }}
            >
              Explorar Cursos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;