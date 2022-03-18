import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"

/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}; */

const firebaseConfig = {
  apiKey: "AIzaSyDzbAzD5fSfjrSDmZDUsHaKw-WmzCJYl-E",
  authDomain: "eduskool-bc389.firebaseapp.com",
  projectId: "eduskool-bc389",
  storageBucket: "eduskool-bc389.appspot.com",
  messagingSenderId: "365762518398",
  appId: "1:365762518398:web:4e9d45298c446d0012a72f",
  measurementId: "G-RK44Z77RYE"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
