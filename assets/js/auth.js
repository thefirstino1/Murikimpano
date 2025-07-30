// assets/js/auth.js

// Importa function yo kurema umukoresha, na 'auth' service twateguye muri firebase.js
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { auth } from './firebase.js'; // Iyi line irahamagara 'auth' twakoze muri firebase.js

/**
 * Iyi function yandikisha umukoresha mushya muri Firebase.
 * Isubiza (returns) 'Promise' ituruka muri Firebase.
 * HTML niyo izabika ibyayivuyemo (byiza cyangwa bibi).
 */
export const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Tuzongeraho izindi function hano (login, logout, etc.) nyuma.
 * Reka tubanze dukemure kwiyandikisha.
 */
