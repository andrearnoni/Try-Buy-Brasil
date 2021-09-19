import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoCards from './NoCards';
import ProductCard from './ProductCard';
import '../ProductList.css';

export default class ProductList extends Component {
  render() {
    const { products, cart, handleClick } = this.props;

    if (products.length === 0) {
      return (
        <NoCards handleClick={ handleClick } />
      );
    }
    return (
      <div className="card-container">
        { products.map((product) => (
          <div key={ product.id } id="cards">
            <ProductCard
              product={ product }
              cart={ cart }
            />
          </div>
        )) }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};
