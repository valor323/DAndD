// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjiEQSOgzKUtnp4weZ8PxF4uK_nb042yQ",
  authDomain: "dandd-b3719.firebaseapp.com",
  databaseURL: "https://dandd-b3719-default-rtdb.firebaseio.com/",
  projectId: "dandd-b3719",
  storageBucket: "dandd-b3719.appspot.com",
  messagingSenderId: "190364370631",
  appId: "1:190364370631:web:a709841736bee7468b20e2",
  measurementId: "G-ZQJ61LT2K2"
};

// Initialize Firebase
// let db = null
// let app = null;
// if(getApps().length < 1){
//   initializeApp(firebaseConfig)
//   app = initializeApp(firebaseConfig)
//   db = getDatabase(app);
// }

// getApps().length === 0 ? const app = initializeApp(firebaseConfig) : getApp();

// const db = getDatabase(app);
// export { db };
// const analytics = getAnalytics(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
