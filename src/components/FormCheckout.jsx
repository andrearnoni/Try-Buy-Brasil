import React, { Component } from 'react';
import boleto from '../images/boleto.jpg';
import pix from '../images/pix.svg';
import visa from '../images/visa.png';
import master from '../images/master.png';
import elo from '../images/elo.png';
import '../FormCheckout.css';

export default class FormCheckout extends Component {
  render() {
    return (
      <div>
        <div className="form-info">
          <h4>Informações do comprador</h4>
          <form className="form-fields-container">
            <div className="form-fields">
              <input
                type="text"
                className="form-field"
                placeholder="Nome Completo"
              />
              <input
                type="text"
                className="form-field"
                placeholder="CPF"
              />
              <input
                type="email"
                className="form-field"
                placeholder="E-mail"
              />
              <input
                type="text"
                className="form-field"
                placeholder="Telefone"
              />
            </div>
            <div className="form-fields">
              <input
                type="text"
                className="form-field"
                placeholder="CEP"
              />
              <input
                type="text"
                className="form-field"
                placeholder="Endereço"
              />
            </div>
            <div className="form-fields">
              <input
                type="text"
                className="form-field"
                placeholder="Complemento"
              />
              <input
                type="text"
                className="form-field"
                placeholder="Número"
              />
              <input
                type="text"
                className="form-field"
                placeholder="Cidade"
              />
              <select id="estado" className="form-field form-select" name="estado">
                <option>Selecione o estado</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </div>
          </form>
        </div>
        <div className="form-payment">
          <h4>Método de Pagamento</h4>
          <form className="payment">
            <div className="form-paymentMethod-container">
              <p>Boleto</p>
              <input
                type="radio"
                name="paymentMethod"
              />
              <img src={ boleto } className="form-img" alt="código de barras"/>
            </div>
            <div className="form-paymentMethod-container">
              <p>Pix</p>
              <input
                type="radio"
                name="paymentMethod"
              />
              <img src={ pix } className="form-img" alt="código de barras"/>
            </div>  
            <div className="form-paymentMethod-container">
              <p>Cartão de crédito</p>
              <input
                type="radio"
                name="paymentMethod"
              />
              <img src={ visa } className="form-img" alt="código de barras"/>
              <input
                type="radio"
                className="form-radio"
                name="paymentMethod"
              />
              <img src={ master } className="form-img" alt="código de barras"/>
              <input
                type="radio"
                className="form-radio"
                name="paymentMethod"
              />
              <img src={ elo } className="form-img" alt="código de barras"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
