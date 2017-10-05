import store from './store';

describe('store test', () => {

    it('has all needed states', () => {
        
        expect(store.getState().app != null &&
            store.getState().allProducts != null &&
            store.getState().productPage != null &&
            store.getState().cart != null &&
            store.getState().loginPage != null &&
            store.getState().menu != null &&
            store.getState().contact != null)
        .toEqual(true)  
    })
})