import React, { useState, useEffect } from 'react';
import '../scss/style.scss';

// Importez la fonction fetchButtonData depuis votre fichier callAPI.js
import { fetchButtonData } from '../data/callJSON';

export default function Accueil() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [buttons, setButtons] = useState([]);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        async function fetchData() {
            const data = await fetchButtonData();
            setButtons(data);
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="Accueil">
                <div className="jeuContainer">
                    <div className="btn-Container">
                    {buttons.map((button, index) => (
                            <button 
                                key={index} className="btnJeu" 
                                style={{ 
                                    backgroundImage: `url('${button.imageURL}')`,
                                    backgroundSize: 'contain' }}>
                            {button.name}
                        </button>
                        ))}                    
                    </div>
                </div>
                <button className="StartGame" onClick={openModal}>Visiter un donjon</button>
                {modalIsOpen && (
                <div className="custom-modal">
                    <div className="modal-content">
                        <h2 className="titreModale">Donjon</h2>
                        <div className="fenetreJeu">
                            
                        </div>
                        <button onClick={closeModal} className="btnClose">X</button>
                    </div>
                </div>
            )}
            </div>
        </>
    );
}
