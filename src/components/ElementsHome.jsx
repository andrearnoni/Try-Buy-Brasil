import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import tryBuy from '../images/tryBuy.png';
import '../ElementsHome.css';

export default class ElementsHome extends Component {
  constructor(props) {
    super(props);

    this.reload = this.reload.bind(this);
    this.toLocalStorage = this.toLocalStorage(this);
  }

  toLocalStorage() {
    if (localStorage.getItem('shopcart') === null) {
      localStorage.setItem('shopcart', JSON.stringify([]));
    }
  }

  reload() {
    window.location.reload();
  }

  countFunction() {

  }

  render() {
    const { handleChange, handleClick, cart } = this.props;
    const itemNum = JSON.parse(localStorage.getItem('shopcart'));
    const get = itemNum.reduce((acc, curr) => acc + curr.count, 0);

    return (
      <div className="elements-home-container">
        <div className="elements-home">
          <Link to="/" onClick={ this.reload }>
            <img src={ tryBuy } className="header-img" alt="logo trybuy Brasil" />
          </Link>
          <div className="inputSearch-container">
            <input
              type="text"
              className="inputSearch"
              placeholder="Digite algum termo de pesquisa ou escolha uma categoria"
              data-testid="query-input"
              onChange={ handleChange }
            />
            <button
              className="search-lupa"
              type="button"
              data-testid="query-button"
              onClick={ handleClick }
            >
              <img src="https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Magnifier-Search-Zoom--512.png" alt="cart icon" height="25px" />
            </button>
          </div>
          <button type="button" className="button-header">
            {get > 0 ? <span className="numOfItens">{get}</span> : ''}
            <Link
              to={ { pathname: '/shoppingcart', state: { cart } } }
              data-testid="shopping-cart-button"
            >
              <i className="fa fa-shopping-cart fa-2x" />
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

ElementsHome.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleClickAddCart: PropTypes.func,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
}.isRequired;
