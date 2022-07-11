import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductsCard extends React.Component {
  render() {
    const { products, addToCart } = this.props;
    return (
      <section>
        {products.length > 0 ? (
          products.map(({ id, title, price, thumbnail }) => (
            <div key={ id } data-testid="product">
              <img src={ thumbnail } alt="produto" />
              <h3>{title}</h3>
              <p>{price}</p>
              <button
                name={ id }
                type="button"
                data-testid="product-add-to-cart"
                onClick={ addToCart }
              >
                Adicionar ao carrinho
              </button>
              <Link to={ `/products/${id}` }>
                <button
                  type="button"
                  data-testid="product-detail-link"
                >
                  Detalhes do produto
                </button>
              </Link>
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
  addToCart: PropTypes.func.isRequired,
};

export default ProductsCard;
