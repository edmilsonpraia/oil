import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/EducationalPage.css';
import logoImg from '../assets/images/Logomarca_00.png';
import heroImage from '../assets/images/01.png';

// Importando as imagens dos cursos
import pythonIntroImg from '../assets/images/python_intro.jpg';
import dataAnalysisImg from '../assets/images/data_analysis.png';
import machineLearningImg from '../assets/images/machine_learning.png';
import geospatialAnalysisImg from '../assets/images/geospatial_analysis.jpg';
import pythonGeospatialImg from '../assets/images/python_geospatial.png';
import machineLearningOilImg from '../assets/images/machine_learning_oil.png';

import petrelSoftwareImg from '../assets/images/petrel_software.jpg';
import eclipseSimulationImg from '../assets/images/eclipse_simulation.jpg';
import reservoirModelingImg from '../assets/images/reservoir_modeling.jpg';
import wellAcidificationImg from '../assets/images/well_acidification.jpg';
import acidificationCarbonatesImg from '../assets/images/acidification_carbonates.png';
import reservoirModeling3dImg from '../assets/images/reservoir_modeling_3d.png';

import excelProfessionalImg from '../assets/images/excel_professional.jpg';
import wordProfessionalImg from '../assets/images/word_professional.jpg';
import powerpointProfessionalImg from '../assets/images/powerpoint_professional.jpg';

