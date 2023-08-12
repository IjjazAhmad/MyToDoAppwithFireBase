// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi16aVTOXyUPJrGANTECOhGRpnjhC3Jqo",
  authDomain: "mytodoapp-7bd8b.firebaseapp.com",
  projectId: "mytodoapp-7bd8b",
  storageBucket: "mytodoapp-7bd8b.appspot.com",
  messagingSenderId: "204985277859",
  appId: "1:204985277859:web:d6c19c493e9bb5ba90ce16",
  measurementId: "G-32YH4Y1TLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export {analytics,auth, firestore, storage}