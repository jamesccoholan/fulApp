import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6HYu7z5DZf9hcSgStlr6nyiBrs1RkRqM",
  authDomain: "april26chal.firebaseapp.com",
  projectId: "april26chal",
  storageBucket: "april26chal.appspot.com",
  messagingSenderId: "1009086679994",
  appId: "1:1009086679994:web:ce7c8517dcb03ae6372b83",
  measurementId: "G-3H9N80N0WF",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
