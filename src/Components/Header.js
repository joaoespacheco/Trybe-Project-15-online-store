import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const { inputFilter, funChanger, productsApi } = this.props;
    return (
      <div>
        <label htmlFor="search-filter">
          <input
            name="inputFilter"
            id="search-filter"
            type="text"
            value={ inputFilter }
            onChange={ funChanger }
            data-testid="query-input"
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ productsApi }
        >
          Pesquisar
        </button>
        <Link to="/shopcart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            carrinho
          </button>
        </Link>
      </div>

    );
  }
}

Header.propTypes = {
  inputFilter: PropTypes.string.isRequired,
  funChanger: PropTypes.func.isRequired,
  productsApi: PropTypes.func.isRequired,
};

export default Header;
