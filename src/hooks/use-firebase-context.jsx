import React from 'react';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

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
    const user = auth.currentUser;
    return {
      initializing: !user,
      user,
    };
  });

  async function onChange(user) {
    if (user) {
      const userRef = await createUserProfileDocument(user);
      userRef.onSnapshot((snapShot) =>
        setState({
          initializing: false,
          user: {
            id: snapShot.id,
            ...snapShot.data(),
          },
        })
      );
    }
    setState({
      initializing: false,
      user,
    });
  }

  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(onChange);
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return state;
};
