import allProductsReducer, {getProductsSelector}  from './allProductsReducer';

import { productsActionTypes } from './actions'

const products = [
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
    }
];

const TEST_INITIAL_STATE = products;

describe('allProductsReducer test', () => {

    it('addProduct', () => {
        
        const newProduct = {
            id: 'ssssss123123',
            name: 'Greek amphora 2',
            imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
            shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
            longDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut. Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
            price: '133K USD'
        };

        const addProductAction = {
            type: productsActionTypes.ADD_PRODUCT,
            newProduct: newProduct
        }

        expect(allProductsReducer(TEST_INITIAL_STATE, addProductAction))
        .toEqual([
            ...TEST_INITIAL_STATE,
            newProduct
        ])  
    })

    it('deleteProduct', () => {
        
        const deleteProductAction = {
            type: productsActionTypes.DELETE_PRODUCT,
            productId: '123123-234-2341-123123-123123'
        }
        
        expect(allProductsReducer(TEST_INITIAL_STATE, deleteProductAction))
        .toEqual(
            [{
                id: '123123-12342-456456-123123-123123',
                name: 'Greek amphora 2',
                imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
                shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
                longDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut. Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
                price: '102K USD'
            }])
    })  

    it('getProductsSelector', () => {
        const state = { allProducts: TEST_INITIAL_STATE };
        expect(getProductsSelector(state)).toEqual(TEST_INITIAL_STATE)
    })
})