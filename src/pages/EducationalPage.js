import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/EducationalPage.css';
import logoImg from '../assets/images/Logomarca_00.png';
import heroImage from '../assets/images/01.png';

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
              <h1>Programa </h1>
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
                <p>Desenvolver habilidades técnicos-científico do estudante ou profissional.</p>
              </div>
              
              <div className="objective-item">
                <div className="objective-number">2</div>
                <p>Despertar a capacidade crítica de análise de tarefas difíceis do curso em questão.</p>
              </div>
              
              <div className="objective-item">
                <div className="objective-number">3</div>
                <p>Posicionamento profissional.</p>
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
                <div className="course-image python-intro"></div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Introdução à Programação Python</h3>      
                    <div className="price-tag">50 usd</div>
                  </div>
                  <p className="course-description">Aprenda fundamentos de Python, manipulação de dados e visualização de dados geoespaciais.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Fundamentos de Python</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Manipulação de Dados</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Visualização de Dados Geoespaciais</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    {/* Alterado para direcionar para a página de detalhes do curso */}
                    <Link to="/course/python-intro" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image data-analysis"></div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Análise de Dados com Python</h3>
                    <div className="price-tag">68 usd</div>
                  </div>
                  <p className="course-description">Bibliotecas como pandas e numpy, análise estatística de dados e criação de visualizações.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Bibliotecas como pandas e numpy</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Análise estatística de dados</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Criação de dados e visualizações</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    {/* Alterado para direcionar para a página de detalhes do curso */}
                    <Link to="/course/data-analysis" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image ai-python"></div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Introdução à Inteligência Artificial com Python</h3>
                    <div className="price-tag">69 usd</div>
                  </div>
                  <p className="course-description">Aprenda IA e machine learning, implementação de algoritmos e redes neurais artificiais.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Introdução à IA e Machine Learning</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Algoritmos de aprendizado supervisionado e não supervisionado</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Redes neurais com TensorFlow e Keras</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    {/* Alterado para direcionar para a página de detalhes do curso */}
                    <Link to="/course/ai-python" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === 'oilgas' && (
            <div className="courses-grid">
              <div className="course-card">
                <div className="course-image petrel"></div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Modelagem Estática no Petrel</h3>
                    <div className="price-tag">90 usd</div>
                  </div>
                  <p className="course-description">Aprenda a interface do Petrel, visualização de dados sísmicos, construção de modelos estruturais e mais.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Introdução à interface do Petrel</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Importação e visualização de dados sísmicos e de poços</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Modelagem de propriedades petrofísicas</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    {/* Alterado para direcionar para a página de detalhes do curso */}
                    <Link to="/course/petrel" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image eclipse"></div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Simulação de Reservatório com Eclipse</h3>
                    <div className="price-tag">121 usd</div>
                  </div>
                  <p className="course-description">Configuração de simulações dinâmicas, definição de parâmetros de fluidos e rochas, e análise de resultados.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Configuração de simulações dinâmicas de reservatórios</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Definição de parâmetros de fluidos e rochas</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Simulações de injecção de água e gás</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    {/* Alterado para direcionar para a página de detalhes do curso */}
                    <Link to="/course/eclipse" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image petroleum-eng"></div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Introdução à Engenharia de Petróleo e Gás</h3>
                    <div className="price-tag">50 usd</div>
                  </div>
                  <p className="course-description">Uma visão abrangente da indústria de petróleo e gás, desde a geologia até produção e transporte.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Panorama da indústria: história, cadeia de valor e contexto global</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Geologia de reservatórios: formação de petróleo</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Perfuração de poços e produção</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    {/* Alterado para direcionar para a página de detalhes do curso */}
                    <Link to="/course/petroleum-eng" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>
              
              <div className="course-card">
                <div className="course-image geostatistics"></div>
                <div className="course-content">
                  <div className="course-header">
                    <h3>Acidificação em poço de petróleo</h3>
                    <div className="price-tag">100 usd</div>
                  </div>
                  <p className="course-description">Introdução à geoestatística, krigagem, interpolação espacial e aplicações em modelagem de recursos naturais.</p>
                  <div className="course-modules">
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Introdução à Geoestatística</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Krigagem e Interpolação Espacial</span>
                    </div>
                    <div className="module-item">
                      <span className="module-bullet">•</span>
                      <span>Aplicações em Modelagem de Recursos Naturais</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="duration">
                      <span className="duration-icon">⏱️</span>
                      3 semanas
                    </span>
                    {/* Alterado para direcionar para a página de detalhes do curso */}
                    <Link to="/course/geostatistics" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === 'office' && (
            <div className="courses-grid">
              <div className="course-card">
                <div className="course-image excel"></div>
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
                    {/* Alterado para direcionar para a página de detalhes do curso */}
                    <Link to="/course/excel" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image word"></div>
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
                    {/* Alterado para direcionar para a página de detalhes do curso */}
                    <Link to="/course/word" className="btn-view-course">Entre em Contato</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image powerpoint"></div>
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
                    {/* Alterado para direcionar para a página de detalhes do curso */}
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
                      <option value="python-intro">Introdução à Programação Python</option>
                      <option value="data-analysis">Análise de Dados com Python</option>
                      <option value="excel">Microsoft Excel Avançado</option>
                      <option value="petrel">Geoinformática com python</option>
                      <option value="petrel">Automação de processos com vba no excel</option>
                      <option value="petrel">Interpretão de dados de diagrafias</option>
                      <option value="petrel">Acidificação em poço de petróleo</option>
                      <option value="petrel">Modelagem Estática de reservatórios</option>
                      <option value="petrel">Microsoft Word para Profissionais</option>
                      <option value="petrel">Microsoft Excel Avançado</option>
                      <option value="petrel">Microsoft PowerPoint: Criação de Apresentações Profissionais</option>
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