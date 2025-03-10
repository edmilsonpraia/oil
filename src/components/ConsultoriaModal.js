import React, { useState, useEffect } from 'react';
import '../assets/css/ConsultoriaModal.css';

const ConsultoriaModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  
  // Prevenir rolagem do corpo quando o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      // Não bloqueie a rolagem para evitar a barra preta
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Quando o modal não está aberto, não renderize nada
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpar erro ao digitar
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleCheckboxChange = (e) => {
    setPrivacyAccepted(e.target.checked);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nome?.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    // Removida a validação obrigatória para empresa
    
    if (!formData.email?.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.telefone?.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }

    if (!privacyAccepted) {
      newErrors.privacy = 'Você precisa aceitar a política de privacidade';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setSubmitting(true);
    
    try {
      // Enviar dados para o Formspree
      const response = await fetch('https://formspree.io/f/mzzepakn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          privacyAccepted: privacyAccepted,
          _subject: 'Nova Solicitação de Consultoria'
        })
      });
      
      if (response.ok) {
        console.log('Dados do formulário enviados com sucesso:', formData);
        setSubmitting(false);
        setSubmitted(true);
        
        // Resetar o form depois de alguns segundos
        setTimeout(() => {
          setFormData({
            nome: '',
            empresa: '',
            email: '',
            telefone: '',
            mensagem: ''
          });
          setPrivacyAccepted(false);
          onClose();
          setSubmitted(false);
        }, 3000);
      } else {
        console.error('Erro ao enviar formulário:', response.status);
        setSubmitting(false);
        alert('Houve um problema ao enviar o formulário. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      setSubmitting(false);
      alert('Houve um problema ao enviar o formulário. Por favor, tente novamente.');
    }
  };

  // Impedir propagação do clique dentro do modal para que não feche quando clicado dentro
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  // Previnir que a rolagem do modal afete o restante da página
  const handleModalScroll = (e) => {
    e.stopPropagation();
  };

  const togglePrivacyPolicy = (e) => {
    e.preventDefault();
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ position: 'absolute' }}>
      <div 
        className="modal-container" 
        onClick={handleModalClick}
        onScroll={handleModalScroll}
      >
        <div className="modal-header">
          <h2>Solicitar Consultoria</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Solicitação Enviada!</h3>
              <p>Entraremos em contato em breve.</p>
            </div>
          ) : showPrivacyPolicy ? (
            <div className="privacy-policy-container">
              <h3>Política de Privacidade</h3>
              <div className="privacy-policy-content">
                <h4>1. Informações que coletamos</h4>
                <p>Coletamos apenas as informações que você fornece voluntariamente através do nosso formulário de contato, incluindo nome, email, telefone e mensagem.</p>
                
                <h4>2. Como usamos suas informações</h4>
                <p>Utilizamos as informações fornecidas exclusivamente para:</p>
                <ul>
                  <li>Responder à sua solicitação de consultoria</li>
                  <li>Fornecer informações sobre nossos serviços</li>
                  <li>Melhorar nossos serviços e comunicação</li>
                </ul>
                
                <h4>3. Proteção de dados</h4>
                <p>Todas as informações são armazenadas com segurança e não são compartilhadas com terceiros, exceto quando necessário para atender à sua solicitação ou conforme exigido por lei.</p>
                
                <h4>4. Seu consentimento</h4>
                <p>Ao enviar o formulário, você concorda com a coleta e uso de suas informações conforme descrito nesta política.</p>
                
                <h4>5. Seus direitos</h4>
                <p>Você tem o direito de solicitar acesso, correção ou exclusão de seus dados pessoais a qualquer momento entrando em contato conosco através do email: <a href="mailto:contato@justificacoesacademicas.online">contato@justificacoesacademicas.online</a>.</p>
                
                <h4>6. Cookies e tecnologias de rastreamento</h4>
                <p>Nosso site utiliza cookies apenas para melhorar a experiência do usuário. Nenhum cookie é utilizado para rastreamento ou publicidade.</p>
                
                <h4>7. Alterações na política</h4>
                <p>Podemos atualizar esta política de privacidade de tempos em tempos. Quaisquer alterações serão publicadas nesta página.</p>
              </div>
              <button className="btn-secondary" onClick={togglePrivacyPolicy}>Voltar ao formulário</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="consultoria-form">
              <div className="form-group">
                <label htmlFor="nome">Nome *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={errors.nome ? 'error' : ''}
                />
                {errors.nome && <span className="error-message">{errors.nome}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="empresa">Empresa</label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className={errors.empresa ? 'error' : ''}
                />
                {errors.empresa && <span className="error-message">{errors.empresa}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="telefone">Telefone *</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className={errors.telefone ? 'error' : ''}
                />
                {errors.telefone && <span className="error-message">{errors.telefone}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="3"
                  value={formData.mensagem}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group privacy-checkbox">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  checked={privacyAccepted}
                  onChange={handleCheckboxChange}
                  className={errors.privacy ? 'error' : ''}
                />
                <label htmlFor="privacy-policy">
                  Li e aceito a <a href="#" onClick={togglePrivacyPolicy}>Política de Privacidade</a>
                </label>
                {errors.privacy && <span className="error-message">{errors.privacy}</span>}
              </div>
              
              <div className="secure-note">
                <span className="secure-icon">🔒</span>
                <p>Seus dados estão seguros. Utilizamos criptografia SSL para proteger suas informações. Nunca compartilhamos seus dados com terceiros.</p>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={submitting || !privacyAccepted}
              >
                {submitting ? 'Enviando...' : 'Enviar Solicitação'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultoriaModal;