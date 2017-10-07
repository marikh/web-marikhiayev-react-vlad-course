import { navigatedToProductPageAction } from './actions'

describe('Product actions',()=>{

    it('contactFormSubmittedAction', () => {
        
        const navigatedToProductPageAct = navigatedToProductPageAction("dummyID");

        const expectedAction = {
            type: "NAVIGATED_TO_PRODUCT_PAGE",
            productId: "dummyID"
        };

        expect(navigatedToProductPageAct).toEqual(expectedAction)
    })
})