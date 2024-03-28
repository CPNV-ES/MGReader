import i18next from '../../../node_modules/i18next/dist/esm/i18next.js';


i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                "about us": "About Us",
                "login": "Login",
                "our services": "Our Services",
                "japanese Mangas": "Japanese Mangas",
                "chinese manhuas": "Chinese Manhuas",
                "korean manhwas": "Korean Manhwas",
                "reserve": "Reserve",
                "featured mangas": "Featured Mangas",
            }
        },
        fr: {
            translation: {
                "about us": "À propos de nous",
                "login": "S'identifier",
                "our services": "Nos services",
                "japanese Mangas": "Mangas Japonais",
                "chinese manhuas": "Manhuas Chinois",
                "korean manhwas": "Manhwas Coréens",
                "reserve": "Réserver",
                "featured mangas": "Mangas en vedette",
            }
        },
        de: {
            translation: {
                "about us": "Über uns",
                "login": "Anmeldung",
                "our services": "Unsere Dienstleistungen",
                "japanese Mangas": "Japanische Mangas",
                "chinese manhuas": "Chinesische Manhuas",
                "korean manhwas": "Koreanische Manhwas",
                "reserve": "Reservieren",
                "featured mangas": "Vorgestellte Mangas",
            }
        }
    }
});

function translateCurrentPage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = i18next.t(key);
    });
}

document.getElementById('language-switcher').addEventListener('change', function () {
    console.log('Language switcher changed');
    const selectedLanguage = this.value;
    i18next.changeLanguage(selectedLanguage, () => {
        translateCurrentPage();
    });
});


translateCurrentPage();