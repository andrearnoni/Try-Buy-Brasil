import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../ProductCard.css';

export default class ProductCardFree extends Component {
  render() {
    const { product } = this.props;
    const {
      title,
      thumbnail_id: thumb,
      price,
      installments } = product;

    return (
      <div data-testid="product" className="card-item">
        <Link
          data-testid="product-detail-link"
          className="card-link"
          to={ { pathname: `/details/${product.id}`, state: { product } } }
        >
          <img src={ `https://http2.mlstatic.com/D_NQ_NP_${thumb}-W.webp` } alt={ title } className="card-item-img" />
          <div className="card-body">
            <p
              className="card-price"
            >
              { `R$ ${Math.round((price * 100) / 100).toLocaleString()}` }
            </p>
            <div className="card-payment-facilities-container">
              <span className="card-payment-facilities-span">em</span>
              <p
                className="card-payment-facilities"
              >
                { `${installments.quantity}
              x R$ ${installments.amount} ${installments.rate === 0 ? 'sem juros' : ''}` }
              </p>
            </div>
            <p
              data-testid="free-shipping"
              className="card-free-shipping"
            >
              Frete grátis
            </p>
            <h2 className="card-item-title">{ title }</h2>
          </div>
        </Link>
      </div>
    );
  }
}

ProductCardFree.propTypes = {
  product: PropTypes.shape({
    installments: PropTypes.shape({
      quantity: PropTypes.number,
      amount: PropTypes.number,
      rate: PropTypes.number,
    }).isRequired,
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail_id: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};
