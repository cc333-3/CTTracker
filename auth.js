// auth.js
import { auth }                        from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const emailEl    = document.getElementById("email");
const passEl     = document.getElementById("password");
const errorEl    = document.getElementById("error-msg");

function showError(msg) {
  errorEl.textContent = msg;
  errorEl.style.display = "block";
}

// Email login
document.getElementById("btn-login").addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(auth, emailEl.value, passEl.value);
    location.href = "dashboard.html";
  } catch (e) { showError(e.message); }
});

// Email register
document.getElementById("btn-register").addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(auth, emailEl.value, passEl.value);
    location.href = "dashboard.html";
  } catch (e) { showError(e.message); }
});

// Google login
document.getElementById("btn-google").addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
    location.href = "dashboard.html";
  } catch (e) { showError(e.message); }
});

// Auto-redirect if already logged in
onAuthStateChanged(auth, (user) => {
  if (user) location.href = "dashboard.html";
});