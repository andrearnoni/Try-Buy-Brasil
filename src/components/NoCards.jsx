import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bannerSmartphone from '../images/bannerSmartphone.png';
import bannerCarro from '../images/bannerCarro.png';
import bannerRoupa from '../images/bannerRoupa.png';
import bannerLivro from '../images/bannerLivro.png';
import bannerInstrumentos from '../images/bannerInstrumentos.png';
import iBest1 from '../images/iBest1.jpg';
import '../ProductList.css';

export default class NoCards extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <div className="no-product-container">
          <h4
            className="no-product"
          >
            Pesquise por milhares de produtos e tenha acesso às melhores ofertas!
          </h4>
        </div>
        <div className="no-product-banners-container">
          <input
            type="image"
            src={ bannerRoupa }
            onClick={ handleClick }
            id="MLB1430"
            alt="banner roupas"
            className="no-product-banners"
          />
          <input
            type="image"
            onClick={ handleClick }
            id="MLB1182"
            src={ bannerInstrumentos }
            alt="banner instrumentos"
            className="no-product-banners"
          />
        </div>
        <div>
          <input
            type="image"
            id="MLB1051"
            onClick={ handleClick }
            src={ bannerSmartphone }
            alt="banner smartphone"
            className="no-product-phone"
          />
        </div>
        <div className="no-product-banners-container">
          <input
            type="image"
            onClick={ handleClick }
            id="MLB1196"
            src={ bannerLivro }
            alt="banner livros"
            className="no-product-banners"
          />
          <input
            type="image"
            onClick={ handleClick }
            id="MLB1743"
            src={ bannerCarro }
            alt="banner carros"
            className="no-product-banners"
          />
        </div>
        <div className="no-product-ibest-container">
          <a href="https://app.premioibest.com/" target="_blank" rel="noopener noreferrer">
            <img src={ iBest1 } alt="premio ibest" className="no-product-ibest" />
          </a>
        </div>
      </div>
    );
  }
}

NoCards.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
