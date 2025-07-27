// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjP5U1t-wuOS2vjABLYU-7Rsmf8n2Gv5Y",
  authDomain: "murikimpano-app.firebaseapp.com",
  projectId: "murikimpano-app",
  storageBucket: "murikimpano-app.appspot.com",
  messagingSenderId: "713207713179",
  appId: "1:713207713179:web:ef2c65d865cfb86d61a3b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Tangiza serivisi yo kwiyandikisha hanyuma uyisangize izindi dosiye
export const auth = getAuth(app);
