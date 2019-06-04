

import {Selector} from 'testcafe';
import NavbarPage from '../page-objects/Home-Navbar' 

const navbarPage = new NavbarPage()

fixture `Search function`
.page `http://zero.webappsecurity.com/index.html`

test ('use the search', async t => {
 
    //My selectors
    const search_field = Selector('#searchTerm')
    const message_container = Selector('.top_offset')

    //Actions
    // await t.typeText(search_field, 'test')
    // await t.pressKey('enter')
    navbarPage.search('test')

    //assertions
    await t.expect(message_container.innerText).contains('No results were found for the query: test')


})