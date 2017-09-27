import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import Home from './pages/Home/';
import About from './pages/About/';
import Products from './pages/Products/';
import ProductPage from './pages/ProductPage';
import Contact from './pages/Contact/';
import Cart from './pages/Cart/';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
// import CSSTransition from 'react-transition-group/CSSTransition'
import { checkAuth } from './services/authService';
import T from 'i18n-react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {

  componentWillMount(){
    T.setTexts(require('./translations.json'))
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route render={({ match }) => <About />} path="/about" />
          <Route component={ProductPage} path="/products/:id" />
          <Route component={Products} path="/products" />
          <Route component={checkAuth(Cart)} path="/cart" />
          <Route component={Contact} path="/contact" />
          <Route component={Login} path="/login"/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

