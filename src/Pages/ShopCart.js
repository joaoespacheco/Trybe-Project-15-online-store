import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShopCards from '../Components/ShopCards';

class ShopCart extends React.Component {
  render() {
    const { statusCartShop } = this.props;
    return (
      <main>
        {statusCartShop ? (
          <div>
            <ShopCards
              { ...this.props }
            />
            <Link to="/checkout">
              <button
                type="button"
                data-testid="checkout-products"
              >
                Finalizar Compra
              </button>
            </Link>
          </div>
        ) : (
          <div data-testid="shopping-cart-empty-message">
            <p>Seu carrinho está vazio</p>
          </div>
        )}
      </main>

    );
  }
}

ShopCart.propTypes = {
  statusCartShop: PropTypes.bool.isRequired,
};

export default ShopCart;
