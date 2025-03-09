import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';
import logoImg from '../assets/images/Logomarca_00.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Link to="/">
                <img src={logoImg} alt="Justificações Acadêmicas" />
              </Link>
            </div>
            <div className="social-media">
              <a href="https://www.facebook.com/share/1Bzp9h25hJ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="social-icon">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/justificacoes_academicas_?igsh=b3lzYXNsMmhmYTE4" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="social-icon">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@justificacoes.academicas?_t=ZN-8uNdecWb7QM&_r=1" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="social-icon">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Sobre Nós</h4>
              <ul>
                <li><Link to="/about">Nossa história</Link></li>
                <li><Link to="http://67.207.89.121/">Plataforma de Cursos Online</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Parceiros</h4>
              <ul>
                <li><a href="https://welldesk.io/#products" target="_blank" rel="noopener noreferrer">WellDesk</a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer">Link English</a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer">NovaGeo</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contactos</h4>
              <ul>
                <li className="contact-item">
                  <span className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="contact-svg">
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                  </span>
                  <a href="tel:+79961007408" className="contact-text">+7 996 100 74 08</a>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="contact-svg">
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                  </span>
                  <a href="mailto:justificacoesacademicas@gmail.com" className="contact-text">justificacoesacademicas@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Justificações Acadêmicas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;