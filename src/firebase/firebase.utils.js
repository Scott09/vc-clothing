import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCowR0naMT2PUNRLb1giRie0kh13JXVWIs",
  authDomain: "vc-db-e0cdd.firebaseapp.com",
  databaseURL: "https://vc-db-e0cdd.firebaseio.com",
  projectId: "vc-db-e0cdd",
  storageBucket: "vc-db-e0cdd.appspot.com",
  messagingSenderId: "878705269354",
  appId: "1:878705269354:web:df9e5dd580fe4d66ee0813",
  measurementId: "G-65X20C3L52"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error Creating User', error.message);
    }
  }
  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;