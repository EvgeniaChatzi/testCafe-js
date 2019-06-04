
import {Selector} from 'testcafe';

fixture `Getting started with testcafe`

 .page `https://devexpress.github.io/testcafe/example`

 .before(async t => {
   //test setup goes here
 })
 .beforeEach(async => {
   //runs before each test
 })
 .after(async => {
   //clean up code
 })
 .afterEach(async => {
   //runs after each test
 })

 test ('First test', async t => {
  const developerName = Selector('#developer-name')
  const submitButton = Selector('#submit-button')
  const articleHeader = Selector('#article-header')
 
   await t
   .setTestSpeed(0.75)
   .typeText (developerName,'Zenya')
    // .takeScreenshot()
  //  .takeElementScreenshot(submitButton)
   .typeText(developerName, 'new text',{replace:true})

   .click (submitButton)
   .expect(Selector(articleHeader).innerText).contains('Zenya');

 })

 //*CLICKS*//
 //************************************** */
//  await t.click('id',{options})
//  await t.doubleClick('id',{options})
//  await t.rightClick('id',{options})
//**************************************** */

 //*TYPE TEXT*//
 //************************************** */
//  await t.typeText('id','text', {replace:true, paste:true})
//**************************************** */

//*KEYBOARD PRESS*//
 //************************************** */
//  await t.pressKey('enter')
//  await t.pressKey('shift+down')
//**************************************** */

//*NAVIGATE TO SPECIFIC URL*//
 //************************************** */
//  await t.navigateTo('url')
//**************************************** */











