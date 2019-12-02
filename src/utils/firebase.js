import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = null;

if (!firebaseConfig) {
  throw new Error('Firebase config not set');
}

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default {
  db,
};
