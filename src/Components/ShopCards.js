import React from 'react';
import PropTypes from 'prop-types';

class ShopCards extends React.Component {
  render() {
    const { cartProducts } = this.props;
    return (
      <section>
        {cartProducts.map(({ id, title, price, thumbnail, quantity }) => (
          <div key={ id }>
            <img src={ thumbnail } alt={ title } />
            <h2 data-testid="shopping-cart-product-name">{title}</h2>
            <h3>{price}</h3>
            <h3
              data-testid="shopping-cart-product-quantity"
            >
              {`Quantidade: ${quantity}`}
            </h3>
          </div>
        ))}
      </section>
    );
  }
}

ShopCards.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShopCards;
