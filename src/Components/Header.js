import React from 'react';
import PropTypes from 'prop-types';
import ButtonCart from './ButtonCart';

class Header extends React.Component {
  render() {
    const { inputFilter, funcChanger, productsApi } = this.props;
    return (
      <div>
        <label htmlFor="search-filter">
          <input
            name="inputFilter"
            id="search-filter"
            type="text"
            value={ inputFilter }
            onChange={ funcChanger }
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
        <ButtonCart
          { ...this.props }
        />
      </div>
    );
  }
}

Header.propTypes = {
  inputFilter: PropTypes.string.isRequired,
  funcChanger: PropTypes.func.isRequired,
  productsApi: PropTypes.func.isRequired,
};

export default Header;
