import LoginService from '../../services/login.service';

class LoginController {
    loginService;

    constructor() {
        this.loginService = new LoginService();
    }

    logPersonIn(){
        this.loginService.login();
    }

    logPersonOut(){
        this.loginService.logout();
    }
}

module.exports = LoginController;