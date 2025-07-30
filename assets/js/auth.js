// assets/js/nav.js

import { auth } from './firebase.js'; // Ihamagara Firebase auth service
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { logoutUser } from './auth.js'; // Ihamagara function yo gusohoka

// Aho tuzashyira menu yacu kuri buri paji
const navbarPlaceholder = document.getElementById('navbar-placeholder');

// Iyi function ni umurinzi: ihora ireba niba umuntu yarinjiye
onAuthStateChanged(auth, user => {
    let navHTML = ''; // Ubu ni ubusa, tugiye kubwubaka

    if (user) {
        // NIBA UMUKORESHA YINJIYE (LOGGED IN)
        console.log("Menu: Umukoresha arimo", user.email);
        navHTML = `
            <nav class="main-nav">
                <a href="index.html" class="nav-logo">Murikimpano</a>
                <ul>
                    <li><a href="gallery.html">Aho barebera Impano</a></li>
                    <li><a href="music.html">Umwanya w'Umuziki</a></li>
                    <li><a href="services.html">Serivisi zacu</a></li>
                    <li><a href="#" id="logout-link">Sohoka</a></li>
                </ul>
            </nav>
        `;
    } else {
        // NIBA UMUKORESHA ATARINJIYE (LOGGED OUT)
        console.log("Menu: Nta mukoresha urimo.");
        navHTML = `
            <nav class="main-nav">
                <a href="index.html" class="nav-logo">Murikimpano</a>
                <ul>
                    <li><a href="about.html">Abo Turi Bo</a></li>
                    <li><a href="contact.html">Twandikire</a></li>
                    <li><a href="login.html" class="nav-button">Injira</a></li>
                    <li><a href="register.html" class="nav-button nav-button-primary">Iyandikishe</a></li>
                </ul>
            </nav>
        `;
    }

    // Shyira ya menu twubatse muri cya cyanya twabiteguriye
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navHTML;
    }
    
    // Niba umukoresha yarinjiye, shyiraho uburyo bwo gusohoka
    if (user) {
        const logoutLink = document.getElementById('logout-link');
        if (logoutLink) {
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault(); // Hagarika link ngo itajya ahandi
                logoutUser().then(() => {
                    console.log("Umukoresha asohotse biciye kuri menu.");
                    window.location.href = 'login.html'; // Muhite mumwohereza kuri login
                });
            });
        }
    }
});
