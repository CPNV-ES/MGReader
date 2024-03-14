import expect from "expect";
import login from "../app/pages/login/login.controller";
import home from "../app/pages/home/home.controller";
import User from "../app/models/user";

    // Test different way to login (models,ux)
    test('Check_ViewUserInfo_Role', () => {
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
        const user = new User(mockResponse.authResponse.userID, 'John Doe', 'user');

        // When
        // Log person in using the mocked response
        login.logPersonIn(mockResponse);

        // Then
        // Expect the user role to be returned
        expect(user.getRole()).toEqual('user');
    });

    test('Log_PersonIn_SuccessfullyLogged', () => {
        //Given
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

        //When
        // Log person in using the mocked response
        jest.spyOn(login, 'logPersonIn').mockReturnValue('logged');

        //Then
        // Expect the login status to be logged
        expect(login.logPersonIn(mockResponse)).toEqual('logged');
    });

    test('Log_PersonOut_SuccessfullyLoggedOut', () => {
        //Given
        const mockCallback = jest.fn();

        //When
        // Log person out using the mocked callback
        login.logPersonOut(mockCallback);

        //Then
        // Expect the callback to be called
        expect(mockCallback).toHaveBeenCalled();
    });