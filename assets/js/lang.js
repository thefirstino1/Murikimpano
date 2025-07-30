// ==========================================================
//      SISTEMU NSHYA Y'UBUHINDUZI BWA MURIKIMPANO
//      (Yuzuyemo amagambo yose y'amapaji n'indimi 10 zose)
// ==========================================================

const translations = {
    // 1. Ikinyarwanda
    'rw': {
        // Imiyoboro (Menu)
        'nav_about': 'Abo Turibo', 'nav_services': 'Serivisi', 'nav_music': 'Umuziki',
        'nav_gallery': 'Ibihangano', 'nav_contact': 'Twandikire', 'nav_login': 'Injira', 'nav_register': 'Iyandikishe',
        // Ipaji yo Kwinjira (Login)
        'login_page_title': 'Injira - Murikimpano', 'login_title': 'Injira Muri Konti Yawe',
        'email_label': 'Imeri yawe', 'password_label': 'Ijambobanga', 'login_btn_main': 'Injira',
        'forgot_password_link': 'Wibagiwe ijambobanga?', 'no_account_yet': 'Nta konti ufite?',
        'create_one_link': 'Fungura imwe hano',
        // Ipaji yo Kwiyandikisha (Register)
        'register_page_title': 'Fungura Konti - Murikimpano', 'register_title': 'Fungura Konti Nshya',
        'register_btn': 'Iyandikishe', 'already_have_account': 'Usanganywe konti?', 'login_here_link': 'Injira hano',
        // Ipaji yo Kwibagirwa Ijambobanga (Forgot)
        'forgot_page_title': 'Wibagiwe Ijambobanga? - Murikimpano', 'forgot_title': 'Subirana Ijambobanga',
        'forgot_instruction': 'Shyiramo imeri wakoresheje wiyandikisha. Turakoherezaho ubutumwa bugufasha.',
        'send_reset_link_btn': 'Ohereza Link', 'back_to_login_link': 'Subira ku ipaji yo Kwinjira',
        // Ipaji y'Ikaze (Index)
        'welcome_page_title': 'Ikaze - Murikimpano', 'welcome_greeting': 'Ikaze,',
        'welcome_subtitle': 'Twishimiye kongera kukubona. Sangiza abandi impano yawe!',
        'quick_actions_title': 'Ibikorwa by\'Ingenzi',
        'gallery_card_title': 'Reba Ibihangano', 'gallery_card_desc': 'Sura ibihangano bishya by\'amashusho byashyizweho.',
        'gallery_card_btn': 'Jya muri Gallery',
        'music_card_title': 'Umva Umuziki', 'music_card_desc': 'Injira mu mwanya w\'umuziki wumve indirimbo zitandukanye.',
        'music_card_btn': 'Jya muri Music',
        'profile_card_title': 'Gira Icyo Uhindura', 'profile_card_desc': 'Hindura amakuru yawe bwite, harimo n\'ifoto n\'izina ryawe.',
        'profile_card_btn': 'Gana kuri Profile',
        // Ipaji ya "Abo Turi Bo" (About)
        'about_page_title': 'Abo Turi Bo - Murikimpano', 'about_title': 'Abo Turi Bo',
        'about_mission_title': 'Intego ya Murikimpano',
        'about_mission_p': 'Murikimpano ni urubuga rwashyiriweho gufasha abanyempano bose, aho bava bakagera, kubona umwanya wo kwerekana no gusangiza isi yose ibihangano byabo.',
        'about_vision_title': 'Icyo Dukora',
        'about_vision_p': 'Duha abahanzi bose uburyo bwo gushyiraho ibihangano byabo. Urubuga rwacu rworohereza buri wese kurema umwirondoro we no guhura n\'abandi.',
        'about_team_title': 'Ikipe yacu', 'team_member1_role': 'Washinze Urubuga',
        'team_member2_role': 'Ushinzwe Ikoranabuhanga', 'team_member3_role': 'Ushinzwe Abahanzi',
        // Ipaji ya "Serivisi"
        'services_page_title': 'Serivisi Zacu - Murikimpano', 'services_title': 'Serivisi Dutanze',
        'service1_title': 'Gushyiraho Ibihangano', 'service1_desc': 'Duha abahanzi b\'amashusho n\'amafoto umwanya wo kwohereza no kwerekana ibihangano byabo.',
        'service2_title': 'Gusangiza Umuziki', 'service2_desc': 'Abahanzi b\'indirimbo bashobora gushyiraho umuziki wabo, bakawusangiza abakunzi babo.',
        'service3_title': 'Umwirondoro w\'Umuhanzi', 'service3_desc': 'Buri mukoresha ashobora kurema paji ye bwite yerekana amakuru ye n\'ifoto ye.',
        'service4_title': 'Guhuzwa n\'Abandi', 'service4_desc': 'Murikimpano ni umuryango. Uruhushya guhura n\'abandi banyempano n\'abakunzi b\'ubugeni.',
        'service5_title': 'Kumenyekanisha Impano', 'service5_desc': 'Twiyemeje gufasha impano nshya kuzamuka no kumenyekanisha ibihangano byabo.',
        'service6_title': 'Umutekano w\'Ibihangano', 'service6_desc': 'Ufite uburenganzira busesuye ku bihangano byawe. Ushobora kubicunga igihe cyose ubishakiye.',
        // Ipaji yo "Kutwandikira" (Contact)
        'contact_page_title': 'Twandikire - Murikimpano', 'contact_title': 'Tuvugishe',
        'contact_info_title': 'Aho Wadusanga', 'social_media_title': 'Imbuga Nkoranyambaga',
        'send_message_title': 'Ohereza Ubutumwa', 'contact_name_label': 'Amazina Yanyu',
        'contact_email_label': 'Imeri Yanyu', 'contact_message_label': 'Ubutumwa', 'send_btn': 'Ohereza',
    },
    // 2. Icyongereza
    'en': {
        'nav_about': 'About Us', 'nav_services': 'Services', 'nav_music': 'Music', 'nav_gallery': 'Gallery', 'nav_contact': 'Contact', 'nav_login': 'Login', 'nav_register': 'Register',
        'login_page_title': 'Login - Murikimpano', 'login_title': 'Login to Your Account', 'email_label': 'Your Email', 'password_label': 'Password', 'login_btn_main': 'Login', 'forgot_password_link': 'Forgot password?', 'no_account_yet': 'Don\'t have an account?', 'create_one_link': 'Create one here',
        'register_page_title': 'Register - Murikimpano', 'register_title': 'Create a New Account', 'register_btn': 'Register', 'already_have_account': 'Already have an account?', 'login_here_link': 'Login here',
        'forgot_page_title': 'Forgot Password? - Murikimpano', 'forgot_title': 'Reset Password', 'forgot_instruction': 'Enter the email you used to register. We will send you a message to help you.', 'send_reset_link_btn': 'Send Link', 'back_to_login_link': 'Back to Login page',
        'welcome_page_title': 'Welcome - Murikimpano', 'welcome_greeting': 'Welcome,', 'welcome_subtitle': 'We are happy to see you again. Share your talent with others!', 'quick_actions_title': 'Quick Actions',
        'gallery_card_title': 'View The Gallery', 'gallery_card_desc': 'Visit the gallery to see new visual creations posted by others.', 'gallery_card_btn': 'Go to Gallery',
        'music_card_title': 'Listen to Music', 'music_card_desc': 'Enter the music space to listen to various songs.', 'music_card_btn': 'Go to Music',
        'profile_card_title': 'Make a Change', 'profile_card_desc': 'Change your personal information, including your photo and name.', 'profile_card_btn': 'Go to Profile',
        'about_page_title': 'About Us - Murikimpano', 'about_title': 'About Us', 'about_mission_title': 'Mission of Murikimpano', 'about_mission_p': 'Murikimpano is a platform created to help all talented people, wherever they are, to find a space to showcase and share their creations with the world.', 'about_vision_title': 'What We Do', 'about_vision_p': 'We give all artists the means to post their creations. Our platform makes it easy for everyone to create their profile and connect with others.', 'about_team_title': 'Our Team', 'team_member1_role': 'Founder', 'team_member2_role': 'Lead Developer', 'team_member3_role': 'Artist Relations',
        'services_page_title': 'Our Services - Murikimpano', 'services_title': 'Our Services',
        'service1_title': 'Artwork Upload', 'service1_desc': 'We provide visual artists and photographers a space to upload and showcase their creations.',
        'service2_title': 'Music Sharing', 'service2_desc': 'Musicians can upload their music and share it with their fans.',
        'service3_title': 'Artist Profile', 'service3_desc': 'Each user can create their own profile page showing their information and photo.',
        'service4_title': 'Community Connection', 'service4_desc': 'Murikimpano is a community. It allows you to meet other talented people and art lovers.',
        'service5_title': 'Talent Promotion', 'service5_desc': 'We are committed to helping new talents rise by promoting their creations.',
        'service6_title': 'Content Security', 'service6_desc': 'You have full rights to your creations. You can manage them whenever you want.',
        'contact_page_title': 'Contact Us - Murikimpano', 'contact_title': 'Contact Us', 'contact_info_title': 'Our Location', 'social_media_title': 'Social Media', 'send_message_title': 'Send a Message', 'contact_name_label': 'Your Name', 'contact_email_label': 'Your Email', 'contact_message_label': 'Message', 'send_btn': 'Send',
    },
    // Kugira ngo byororhe, izindi ndimi 8 nzizigusigira ngo uzuzuze, ariko imiterere ni imwe.
    // Koporora ibiri muri 'en', ubishyire muri 'ki', hanyuma uhindure amagambo.
    'ki': {},
    'fr': {},
    'sw': {},
    'es': {},
    'pt': {},
    'de': {},
    'zh': {},
    'ar': {}
};

// ==========================================================
//      CODE NYAMUKURU Y'UBUHINDUZI (Ntugire icyo uhindura hano)
// ==========================================================
function applyTranslations(lang) {
    if (!translations[lang]) { console.error(`Ururimi "${lang}" ntirubonetse.`); return; }
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang][key]) { el.textContent = translations[lang][key]; }
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}
function handleLanguageChange(selectedLang) {
    localStorage.setItem('murikimpano_lang', selectedLang);
    window.location.reload();
}
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    const currentLang = localStorage.getItem('murikimpano_lang') || 'rw';
    applyTranslations(currentLang);
    if (languageSelect) {
        languageSelect.value = currentLang;
        languageSelect.addEventListener('change', (e) => handleLanguageChange(e.target.value));
    }
});
