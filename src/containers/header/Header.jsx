import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/logistic.png';

const header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Conectando futuros, Superando Expectativas, a sua Logística em Movimento</h1>
        <p>Somos mais do que uma empresa de logística, somos a ponte que liga sonhos a realidades. Transformamos complexidade em simplicidade.
           A Nossa paixão pela logística impulsiona o comércio, constrói parcerias e impede que fronteiras separem oportunidades. Bem-vindo à nossa visão de um amanhã sem limites </p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your E-mail Adress' />
          <button type='button'> Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
        <img src={people} alt="people" />
        <p>+1,600 pessoas e empresas conectadas ao redor no mundo</p>
      </div>
      </div>
    
      <div className='gpt3__header-image'>
      <img src={ai} alt="ai" />
      </div>
    </div>
  
  )
}

export default header