const EducationalPage = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  const [visibleItems, setVisibleItems] = useState({});
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Função para animar os itens quando eles se tornam visíveis
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.animate-item:not(.animated)');
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);
        
        if (isVisible) {
          setVisibleItems(prev => ({
            ...prev,
            [item.id]: true
          }));
          item.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to check for items in the initial viewport
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animar os cursos quando muda de categoria
  useEffect(() => {
    const courseElements = document.querySelectorAll('.course-card');
    courseElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animated');
      }, index * 100);
    });
  }, [activeCategory]);

  // Função para navegar para a seção de contato
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('.contact-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleSubmit = (e) => {
    setFormSubmitting(true);
    // O formulário ainda será enviado para o Formspree
    // Isso apenas mostra uma mensagem de sucesso após o envio
    setTimeout(() => {
      setFormSuccess(true);
      setFormSubmitting(false);
    }, 1000);
  };

  const categories = [
    { id: 'programming', name: 'Programação' },
    { id: 'oilgas', name: 'Petróleo e Gás' },
    { id: 'office', name: 'Microsoft Office' }
  ];

  return (
    <div className="educational-page">
      {/* Seção de Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="science-badge">
                <span className="atom-icon">⚛️</span>
                SCIENCE PROGRAM
              </div>
              <h1>Programa VIP Science</h1>
              <p>Somos Eternos Aprendizes. Confira os cursos avançados e profissionais
                mais procurados do mercado! Aprenda as principais tecnologias de diversas áreas e
                desenvolva as habilidades que farão de você o profissional que as empresas mais
                valorizam.</p>
              <a href="#courses" className="btn-primary">Domine o Futuro</a>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Programa VIP" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Requisitos */}
      <section className="requirements-section" id="requirements">
        <div className="container">
          <h2 className="section-title">Requisitos</h2>
          
          <div className="requirements-grid">
            <div className="requirement-card animate-item" id="req-1">
              <div className="icon-wrapper">
                <div className="icon computer"></div>
              </div>
              <h3>Computador</h3>
              <p>Um computador rápido, preferencialmente com processador Core i3 ou superior, para garantir o melhor desempenho nas atividades.</p>
            </div>
            
            <div className="requirement-card animate-item" id="req-2">
              <div className="icon-wrapper">
                <div className="icon internet"></div>
              </div>
              <h3>Internet</h3>
              <p>Uma internet estável e rápida é fundamental para aproveitar cada aula ao máximo, sem interrupções.</p>
            </div>
            
            <div className="requirement-card animate-item" id="req-3">
              <div className="icon-wrapper">
                <div className="icon commitment"></div>
              </div>
              <h3>Comprometimento</h3>
              <p>Seu sucesso depende do seu nível de dedicação. Siga rigorosamente o cronograma e as tarefas estabelecidas pelo seu treinador para alcançar resultados extraordinários.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Informações do Curso */}
      <section className="course-info-section">
        <div className="container">
          <div className="info-card">
            <div className="info-icon">ℹ️</div>
            <h2>Sobre as aulas</h2>
            
            <ul className="course-features">
              <li>
                <span className="bullet">→</span>
                <p>As aulas são dadas <strong className="highlight">3 vezes por semana</strong>, duração de cada aula é de 01:30 à 2h (dias a acertar para aulas inidividuais);</p>
              </li>
              <li>
                <span className="bullet">→</span>
                <p>Todos os cursos têm a duração de <strong className="highlight">3 semanas</strong>;</p>
              </li>
              <li>
                <span className="bullet">→</span>
                <p>As aulas serão administradas atravez da plataforma <strong className="highlight">ZOOM</strong>;</p>
              </li>
              <li>
                <span className="bullet">→</span>
                <p>Horários das aulas: as horas e as datas são definidas consoantes as disponibilidades dos estudantes e dos formadores;</p>
              </li>
              <li>
                <span className="bullet">→</span>
                <p>Direito a <strong className="highlight">certificação</strong> e todos os vídeos e apresentações do treinamentos.</p>
              </li>
              <li>
                <span className="bullet">→</span>
                <p>Para acessar as próximas aulas gravadas, o aluno deverá concluir a aula anterior.</p>
              </li>
            </ul>
          </div>
          
          <div className="objectives-card">
            <h2>Objetivos</h2>
            
            <div className="objectives-list">
              <div className="objective-item">
                <div className="objective-number">1</div>
                <p>Desenvolver habilidades técnico-científicas do estudante ou profissional.</p>
              </div>
              
              <div className="objective-item">
                <div className="objective-number">2</div>
                <p>Despertar a capacidade crítica de análise de tarefas difíceis do curso em questão.</p>
              </div>
              
              <div className="objective-item">
                <div className="objective-number">3</div>
                <p>Fortalecer posicionamento profissional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Cursos */}
      <section id="courses" className="courses-section">
        <div className="container">
          <h2 className="section-title">Cursos</h2>
          
          <div className="category-tabs">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {activeCategory === 'programming' && (
            <div className="courses-grid">
              <div className="course-card">
                <div className="course-image">
                  <img src={pythonGeospatialImg} alt="Geoestatística Avançada com Python" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Geoestatística Avançada com Python</h3>      
                    <div className="price-tag">100 usd</div>
                  </div>
                  <p className="course-description">Aprenda geoestatística, krigagem, interpolação espacial e aplicações em modelagem de recursos naturais.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Introdução à geoestatística</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Krigagem e interpolação espacial</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Aplicações em modelagem de recursos naturais</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/geostatistics-python" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img src={dataAnalysisImg} alt="Python para Análise de Produção de Petróleo" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Python para Análise de Produção de Petróleo</h3>
                    <div className="price-tag">85 usd</div>
                  </div>
                  <p className="course-description">Análise de curvas de declínio, previsão de produção usando algoritmos avançados e otimização de estratégias.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Análise de curvas de declínio com Python</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Previsão de produção usando algoritmos avançados</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Otimização de estratégias de produção</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/python-oil-production" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img src={machineLearningOilImg} alt="Machine Learning para Recuperação de Petróleo" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Machine Learning para Recuperação de Petróleo</h3>
                    <div className="price-tag">95 usd</div>
                  </div>
                  <p className="course-description">Algoritmos de ML aplicados à recuperação, previsão de EUR e classificação de tipos de reservatórios.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Algoritmos de ML aplicados à recuperação</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Previsão de EUR (Estimated Ultimate Recovery)</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Classificação de tipos de reservatórios</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/ml-oil-recovery" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img src={pythonIntroImg} alt="Análise Preditiva de Reservatórios com Python" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Análise Preditiva de Reservatórios com Python</h3>
                    <div className="price-tag">100 usd</div>
                  </div>
                  <p className="course-description">Modelos preditivos para comportamento de reservatórios, análise de big data e desenvolvimento de dashboards.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Modelos preditivos para comportamento de reservatórios</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Análise de big data em campos de petróleo</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Desenvolvimento de dashboards preditivos</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/predictive-analysis-python" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img src={machineLearningImg} alt="Automação de Workflows com Python e IA Generativa" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Automação de Workflows com Python e IA Generativa</h3>
                    <div className="price-tag">90 usd</div>
                  </div>
                  <p className="course-description">Desenvolvimento de workflows automatizados, integração de IA generativa e APIs para petróleo e gás.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Desenvolvimento de workflows automatizados</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Integração de IA generativa em processos</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>APIs e microserviços para petróleo e gás</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/automation-python-ai" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img src={geospatialAnalysisImg} alt="Desenvolvimento de Aplicativos Web com Python" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Desenvolvimento de Aplicativos Web com Python</h3>
                    <div className="price-tag">100 usd</div>
                  </div>
                  <p className="course-description">Criação de ferramentas personalizadas, desenvolvimento de interfaces gráficas e integração com APIs geocientíficas.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Criação de ferramentas personalizadas para análise</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Desenvolvimento de interfaces gráficas</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Deploy de aplicações web</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/web-apps-python" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === 'oilgas' && (
            <div className="courses-grid">
              <div className="course-card">
                <div className="course-image">
                  <img src={acidificationCarbonatesImg} alt="Fundamentos da Acidificação em Carbonatos" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Fundamentos da Acidificação em Carbonatos</h3>
                    <div className="price-tag">100 usd</div>
                  </div>
                  <p className="course-description">Princípios químicos da acidificação, características dos reservatórios carbonáticos e tipos de ácidos.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Princípios químicos da acidificação</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Características dos reservatórios carbonáticos</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Tipos de ácidos e suas aplicações</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/acidification-carbonates" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img src={petrelSoftwareImg} alt="Modelagem Estática de Reservatórios com Petrel" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Modelagem Estática de Reservatórios com Petrel</h3>
                    <div className="price-tag">90 usd</div>
                  </div>
                  <p className="course-description">Construção de modelos geológicos 3D, caracterização de propriedades petrofísicas e distribuição de fácies.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Construção de modelos geológicos 3D</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Caracterização de propriedades petrofísicas</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Upscaling e validação de modelos estáticos</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/static-modeling-petrel" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img src={eclipseSimulationImg} alt="Modelagem Dinâmica de Reservatórios com Petrel/Eclipse" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Modelagem Dinâmica de Reservatórios com Petrel/Eclipse</h3>
                    <div className="price-tag">121 usd</div>
                  </div>
                  <p className="course-description">Configuração de modelos de simulação, definição de propriedades de rocha e fluidos, simulação de fluxo multifásico.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Configuração de modelos de simulação</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Definição de propriedades de rocha e fluidos</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Análise de cenários de produção</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/dynamic-modeling-petrel-eclipse" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>
              
              <div className="course-card">
                <div className="course-image">
                  <img src={reservoirModeling3dImg} alt="History Matching Avançado no Petrel" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>History Matching Avançado no Petrel</h3>
                    <div className="price-tag">110 usd</div>
                  </div>
                  <p className="course-description">Técnicas de ajuste histórico, incluindo incertezas e otimização de reservatórios, workflows automatizados.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Técnicas de ajuste histórico</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Otimização de reservatórios</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Workflows automatizados</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/history-matching-petrel" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img src={reservoirModelingImg} alt="OFM da SLB (Oilfield Manager)" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>OFM da SLB (Oilfield Manager)</h3>
                    <div className="price-tag">120 usd</div>
                  </div>
                  <p className="course-description">Gestão integrada de dados de campo, análise de produção e reservatórios, otimização de operações.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Gestão integrada de dados de campo</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Análise de produção e reservatórios</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Relatórios e dashboards executivos</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/ofm-slb" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img src={wellAcidificationImg} alt="Modelagem de Fraturas com DFN e Machine Learning" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Modelagem de Fraturas com DFN e Machine Learning</h3>
                    <div className="price-tag">115 usd</div>
                  </div>
                  <p className="course-description">Discrete Fracture Networks (DFN) e aplicação de IA em caracterização de fraturas.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Discrete Fracture Networks (DFN)</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Aplicação de IA em caracterização de fraturas</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Novos algoritmos para previsão de fluxo</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/fracture-modeling-dfn-ml" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img src={petrelSoftwareImg} alt="Otimização de Recuperação Secundária e Terciária" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Otimização de Recuperação Secundária e Terciária</h3>
                    <div className="price-tag">110 usd</div>
                  </div>
                  <p className="course-description">Modelagem de injeção de água com Python, simulação de métodos EOR com ML e análise econômica.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Modelagem de injeção de água com Python</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Simulação de métodos EOR com ML</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Análise econômica de projetos de recuperação</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/secondary-tertiary-recovery" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img src={reservoirModelingImg} alt="Gestão Econômica de Campos Maduros" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Gestão Econômica de Campos Maduros</h3>
                    <div className="price-tag">115 usd</div>
                  </div>
                  <p className="course-description">Análise de viabilidade econômica, recuperação otimizada em campos maduros e estratégias de revitalização.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Análise de viabilidade econômica</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Recuperação otimizada em campos maduros</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Análise de risco e retorno</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/mature-fields-management" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === 'office' && (
            <div className="courses-grid">
              <div className="course-card">
                <div className="course-image">
                  <img src={excelProfessionalImg} alt="Microsoft Excel Avançado" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Microsoft Excel Avançado</h3>
                    <div className="price-tag">100 usd</div>
                  </div>
                  <p className="course-description">Domine o Excel do básico ao avançado, incluindo funções, tabelas dinâmicas e automação com VBA.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Introdução à interface do Excel</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Funções básicas: SOMA, MÉDIA, PROCV, etc.</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Introdução ao VBA para automação</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/excel" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img src={wordProfessionalImg} alt="Microsoft Word para Profissionais" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Microsoft Word para Profissionais</h3>
                    <div className="price-tag">100 usd</div>
                  </div>
                  <p className="course-description">Crie documentos profissionais com cabeçalhos, rodapés, formatação avançada e sumários automáticos.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Criação de documentos com cabeçalhos e rodapés</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Estilos e formatação avançada de texto</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Criação de sumários automáticos</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/word" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img src={powerpointProfessionalImg} alt="Microsoft PowerPoint: Criação de Apresentações Profissionais" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Microsoft PowerPoint: Criação de Apresentações Profissionais</h3>
                    <div className="price-tag">99 usd</div>
                  </div>
                  <p className="course-description">Aprenda a criar apresentações impressionantes com design profissional e conteúdo eficaz.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Criação de documentos com cabeçalhos e rodapés</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Estilos e formatação avançada</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Uso de tabelas e gráficos</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    <Link to="/course/powerpoint" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-card">
            <div className="contact-info">
              <h2>Entre em Contato</h2>
              <p>Tenha acesso ao nosso programa VIP e comece sua jornada de aprendizado profissional hoje mesmo.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">✉️</div>
                  <a href="mailto:justificacoesacademicas@gmail.com">justificacoesacademicas@gmail.com</a>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">📱</div>
                  <a href="tel:+79961007408">+7 996 100 74 08</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Inscreva-se agora</h3>
              {formSuccess ? (
                <div className="success-message">
                  <p>Sua inscrição foi recebida. Entraremos em contato em breve!</p>
                </div>
              ) : (
                <form 
                  action="https://formspree.io/f/mzzepakn" 
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" placeholder="Seu nome" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Seu email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" name="telephone" placeholder="Seu telefone" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="course">Curso de interesse</label>
                    <select id="course" name="course">
                      <option value="">Selecione um curso</option>
                      <option value="geostatistics-python">Geoestatística Avançada com Python</option>
                      <option value="python-oil-production">Python para Análise de Produção de Petróleo</option>
                      <option value="ml-oil-recovery">Machine Learning para Recuperação de Petróleo</option>
                      <option value="predictive-analysis-python">Análise Preditiva de Reservatórios com Python</option>
                      <option value="automation-python-ai">Automação de Workflows com Python e IA Generativa</option>
                      <option value="web-apps-python">Desenvolvimento de Aplicativos Web com Python</option>
                      <option value="acidification-carbonates">Fundamentos da Acidificação em Carbonatos</option>
                      <option value="static-modeling-petrel">Modelagem Estática de Reservatórios com Petrel</option>
                      <option value="dynamic-modeling-petrel-eclipse">Modelagem Dinâmica de Reservatórios com Petrel/Eclipse</option>
                      <option value="history-matching-petrel">History Matching Avançado no Petrel</option>
                      <option value="ofm-slb">OFM da SLB (Oilfield Manager)</option>
                      <option value="fracture-modeling-dfn-ml">Modelagem de Fraturas com DFN e Machine Learning</option>
                      <option value="secondary-tertiary-recovery">Otimização de Recuperação Secundária e Terciária</option>
                      <option value="mature-fields-management">Gestão Econômica de Campos Maduros</option>
                      <option value="excel">Microsoft Excel Avançado</option>
                      <option value="word">Microsoft Word para Profissionais</option>
                      <option value="powerpoint">Microsoft PowerPoint: Criação de Apresentações Profissionais</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Sua mensagem ou dúvidas sobre o curso"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="form-group checkbox">
                    <input type="checkbox" id="terms" name="terms_accepted" required />
                    <label htmlFor="terms">Aceito os termos e condições</label>
                  </div>
                  <input type="hidden" name="_subject" value="Nova inscrição de curso" />
                  <button type="submit" className="btn-submit" disabled={formSubmitting}>
                    {formSubmitting ? 'Enviando...' : 'Inscrever-se'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationalPage;
