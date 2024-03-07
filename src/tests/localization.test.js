import expect from "expect";
import {LocalizationService} from "../app/services/localization.service";



describe('Multilingual Management', () => {
    let LS = new LocalizationService();

    it('should show greetings in French when language is set to French', () => {
        LS.setLanguage('fr');
        expect(LS.translate('Hello')).toBe('Bonjour');
    });

    it('should show greetings in English when language is set to English', () => {
        LS.setLanguage('en');
        expect(LS.translate('Hello')).toBe('Hello');
    });

    it('should show greetings in German when language is set to German', () => {
        LS.setLanguage('de');
        expect(LS.translate('Hello')).toBe('Hallo');
    });
});

