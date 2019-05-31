
import {Selector} from 'testcafe';

fixture `Getting started with testcafe`

 .page `https://devexpress.github.io/testcafe/example`;

 test ('First test', async t => {
   await t.typeText ('#developer-name','Zenya');
   await t.click ('#submit-button');

   await t.expect(Selector('#article-header').innerText).contains('Xenya');

 });
