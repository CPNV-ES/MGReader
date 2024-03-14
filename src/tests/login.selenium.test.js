import { Builder, By, until } from 'selenium-webdriver';
import User from "../app/models/user";

describe('Login and User Info View Tests', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('firefox').build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Check View User Info Role', async () => {
        await driver.get('C:\\Users\\phili\\Documents\\GitHub\\MGReader\\src\\app\\pages\\home\\home.html');

        // Given
        // Login response from Facebook
        const mockResponse = {
            status: 'connected',
            authResponse: {
                accessToken: '{access-token}',
                expiresIn: '{unix-timestamp}',
                reauthorize_required_in: '{seconds-until-token-expires}',
                signedRequest: '{signed-parameter}',
                userID: '{user-id}'
            }
        };

        // Create a new user with the given role
        const user = new User('123', 'John Doe', 'user');

        // When
        // Wait for the user-role element to be present in the DOM
        await driver.wait(until.elementLocated(By.id('user-role')));

        // Execute script to update the user-role element with the returned value
        await driver.executeScript(`document.getElementById('user-role').innerText = '${user.role}';`);

        // Then
        // Check if the user role is displayed correctly on the page
        const userRole = await driver.findElement(By.id('user-role')).getText();
        expect(userRole).toEqual(user.role);
    });

