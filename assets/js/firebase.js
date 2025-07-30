// assets/js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Ibirango byawe bya Firebase (Config)
const firebaseConfig = {
  apiKey: "AIzaSyBC-bxI0yfqnlp2TyDAYZH0vEYcQH_tDf0",
  authDomain: "murikimpano.firebaseapp.com",
  databaseURL: "https://murikimpano-default-rtdb.firebaseio.com",
  projectId: "murikimpano",
  storageBucket: "murikimpano.appspot.com",
  messagingSenderId: "288360394906",
  appId: "1:288360394906:web:036db545a633f8eba5af23",
  measurementId: "G-08Q2CKEE87"
};

// Tangiza Firebase
const app = initializeApp(firebaseConfig);

// Satura service yo kwandikisha (Authentication) hanyuma uyisohore (export)
export const auth = getAuth(app);
