import React from 'react';
import TimeBenefitComponent from '../TimeBenefitComponent/TimeBenefitComponent.js';
import DedicationBenefitComponent from '../DedicationBenefitComponent/DedicationBenefitComponent.js';
import ExperienceBenefitComponent from '../ExperienceBenefitComponent/ExperienceBenefitComponent.js';
import './BenefitsComponent.css';

export default function Benefits() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <TimeBenefitComponent/>
                </div>
                <div className="col">
                <DedicationBenefitComponent/>
                </div>
                <div className="col">
                <ExperienceBenefitComponent/>
                </div>
            </div>
        </div>
    );
}