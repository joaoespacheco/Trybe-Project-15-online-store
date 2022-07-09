import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCart from '../Components/ButtonCart';
import ProductDetail from '../Components/ProductDetail';

class Products extends React.Component {
  render() {
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
        <ProductDetail />
      </main>
    );
  }
}

export default Products;
