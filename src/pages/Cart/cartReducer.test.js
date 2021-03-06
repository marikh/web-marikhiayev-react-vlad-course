import cartReducer, {getCartProductsSelector}  from './cartReducer';

import { cartActionTypes } from './actions'
import { productsActionTypes } from '../Products/actions'

const productsIDs = [
    { productId: '123123-234-2341-123123-123123', cartItemId: 1 },
    { productId: '123123-12342-456456-123123-123123', cartItemId: 2 }
];

const TEST_INITIAL_STATE = productsIDs;

const productsFullData = [
    {
        id: '123123-234-2341-123123-123123',
        name: 'Greek amphora 1',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        longDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut. Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '101K USD'
    },
    {
        id: '123123-12342-456456-123123-123123',
        name: 'Greek amphora 2',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        longDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut. Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '102K USD'
    }];



describe('cartReducer test', () => {
    it('should return proper initial value', () => {
        expect(cartReducer(undefined, {})).toEqual(TEST_INITIAL_STATE)
    })

    it('addProductToCart action', () => {
        
        const addProductToCartAction = {
            type: cartActionTypes.ADD_PRODUCT_TO_CART,
            addedProductId: "testProductID"
        }

        const newExpectedCartProduct = { productId : "testProductID", 
          cartItemId : TEST_INITIAL_STATE.reduce((maxId, product) => Math.max(product.cartItemId, maxId), -1) + 1 }

        expect(cartReducer(TEST_INITIAL_STATE, addProductToCartAction))
        .toEqual([ ...TEST_INITIAL_STATE, newExpectedCartProduct])  
    })
    
    it('deleteProductFromCart action', () => {
        
        const deleteProductFromCartAction = {
            type: cartActionTypes.DELETE_PRODUCT_FROM_CART,
            cartItemId: 1
        }

        expect(cartReducer(TEST_INITIAL_STATE, deleteProductFromCartAction))
        .toEqual(TEST_INITIAL_STATE.filter(cartProduct => cartProduct.cartItemId !== deleteProductFromCartAction.cartItemId))
    })

    
    it('productsActionTypes.DELETE_PRODUCT action', () => {
        
        const deleteProductGloballyAction = {
            type: productsActionTypes.DELETE_PRODUCT,
            productId: '123123-234-2341-123123-123123'
        }

        expect(cartReducer(TEST_INITIAL_STATE, deleteProductGloballyAction))
        .toEqual(TEST_INITIAL_STATE.filter(cartProduct => cartProduct.productId !== '123123-234-2341-123123-123123'
      ))  
    })

    it('getCartProductsSelector empty', () => {
        const state = {cart: [], allProducts: productsFullData };
        expect(getCartProductsSelector(state)).toEqual([])
    })
    
    it('getCartProductsSelector with specific ID', () => {
        const state = {cart: [{ productId: '123123-234-2341-123123-123123', cartItemId: 1 }], allProducts: productsFullData };
        expect(getCartProductsSelector(state)).toEqual([{
        cartItemId: 1,
        id: '123123-234-2341-123123-123123',
        name: 'Greek amphora 1',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        longDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut. Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '101K USD'
    }])
    })
})