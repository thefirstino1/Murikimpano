// assets/js/auth.js

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { auth } from './firebase.js'; // Ihamagara 'auth' twakoze muri firebase.js

// Iyi function niyo yandikisha umukoresha
export const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};
