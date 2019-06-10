
import {Selector} from 'testcafe';
import NavbarPage from '../page-objects/Home-Navbar'
import LoginPage from '../page-objects/Login-Page'

const navbarPage = new NavbarPage()
const loginPage = new LoginPage()

fixture `Login Test`
.page `http://zero.webappsecurity.com/index.html`

test ('negative test for login', async t => {
    //get selectors
    // const signinButton = Selector('#signin_button')
    // const userLoginField = Selector('#user_login')
    // const passwordLoginField = Selector('#user_password')
    // const submitSignInButton = Selector('.btn-primary')
    // const alertError = Selector('.alert-error').innerText
    // const loginForm = Selector('#login_form')

    //perform actions
   
    //await t.click(navbarPage.signInButton)
    navbarPage.clickTheSighInButton()
    loginPage.login('Zenya', 'test123')
    // await t.typeText(userLoginField, 'User Name', {paste:true})
    // await t.typeText(passwordLoginField, 'Password', {paste:true})
    // await t.pressKey ('enter')


    /****** ASSERTIONS ******/
    await t
         .expect (loginPage.alertError.innerText)
         .contains('Login and/or password are wrong.')
    await t.expect(loginPage.loginForm.exists).ok()


})

