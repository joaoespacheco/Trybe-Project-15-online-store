import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import ShopCart from './Components/ShopCart';
import Products from './Pages/Products';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeStatus: false,
    };
  }

  // Essa função modifica o status do homeStatus
  homeStatusChange = (status) => {
    this.setState({ homeStatus: status });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/products"
            render={ () => (
              <Products />
            ) }
          />
          <Route
            path="/shopcart"
            render={ () => (
              <ShopCart />
            ) }

          />
          <Route
            path="/"
            render={ () => (
              <Home
                { ...this.state }
                homeStatusChange={ this.homeStatusChange }
              />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
