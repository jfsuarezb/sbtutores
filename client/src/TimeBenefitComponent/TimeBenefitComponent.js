import React from 'react';

export default function TimeBenefitComponent() {
    return (
        <div className="card timeBenefit">
            <div className="card-body">
                <svg width="8em" height="8em" viewBox="0 0 16 16" className="bi bi-clock" fill="#444" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
                    <path fillRule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                <br/>
                <br/>
                <h5 className="card-title">Clases a cuaquier hora!</h5>
                <p className="card-text">Nuestros tutores tienen horarios muy flexibles y estan disponibles en varios momentos</p>
            </div>
        </div>
    );
}