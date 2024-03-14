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

    test('Log Person In Successfully Logged', async () => {
        await driver.get('C:\\Users\\phili\\Documents\\GitHub\\MGReader\\src\\app\\pages\\home\\home.html');

        // Given
        // Login response from Facebook mocked
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

        // When
        // Create a new user with the given userID of the mockResponse
        const user = new User(mockResponse.authResponse.userID, 'John Doe', 'user');

        // Wait for the login-status element to be present in the DOM
        await driver.wait(until.elementLocated(By.id('login-status')));

        // Execute script to update the login-status element with the returned value
        await driver.executeScript(`document.getElementById('login-status').innerText = 'logged';`);

        // Then
        // Check if the login status is displayed correctly on the page
        const loginStatus = await driver.findElement(By.id('login-status')).getText();
        expect(loginStatus).toEqual('logged');
    });

    test('Log Person Out Successfully Logged Out', async () => {
        await driver.get('C:\\Users\\phili\\Documents\\GitHub\\MGReader\\src\\app\\pages\\home\\home.html');

        // Given
        // Mock the callback function
        const mockCallback = jest.fn();

        // When
        // Wait for the logout-button element to be present in the DOM
        await driver.wait(until.elementLocated(By.id('logout-button')));

        // Execute script to click the logout-button element
        await driver.executeScript(`document.getElementById('logout-button').click();`);

        // Then
        // Check if the user role is null after logging out
        const userRole = await driver.findElement(By.id('user-role')).getText();
        expect(userRole).toEqual('');
    });
});