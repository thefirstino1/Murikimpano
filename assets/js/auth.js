// assets/js/auth.js

// Importa functions zose dukeneye:
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut // IYI NI NSHYA
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { auth } from './firebase.js'; // Ihamagara 'auth' service

/**
 * Yandikisha umukoresha mushya.
 */
export const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Yinjiza umukoresha usanzwe afite konti.
 */
export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Yohereza imeri yo gusubiza ijambobanga ryibagiwe.
 */
export const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
};

/**
 * IYI NI FUNCTION NSHYA
 * Isahora umukoresha wari warinjiye.
 */
export const logoutUser = () => {
    return signOut(auth);
};
