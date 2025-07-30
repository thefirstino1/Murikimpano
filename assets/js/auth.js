// Iyi kode nshya ntabwo ikoresha "import"
// Irasanga "firebase" object yamaze gukorwa.

function showNotification(message, isSuccess) {
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) { existingNotif.remove(); }
    const notification = document.createElement('div');
    notification.className = `notification ${isSuccess ? 'success' : 'error'}`;
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => { if (notification) notification.remove(); }, 5000);
}

// --- Ipaji yo Kwiyandikisha ---
if (document.querySelector('form.register-form')) {
    const form = document.querySelector('form.register-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;
        showNotification("Turimo kubika amakuru...", true);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                showNotification("Wiyandikishije neza! Ubu woherejwe aho winjirira.", true);
                setTimeout(() => { window.location.href = 'login.html'; }, 2000);
            })
            .catch((error) => { showNotification("Ikosa: " + error.message, false); });
    });
}

// --- Ipaji yo Kwinjira ---
if (document.querySelector('form.login-form')) {
    const form = document.querySelector('form.login-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;
        showNotification("Turimo kugerageza...", true);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                showNotification("Winjiye neza! Murakaza neza!", true);
                setTimeout(() => { window.location.href = 'index.html'; }, 2000);
            })
            .catch(() => { showNotification("Ikosa: Imeri cyangwa ijambobanga si byo.", false); });
    });
}

// --- Ipaji yo Kwibagirwa Ijambobanga ---
if (document.querySelector('form.forgot-form')) {
    const form = document.querySelector('form.forgot-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('#email').value;
        showNotification("Turimo kohereza imeri...", true);
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                showNotification("Twakohereje ubutumwa. Reba muri imeri yawe.", true);
            })
            .catch((error) => { showNotification("Ikosa: " + error.message, false); });
    });
      }
