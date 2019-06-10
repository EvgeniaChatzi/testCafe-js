

// import {Selector} from 'testcafe';
// import SearchFlightPage from '../page-objects/SearchFlight-Page' 

// const searchFlightPage = new SearchFlightPage()

// fixture `Search Flight function`
// .page `https://book.spicejet.com/Search.aspx?op=3`

// test ('select options and search your flight', async t => {
 
//   searchFlightPage.selectDeparture('Delhi (DEL)')
//   searchFlightPage.selectArrival('Leh (IXL)')


// })

import { Selector } from 'testcafe';

fixture `Search Flight function`
    .page `https://book.spicejet.com/Search.aspx?op=3`
const flightsButton = Selector("[rel='book'] [href]")
const departureField = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchVieworiginStation1_CTXT')
const arrivalField = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchViewdestinationStation1_CTXT')
const departureOption = Selector('li:nth-of-type(12) [onclick]').withText('Delhi (DEL)')
const arrivalOption = Selector('a').withText('Chennai (MAA)')
const roundTripRadioButton = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchView_RoundTrip')
const departureDateField = Selector('#custom_date_picker_id_1')
const departureDateOption = Selector('.ui-state-default').withText('17')
const arrivalDateField = Selector('#custom_date_picker_id_2')
const arrivalDateOption = Selector('a').withText('22')
const passangersField = Selector('#divpaxinfo')
const addAdultButton = Selector('#hrefIncAdt')
//const currancyField = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListCurrency')

const currencySelect = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListCurrency');
const currencyOption = currencySelect.find('option');


test(`select options and search your flight`, async t => {
    await t
        .click(flightsButton)
        .click(roundTripRadioButton)
        .click(departureField)
        .click(departureOption)
        .expect(departureField.value).eql('Delhi (DEL)')
        .click(arrivalField)
        .click(arrivalOption)
        .expect(arrivalField.value).eql('Chennai (MAA)')
        .click(departureDateField)
        .click(departureDateOption)
        .expect(departureDateField.value).eql('17/06')

        .click(arrivalDateField)
        .click(arrivalDateOption)
        .expect(arrivalDateField.value).eql('22/06')

        .click(passangersField)

        for (let i = 2; i<4; i++) {
            await t.click(addAdultButton)
        }

       //currency dropdown 
    await t
         
        .click(currencySelect)
        .click(currencyOption.withText('USD'))
        .expect(currencySelect.value).eql('USD');
        



});