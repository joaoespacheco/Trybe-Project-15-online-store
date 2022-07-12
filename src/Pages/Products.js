import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonCart from '../Components/ButtonCart';
import ProductDetail from '../Components/ProductDetail';
import Form from '../Components/Form';
import ProductAvaliation from '../Components/ProductAvaliation';

class Products extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
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
          <ButtonCart />
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
      </main>
    );
  }
}

Products.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Products;
