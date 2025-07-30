// assets/js/auth.js

import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    updateProfile // <<< IYI NI NSHYA
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { auth } from './firebase.js';

// ... (registerUser, loginUser, resetPassword, logoutUser ntacyo bihindukaho)...

export const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};
export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};
export const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
};
export const logoutUser = () => {
    return signOut(auth);
};

/**
 * IYI NI FUNCTION NSHYA
 * Ihindura amakuru y'umukoresha (izina n'ifoto).
 */
export const updateUserProfile = (user, profileData) => {
    return updateProfile(user, profileData);
};
