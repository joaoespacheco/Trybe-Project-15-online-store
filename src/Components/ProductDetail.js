import React from 'react';
import PropTypes from 'prop-types';
import { getFetchProduct } from '../services/api';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const { productId } = this.props;
    const data = await getFetchProduct(productId);
    this.setState({ productInfo: data });
  }

  render() {
    const { productInfo } = this.state;
    const { id, title, price, pictures, shipping } = productInfo;
    const { addProductOnCart } = this.props;
    return (
      <section>
        { Object.keys(productInfo).length > 0 && (
          <div>
            <h2 data-testid="product-detail-name">{title}</h2>
            <h3>{`R$${price}`}</h3>
            { shipping.free_shipping ? (
              <p data-testid="free-shipping">Frete Grátis</p>
            ) : (
              ''
            )}
            <div>
              <img src={ pictures[0].url } alt="produto" />
              <div>
                <h3>Especificações Técnicas</h3>
                <p>Especificação 1</p>
                <p>Especificação 2</p>
                <p>Especificação 3</p>
              </div>
            </div>
            <button
              name={ id }
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ addProductOnCart }
            >
              Adicionar ao carrinho
            </button>
          </div>
        )}
      </section>
    );
  }
}

ProductDetail.propTypes = {
  productId: PropTypes.string.isRequired,
  addProductOnCart: PropTypes.func.isRequired,
};

export default ProductDetail;
