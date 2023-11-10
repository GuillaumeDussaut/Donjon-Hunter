import React from 'react';
import Header from './components/header';
import Home from './pages/Home';
import Accueil from './pages/Accueil';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;

