import React from 'react';
import './possibility.css';
import  possibilityImage from '../../assets/possibility.png'

const possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4></h4>
        <h1 className='gradient__text'>Queremos levar o seu negócio a um novo patamar</h1>
        <p>Buscamos melhorar a eficiência de todos os processos logísticos, desde o gerenciamento de estoque até a entrega final, a fim de reduzir custos e tempo; Visamos desenvolver parcerias sólidas com fornecedores, transportadoras e outros parceiros para melhorar a eficiência e a qualidade dos serviços. Procuramos Expandir a presença da empresa em novos mercados geográficos ou setores industriais.</p>
        <h4>Confie nas nossas capacidades de gestão</h4>
      </div>
    </div>
  );
}

export default possibility ;