import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAE11Y8_TqIrT-O3AkQ8K6LwYn5hRvVHBQ",
  authDomain: "benal-todo.firebaseapp.com",
  projectId: "benal-todo",
  storageBucket: "benal-todo.appspot.com",
  messagingSenderId: "615183935393",
  appId: "1:615183935393:web:087f66d0892514a73ccde0",
  measurementId: "G-GQXTHRQNJK",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
