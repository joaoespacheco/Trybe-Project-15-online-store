import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="search-filter">
          <input
            id="search-filter"
            type="text"
          />
        </label>
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

export default Header;
