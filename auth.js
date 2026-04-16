// auth.js
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const emailEl = document.getElementById("email");
const passEl  = document.getElementById("password");
const errorEl = document.getElementById("error-msg");

function showError(msg) {
  errorEl.textContent = msg;
  errorEl.style.display = "block";
}

// Hide error when user starts typing again
emailEl.addEventListener("input", () => { errorEl.style.display = "none"; });
passEl.addEventListener("input",  () => { errorEl.style.display = "none"; });

document.getElementById("btn-login").addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(auth, emailEl.value, passEl.value);
    location.href = "index.html";
  } catch (e) { showError(friendlyError(e.code)); }
});

document.getElementById("btn-register").addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(auth, emailEl.value, passEl.value);
    location.href = "index.html";
  } catch (e) { showError(friendlyError(e.code)); }
});

document.getElementById("btn-google").addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
    location.href = "index.html";
  } catch (e) { showError(friendlyError(e.code)); }
});

// If already logged in, skip to dashboard
onAuthStateChanged(auth, (user) => {
  if (user) location.href = "index.html";
});

// Friendly error messages instead of raw Firebase codes
function friendlyError(code) {
  const map = {
    "auth/invalid-email":          "Please enter a valid email address.",
    "auth/user-not-found":         "No account found with that email.",
    "auth/wrong-password":         "Incorrect password. Please try again.",
    "auth/email-already-in-use":   "An account with this email already exists.",
    "auth/weak-password":          "Password must be at least 6 characters.",
    "auth/too-many-requests":      "Too many attempts. Please wait a moment and try again.",
    "auth/popup-closed-by-user":   "Google sign-in was cancelled.",
    "auth/network-request-failed": "Network error. Check your connection and try again.",
  };
  return map[code] || "Something went wrong. Please try again.";
}
