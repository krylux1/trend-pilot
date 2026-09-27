// === Firebase SDK ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDE3ADMpDToXs-T1g42ed-JfKM8_Us8KW4",
    authDomain: "trend-pilot-1c168.firebaseapp.com",
    projectId: "trend-pilot-1c168",
    storageBucket: "trend-pilot-1c168.firebasestorage.app",
    messagingSenderId: "518552286449",
    appId: "1:518552286449:web:abd65b4461710ecd676550",
    measurementId: "G-28436DY6RW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.FirebaseAPI = {
    auth,
    db,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
};

console.log("Firebase инициализирован");