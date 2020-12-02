import firebase from 'firebase';
import 'firebase/firestore';

const parseConfig = () => {
  try {
    return JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
  } catch (error) {
    console.error(error.stack || error.message);
    throw new Error('Can not parse firebase config!')
  }
};

const firebaseConfig = parseConfig();

if (!firebaseConfig) {
  throw new Error('Firebase config not set');
}

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default {
  db,
};
