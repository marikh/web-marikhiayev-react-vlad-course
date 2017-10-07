import { addProduct,deleteProduct } from './actions'

describe('Product actions',()=>{

    it('addProduct', () => {
        
        const productForTest = {
            id: "BlaBla",
            title: "Avocado"
        };

        const addProductAct = addProduct(productForTest);

        const expectedAction = {
            type: "ADD_PRODUCT",
            newProduct: productForTest
        };

        expect(addProductAct).toEqual(expectedAction)
    })

    it('deleteProduct', () => {
        
        const deleteProductAct = deleteProduct("dummyId");

        const expectedAction = {
            type: "DELETE_PRODUCT",
            productId: "dummyId"
        };

        expect(deleteProductAct).toEqual(expectedAction)
    })
})

