import React, { useState } from 'react';
import './contact.css';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend ou realizar outras ações.
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);
    // Limpar os campos do formulário após o envio
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section class="contact" id="contact">
    <div class="contact-container">
       
    <div class="contact-box">
        <div class="contact-left">
        <h3>Estamos à disposição para qualquer questão, assunto ou parcerias.</h3>
             

              <form action="https://formsubmit.co/keylineagence@gmail.com" method="POST"></form>
                <input type="hidden" name="_next" value="http://127.0.0.1:5500/formsubmit.html"></input>
                <input type="hidden" name="_CC" value="danisbarbersmoke@gmail.com"></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_autoresponse" value="A sua menssagem foi enviada com sucesso, elogo entraremos em contacto consig. Obrigada!"></input>
                <div class="input-row">
                    <div class="input-group">
                        <label>Nome Completo</label>
                        <input type="text" name="nome"></input>
                    </div>

                    <div class="input-group">
                        <label>Telefone</label>
                        <input type="text" name="telefone" placeholder=""></input>
                    </div>
                </div>



                <div class="input-row">
                    <div class="input-group">
                        <label>Empresa</label>
                        <input type="email" name="email" placeholder=""></input>
                    </div>

                    <div class="input-group">
                        <label>Nº Contribuinte</label>
                        <input type="text" name="assunto" placeholder=""></input>
                    </div>
                </div>



                <div class="input-row">
                    <div class="input-group">
                        <label>Especialização</label>
                        <select name="Especialização">
                            <option value="nada">Selecione</option>
                            <option value="G.Pedidos">Gestão de pedidos</option>
                            <option value="outcirsing">Outcirsing</option>
                            <option value="G.Estoque">Gestão de Estoque</option>
                            <option value="ERP">ERP</option> 
                            <option value="A. Financeiro">Apoio Financeiro</option>
                            <option value="AAGP">Gestão/ADM Empresarial</option>
                       </select>
                    </div>

                <div class="input-group">
                    <label>Tipologia</label>
                    <select name="tipologia">
                        <option value="nada">Selecione</option>
                        <option value="integrada">Logística Integrada</option>
                        <option value="Reversa">Logística Reversa</option>
                        <option value="L. Empresarial">Logística Empresarial</option> 
                        </select>
                </div>
            </div>

            <div class="input-row">
                <div class="input-group">
                    <label>E-mail</label>
                    <input type="email" name="email" placeholder=""></input>
                </div>

                <div class="input-group">
                    <label>Assunto</label>
                    <input type="text" name="assunto" placeholder=""></input>
                </div>
            </div>

             <div>
                <label for="">Menssagem</label>
               <textarea name="menssagem" cols="30" rows="5"></textarea>
             </div>

             <button type="submit" class="button">Enviar</button>
    
        </div>
    </div>
</div>
        
</section>
  );
};

export default ContactSection;