// firebase.js — uses CDN imports (works in browser without a bundler)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFJE-nSGsBUkQZ2xNphNWt0vzxAHktDa4",
  authDomain: "cttracker-a4624.firebaseapp.com",
  projectId: "cttracker-a4624",
  storageBucket: "cttracker-a4624.firebasestorage.app",
  messagingSenderId: "789105337687",
  appId: "1:789105337687:web:ec3b52794899ab24c84a12",
  measurementId: "G-51612TZVNL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
