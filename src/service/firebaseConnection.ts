// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDEV9Gn0Mk48kE7OSjruaEXLA6qi_O-IvA",
  authDomain: "minhasfinancas-8bbd7.firebaseapp.com",
  projectId: "minhasfinancas-8bbd7",
  storageBucket: "minhasfinancas-8bbd7.appspot.com",
  messagingSenderId: "504850411723",
  appId: "1:504850411723:web:da4e38adaf5038f0442b4e"
};

 const app =  initializeApp(firebaseConfig);
 const db =   getFirestore(app)
 const auth = getAuth(app)

 export {auth,db}
