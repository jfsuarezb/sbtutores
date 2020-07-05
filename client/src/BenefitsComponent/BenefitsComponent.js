import React from 'react';
import TimeBenefitComponent from '../TimeBenefitComponent/TimeBenefitComponent.js';
import DedicationBenefitComponent from '../DedicationBenefitComponent/DedicationBenefitComponent.js';
import ExperienceBenefitComponent from '../ExperienceBenefitComponent/ExperienceBenefitComponent.js';
import './BenefitsComponent.css';

export default class Benefits extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
    
    render() {

        let rowStyle = (this.state.width > 580) ? {} : {display:'none'};

        let columnStyle = (this.state.width >580) ? {display:'none'} : {};

        return (
            <div className="container-fluid">
                <div className="row" style={rowStyle}>
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
                <div style={columnStyle}>
                    <TimeBenefitComponent/>
                    <div className="separatorDiv"></div>
                    <DedicationBenefitComponent/>
                    <div className="separatorDiv"></div>
                    <ExperienceBenefitComponent/>
                </div>
            </div>
        );
    }
}