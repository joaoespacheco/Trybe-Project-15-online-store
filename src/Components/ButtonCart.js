import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ButtonCart extends React.Component {
  render() {
    const { quantidade } = this.props;
    return (
      <div>
        <Link to="/shopcart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </button>
        </Link>
        <span data-testid="shopping-cart-size">
          {quantidade}
        </span>
      </div>
    );
  }
}

ButtonCart.propTypes = {
  quantidade: PropTypes.number.isRequired,
};

export default ButtonCart;
