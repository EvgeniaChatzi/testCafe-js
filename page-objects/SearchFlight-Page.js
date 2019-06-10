

import {Selector, t} from 'testcafe';

class SearchFlightPage  {

    constructor() {
        this.departureField = Selector('#FlifoSearchInputSearchView_originStation')
        this.arrivalField = Selector('#FlifoSearchInputSearchView_destinationStation')
        this.departureOption = departureField.find('option');
        this.arrivalOption = arrivalField.find('option');
    }

    async selectDeparture(text) {
      await t
       .click(this.departureField)
       .click(this.departureOption.withText('Delhi (DEL)'))
       .expect(departureField.value).eql('Delhi (DEL)');
    }

    async selectArrival(text) {
        await t
       .click(this.arrivalField)
       .click(this.arrivalOption.withText('Leh (IXL)'))
    }
}
export default SearchFlightPage

