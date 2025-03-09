import React, { useState } from 'react';
import '../assets/css/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'POR QUANTO TEMPO TEREI ACESSO AO MATERIAL?',
      answer: 'O tempo mínimo recomendado para estudar o material é de 1 mês, mas o acesso a todas as aulas será mantido por 4 meses, garantindo que todos os materiais estejam sempre disponíveis de forma consistente.'
    },
    {
      question: 'QUE DOCUMENTO SERÁ EMITIDO AO FINAL DO TREINAMENTO?',
      answer: 'Ao concluir o programa com sucesso, você receberá um certificado de conclusão, comprovando suas habilidades e conhecimentos da area.'
    },
    {
      question: 'QUEM PODE PARTICIPAR DO CURSO?',
      answer: 'O curso é indicado para estudantes e profissionais da área de petróleo e gás, geociências, engenharia e tecnologia, bem como qualquer pessoa interessada em aprender programação aplicada ao setor.'
    },
    {
      question: 'QUAIS SÃO OS REQUISITOS TÉCNICOS PARA PARTICIPAR DO CURSO?',
      answer: 'Para melhor aproveitamento do curso, recomendamos um computador com acesso à internet. E nós, ofeeceremos os software bem como todo o suporte durante o curso.'
    },
    {
      question: 'O CERTIFICADO É RECONHECIDO?',
      answer: 'Sim! O certificado de conclusão atesta suas competências na área e pode ser utilizado para enriquecer seu currículo e perfil profissional.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Questões frequentes</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;