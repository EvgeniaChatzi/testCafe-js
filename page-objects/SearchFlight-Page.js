

import {Selector, t} from 'testcafe';

class SearchFlightPage  {

    constructor() {
        this.flightsButton = Selector("[rel='book'] [href]")
        this.departureField = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchVieworiginStation1_CTXT')
        this.arrivalField = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchViewdestinationStation1_CTXT')
        this.departureOption = Selector('li:nth-of-type(12) [onclick]').withText('Delhi (DEL)')
        this.arrivalOption = Selector('a').withText('Chennai (MAA)')
        this.roundTripRadioButton = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchView_RoundTrip')
        this.departureDateField = Selector('#custom_date_picker_id_1')
        this.departureDateOption = Selector('.ui-state-default').withText('17')
        this.arrivalDateField = Selector('#custom_date_picker_id_2')
        this.arrivalDateOption = Selector('a').withText('22')
        this.passangersField = Selector('#divpaxinfo')
        this.addAdultButton = Selector('#hrefIncAdt')
        this.currencySelect = Selector('#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListCurrency')
        this.currencyOption = currencySelect.find('option')

    }

    async selectDeparture() {
      await t
      .click(this.flightsButton)
      .click(this.roundTripRadioButton)
      .click(this.departureField)
      .click(this.departureOption)
      .expect(this.departureField.value).eql('Delhi (DEL)')
    }

    async selectArrival() {
        await t
        .click(arrivalField)
        .click(arrivalOption)
        .expect(arrivalField.value).eql('Chennai (MAA)')
    }

    async selectDates() {
        await t
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
    }

    async selectCurrency() {

        await t
        .click(currencySelect)
        .click(currencyOption.withText('USD'))
        .expect(currencySelect.value).eql('USD');
    }
}
export default SearchFlightPage

