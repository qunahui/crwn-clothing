import React from 'react';
import firebase from '../firebase/firebase.utils';

const userContext = React.createContext({
  user: null,
});

export default userContext;

export const useSession = () => {
  const { user } = React.useContext(userContext);
  return user;
};

export const useAuth = () => {
  const [state, setState] = React.useState(() => {
    const user = firebase.auth().currentUser;
    return { initializing: !user, user };
  });
  function onChange(user) {
    setState({ initializing: false, user });
  }

  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return state;
};
