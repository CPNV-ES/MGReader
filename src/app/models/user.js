class User {
    status;
    authId;

    constructor() {
        this.status = "offline";
    }
    setStatus(authServiceResponse) {
        this.status = authServiceResponse.status;
    }

    setAuthId(authServiceResponse) {
        this.authId = authServiceResponse.authResponse.userID;
    }
}
module.exports = User;