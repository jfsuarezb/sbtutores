import React from 'react';

export default function DedicationBenefitComponent() {
    return (
        <div className="card timeBenefit">
            <div className="card-body">
                <svg width="8em" height="8em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="#444" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                    <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                </svg>
                <br/>
                <br/>
                <h5 className="card-title">Experiencia Personalizada</h5>
                <p className="card-text">Cada tutor esta encargado de máximo 3 estudiantes. Preferimos calidad que cantidad.</p>
            </div>
        </div>
    );
}