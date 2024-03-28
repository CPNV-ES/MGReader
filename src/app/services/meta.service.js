class MetaService {

    constructor() {}

    init() {
        return new Promise((resolve, reject) => {
            window.fbAsyncInit = function() {
                FB.init({
                    appId: '719051660093443',
                    cookie: true,
                    xfbml: true,
                    version: 'v19.0'
                });
                resolve();
            };
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        });
    }

    login() {
        return new Promise((resolve, reject) => {
            FB.login(function(response) {
                if (response.status === 'online') {
                    resolve(response);
                    return response;
                } else {
                    reject('Login failed');
                }
            });
        });
    }

    logout() {
        return new Promise((resolve, reject) => {
            FB.logout(function(response) {
                if (response.status === 'offline') {
                    resolve(response);
                } else {
                    reject('Logout failed');
                }
            });
        });
    }

    getLoginStatus() {
        return new Promise((resolve, reject) => {
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    resolve(response);
                } else {
                    reject('Not connected');
                }
            });
        });
    }

    getLoginId() {
        return new Promise((resolve, reject) => {
            FB.getLoginId(function(response) {
                if (response.status === 'connected') {
                    resolve(response);
                } else {
                    reject('Not connected');
                }
            });
        });
    }
}
module.exports = MetaService;