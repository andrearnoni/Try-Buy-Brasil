import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddBtn from './AddBtn';
import ProductDetailsNoInstallments from './ProductDetailsNoInstallments';
import '../ProductDetails.css';

export default class ProductDetailsFree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.restoreFromLocalStorage();
  }

  restoreFromLocalStorage = () => {
    let localStorageShopcart = localStorage.getItem('shopcart');
    if (localStorageShopcart) {
      localStorageShopcart = JSON.parse(localStorageShopcart);
      this.setState({
        cart: localStorageShopcart,
      });
    }
  }

  // Add product to cart:
  handleClickAddCart2 = (product) => {
    const { cart } = this.state;
    const haveCart = cart.length;
    if (!haveCart) {
      const { id, title, price, thumbnail } = product;
      const availableQuantity = product.available_quantity;
      const productCart = [
        { id, title, price, thumbnail, availableQuantity, count: 1, totalValue: price },
      ];
      this.setState({
        cart: productCart,
      });
      localStorage.setItem('shopcart', JSON.stringify(productCart));
    } else {
      let productCart = cart;
      const findProduct = productCart.find((data) => data.id === product.id);
      if (findProduct) {
        const key = productCart.indexOf(findProduct);
        productCart[key].count += 1;
        productCart[key].totalValue = Math.round((productCart[key].count
          * productCart[key].price) * 100) / 100;
        this.setState({
          cart: productCart,
        });
        localStorage.setItem('shopcart', JSON.stringify(productCart));
      } else {
        const { id, title, price, thumbnail } = product;
        const availableQuantity = product.available_quantity;
        productCart = [...productCart,
          { id, title, price, thumbnail, availableQuantity, count: 1, totalValue: price },
        ];
        this.setState({
          cart: productCart,
        });
        localStorage.setItem('shopcart', JSON.stringify(productCart));
      }
    }
  }

  render() {
    const { product } = this.props;
    const {
      title,
      available_quantity: availableQuantity,
      address: { state_name },
      attributes,
      address: { city_name },
      thumbnail_id: thumb,
      price,
      installments } = product;
    const { cart } = this.state;

    if (installments === null) {
      return <ProductDetailsNoInstallments product={ product } />;
    }

    return (
      <div className="details__background">
        <div className="details__container">
          <h4 className="details__title-resp">{title}</h4>
          <div className="details__img-container">
            <img src={ `https://http2.mlstatic.com/D_NQ_NP_${thumb}-W.webp` } className="details__img" alt={ title } />
          </div>
          <div className="details__titleAndPrice">
            <h4 className="details__title">{title}</h4>
            <div className="details__priceAndFacilities">
              <h2 className="details__price">
                { `R$ ${Math.round((price * 100) / 100).toLocaleString()}` }
              </h2>
              <div className="details__facilities-container">
                <span className="details__facilities-span">em</span>
                <p
                  className="details__facilities"
                >
                  { `${installments.quantity}
              x R$ ${installments.amount} ${installments.rate === 0 ? 'sem juros' : ''}` }
                </p>
              </div>
            </div>
            {attributes
              .map((item, index) => (
                <ul key={ index }>
                  <li
                    className="details__details"
                  >
                    {`${item.name}: ${item.value_name}`}
                  </li>
                </ul>
              ))}
          </div>
          <div className="details__right-side">
            <div className="details__stock">
              <p
                data-testid="free-shipping"
                className="details__free-shipping"
              >
                <i className="fa fa-truck fa-2x" />
                {' '}
                Frete grátis
              </p>
              { availableQuantity > 0 && <p><strong>Estoque disponível</strong></p> }
              { availableQuantity > 0
            && (
              <p>
                Quantidade em estoque:
                {' '}
                {availableQuantity}
              </p>)}
            </div>
            <div className="details__buttons">
              <AddBtn
                value={ product.id }
                handleClickAddCart2={ this.handleClickAddCart2 }
                product={ product }
              />
              <Link
                to={ { pathname: '/shoppingcart', state: { cart } } }
                data-testid="shopping-cart-button"
              >
                <button type="button" className="details__link btn2">
                  Ver carrinho
                </button>
              </Link>
              <Link to="/">
                <button type="button" className="details__link btn3">
                  Voltar
                </button>
              </Link>
            </div>
            <div className="details__address">
              <p><strong>Informações do vendedor</strong></p>
              <p>
                <i className="fa fa-map-marker fa-2x" />
                {' '}
                Localização
              </p>
              <p>{`${city_name}, ${state_name}`}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetailsFree.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail_id: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool }),
    installments: PropTypes.shape({
      quantity: PropTypes.number,
      amount: PropTypes.number,
      rate: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
