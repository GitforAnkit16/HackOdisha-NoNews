import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3J7KCy8HN_IMjbXnJiCylR-lUfvI-s7U",
  authDomain: "nonews-5bf97.firebaseapp.com",
  projectId: "nonews-5bf97",
  storageBucket: "nonews-5bf97.appspot.com",
  messagingSenderId: "1002072355759",
  appId: "1:1002072355759:web:6b0e7df320d84b943f755a",
  measurementId: "G-M36C8R6SZH"
};
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;