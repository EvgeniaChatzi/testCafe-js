
import {Selector} from 'testcafe';
import FeedbackPage from '../page-objects/Feedback-Page'

const feedbackPage = new FeedbackPage()

fixture `FeedbackForm`
.page `http://zero.webappsecurity.com/index.html`

test ('submit a feedback page test', async t => {

    //selectors
    const feedbackButton = Selector('#feedback')
    // const nameField = Selector('#name')
    // const emailField = Selector('#email')
    // const subjectField = Selector('#subject')
    // const commentField = Selector('#comment')
    // const submitButton = Selector('input').withAttribute('name', 'submit')
    const messageContainer = Selector('.offset3')

    //actions
    await t.click(feedbackButton)
    // await t.typeText(nameField, 'test')
    // await t.typeText(emailField, 'test@test.com')
    // await t.typeText(subjectField, 'my complaint')
    // await t.typeText(commentField, 'testtesttesttesttesttesat........')
    // await t.click(submitButton)
    feedbackPage.submitFeedback(t)
     
    //assertions
    await t.expect(messageContainer.innerText).contains('Thank you for your comments, test. They will be reviewed by our Customer Service staff and given the full attention that they deserve.')


})