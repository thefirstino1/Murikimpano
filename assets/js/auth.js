```js
// Tuvanye iyi kode ku buryo bwa CDN kugira ngo ikore neza kuri GitHub Pages
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Aya ni ya makuru mashya wampaye
const firebaseConfig = {
  apiKey: "AIzaSyBC-bxI0yfqnlp2TyDAYZH0vEYcQH_tDf0",
  authDomain: "murikimpano.firebaseapp.com",
  projectId: "murikimpano",
  storageBucket: "murikimpano.appspot.com",
  messagingSenderId: "288360394906",
  appId: "1:288360394906:web:036db545a633f8eba5af23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function yo kwiyandikisha
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Function yo kwinjira
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Function yo gusaba reset password
export function resetPassword(email) {return sendPasswordResetEmail(auth, email);
}
```
