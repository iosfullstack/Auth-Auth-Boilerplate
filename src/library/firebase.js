// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = {
  apiKey: "AIzaSyDnvBBT8NtahMJZtL7CmTL0fEEv-6LzY4w",
  authDomain: "auth-boilerplate-ff0ce.firebaseapp.com",
  projectId: "auth-boilerplate-ff0ce",
  storageBucket: "auth-boilerplate-ff0ce.appspot.com",
  messagingSenderId: "723083283824",
  appId: "1:723083283824:web:a710c956a946ff62b493b5",
  measurementId: "G-628BYWECJS"
};

// Initialize Firebase
const app = initializeApp(firebase);
const auth = getAuth(app);

export {app, auth}; 