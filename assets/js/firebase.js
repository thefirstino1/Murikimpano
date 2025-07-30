// assets/js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js"; // <<< IYI NI NSHYA

const firebaseConfig = {
  // ... ibirango byawe ntacyo uhindura ...
  apiKey: "AIzaSyBC-bxI0yfqnlp2TyDAYZH0vEYcQH_tDf0",
  authDomain: "murikimpano.firebaseapp.com",
  databaseURL: "https://murikimpano-default-rtdb.firebaseio.com",
  projectId: "murikimpano",
  storageBucket: "murikimpano.appspot.com",
  messagingSenderId: "288360394906",
  appId: "1:288360394906:web:036db545a633f8eba5af23",
  measurementId: "G-08Q2CKEE87"
};

const app = initializeApp(firebaseConfig);

// Satura services zose dukeneye
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // <<< IYI NI NSHYA
