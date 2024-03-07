export default {
    // Return the status of the mockResponse
    checkLoginStatus: function(User) {
        return User.status;
    },

    // Log a person into our app after Facebook has authenticated him
    logPersonIn: function(User) {
        // Logic to create a session with the user
        return 'logged';
    },

