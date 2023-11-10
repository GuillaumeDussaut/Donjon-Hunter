import React from 'react';
import logo from '../assets/logoTitre.png';
import { Link } from 'react-router-dom';

import '../scss/style.scss';

export default function Header(){
    return(
        <header>
            <Link to="/">
                <img src={logo} alt="logo dungeon hunter" className="logo"/>
            </Link> 
        </header>
    )
}