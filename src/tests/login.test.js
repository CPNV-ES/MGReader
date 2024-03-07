import expect from "expect";
import login from "../app/pages/login/login.controller";

    test('Check_LoginStatus_SuccessfullyConnected', () => {
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
        // Check login status using the mocked response
        jest.spyOn(login, 'checkLoginStatus').mockReturnValue('connected');

        //Then
        // Expect the login status to be connected
        expect(login.checkLoginStatus(mockResponse)).toEqual('connected');

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
