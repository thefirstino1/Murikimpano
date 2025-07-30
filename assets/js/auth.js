// assets/js/auth.js

// Importa functions zose dukeneye:
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    sendPasswordResetEmail  // Iyi ni nshya
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { auth } from './firebase.js'; // Ihamagara 'auth' service twateguye muri firebase.js

/**
 * Iyi function yandikisha umukoresha mushya muri Firebase.
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
 * IYI NI FUNCTION NSHYA
 * Yohereza imeri yo gusubiza ijambobanga ryibagiwe.
 */
export const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
};

// Nyuma tuzongeraho n'izindi nka logoutUser...
