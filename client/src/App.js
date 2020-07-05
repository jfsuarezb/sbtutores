import React from 'react';
import Header from './HeaderComponent/HeaderComponent.js';
import Jumbotron from './JumbotronComponent/JumbotronComponent.js';
import Benefits from './BenefitsComponent/BenefitsComponent.js';
import Testimonial from './TestimonialComponent/TestimonialComponent.js';
import Form from './FormComponent/FormComponent.js';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className='conrainer'>
        <Header/>
        <Jumbotron/>
        <Benefits/>
        <h1 id="communityHeader">Únete a nuestra comunidad!</h1>
        <Testimonial/>
        <Form/>
      </div>
    );
  }

}
