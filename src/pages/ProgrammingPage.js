import React from 'react';
import '../assets/css/ProgrammingPage.css';

const ProgrammingPage = () => {
  const projects = [
    {
      id: 1,
      title: "Conversor de arquivos Las para Csv",
      description: "Um conversor de LAS para CSV facilita a análise e integração de dados geofísicos em softwares de modelagem e machine learning.",
      technologies: ["python"],
      image: "simulator"
    },
    {
      id: 2,
      title: "Inteligência artificial PetroChat",
      description: "O PetroChat é uma inteligência artificial que realiza análises petrofísicas de forma rápida e eficiente, permitindo que você obtenha insights apenas enviando mensagens de texto.",
      technologies: ["Python", "js", "React", "Rust","Postgresql"],
      image: "dashboard"
    },
    {
      id: 3,
      title: "Plataforma de cursos Online JA",
      description: "A Justificações Acadêmicas oferece cursos online de alta qualidade, com aulas gravadas, voltados para geociências, petróleo e gás, programação e muito mais. ",
      technologies: ["Pyhon", "Postgresql"],
      image: "reservoir"
    },
    {
      id: 4,
      title: "Plataforma de cursos Link English",
      description: "A Link English é uma plataforma moderna, que oferece cursos interativos para aprimorar seu inglês de forma dinâmica e eficiente..",
      technologies: ["Python", "js", "React", "Rust","Postgresql"],
      image: "drilling"
    },
    {
      id: 5,
      title: "Aplicativo de teste de nível de Inglês",
      description: "Avalie seu nível de inglês de forma rápida e precisa com nosso aplicativo, garantindo um diagnóstico detalhado para seu aprendizado.",
      technologies: ["Python"],
      image: "pipeline"
    },
    {
      id: 6,
      title: "Well log pro",
      description: "O Well Log Pro realiza análise avançada de perfis de poço e recuperação de dados petrofísicos usando algoritmos de aprendizado de máquina.",
      technologies: ["Python", "js", "React", "Rust","Postgresql"],
      image: "seismic"
    }
  ];

  return (
    <div className="programming-page">
      <section className="page-header">
        <div className="container">
          <h1>Nossos Serviços</h1>
          <p>Explore nossas soluções de software inovadoras para a indústria de petróleo e gás.</p>
        </div>
      </section>

      <section className="tech-stack">
        <div className="container">
          <h2>Desenvolvimento de Soluções Tecnológicas</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <div className="tech-icon python"></div>
              <h3>Python</h3>
              <p>Data processing & machine learning</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon javascript"></div>
              <h3>JavaScript</h3>
              <p>Interactive web applications</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon cpp"></div>
              <h3>C++</h3>
              <p>High-performance computing</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon cloud"></div>
              <h3>Cloud</h3>
              <p>Scalable infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <h2>Projetos Desenvolvidos</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className={`project-image ${project.image}`}></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="btn-view-project">Desenvolvido por nós</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study">
        <div className="container">
          <div className="case-content">
            <div className="case-text">
              <h2>Estudo de Caso: Otimização do Aprendizado</h2>
              <p>Nossa equipe desenvolveu uma metodologia avançada de ensino que aumentou em 35% a eficiência do aprendizado em cursos técnicos da indústria de petróleo e gás.</p>
              <p>A solução combina conteúdos interativos, análise de desempenho em tempo real e inteligência artificial para personalizar a experiência do aluno e otimizar seu desenvolvimento profissional.</p>
              <button className="btn-signup">Somos eternos aprendizes</button>
            </div>
            <div className="case-image"></div>
          </div>
        </div>
      </section>

      <section className="code-showcase">
        <div className="container">
          <h2>Qualidade do Código</h2>
          <p className="section-subtitle">Seguimos as melhores práticas da indústria em nosso processo de desenvolvimento.</p>
          <div className="code-examples">
            <div className="code-block">
              <h3>Algoritmos Eficientes</h3>
              <pre>
                <code>
{`// Reservoir pressure prediction algorithm
function predictPressure(depth, temperature, porosity) {
  const baselinePressure = calculateHydrostaticPressure(depth);
  const temperatureCorrection = 0.052 * temperature * Math.log(depth);
  const porosityFactor = 1 + (0.3 * (porosity - 0.25));
  
  return baselinePressure * porosityFactor + temperatureCorrection;
}`}
                </code>
              </pre>
            </div>
            <div className="code-block">
              <h3>Arquitetura Limpa</h3>
              <pre>
                <code>
{`// Service layer example
class WellMonitoringService {
  constructor(repository, notificationService) {
    this.repository = repository;
    this.notificationService = notificationService;
  }

  async getWellStatus(wellId) {
    return await this.repository.getWellById(wellId);
  }

  async detectAnomaly(readings) {
    const isAnomaly = this.anomalyDetectionAlgorithm(readings);
    
    if (isAnomaly) {
      await this.notificationService.alert(
        'Potential issue detected', 
        readings.wellId
      );
    }
    
    return isAnomaly;
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="join-team">
        <div className="container">
          <h2>Focado em Crescimento Profissional</h2>
          <p>Junte-se a nós e desenvolva soluções inovadoras ao lado de uma equipe experiente e dinâmica!</p>
          
        </div>
      </section>
    </div>
  );
};

export default ProgrammingPage;