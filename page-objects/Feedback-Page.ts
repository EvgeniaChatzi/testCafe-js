

import {Selector, t} from 'testcafe';

class FeedbackPage{
  nameField: Selector = Selector('#name')
  emailField: Selector = Selector('#email')
  subjectField: Selector = Selector('#subject')
  commentField: Selector = Selector('#comment')
  submitButton = Selector('input').withAttribute('name', 'submit')
    

  async submitFeedback(t: TestController) {
      await t
      .typeText(this.nameField, 'Zenya')
      .typeText(this.emailField, 'test@test.com')
      .typeText(this.subjectField, "test")
      .typeText(this.subjectField, 'dhbaehgfayerfgmbhdfgryafgmbmraghcg')
      .click(this.submitButton)


  }
  }


export default FeedbackPage