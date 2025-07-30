// ==========================================================
//          MURIKIMPANO - PROFESSIONAL TRANSLATION SYSTEM
// ==========================================================

// --- DICTIONARY OF ALL 10 LANGUAGES ---
// This is the single source of truth. Add all text keys here.
const translations = {
    // 1. Kinyarwanda
    'rw': {
        'nav_about': 'Abo Turibo', 'nav_services': 'Serivisi', 'nav_music': 'Umuziki',
        'nav_gallery': 'Ibihangano', 'nav_contact': 'Twandikire', 'nav_login': 'Injira',
        'nav_register': 'Iyandikishe', 'login_title': 'Injira Muri Konti Yawe', 
        'register_title': 'Fungura Konti Nshya',
    },
    // 2. Kirundi
    'ki': {
        'nav_about': 'Abo Turi', 'nav_services': 'Ibitunganywa', 'nav_music': 'Umuziki',
        'nav_gallery': 'Ibikorwa', 'nav_contact': 'Twandikire', 'nav_login': 'Injira',
        'nav_register': 'Iyandikishe', 'login_title': 'Injira muri Konti yawe',
        'register_title': 'Ugurura Konti Nshasha',
    },
    // 3. English
    'en': {
        'nav_about': 'About Us', 'nav_services': 'Services', 'nav_music': 'Music',
        'nav_gallery': 'Gallery', 'nav_contact': 'Contact Us', 'nav_login': 'Login',
        'nav_register': 'Register', 'login_title': 'Login to Your Account',
        'register_title': 'Create a New Account',
    },
    // 4. Français
    'fr': {
        'nav_about': 'À Propos', 'nav_services': 'Services', 'nav_music': 'Musique',
        'nav_gallery': 'Galerie', 'nav_contact': 'Contactez-nous', 'nav_login': 'Connexion',
        'nav_register': 'S\'inscrire', 'login_title': 'Connectez-vous',
        'register_title': 'Créer un compte',
    },
    // 5. Kiswahili
    'sw': {
        'nav_about': 'Kuhusu Sisi', 'nav_services': 'Huduma', 'nav_music': 'Muziki',
        'nav_gallery': 'Matunzio', 'nav_contact': 'Wasiliana Nasi', 'nav_login': 'Ingia',
        'nav_register': 'Jisajili', 'login_title': 'Ingia kwenye Akaunti Yako',
        'register_title': 'Fungua Akaunti Mpya',
    },
    // 6. Español (Spanish)
    'es': {
        'nav_about': 'Sobre Nosotros', 'nav_services': 'Servicios', 'nav_music': 'Música',
        'nav_gallery': 'Galería', 'nav_contact': 'Contacto', 'nav_login': 'Iniciar Sesión',
        'nav_register': 'Registrarse', 'login_title': 'Inicia Sesión en tu Cuenta',
        'register_title': 'Crear una Nueva Cuenta',
    },
    // 7. Português (Portuguese)
    'pt': {
        'nav_about': 'Sobre Nós', 'nav_services': 'Serviços', 'nav_music': 'Música',
        'nav_gallery': 'Galeria', 'nav_contact': 'Contato', 'nav_login': 'Entrar',
        'nav_register': 'Registrar-se', 'login_title': 'Faça Login na Sua Conta',
        'register_title': 'Criar uma Nova Conta',
    },
    // 8. Deutsch (German)
    'de': {
        'nav_about': 'Über Uns', 'nav_services': 'Dienste', 'nav_music': 'Musik',
        'nav_gallery': 'Galerie', 'nav_contact': 'Kontakt', 'nav_login': 'Anmelden',
        'nav_register': 'Registrieren', 'login_title': 'In Ihrem Konto anmelden',
        'register_title': 'Neues Konto erstellen',
    },
    // 9. 中文 (Mandarin Chinese)
    'zh': {
        'nav_about': '关于我们', 'nav_services': '服务', 'nav_music': '音乐',
        'nav_gallery': '画廊', 'nav_contact': '联系我们', 'nav_login': '登录',
        'nav_register': '注册', 'login_title': '登录您的帐户',
        'register_title': '创建一个新帐户',
    },
    // 10. العربية (Arabic)
    'ar': {
        'nav_about': 'معلومات عنا', 'nav_services': 'خدمات', 'nav_music': 'موسيقى',
        'nav_gallery': 'معرض الصور', 'nav_contact': 'اتصل بنا', 'nav_login': 'تسجيل الدخول',
        'nav_register': 'التسجيل', 'login_title': 'تسجيل الدخول إلى حسابك',
        'register_title': 'انشاء حساب جديد',
    },
};

/**
 * Applies the translations to the current page based on the selected language.
 * @param {string} lang - The language code (e.g., 'en', 'rw').
 */
function applyTranslations(lang) {
    if (!translations[lang]) {
        console.error(`Language "${lang}" not found in translations.`);
        return;
    }
    
    // Find all elements that have a 'data-lang-key' attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else {
            // Optional: Log a warning if a key is missing for a language
            console.warn(`Translation key "${key}" not found for language "${lang}".`);
        }
    });

    // Also set the document's lang and dir attributes for accessibility and correct layout
    document.documentElement.lang = lang;
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl'; // Right-to-Left for Arabic
    } else {
        document.documentElement.dir = 'ltr'; // Left-to-Right for all others
    }
}

/**
 * Handles the language change event.
 * Saves the selected language and reloads the page.
 * @param {string} selectedLang - The new language to switch to.
 */
function handleLanguageChange(selectedLang) {
    // 1. Save the new language choice to local storage
    localStorage.setItem('murikimpano_lang', selectedLang);
    
    // 2. Reload the page
    // The browser will reload, and the code below will handle applying the new language.
    window.location.reload();
}


// --- MAIN EXECUTION SCRIPT ---
// This runs as soon as the DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    
    // Get the saved language from local storage, or default to Kinyarwanda ('rw')
    const currentLang = localStorage.getItem('murikimpano_lang') || 'rw';

    // 1. Apply the translations for the current language
    applyTranslations(currentLang);

    // 2. Set the dropdown to show the current language
    if (languageSelect) {
        languageSelect.value = currentLang;

        // 3. Listen for a user changing the language in the dropdown
        languageSelect.addEventListener('change', (event) => {
            handleLanguageChange(event.target.value);
        });
    }
});
