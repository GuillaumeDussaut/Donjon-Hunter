import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchUserData } from '../data/callJSON';

import '../scss/style.scss';

export default function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isConnected, setIsConnected] = useState(false); 

  const navigate = useNavigate(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConnexion = async (e) => {
    e.preventDefault();
    
    const userData = await fetchUserData();

    const user = userData.find((user) => user.email === email && user.mdp === password);

    if (user) {
      console.log('Connexion réussie en tant que', user.pseudo);

      // Enregistrez la connexion dans le localStorage
      localStorage.setItem('isConnected', 'true');

      // Redirigez l'utilisateur vers la page d'accueil
      navigate('/Accueil');
    } else {
      console.log('Identifiants incorrects');
    }
  }

  // Utilisez useEffect pour vérifier si l'utilisateur est déjà connecté
  useEffect(() => {
    const isConnected = localStorage.getItem('isConnected') === 'true';
    if (isConnected) {
      setIsConnected(true);
    }
  }, []);


  return (
    <div className="connexionContainer">
      <h1>Connexion</h1>
      <form className="connexion" onSubmit={handleConnexion}>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}




