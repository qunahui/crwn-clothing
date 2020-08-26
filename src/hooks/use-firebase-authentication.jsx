import React, { useEffect } from 'react';

const useFirebaseAuthentication = (auth) => {
  const [authUser, setAuthUser] = React.useState(null);

  useEffect(() => {
    console.log('Run useEffect');
    const unlisten = auth.onAuthStateChanged((authUser) => {
      authUser ? setAuthUser(authUser) : setAuthUser(null);
    });

    return () => {
      unlisten();
    };
  });

  return authUser;
};

export default useFirebaseAuthentication;
