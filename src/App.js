import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getFetchProduct } from './services/api';
import Home from './Pages/Home';
import './App.css';
import ShopCart from './Pages/ShopCart';
import Products from './Pages/Products';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
      productToAdd: {},
      statusCartShop: false,
    };
  }

  componentDidMount() {
    this.getStorageProducts();
  }

  getStorageProducts = () => {
    const shopCartStorage = JSON.parse(localStorage.getItem('ShopCart'));
    if (shopCartStorage) {
      this.setState({
        cartProducts: shopCartStorage,
        statusCartShop: true,
      });
    } else {
      this.setState({ statusCartShop: false });
    }
  };

  addProductOnCart = ({ target }) => {
    const { name } = target;
    this.fetchProduct(name);
  };

  fetchProduct = async (id) => {
    const productInfo = await getFetchProduct(id);
    this.setState({ productToAdd: { ...productInfo, quantity: 1 } },
      () => this.addProductToStorage());
  };

  addProductToStorage = () => {
    const { productToAdd, cartProducts } = this.state;
    if (cartProducts.some(({ id }) => productToAdd.id === id)) {
      let productPosition = 0;
      cartProducts.forEach(({ id }, index) => {
        if (productToAdd.id === id) productPosition = index;
      });
      const productFind = cartProducts.find(({ id }) => id === productToAdd.id);
      productFind.quantity += 1;
      const newCartProducts = cartProducts;
      newCartProducts.splice(productPosition, 1, productFind);
      localStorage.setItem('ShopCart', JSON.stringify([...newCartProducts]));
    } else {
      localStorage.setItem('ShopCart', JSON.stringify([...cartProducts, productToAdd]));
    }
    this.setState({ productToAdd: {} });
    this.getStorageProducts();
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/products/:id"
            render={ (props) => (
              <Products
                { ...props }
                addProductOnCart={ this.addProductOnCart }
              />
            ) }
          />
          <Route
            path="/shopcart"
            render={ () => (
              <ShopCart
                { ...this.state }
              />
            ) }

          />
          <Route
            path="/"
            render={ () => (
              <Home
                { ...this.state }
                addProductOnCart={ this.addProductOnCart }
              />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
