// assets/js/nav.js

// Importa ibyo dukeneye byose: serivisi ya auth, umurinzi, na function yo gusohoka
import { auth } from './firebase.js'; 
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { logoutUser } from './auth.js'; 

// Aho tuzashyira menu yacu kuri buri paji
const navbarPlaceholder = document.getElementById('nav-placeholder');

// Iyi function ni UMURINZI: ihora ireba niba umuntu yarinjiye cyangwa atarinjiye
document.addEventListener('DOMContentLoaded', () => {
    onAuthStateChanged(auth, user => {
        let navHTML = ''; // Ubu ni ubusa, tugiye kubwubaka

        // IGENZURA: Ese hari umukoresha warinjiye?
        if (user) {
            // EGO, YARINJIYE. Reka tumwereke menu y'abantu barimo.
            console.log("Menu: Umukoresha arimo ->", user.displayName || user.email);
            navHTML = `
                <nav class="main-nav">
                    <a href="index.html" class="nav-logo">MURIKIMPANO</a>
                    <div class="nav-links">
                        <a href="gallery.html" data-lang-key="nav_gallery">Ibihangano</a>
                        <a href="music.html" data-lang-key="nav_music">Umuziki</a>
                        <a href="services.html" data-lang-key="nav_services">Serivisi</a>
                        <a href="profile.html">Umwirondoro wanjye</a>
                        <a href="#" id="logout-link" class="nav-button">Sohoka</a>
                    </div>
                </nav>
            `;
        } else {
            // OYA, NTARINJIYE. Reka tumwereke menu y'abashyitsi.
            console.log("Menu: Nta mukoresha urimo (umushyitsi).");
            navHTML = `
                <nav class="main-nav">
                    <a href="index.html" class="nav-logo">MURIKIMPANO</a>
                    <div class="nav-links">
                        <a href="about.html" data-lang-key="nav_about">Abo Turibo</a>
                        <a href="contact.html" data-lang-key="nav_contact">Twandikire</a>
                        <a href="login.html" data-lang-key="nav_login" class="nav-button">Injira</a>
                        <a href="register.html" data-lang-key="nav_register" class="nav-button nav-button-primary">Iyandikishe</a>
                    </div>
                </nav>
            `;
        }

        // Shyira ya menu twubatse mu gace kabugenewe
        if (navbarPlaceholder) {
            navbarPlaceholder.innerHTML = navHTML;
        }
        
        // Niba umukoresha yarinjiye, tugomba gutuma buto ya "Sohoka" ikora
        if (user) {
            const logoutLink = document.getElementById('logout-link');
            if (logoutLink) {
                logoutLink.addEventListener('click', (e) => {
                    e.preventDefault(); // Hagarika link ngo itajya ahandi
                    logoutUser().then(() => {
                        console.log("Umukoresha asohotse biciye kuri menu.");
                        window.location.href = 'login.html'; // Muhite mumwohereza kuri login
                    }).catch(error => {
                        console.error("Ikosa ryo gusohoka:", error);
                    });
                });
            }
        }
    });
});```

