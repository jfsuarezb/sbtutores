import React from 'react';
import logo from './logo.png';
import './HeaderComponent.css'

export default function Header() {
    return (
        <div>
                <img id="headerImage" src={logo} alt="not found"/>
        </div>
    );
}