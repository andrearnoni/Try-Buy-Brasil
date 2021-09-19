import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../ProductCard.css';

export default class ProductCardWithoutInstallments extends Component {
  render() {
    const { product } = this.props;
    const {
      title,
      thumbnail_id: thumb,
      price } = product;

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
            <h2 className="card-item-title">{ title }</h2>
          </div>
        </Link>
      </div>
    );
  }
}

ProductCardWithoutInstallments.propTypes = {
  product: PropTypes.shape({
    installments: PropTypes.objectOf(PropTypes.object),
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail_id: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};
