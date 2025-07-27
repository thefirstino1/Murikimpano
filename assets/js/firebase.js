// Tuvanye iyi kode ku buryo bwa CDN kugira ngo ikore neza kuri GitHub Pages
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Aya ni ya makuru mashya wampaye
const firebaseConfig = {
  apiKey: "AIzaSyBC-bxI0yfqnlp2TyDAYZH0vEYcQH_tDf0",
  authDomain: "murikimpano.firebaseapp.com",
  databaseURL: "https://murikimpano-default-rtdb.firebaseio.com",
  projectId: "murikimpano",
  storageBucket: "murikimpano.appspot.com", // Nahinduye hano gato
  messagingSenderId: "288360394906",
  appId: "1:288360394906:web:036db545a633f8eba5af23",
  measurementId: "G-08Q2CKEE87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Tangiza serivisi yo kwiyandikisha hanyuma uyisangize izindi dosiye
export const auth = getAuth(app);
