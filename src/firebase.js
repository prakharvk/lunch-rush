import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBN2D4ON6bH-vv5m-YJOe05A4G-Qokjpro",
  authDomain: "lunch-rush-6cf46.firebaseapp.com",
  databaseURL: "https://lunch-rush-6cf46.firebaseio.com",
  projectId: "lunch-rush-6cf46",
  storageBucket: "",
  messagingSenderId: "204831749090",
  appId: "1:204831749090:web:e860af4398652121e3ffbb",
  measurementId: "G-3Z19RCQVZT"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
