// Tura na serivisi yo kwiyandikisha twakoze muri firebase.js
import { auth } from './firebase.js';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Igikorwa cyo kwerekana ubutumwa bw'amakuru (notification)
function showNotification(message, isSuccess) {
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) { existingNotif.remove(); }

    const notification = document.createElement('div');
    notification.className = `notification ${isSuccess ? 'success' : 'error'}`;
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => { notification.remove(); }, 5000);
}

// --- LOGIC Y'IPAJI YO KWIYANDIKISHA (REGISTER) ---
if (document.querySelector('form.register-form')) {
    const registerForm = document.querySelector('form.register-form');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = registerForm.querySelector('#email').value;
        const password = registerForm.querySelector('#password').value;
        showNotification("Turimo kugerageza...", true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                showNotification("Wiyandikishije neza! Ubu woherejwe ku ipaji yo kwinjira.", true);
                setTimeout(() => { window.location.href = 'login.html'; }, 2000);
            })
            .catch((error) => {
                showNotification("Habaye ikosa: " + error.code, false);
            });
    });
}

// --- LOGIC Y'IPAJI YO KWINJIRA (LOGIN) - IGICE GISHYA ---
if (document.querySelector('form.login-form')) {
    const loginForm = document.querySelector('form.login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('#email').value;
        const password = loginForm.querySelector('#password').value;
        showNotification("Turimo kugerageza kwinjira...", true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Byakunze! Tuzamwohereza ahandi (nka Dashboard)
                showNotification("Winjiye neza! Murakaza neza!", true);
                // Nko mu gihe kiri imbere, tuzamwohereza kuri 'dashboard.html'
                setTimeout(() => { window.location.href = 'index.html'; }, 2000);
            })
            .catch((error) => {
                showNotification("Habaye ikosa: Imeri cyangwa ijambobanga si byo.", false);
            });
    });
}

// --- LOGIC Y'IPAJI YO KWIBAGIRWA IJAMBOBANGA (FORGOT) - IGICE GISHYA ---
if (document.querySelector('form.forgot-form')) {
    const forgotForm = document.querySelector('form.forgot-form');
    forgotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = forgotForm.querySelector('#email').value;
        showNotification("Turimo kohereza... Tegereza.", true);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                showNotification("Twakohereje ubutumwa kuri imeri yawe. Reba muri email.", true);
            })
            .catch((error) => {
                showNotification("Habaye ikosa: " + error.code, false);
            });
    });
}
