
import {Selector} from 'testcafe';
import NavbarPage from '../page-objects/Home-Navbar'

const navbarPage = new NavbarPage

fixture `Forgotten Password Test`
.page `http://zero.webappsecurity.com/index.html`

test ('user forgot the password testcase', async t => {

    //selectors
    const signinButton = Selector('#signin_button') 
    const forgotPasswordButton = Selector("a").withText('Forgot your password ?')
    const email = Selector('#user_email')
    const sendPassword = Selector('.btn-primary')
    const message = Selector(".offset3")

    //actions
  
    await t.click(navbarPage.signInButton)
    await t.click(forgotPasswordButton)
    await t.typeText(email, 'test@email.com', {paste: true})
    await t.click(sendPassword)

    //assertions

    await t.expect(message.innerText).contains("Your password will be sent to the following email")
    await t.expect(email.exists).notOk()


})
