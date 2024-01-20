import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyDEV9Gn0Mk48kE7OSjruaEXLA6qi_O-IvA',
  authDomain: 'minhasfinancas-8bbd7.firebaseapp.com',
  projectId: 'minhasfinancas-8bbd7',
  storageBucket: 'minhasfinancas-8bbd7.appspot.com',
  messagingSenderId: '504850411723',
  appId: '1:504850411723:web:da4e38adaf5038f0442b4e',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
