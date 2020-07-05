import React from 'react';
import './JumbotronComponent.css';

export default class Jumbotron extends React.Component {

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

        let subjectDisplay = (this.state.width > 580) ? {} : {display:'none'}    

        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Líderes en tutorías desde matemáticas básicas hasta cálculo universitario</h1>
                        <hr className="my-4" />
                        <p className="lead">9 de cada 10 estudiantes nuestros han mejorado sus calificaciones</p>
                        <div id="subjects" style={subjectDisplay}>
                            <ul className="list-group list-group-horizontal-sm">
                                <li className="list-group-item">Aritmética</li>
                                <li className="list-group-item">Geometría</li>
                                <li className="list-group-item">Álgebra I</li>
                                <li className="list-group-item">Álgebra II</li>
                            </ul>
                            <div id="separator"></div>
                            <ul className="list-group list-group-horizontal-sm">
                                <li className="list-group-item">Funciones</li>
                                <li className="list-group-item">Estadística</li>
                                <li className="list-group-item">Probabilidad</li>
                                <li className="list-group-item">Trigonometría</li>
                            </ul>
                            <div id="separator"></div>
                            <ul className="list-group list-group-horizontal-sm">
                                <li className="list-group-item">Cálculo Diferencial</li>
                                <li className="list-group-item">Cálculo Integral</li>
                                <li className="list-group-item">Álgebra Lineal</li>
                                <li className="list-group-item">Cálculo Multivariable</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}