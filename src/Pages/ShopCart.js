import React from 'react';

class ShopCart extends React.Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShopCart;
