import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConsultoriaModal from './ConsultoriaModal';
import '../assets/css/Header.css';
import logoImg from '../assets/images/Isotipo_00.png';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src={logoImg} alt="Logo" />
          </Link>
          
          <nav className="main-nav">
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/educational">Cursos</Link></li>
              <li><Link to="/programming">Serviços</Link></li>
              <li><Link to="/about">Sobre</Link></li>
            </ul>
          </nav>
          
          {/* Mudado de Link para button com onClick para abrir o modal */}
          <button className="btn-signup" onClick={openModal}>Consultoria</button>
        </div>
      </div>

      {/* Modal de Consultoria */}
      <ConsultoriaModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;