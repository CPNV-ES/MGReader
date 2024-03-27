import {i18n, init, changeLanguage } from 'i18next';


export class LocalizationService {
    constructor() {
        this.language = 'en';
        this.changeLanguage = this.changeLanguage.bind(this);
        this.init = this.init.bind(this);
        this.translate = this.translate.bind(this);
    }

    changeLanguage(language) {
        this.language = language;
        changeLanguage(language).then(r => {
            console.log('Language changed to ' + language);
        });
    }



  init() {
      init({
          lng: this.language,
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
    }

    translate(key) {
        return i18n.t(key);
    }
}