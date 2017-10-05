import productPageReducer, {getCurrentProductIdSelector, getCurrentProductSelector, getCanAddToCartSelector}  from './productPageReducer';

import { actionTypes } from './actions'
import { globalActions } from '../../common/globalActions'

const TEST_INITIAL_STATE = {
  productId : undefined,
  canAddToCart : false
};

describe('productPageReducer test', () => {
    it('should return proper initial value', () => {
        expect(productPageReducer(undefined, {})).toEqual(TEST_INITIAL_STATE)
    })

    it('navigatedToProductPageAction', () => {
        
        const navigatedToProductPageAction = {
            type: actionTypes.NAVIGATED_TO_PRODUCT_PAGE,
            productId: "dummyProductId"
        }

        expect(productPageReducer(TEST_INITIAL_STATE, navigatedToProductPageAction))
        .toEqual({
            ...TEST_INITIAL_STATE,
            productId: "dummyProductId"
        })  
    })

    it('userLoggedInAction', () => {
        
        expect(productPageReducer(TEST_INITIAL_STATE, {type: globalActions.USER_LOGGED_IN}))
        .toEqual({
            ...TEST_INITIAL_STATE,
            canAddToCart: true,
      })  
    })

    it('getCurrentProductIdSelector', () => {
        const state = { productPage: { ...TEST_INITIAL_STATE, productId: "dummyproductId" } };
        expect(getCurrentProductIdSelector(state)).toEqual("dummyproductId")
    })

    it('getCurrentProductSelector', () => {
        const dummyProduct = {
        id: '123123-234-2341-123123-123123',
        name: 'Greek amphora 1'};

        const state = { productPage: { ...TEST_INITIAL_STATE, productId: dummyProduct.id }, 
                        allProducts: [dummyProduct] };

        expect(getCurrentProductSelector(state)).toEqual(dummyProduct)
    })

    it('getCanAddToCartSelector true', () => {
        const state = { productPage: { ...TEST_INITIAL_STATE, canAddToCart: true } };
        expect(getCanAddToCartSelector(state)).toEqual(true)
    })

    it('getCanAddToCartSelector false', () => {
        const state = { productPage: { ...TEST_INITIAL_STATE, canAddToCart: false } };
        expect(getCanAddToCartSelector(state)).toEqual(false)
    })
})