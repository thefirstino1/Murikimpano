// Iyi dosiye izajya ishyira imiyoboro ku mapaji yose

const navHTML = `
    <nav class="main-nav">
        <a href="index.html" class="nav-logo">MURIKIMPANO</a>
        <div class="nav-links">
            <a href="about.html" data-lang-key="nav_about">Abo Turibo</a>
            <a href="services.html" data-lang-key="nav_services">Serivisi</a>
            <a href="music.html" data-lang-key="nav_music">Umuziki</a>
            <a href="gallery.html" data-lang-key="nav_gallery">Ibihangano</a>
            <a href="contact.html" data-lang-key="nav_contact">Twandikire</a>
        </div>
    </nav>
`;

// Gushyira iyo kode mu gace kabugenewe
document.addEventListener('DOMContentLoaded', () => {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;
    }
});
