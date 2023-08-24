import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const whatGPT3 = () => {
  return (
    <div className='gpt3__what3 section__margin' id='wgpt3'>
      <div className='gpt3__what3-feature'>
        <Feature title="A-nossa-Logistíca" text="Na vanguarda da eficiência e da excelência, a nossa empresa de logística é o alicerce das operações que movem o mundo.
        Somos os artesãos invisíveis por trás do sucesso de nossos clientes, tornando as suas visões realidade." />
        </div>
        <div className='gpt3__what3-heading'>
          <h1 className='gradient__text'>Conectando e Superando Expectativas.</h1>
          <p>Um passo para o futuro</p>
          
        </div>
        <div className='gpt3__what3-container'>
          <Feature title="Logística empresarial" text="Desempenha um papel crucial nas empresas,respondemos de forma ágil às demandas do mercado, minimizando os desperdícios, otimizar recursos e manter um fluxo contínuo de produtos e informações." />;
          <Feature title="Logística Reversa" text="Obtemos benefícios econômicos e ambientais, reutilizando materiais, demonstramos um compromisso com a responsabilidade social e a sustentabilidade" />;
          <Feature title="Logística Integrada" text="Temos como objetivo criar uma operação fluida e eficiente, em que todas as peças trabalham em harmonia para atingir os objetivos globais da organização."/>;
        </div>
      </div>
  )
};

export default whatGPT3;