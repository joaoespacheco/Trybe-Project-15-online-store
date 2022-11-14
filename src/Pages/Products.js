import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import ButtonCart from '../Components/ButtonCart';
import ProductDetail from '../Components/ProductDetail';
import Form from '../Components/Form';
import ProductAvaliation from '../Components/ProductAvaliation';

class Products extends React.Component {
  render() {
    const { match: { params: { id } }, products } = this.props;
    return (
      <main>
        <div>
          <Link to="/">
            <button
              type="button"
            >
              Voltar
            </button>
          </Link>
          <ButtonCart
            { ...this.props }
          />
        </div>
        <ProductDetail
          productId={ id }
          { ...this.props }
        />
        <Form
          { ...this.props }
        />
        <ProductAvaliation
          { ...this.props }
        />
        {products.length < 1 ? <Redirect to="/" /> : ''}
      </main>
    );
  }
}

Products.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Products;
