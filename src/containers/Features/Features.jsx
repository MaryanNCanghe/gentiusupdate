import React from 'react'
import {Feature} from '../../components';
import './features.css';

const featuresData =[
  {
    title:' outsourcing  ',
    text:'com o objetivo de reduzir custos, aumentar a eficiência e focar nos aspectos centrais do negócio, garantimos a qualidade dos serviços terceirizados e mantemos o controle sobre aspectos críticos da operação.',
  },
  {
    title:'Gestão de estoque ',
    text:'Previsão de demanda, definição de níveis de estoque mínimo e máximo. Aplicamos sistemas de informação, tecnologias de rastreamento, modelos de previsão de demanda e estratégias de reabastecimento, comoo auxiliar.',
  },
  {
    title:'Processamento de pedidos',
    text:'O objetivo principal do processamento de pedidos é assegurar que os clientes recebam os produtos corretos, no prazo correto e nas condições acordadas.',
  },
  {
    title:'ERP ',
    text:'Melhora a eficiência operacional, permitir uma visão geral dos negócios facilitando a tomada de decisões, abrange várias áreas funcionais, como contabilidade, finanças, recursos humanos, vendas, compras, gestão de estoque, produção, logística etc. ',
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
        Com expertise e dedicação, moldamos soluções que transcendem distâncias e desafios. </h1>
        <p>Cada tarefa é uma promessa cumprida. </p>
      </div>
      <div className='gpt3__features-containers'>
      {featuresData.map((item, index) => (
        <Feature  title= {item.title} text={item.text} key={item.title + index}/>
      ))}
      </div>
      </div>
  )
};

export default Features;