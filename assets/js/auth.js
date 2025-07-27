// Tura na serivisi yo kwiyandikisha twakoze muri firebase.js
import { auth } from './firebase.js';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Igikorwa cyo kwerekana ubutumwa bw'amakuru (notification)
function showNotification(message, isSuccess) {
    // Kubanza gusiba ubundi butumwa bwari buhari
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${isSuccess ? 'success' : 'error'}`;
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000); // Guhisha nyuma y'amasegonda 5
}

// --- LOGIC Y'IPAJI YO KWIYANDIKISHA (REGISTER) ---
// Turareba niba turi ku ipaji yo kwiyandikisha
if (document.querySelector('form.register-form')) {
    const registerForm = document.querySelector('form.register-form');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Kubuza ipaji kwisubiraho
        const email = registerForm.querySelector('#email').value;
        const password = registerForm.querySelector('#password').value;

        showNotification("Turimo kugerageza... Tegereza gato.", true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Byakunze!
                showNotification("Wiyandikishije neza! Ubu woherejwe ku ipaji yo kwinjira.", true);
                // Kohereza umuntu ku ipaji yo kwinjira nyuma y'akanya gato
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            })
            .catch((error) => {
                // Habaye ikosa
                showNotification("Habaye ikosa: " + error.message, false);
            });
    });
}

// --- LOGIC Y'IPAJI YO KWINJIRA (LOGIN) ---
// (Tuzayikora nyuma y'iyi ntambwe)

// --- LOGIC Y'IPAJI YO KWIBAGIRWA IJAMBOBANGA (FORGOT PASSWORD) ---
// (Tuzayikora nyuma y'iyi ntambwe)
