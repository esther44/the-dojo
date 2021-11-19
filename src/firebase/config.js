import firebase from "firebase/app";

// Firebase services
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDjn5SU7vIx07-27o-5sMKk2rmLs2nNKiw",
  authDomain: "the-dojosite.firebaseapp.com",
  projectId: "the-dojosite",
  storageBucket: "the-dojosite.appspot.com",
  messagingSenderId: "751058885635",
  appId: "1:751058885635:web:7fa44840c8993191a34236",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore(); // Database
const projectAuth = firebase.auth(); // authentication
const projectStorage = firebase.storage() // storage

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp };
