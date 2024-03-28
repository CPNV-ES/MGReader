import LoginService from '../../services/login.service.js';
let loginButton = document.getElementById('login-btn');

const loginService = new LoginService();
loginButton.addEventListener('click', function() {
    console.log('login button clicked');
    loginService.login();
});





