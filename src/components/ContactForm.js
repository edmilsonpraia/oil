import React, { useState } from 'react';
import '../assets/css/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckbox = (e) => {
    setPrivacyChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    setSubmitting(true);
    // O formulário ainda será enviado normalmente pelo Formspree
    setTimeout(() => {
      setFormSubmitted(true);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact-form-container">
      <h2 className="form-title">Preencha o formulário</h2>
      
      {formSubmitted ? (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <p>Obrigado pelo seu contato! Retornaremos em breve.</p>
        </div>
      ) : (
        <form 
          action="https://formspree.io/f/mzzepakn"
          method="POST"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="telephone">Telefone</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Seu telefone"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Sua mensagem"
              required
            ></textarea>
          </div>
          
          <div className="form-footer">
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="privacy"
                name="privacy_accepted"
                checked={privacyChecked}
                onChange={handleCheckbox}
                required
              />
              <label htmlFor="privacy">
                By submitting, you agree to the <a href="/privacy" className="privacy-link">privacy policy</a>
              </label>
            </div>
            
            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? 'Enviando...' : 'SEND'}
            </button>
          </div>
          
          <input type="hidden" name="_subject" value="Novo contato do site" />
        </form>
      )}
    </div>
  );
};

export default ContactForm;