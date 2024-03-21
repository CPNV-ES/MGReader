const { Builder, By, until } = require('selenium-webdriver');
jest.mock('i18next', () => ({
  init: jest.fn(),
  changeLanguage: jest.fn(),
}));

describe('Header translation', function() {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('file://C:/SchoolPJS/MGReader/src/app/pages/home/home.html');
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('should translate header text to French', async () => {
        await driver.executeScript("document.getElementById('language-switcher').value = 'fr';");
    
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
    
    test('should translate header text to English', async () => {
        await driver.executeScript("document.getElementById('language-switcher').value = 'en';");
    
        const aboutUsElement = await driver.wait(until.elementLocated(By.id('About-us')), 5000);
        const aboutUsText = await aboutUsElement.getText();
    
        const ourServiceElement = await driver.wait(until.elementLocated(By.id('Our-service')), 5000);
        const ourServiceText = await ourServiceElement.getText();
    
        const loginElement = await driver.wait(until.elementLocated(By.id('login')), 5000);
        const loginText = await loginElement.getText();
    
        expect(aboutUsText).toBe('About us');
        expect(ourServiceText).toBe('Our service');
        expect(loginText).toBe('Login');
    });
    
    test('should translate header text to German', async () => {
        await driver.executeScript("document.getElementById('language-switcher').value = 'de';");
    
        const aboutUsElement = await driver.wait(until.elementLocated(By.id('About-us')), 5000);
        const aboutUsText = await aboutUsElement.getText();
    
        const ourServiceElement = await driver.wait(until.elementLocated(By.id('Our-service')), 5000);
        const ourServiceText = await ourServiceElement.getText();
    
        const loginElement = await driver.wait(until.elementLocated(By.id('login')), 5000);
        const loginText = await loginElement.getText();
    
        expect(aboutUsText).toBe('Über uns');
        expect(ourServiceText).toBe('Unser Service');
        expect(loginText).toBe('Anmelden');
    });
    
});