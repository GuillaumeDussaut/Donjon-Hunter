// content/modales.js
import React from 'react';
import '../scss/style.scss'

export function CustomModal({ isOpen, closeModal }) {
    return (
        <div className={isOpen ? 'custom-modal' : 'custom-modal-hidden'}>
            <div className="modal-content">
                <h2>Modale de donjon</h2>
                <p>Contenu de la modale...</p>
                <button onClick={closeModal} className="btnClose">X</button>
            </div>
        </div>
    );
}
