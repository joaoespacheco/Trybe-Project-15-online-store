import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Categories from '../Components/Categories';

class Home extends React.Component {
  componentDidMount() {
    const { homeStatusChange } = this.props;
    homeStatusChange(false);
  }

  render() {
    const { homeStatus } = this.props;
    return (
      <main>
        <div>
          <Header />
          {homeStatus ? (
            ''
          ) : (
            <h2 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h2>
          )}
        </div>
        <Categories />
      </main>
    );
  }
}

Home.propTypes = {
  homeStatus: PropTypes.bool.isRequired,
  homeStatusChange: PropTypes.func.isRequired,
};


export default Home;
