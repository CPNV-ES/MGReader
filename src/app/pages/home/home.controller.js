import { LocalizationService } from '../../services/localization.service.js';
class HomeController {

  constructor() {
    this.LocalizationService = new LocalizationService;

  }

  changeLanguage(language) {
    this.LocalizationService.changeLanguage(language);
  }

  getTranslation(key) {
    return this.LocalizationService.translate(key);
  }
}