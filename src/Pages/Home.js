import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Categories from '../Components/Categories';

import ProductsCard from '../Components/ProductsCard';

class Home extends React.Component {
  render() {
    const { homeStatus } = this.props;
    const {
      addProductOnCart,
      handleChanger,
      getProductsApi,
      categoryFilterChange,
    } = this.props;
    return (
      <main>
        <Categories categoryFilter={ categoryFilterChange } />
        <br />
        <Header
          { ...this.props }
          funcChanger={ handleChanger }
          productsApi={ getProductsApi }
        />
        {homeStatus ? (
          <ProductsCard { ...this.props } addToCart={ addProductOnCart } />
        ) : (
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        )}
      </main>
    );
  }
}

Home.propTypes = {
  homeStatus: PropTypes.bool.isRequired,
  addProductOnCart: PropTypes.func.isRequired,
  handleChanger: PropTypes.func.isRequired,
  getProductsApi: PropTypes.func.isRequired,
  categoryFilterChange: PropTypes.func.isRequired,
};

export default Home;
