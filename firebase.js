import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "facebook-v23.firebaseapp.com",
  projectId: "facebook-v23",
  storageBucket: "facebook-v23.appspot.com",
  messagingSenderId: "378215764921",
  appId: "1:378215764921:web:12f1003f11ef6c16ba9c68",
  measurementId: "G-FNJR0QFLH3",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
