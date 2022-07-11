import React from 'react';
import PropTypes from 'prop-types';

class ShopCards extends React.Component {
  render() {
    const { cartProducts, addProductOnCart, decreaseQuantity, removeToCart } = this.props;
    return (
      <section>
        {cartProducts.map(({ id, title, price, thumbnail, quantity }) => (
          <div key={ id }>
            <img src={ thumbnail } alt={ title } />
            <h2 data-testid="shopping-cart-product-name">{title}</h2>
            <h3>{price}</h3>
            <button
              data-testid="product-increase-quantity"
              name={ id }
              type="button"
              onClick={ addProductOnCart }
            >
              Aumentar
            </button>
            <h3
              data-testid="shopping-cart-product-quantity"
            >
              {quantity}
            </h3>
            <button
              name={ id }
              data-testid="product-decrease-quantity"
              type="button"
              // disabled={ quantity === 1 }
              onClick={ decreaseQuantity }
            >
              Diminuir
            </button>
            <br />
            <br />
            <button
              name={ id }
              type="button"
              onClick={ removeToCart }
            >
              Remover do carrinho
            </button>
          </div>
        ))}
      </section>
    );
  }
}

ShopCards.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProductOnCart: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeToCart: PropTypes.func.isRequired,
};

export default ShopCards;
