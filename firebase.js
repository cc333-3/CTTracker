// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFJE-nSGsBUkQZ2xNphNWt0vzxAHktDa4",
  authDomain: "cttracker-a4624.firebaseapp.com",
  projectId: "cttracker-a4624",
  storageBucket: "cttracker-a4624.firebasestorage.app",
  messagingSenderId: "789105337687",
  appId: "1:789105337687:web:ec3b52794899ab24c84a12",
  measurementId: "G-51612TZVNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);