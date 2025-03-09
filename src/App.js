import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EducationalPage from './pages/EducationalPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import AboutPage from './pages/AboutPage';
import ProgrammingPage from './pages/ProgrammingPage';
// Importe o CSS diretamente do caminho correto dentro de src
import './App.css';
// Remova qualquer importação de CSS que esteja fora do diretório src

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/educational" element={<EducationalPage />} />
            <Route path="/course/:id" element={<CourseDetailsPage />} />
            <Route path="/programming" element={<ProgrammingPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;