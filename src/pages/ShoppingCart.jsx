import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../ShoppingCart.css';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const { location: { state } } = this.props;
    const { cart } = state;

    this.state = {
      shopcart: cart,
      totalSum: 0,
    };
  }

  componentDidMount() {
    this.restoreFromLocalStorage();
    this.totalSumProducts();
  }

  restoreFromLocalStorage = () => {
    let localStorageShopcart = localStorage.getItem('shopcart');
    if (localStorageShopcart) {
      localStorageShopcart = JSON.parse(localStorageShopcart);
      this.setState({
        shopcart: localStorageShopcart,
      });
    }
  }

  totalSumProducts = () => {
    const { shopcart } = this.state;
    const val = shopcart.reduce((acc, value) => acc + value.totalValue, 0);
    this.setState({
      totalSum: val,
    });
  }

  handleIncrease = (id) => {
    const { shopcart } = this.state;

    const productCart = shopcart;
    const findProduct = productCart.find((data) => data.id === id);
    const key = productCart.indexOf(findProduct);
    productCart[key].count += 1;
    productCart[key].totalValue = Math.round((productCart[key].count
    * productCart[key].price) * 100) / 100;
    this.setState({
      shopcart: productCart,
    });
    this.totalSumProducts();
    localStorage.setItem('shopcart', JSON.stringify(productCart));
  }

  handleDecrease = (id) => {
    const { shopcart } = this.state;

    const productCart = shopcart;
    const findProduct = productCart.find((data) => data.id === id);
    const key = productCart.indexOf(findProduct);
    if (productCart[key].count > 1) {
      productCart[key].count -= 1;
      productCart[key].totalValue = Math.round((productCart[key].count
      * productCart[key].price) * 100) / 100;
      this.setState({
        shopcart: productCart,
      });
      this.totalSumProducts();
      localStorage.setItem('shopcart', JSON.stringify(productCart));
    }
  }

  handleRemove = (id) => {
    const { shopcart } = this.state;

    const updatedCart = shopcart.filter((Cart) => Cart.id !== id);
    this.setState({
      shopcart: updatedCart,
    });
    this.totalSumProducts();
    localStorage.setItem('shopcart', JSON.stringify(updatedCart));
  }

  clearProducts = () => {
    const updatedCart = [];
    this.setState({
      shopcart: updatedCart,
    });
    localStorage.setItem('shopcart', JSON.stringify(updatedCart));
  }

  render() {
    const { shopcart, totalSum } = this.state;

    if (!shopcart.length) {
      return (
        <div className="shopping-cart-background-empty">
          <div className="shopping-cart-container-empty">
            <h3>Carrinho de Compras</h3>
            <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio!</h4>
            <Link to="/">
              <button className="shopping-cart-empty" type="button">
                Voltar
              </button>
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className="shopping-cart-background">
        <div className="shopping-cart-container">
          <h3 className="shopping-cart-title">Carrinho de Compras</h3>
          <div className="shopping-cart">
            <div className="shopping-cart-itens-container">
              { shopcart
                .map(({ title, count, id, price, totalValue, availableQuantity }) => (
                  <div key={ id }>
                    <div className="shopping-cart-item">
                      <h4 className="shopping-cart-item-title">{ title }</h4>
                      <div className="shopping-cart-info">
                        <p data-testid="shopping-cart-product-quantity">
                          Quantidade:
                          {' '}
                          { count }
                        </p>
                        <p>
                          Preço Unitário: R$
                          {' '}
                          { price.toLocaleString('pt-br', { minimumFractionDigits: 2 }) }
                        </p>
                        <p>
                          <strong>
                            Total: R$
                            {' '}
                            {
                              (totalValue === 0)
                                ? price : totalValue
                                  .toLocaleString('pt-br', { minimumFractionDigits: 2 })
                            }
                          </strong>
                        </p>
                      </div>
                      <div className="shopping-cart-buttonCart">
                        <button
                          id="increase"
                          disabled={ count >= availableQuantity }
                          type="button"
                          className="shopping-cart-increase-btn"
                          value={ id }
                          onClick={ () => this.handleIncrease(id) }
                          data-testid="product-increase-quantity"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="shopping-cart-qty-btn"
                        >
                          {count}
                        </button>
                        <button
                          type="button"
                          value={ id }
                          className="shopping-cart-decrease-btn"
                          onClick={ () => this.handleDecrease(id) }
                          data-testid="product-decrease-quantity"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          value={ id }
                          className="shopping-cart-trash"
                          onClick={ () => this.handleRemove(id) }
                        >
                          <i className="fa fa-trash fa-2x" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="shopping-cart-btns-container">
              <Link
                to={ { pathname: '/checkout', state: { shopcart, totalSum } } }
                data-testid="checkout-products"
              >
                <button
                  type="button"
                  className="shopping-cart-btns"
                >
                  Finalizar a compra
                </button>
              </Link>
              <button
                type="button"
                onClick={ this.clearProducts }
                className="shopping-cart-btns cart-btn2"
              >
                Limpar Produtos
              </button>
              <Link to="/">
                <button type="button" className="shopping-cart-btns cart-btn3">
                  Voltar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};
