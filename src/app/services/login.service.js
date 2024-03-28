import MetaService from "meta.service";
import User from "../models/user";
class LoginService {
    authService: any;

    constructor(metaService: MetaService) {
        this.authService = new metaService();
        this.authService.init();
    }

    login() {
        const user = new User();
        const authResponse = this.authService.login();
        user.setStatus(authResponse);
        user.setAuthId(authResponse);
    }

    logout() {
        return this.authService.logout();
    }
}
module.exports = LoginService;