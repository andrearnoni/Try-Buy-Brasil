import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Overlay, Tooltip } from 'react-bootstrap';
import '../ProductDetails.css';

function AddBtn({ handleClickAddCart2, value, product }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const disapearMsg = 2000;

  function addAndRemove() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, disapearMsg);
  }

  return (
    <>
      <button
        type="button"
        ref={ target }
        value={ value }
        className="details__link btn1"
        onClick={ () => { handleClickAddCart2(product); addAndRemove(); } }
        data-testid="product-detail-add-to-cart"
      >
        Adicionar ao Carrinho
      </button>
      <Overlay target={ target.current } show={ show } placement="top">
        {(props) => (
          <Tooltip { ...props }>
            Adicionado ao carrinho
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

AddBtn.propTypes = {
  handleClickAddCart2: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail_id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddBtn;
