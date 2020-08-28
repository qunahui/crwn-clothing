import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAUif7Je-Xg-sqtKr9GM66AxFWyC8eifNI',
  authDomain: 'crwn-db-8ea05.firebaseapp.com',
  databaseURL: 'https://crwn-db-8ea05.firebaseio.com',
  projectId: 'crwn-db-8ea05',
  storageBucket: 'crwn-db-8ea05.appspot.com',
  messagingSenderId: '633990243674',
  appId: '1:633990243674:web:38331502bcaac0ad34bf63',
  measurementId: 'G-1H2VJWYRKK',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      const data = {
        displayName,
        email,
        createdAt,
        ...additionalData,
      };

      await userRef.set(data);
    } catch (e) {
      console.log('Error: ', e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
