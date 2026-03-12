// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE7y8T3i9BnKyury1GxayAzWtuWLTgJiI",
  authDomain: "netflixgpt-d969c.firebaseapp.com",
  projectId: "netflixgpt-d969c",
  storageBucket: "netflixgpt-d969c.firebasestorage.app",
  messagingSenderId: "266472853651",
  appId: "1:266472853651:web:e43a99f8a62e5f72cffd66",
  measurementId: "G-E36FDYK0T9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth required for Email/Password Sign-In Method but for Google Sign-In Method, both auth and provider requried
export const auth = getAuth();

export const provider = new GoogleAuthProvider();