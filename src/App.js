import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} exact />
      </Switch>
    </div>
  );
}

export default App;
