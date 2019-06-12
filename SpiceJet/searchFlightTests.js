

import { Selector } from 'testcafe';
import SearchFlightPage from '../page-objects/SearchFlight-Page'

const searchFlightPage = new SearchFlightPage


fixture `Search Flight function`
    .page `https://book.spicejet.com/Search.aspx?op=3`
// const flightsButton = Selector("[rel='book'] [href]")
// const departureField = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchVieworiginStation1_CTXT')
// const arrivalField = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchViewdestinationStation1_CTXT')
// const departureOption = Selector('li:nth-of-type(12) [onclick]').withText('Delhi (DEL)')
// const arrivalOption = Selector('a').withText('Chennai (MAA)')
// const roundTripRadioButton = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchView_RoundTrip')
// const departureDateField = Selector('#custom_date_picker_id_1')
// const departureDateOption = Selector('.ui-state-default').withText('17')
// const arrivalDateField = Selector('#custom_date_picker_id_2')
// const arrivalDateOption = Selector('a').withText('22')
// const passangersField = Selector('#divpaxinfo')
// const addAdultButton = Selector('#hrefIncAdt')
// //const currancyField = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListCurrency')

// const currencySelect = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListCurrency');
// const currencyOption = currencySelect.find('option');


test(`select options and search your flight`, async t => {
   searchFlightPage.selectDeparture()

        searchFlightPage.selectArrival()

        searchFlightPage.selectDates()
        searchFlightPage.selectCurrency()

    

});