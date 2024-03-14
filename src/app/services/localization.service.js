export class LocalizationService {
  constructor() {
    this.language = 'en';
  }

  setLanguage(language) {
    this.language = language;
  }

  translate(word) {
    switch (this.language) {
      case 'fr':
        return 'Bonjour';
      case 'de':
        return 'Hallo';
      default:
        return word;
    }
  }


}