import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ConsultoriaModal from './ConsultoriaModal';
import '../assets/css/Header.css';
import logoImg from '../assets/images/Isotipo_00.png';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => handleNavigation('/')}>
            <img src={logoImg} alt="Logo" />
          </div>
          
          <nav className="main-nav">
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>Início</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('/educational'); }}>Cursos</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('/programming'); }}>Serviços</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('/about'); }}>Sobre</a></li>
            </ul>
          </nav>
          
          <button className="btn-signup" onClick={openModal}>Consultoria</button>
        </div>
      </div>
      <ConsultoriaModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;