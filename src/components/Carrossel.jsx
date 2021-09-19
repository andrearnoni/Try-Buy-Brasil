import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import '../Carrossel.css';
import eletro from '../images/eletro.jpg';
import games from '../images/games.jpg';
import informatica from '../images/informatica.jpg';

function Carrossel({ handleClick }) {
  return (
    <div className="carousel-container">
      <Carousel interval={ 4000 } indicators={ false }>
        <Carousel.Item>
          <input
            type="image"
            id="MLB1144"
            onClick={ handleClick }
            className="d-block w-100"
            src={ games }
            alt="itens de game"
          />
        </Carousel.Item>
        <Carousel.Item>
          <input
            type="image"
            id="MLB5726"
            onClick={ handleClick }
            className="d-block w-100"
            src={ eletro }
            alt="imagens de itens de eletro"
          />
        </Carousel.Item>
        <Carousel.Item>
          <input
            type="image"
            id="MLB1648"
            onClick={ handleClick }
            className="d-block w-100"
            src={ informatica }
            alt="itens de informática"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

Carrossel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Carrossel;
