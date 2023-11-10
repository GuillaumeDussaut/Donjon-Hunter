import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/style.scss';

export default function Home(){
    return(
        <div className="homeContainer">
            <div className="btn-Container">                
                <Link to="/connexion">
                    <button className="connexion">Connexion</button>
                </Link>
                <Link to="/inscription">
                    <button className="inscription">Inscription</button>
                </Link>
            </div>
        </div>
    )
}