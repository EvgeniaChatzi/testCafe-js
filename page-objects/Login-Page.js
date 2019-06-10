
import {Selector, t} from 'testcafe';

class LoginPage{

    constructor() {
        this.userLoginField = Selector('#user_login')
        this.passwordLoginField = Selector('#user_password')
        this.loginForm = Selector('#login_form')
        this.alertError = Selector('.alert-error')
    }

    async login(username, password) {
        await t
        .typeText(this.userLoginField, username)
        .typeText(this.passwordLoginField, password)
        .pressKey('enter')

    }

}

export default LoginPage