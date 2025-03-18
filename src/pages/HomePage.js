import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import '../assets/css/HomePage.css';

const HomePage = () => {
  // Estado para controlar a renderização dos cursos
  const [coursesVisible, setCoursesVisible] = useState(true);
  
  // Estado para controlar o carrossel de feedbacks
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Garantir que os cursos permaneçam visíveis
  useEffect(() => {
    setCoursesVisible(true);
    
    const handleScroll = () => {
      setCoursesVisible(true);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dados de feedback
  const feedbacks = [
    {
      id: 1,
      name: "Edoson Ernesto",
      position: "Geofísico, Hungria",
      text: "Me inscrevi nos cursos de Python para tratamento de dados geofísicos, para modelagem estática de reservatórios e WellStim para tratamento ácido em poços. Em todos eles, aprendi muito e adquiri conhecimentos valiosos para minha carreira. Recomendo a Justificações Acadêmicas tanto para iniciantes quanto para profissionais da área!",
      rating: 5
    },
    {
      id: 2,
      name: "Rodrigues Cacaula",
      position: "Engenheiro, Rússia",
      text: "Me inscrevi nos cursos de - Modelagem Estática de Reservatórios e Introdução à Engenharia de Petróleo e Gás. As aulas ao vivo online, com teoria e prática em softwares, foram extremamente proveitosas. Foi uma experiência incrível e merece minhas 5 estrelas!",
      rating: 5
    },
    {
      id: 3,
      name: "Mosalina Pedro",
      position: "Engenheira na ANPG, Angola",
      text: "Me inscrevi nos cursos de - Modelagem Dinâmica de reservatórios, - Modelagem Estática de reservatórios e WellStim - Tratamento Ácido em Poços. A metodologia híbrida da Justificações Acadêmicas me permite acessar as aulas quando necessário, agendar encontros virtuais com o meu fromador para esclarecer dúvidas e receber feedback sobre minhas tarefas. Tem sido uma experiência excelente!",
      rating: 5
    },
    {
      id: 4,
      name: "Anselmo Januario",
      position: "Estudante, Angola",
      text: "É aqui onde tive o primeiro contato com a estimulação de poços de petróleo, e eu não fazia ideia das diversas etapas envolvidas. No curso, aprendi como diferentes parâmetros influenciam o sucesso da operação e como o software WellStim torna tudo mais simples e prático. Foi uma experiência incrível, pois descobri uma nova área do setor e pude aplicar o conhecimento diretamente no software, acessível de qualquer dispositivo com internet.",
      rating: 5
    },
    {
      id: 5,
      name: "Zongo Armando",
      position: "CEO da NovaGeo, Angola",
      text: "  Prezada Equipe  da Justificações Acadêmicas, gostaria de expressar os meus sinceros agradecimentos pela alta qualidade e relevância das formações que oferecem, especialmente para os setores petrolífero, mineiro e tecnológico. A vossa equipa demonstra não apenas um elevado nível de profissionalismo, mas também um profundo sentido de humanidade, o que torna a experiência de formação ainda mais enriquecedora. Os formadores são altamente qualificados, comprometidos e entregam exatamente o que prometem, com um padrão de excelência que merece todos os elogios. ",
      rating: 5
    },
    {
      id: 6,
      name: "Evan Blez Gaetan",
      position: "Estuante do PhD, Camarões",
      text: "I was very satisfied with the consultancy services of Justificações Acadêmicas. The experience was rewarding and I highly recommend them for their high quality and innovative solutions.",
      rating: 5
    },
    {
      id: 7,
      name: "Pérola da Beauty",
      position: "Professora de Inglês, Rússia",
      text: "Contactei a Justificações Acadêmicas porque precisava de um aplicativo para avaliar o nível de inglês dos meus alunos e futuros clientes. O aplicativo foi desenvolvido em poucos dias e tem sido uma ferramenta essencial no meu trabalho, trazendo praticidade e eficiência ao processo de avaliação",
      rating: 5
    }
  ];

  // Funções para controlar o carrossel
  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (sliderRef.current) {
      // Definir quantos slides são visíveis dependendo da largura da tela
      let visibleSlides = 1;
      if (window.innerWidth >= 1024) {
        visibleSlides = 3;
      } else if (window.innerWidth >= 768) {
        visibleSlides = 2;
      }
      
      const maxIndex = feedbacks.length - visibleSlides;
      const safeIndex = Math.min(Math.max(0, index), maxIndex);
      const slideWidth = 100 / visibleSlides;
      sliderRef.current.style.transform = `translateX(-${safeIndex * slideWidth}%)`;
    }
  };

  const nextSlide = () => {
    let visibleSlides = 1;
    if (window.innerWidth >= 1024) {
      visibleSlides = 3;
    } else if (window.innerWidth >= 768) {
      visibleSlides = 2;
    }
    
    const maxIndex = feedbacks.length - visibleSlides;
    setCurrentSlide(prev => prev >= maxIndex ? 0 : prev + 1);
    goToSlide(currentSlide >= maxIndex ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    let visibleSlides = 1;
    if (window.innerWidth >= 1024) {
      visibleSlides = 3;
    } else if (window.innerWidth >= 768) {
      visibleSlides = 2;
    }
    
    const maxIndex = feedbacks.length - visibleSlides;
    setCurrentSlide(prev => prev <= 0 ? maxIndex : prev - 1);
    goToSlide(currentSlide <= 0 ? maxIndex : currentSlide - 1);
  };

  // Auto-rotação do carrossel a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Introducção ao programa de Petróleo e Gás",
      description: "Oferecemos uma gama de cursos especializados voltados para o setor de petróleo e gás. Os cursos são projectados para profissionais que buscam actualizar seus conhecimentos, preparando-os para os desafios da indústria de petróleo e gás.",
      slug: "intro-programming"
    },
    {
      id: 2,
      title: "Introducção ao programa de Microsoft Office",
      description: "Oferecemos uma série de cursos práticos e focados em ferramentas de informática da Microsoft, ideais para profissionais que desejam aprimorar suas habilidades no ambiente corporativo.",
      slug: "data-analysis"
    },
    { 
      id: 3,
      title: "Introducção ao programa de programação",
      description: "Oferecemos uma linha de cursos de programação voltados para o desenvolvimento de habilidades tecnológicas avançadas. Os cursos são projetados para oferecer uma formação sólida e atualizada, especialmente nas indústrias de tecnologia, petróleo e gás, e além.",
      slug: "refinery-automation"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Bem-vindo à Justificações Acadêmicas</h1>
              <p>Transformando Conhecimento em Inovação</p>
              {/* Link atualizado para ir diretamente para a seção de cursos na Educational Page */}
              <Link to="/educational#courses" className="btn-primary">Nossos Cursos</Link>
            </div>
            
            {/* Video em vez da imagem */}
            <div className="hero-video-container">
              <video 
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/PetroChat.mp4" type="video/mp4" />
                <source src="/videos/hero-video.webm" type="video/webm" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Fundada em 2019, a nossa empresa é uma referência em educação e tecnologia</h2>
              <p>Especializada em oferecer cursos e soluções inovadoras para os setores de programação, petróleo e gás, informática, e inglês técnico.</p>
              <Link to="/about" className="btn-secondary">Sobre nós</Link>
            </div>
            <div className="about-image"></div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      {coursesVisible && (
        <section className="courses-section" style={{ opacity: 1 }}>
          <div className="container">
            <div className="courses-grid">
              {courses.map(course => (
                <CourseCard 
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  slug={course.slug}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Training Info Section */}
      <section className="training-info">
        <div className="container">
          <h2>Sistema de Aprendizado</h2>
          <div className="training-features">
            <div className="feature">
              <h3>Aulas Gravadas</h3>
              <p>Aprenda onde e quando quiser, na nossa plataforma de cursos online, com acesso a suporte técnico 24/7. </p>
            </div>
            <div className="feature">
              <h3>Aulas ao Vivo</h3>
              <p>Participe de aulas ao vivo pelo Zoom com especialistas da área e aprimore seus conhecimentos com conteúdo de alta qualidade, interação em tempo real e aprendizado prático.</p>
            </div>
            <div className="feature">
              <h3>Aulas Híbridas</h3>
              <p>Tenha acesso a conteúdos gravados na plataforma de cursos online e participe de aulas ao vivo pelo Zoom com especialistas da área, garantindo um aprendizado completo e interativo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <FAQ />
        </div>
      </section>

      {/* Feedback Section com Carrossel */}
      <section className="feedback-section">
        <div className="container">
          <h2>Testemunhos</h2>
          <div className="feedback-carousel">
            <div className="feedback-arrow prev" onClick={prevSlide}>&#10094;</div>
            <div className="feedback-arrow next" onClick={nextSlide}>&#10095;</div>
            
            <div className="feedback-slider" ref={sliderRef}>
              {feedbacks.map((feedback, index) => (
                <div 
                  key={feedback.id} 
                  className={`feedback-card ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < feedback.rating ? 'star filled' : 'star'}>★</span>
                    ))}
                  </div>
                  <p className="feedback-text">{feedback.text}</p>
                  <div className="feedback-author">
                    <h4>{feedback.name}</h4>
                    <p>{feedback.position}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="feedback-controls">
              {feedbacks.map((_, index) => (
                <div 
                  key={index}
                  className={`feedback-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default HomePage;