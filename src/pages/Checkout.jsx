import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormCheckout from '../components/FormCheckout';
import '../Checkout.css';

export default class Checkout extends Component {
  render() {
    const { location: { state } } = this.props;
    const { shopcart, totalSum } = state;

    return (
      <div className="checkout-background">
        <div className="checkout-container">
          <h3 className="checkout-title">Resumo da Compra</h3>
          { shopcart.map(({ id, thumbnail, title, totalValue, count }) => (
            <div className="checkout-itens-container" key={ id }>
              <img src={ thumbnail } alt={ title } className="checkout-img" />
              <p className="checkout-item-title">{ title }</p>
              <p>{ `Quantidade: ${count}` }</p>
              <p>
                { `Preço R$:
                ${totalValue.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
              </p>
            </div>
          )) }
          <p className="checkout-total-value">
            <strong>
              {
                `VALOR TOTAL DO PRODUTOS:
                R$ ${totalSum.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`
              }
            </strong>
          </p>
          <br />
          <FormCheckout />
          <div className="checkout-btn-container">
            <Link to="/">
              <button
                className="checkout-btn"
                type="button"
              >
                COMPRAR
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      shopcart: PropTypes.arrayOf(PropTypes.object).isRequired,
      totalSum: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
