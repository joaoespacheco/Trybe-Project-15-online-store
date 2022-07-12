import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from './services/api';
import Home from './Pages/Home';
import './App.css';
import ShopCart from './Pages/ShopCart';
import Products from './Pages/Products';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      homeStatus: false,
      inputFilter: '',
      categoryFilter: '',
      cartProducts: [],
      productToAdd: {},
      statusCartShop: false,
      form: {
        email: '',
        rate: '',
        description: '',
      },
      avaliation: [],
    };
  }

  componentDidMount() {
    this.getStorageAvaliation();
    this.getStorageProducts();
    this.setState({ homeStatus: false });
  }

  handleChanger = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  formChanger = ({ target }) => {
    const { name, value } = target;
    this.setState(({ form }) => ({ form: {
      ...form,
      [name]: value,
    } }));
  };

  saveAvaliation = () => {
    const { form } = this.state;
    this.setState((prevState) => ({ avaliation: [...prevState.avaliation, form] }),
      () => this.saveReset());
  };

  saveReset = () => {
    const { avaliation } = this.state;
    localStorage.setItem('saveAvaliation', JSON.stringify([...avaliation]));
    this.setState({ form: {
      email: '',
      rate: '',
      description: '',
    } },
    () => this.getStorageAvaliation());
  };

  getProductsApi = async () => {
    const { categoryFilter, inputFilter } = this.state;
    const produtos = await getProductsFromCategoryAndQuery(
      categoryFilter,
      inputFilter,
    );
    this.setState({
      products: produtos.results,
      homeStatus: true,
    });
  };

  categoryFilterChange = ({ target }) => {
    const { name } = target;
    this.setState(
      {
        categoryFilter: name,
        inputFilter: '',
      },
      () => this.getProductsApi(),
    );
  };

  getStorageProducts = () => {
    const shopCartStorage = JSON.parse(localStorage.getItem('ShopCart'));
    if (shopCartStorage && shopCartStorage.length > 0) {
      this.setState({
        cartProducts: shopCartStorage,
        statusCartShop: true,
      });
    } else {
      this.setState({ statusCartShop: false });
    }
  };

  getStorageAvaliation = () => {
    const avaliationStorage = JSON.parse(localStorage.getItem('saveAvaliation'));
    if (avaliationStorage && avaliationStorage.length > 0) {
      this.setState({
        avaliation: avaliationStorage,
      });
    }
  };

  addProductOnCart = ({ target }) => {
    const { name } = target;
    const { products } = this.state;
    const productInfo = products.find(({ id }) => id === name);
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

  decreaseQuantityOfProduct = ({ target }) => {
    const { name } = target;
    const { cartProducts } = this.state;
    let productPosition = 0;
    cartProducts.forEach(({ id }, index) => {
      if (name === id) productPosition = index;
    });
    const productFind = cartProducts.find(({ id }) => id === name);
    if (productFind.quantity > 1) productFind.quantity -= 1;
    const newCartProducts = cartProducts;
    newCartProducts.splice(productPosition, 1, productFind);
    localStorage.setItem('ShopCart', JSON.stringify([...newCartProducts]));
    this.getStorageProducts();
  }

  removeToCart = ({ target }) => {
    const { name } = target;
    const { cartProducts } = this.state;
    const newCart = cartProducts.filter(({ id }) => id !== name);
    localStorage.setItem('ShopCart', JSON.stringify([...newCart]));
    this.getStorageProducts();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/products/:id"
            render={ (props) => (
              <Products
                { ...this.state }
                { ...props }
                saveAvaliation={ this.saveAvaliation }
                formChanger={ this.formChanger }
                addProductOnCart={ this.addProductOnCart }
              />
            ) }
          />
          <Route
            path="/shopcart"
            render={ () => (
              <ShopCart
                { ...this.state }
                addProductOnCart={ this.addProductOnCart }
                decreaseQuantity={ this.decreaseQuantityOfProduct }
                removeToCart={ this.removeToCart }
              />
            ) }
          />
          <Route
            path="/"
            render={ () => (
              <Home
                { ...this.state }
                addProductOnCart={ this.addProductOnCart }
                getProductsApi={ this.getProductsApi }
                categoryFilterChange={ this.categoryFilterChange }
                handleChanger={ this.handleChanger }
              />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

