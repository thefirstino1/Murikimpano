// assets/js/auth.js

// Importa function yo kurema umukoresha na 'auth' service twateguye muri firebase.js
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { auth } from './firebase.js'; // Importa 'auth' service

/**
 * Iyi function ifata email n'ijambobanga ikarema umukoresha mushya muri Firebase.
 * Irasubiza Promise: yaba user credential (iyo bikunze) cyangwa ikagarura error (iyo binanze).
 * HTML yawe niyo izafata iyo error iyereke umukoresha.
 */
export const registerUser = async (email, password) => {
    try {
        // Gerageza kurema umukoresha ukoresheje function ya Firebase
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Umukoresha yiyandikishije neza:", userCredential.user);
        return userCredential; // Subiza user credential iyo byakunze
    } catch (error) {
        // Iyo habaye ikosa, fata ubutumwa bw'ikosa hanyuma ubwohereze
        console.error("Ikosa mu kwiyandikisha: ", error.message);
        // Hita utanga ikosa (throw error) kugira ngo code iri muri HTML ibashe kurifata
        throw error;
    }
};

// Hano ushobora kuzongeramo izindi functions nka 'loginUser', 'logoutUser', n'ibindi...
