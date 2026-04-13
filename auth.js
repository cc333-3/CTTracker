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

document.getElementById("btn-login").addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(auth, emailEl.value, passEl.value);
    location.href = "index.html";
  } catch (e) { showError(e.message); }
});

document.getElementById("btn-register").addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(auth, emailEl.value, passEl.value);
    location.href = "index.html";
  } catch (e) { showError(e.message); }
});

document.getElementById("btn-google").addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
    location.href = "index.html";
  } catch (e) { showError(e.message); }
});

onAuthStateChanged(auth, (user) => {
  if (user) location.href = "index.html";
});