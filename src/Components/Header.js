import React from 'react';
import ButtonCart from './ButtonCart';

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
        <ButtonCart />
      </div>
    );
  }
}

export default Header;
