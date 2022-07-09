import React from 'react';
import { Link } from 'react-router-dom';

class ButtonCart extends React.Component {
  render() {
    return (
      <Link to="/shopcart">
        <button
          type="button"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </button>
      </Link>

    );
  }
}

export default ButtonCart;
