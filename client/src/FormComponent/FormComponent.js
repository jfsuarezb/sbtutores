import React from 'react';
import './FormComponent.css';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formon: true,
            finalmessageon: false,
            name:"",
            lastname:"",
            contact:"",
            subject:""
        }
    }

    sendData = async () => {
        try {
            await fetch(`${window.location.href}mail`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name:this.state.name,
                    lastname:this.state.lastname,
                    contact:this.state.contact,
                    subject:this.state.subject
                })
            })
        } catch(e) {
            console.log(e);
        }
    }

    click = (e) => {
        e.preventDefault();
        if (this.state.contact !== "") {
            this.setState({
                formon: false,
                finalmessageon: true
            });
            this.sendData();
        }
    }

    handleNameChange = (e) => {
        this.setState({name:e.target.value});
    }

    handleLastNameChange = (e) => {
        this.setState({lastname:e.target.value});
    }

    handleContactChange = (e) => {
        this.setState({contact:e.target.value});
    }

    handleSubjectChange = (e) => {
        this.setState({subject:e.target.value});
    }

    render() {

        let formstyle = this.state.formon ? {} : { display: 'none' };

        let finalmessagestyle = this.state.finalmessageon ? {} : { display: 'none' };

        return (
            <div>
                <div id="form" className="container-fluid" style={formstyle}>
                    <div id="initialMessage">
                        <h2 className="display-4">Qué esperas para subir tus notas?!</h2>
                        <p className="display-8">Empieza tu primera clase gratis y luego <del>35.000/hora</del>   <ins id="offer">Aprovecha nuestra oferta única de 25.000/hora</ins> </p>
                    </div>
                    <p className="display-10" id="instruction">
                        Llena el siguiente formulario y uno de nuestros tutores te contactará en menos de 24 horas
                    </p>
                    <form id="dataForm">
                        <div className="form-group">
                            <label>Nombre:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" value={this.state.name} onChange={this.handleNameChange}/>
                        </div>
                        <div className="form-group">
                            <label>Apellido:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" value={this.state.lastname} onChange={this.handleLastNameChange}/>
                        </div>
                        <div className="form-group">
                            <label>Correo o teléfono, como te sientas comodo:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" value={this.state.contact} onChange={this.handleContactChange}/>
                        </div>
                        <div className="form-group">
                            <label>Materia en la que necesitas tutorías:</label>
                            <select className="form-control" value={this.state.subject} onChange={this.handleSubjectChange} >
                                <option></option>
                                <option>Aritmética</option>
                                <option>Geometría</option>
                                <option>Álgebra I</option>
                                <option>Álgebra II</option>
                                <option>Funciones</option>
                                <option>Trigonometría</option>
                                <option>Estadística y/o Probabilidad</option>
                                <option>Cálculo Diferencial</option>
                                <option>Cálculo Integral</option>
                                <option>Álgebra Lineal</option>
                                <option>Cálculo Multivariable/Vectorial</option>
                            </select>
                        </div>
                        <button id="finalbutton" type="submit" className="btn btn-primary" onClick={this.click}>Empieza gratis ya!</button>
                    </form>
                </div>
                <div id="finalmessage" className="container-fluid" style={finalmessagestyle}>
                    <h2 className="display-4">Muchas Gracias por elegirnos. Te contactaremos en 24 horas.</h2>
                </div>
            </div>
        );
    };
}