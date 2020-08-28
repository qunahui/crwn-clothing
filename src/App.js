import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import useFirebaseAuthentication from './hooks/use-firebase-authentication';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import userContext, { useAuth } from './hooks/use-firebase-context';

function App() {
  const { initializing, user } = useAuth();

  console.log(user);

  return (
    <userContext.Provider value={{ user }}>
      <Header currentUser={user} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} exact />
        <Route path="/signin" component={SignInAndSignUp} exact />
      </Switch>
    </userContext.Provider>
  );
}

export default App;
