import React from 'react';
import logo from './logo.png';
import './HeaderComponent.css'

export default function Header() {
    return (
        <div id="header" className="container-fluid">
                <img className="img-fluid" id="headerImage" src={logo} alt="not found"/>
        </div>
    );
}