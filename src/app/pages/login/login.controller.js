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

    // Log a person out of our app and send the logout back to Facebook
    logPersonOut: function(callback) {
        // Logic to destroy the session with the user
        callback();
},};
