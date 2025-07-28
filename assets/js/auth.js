// Ntabwo tugikeneye "import" kuko firebase.js iba yamaze gukora byose.
// Tura na serivisi yo kwiyandikisha twakoze muri firebase.js
// Iyi code ikoresha "firebase" object iba yamaze guteranywa na CDN
const authService = firebase.auth();

// Igikorwa cyo kwerekana ubutumwa bw'amakuru (notification)
function showNotification(message, isSuccess) {
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) { existingNotif.remove(); }
    const notification = document.createElement('div');
    notification.className = `notification ${isSuccess ? 'success' : 'error'}`;
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => { if (notification) notification.remove(); }, 5000);
}

// --- LOGIC Y'IPAJI YO KWIYANDIKISHA (REGISTER) ---
if (document.querySelector('form.register-form')) {
    const form = document.querySelector('form.register-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;
        showNotification("Turimo kubika amakuru...", true);
        authService.createUserWithEmailAndPassword(email, password)
            .then(() => {
                showNotification("Wiyandikishije neza! Ubu woherejwe aho winjirira.", true);
                setTimeout(() => { window.location.href = 'login.html'; }, 2000);
            })
            .catch((error) => {
                showNotification("Ikosa: " + error.message, false);
            });
    });
}

// N'izindi paji nazo tuzazikora gutya
