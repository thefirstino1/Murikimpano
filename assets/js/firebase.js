// assets/js/firebase.js

// Importa function dukeneye zo muri Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Aya ni ya makuru nyayo ya Firebase yawe. Nta kibazo, ubu ni byo.
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

// Tangiza Firebase ukoresheje uburyo bushya
const app = initializeApp(firebaseConfig);

// Satura service yo kwandikisha (Authentication) hanyuma uyisohore (export)
// kugira ngo izindi dosiye zizabashe kuyikoresha.
export const auth = getAuth(app);
