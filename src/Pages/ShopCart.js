import React from 'react';
import PropTypes from 'prop-types';
import ShopCards from '../Components/ShopCards';

class ShopCart extends React.Component {
  render() {
    const { statusCartShop } = this.props;
    return (
      <main>
        {statusCartShop ? (
          <ShopCards
            { ...this.props }
          />
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
