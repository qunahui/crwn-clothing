import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import useFirebaseAuthentication from './hooks/use-firebase-authentication';

function App() {
  const currentUser = useFirebaseAuthentication(auth);

  let unscribeFromAuth = null;

  useEffect(() => {
    console.log(currentUser);
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} exact />
        <Route path="/signin" component={SignInAndSignUp} exact />
      </Switch>
    </div>
  );
}

export default App;
