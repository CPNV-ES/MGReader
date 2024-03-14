const { Builder, By, until } = require('selenium-webdriver');
const i18next = require('i18next');

describe('Header translation', function() {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('file://C:/SchoolPJS/MGReader/src/app/pages/home/home.html');

        await i18next.init({
            lng: 'en',
            resources: {
                en: { translation: { 'About-us': 'About us', 'Our-service': 'Our service', 'login': 'Login' } },
                fr: { translation: { 'About-us': 'À propos de nous', 'Our-service': 'Notre service', 'login': 'S\'identifier' } },
                // Add other languages here...
            },
        });
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('should translate header text to French', async () => {
        await i18next.changeLanguage('fr');

        const aboutUsElement = await driver.wait(until.elementLocated(By.id('About-us')), 5000);
        const aboutUsText = await aboutUsElement.getText();

        const ourServiceElement = await driver.wait(until.elementLocated(By.id('Our-service')), 5000);
        const ourServiceText = await ourServiceElement.getText();

        const loginElement = await driver.wait(until.elementLocated(By.id('login')), 5000);
        const loginText = await loginElement.getText();

        expect(aboutUsText).toBe('À propos de nous');
        expect(ourServiceText).toBe('Notre service');
        expect(loginText).toBe('S\'identifier');
    });

    // Repeat the test for other languages...
});