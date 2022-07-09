import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Categories from '../Components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductsCard from '../Components/ProductsCard';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputFilter: '',
      categoryFilter: '',
      products: [],
      homeStatus: false,
    };
  }

  componentDidMount() {
    this.setState({ homeStatus: false });
  }

  handleChanger = ({ target }) => {
    const { name, value } = target;
    this.modifyState(name, value);
  }

  modifyState = (name, value) => {
    this.setState(({ [name]: value }));
  }

   getProductsApi = async () => {
     const { inputFilter, categoryFilter } = this.state;
     const produtos = await getProductsFromCategoryAndQuery(categoryFilter, inputFilter);
     this.setState({
       products: produtos.results,
       homeStatus: true,
     });
   }

   categoryFilterChange = ({ target }) => {
     const { name } = target;
     this.setState(({
       categoryFilter: name,
       inputFilter: '',
     }), () => this.getProductsApi());
   }

   render() {
     const { homeStatus } = this.state;
     return (
       <main>
         <div>
           <Header
             { ...this.state }
             funChanger={ this.handleChanger }
             productsApi={ this.getProductsApi }
           />
           {homeStatus ? (
             <ProductsCard
               { ...this.state }
             />
           ) : (
             <h2 data-testid="home-initial-message">
               Digite algum termo de pesquisa ou escolha uma categoria.
             </h2>
           )}
         </div>
         <Categories
           categoryFilter={ this.categoryFilterChange }
         />
       </main>
     );
   }
}

Home.propTypes = {
  homeStatus: PropTypes.bool.isRequired,
  homeStatusChange: PropTypes.func.isRequired,
};

export default Home;

