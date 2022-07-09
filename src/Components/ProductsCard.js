import React from 'react';
import PropTypes from 'prop-types';

class ProductsCard extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <section>
        {products.length > 0 ? (
          products.map(({ id, title, price, thumbnail }) => (
            <div key={ id } data-testid="product">
              <img src={ thumbnail } alt="produto" />
              <h3>{title}</h3>
              <p>{price}</p>
              <button type="button">Detalhes do produto</button>
            </div>
          ))
        ) : (
          <div data-testid="product">
            <p>Nenhum produto foi encontrado</p>
          </div>
        ) }
      </section>
    );
  }
}

ProductsCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsCard;
