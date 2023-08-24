import React from 'react';
import './footer.css';

import gpt3Logo from '../../assets/logo.svg';


const footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
        Quesres estar um passo á frente das outras empresas, ligue-nos!
        </h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>+351 920 229 779</p>
      </div>

      <div className='gpt3__footer-links'>
       <div className='gpt3__footer-links_logo'>
        <img src={gpt3Logo} alt="logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
       </div>
     
       
       <div className='gpt3__footer-links_div'>
        <h4>Contact</h4>
        <p>E-mail: gentius@otlook.com </p>
        <p>Telefone: +351 920 229 977</p>
        </div>

        <div className='gpt3__footer-links_div'>
        <h4>Empresa</h4>
        <p>cookies</p>
        <p>termos</p>
        <p>políticas</p>

        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>© 2023 . All rights reserved. Maria N'canghe</p>
      </div>
    </div>
  )
}

export default footer