import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <label htmlFor="search-filter">
        <input
          id="search-filter"
          type="text"
        />
      </label>
    );
  }
}


export default Header;
