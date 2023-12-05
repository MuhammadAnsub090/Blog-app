import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";



  const firebaseConfig = {
    apiKey: "AIzaSyC67vy5Qk8b-o11OgeTRCpA_8N26S6Z9jY",
    authDomain: "blogging-smit.firebaseapp.com",
    projectId: "blogging-smit",
    storageBucket: "blogging-smit.appspot.com",
    messagingSenderId: "916741166854",
    appId: "1:916741166854:web:e74a367e2a256ac7aab087",
    measurementId: "G-DR1RQ8MZQQ"
  };



export  const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export  const db = getFirestore(app);
export  const storage = getStorage(app);