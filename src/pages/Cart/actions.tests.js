import { addProductToCart, deleteProductFromCart } from './actions'

describe('Cart actions',()=>{

    it('addProductToCart', () => {
        
        const add = addProductToCart("didula Alik");

        const expectedAction = {
            type: "ADD_PRODUCT_TO_CART",
            addedProductId: "didula Alik"
        };

        expect(add).toEqual(expectedAction)
    })

    it('deleteProductFromCart', () => {
        
        const deleteAct = deleteProductFromCart("didula Alik");

        const expectedAction = {
            type: "DELETE_PRODUCT_FROM_CART",
            productId: "didula Alik"
        };

        expect(deleteAct).toEqual(expectedAction)
    })
})