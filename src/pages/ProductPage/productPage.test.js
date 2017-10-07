import { mount, shallow } from "enzyme";
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom'
import { Layout, Section } from '../../components/';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import ConnectedProductPage,{ProductPage} from '../../pages/ProductPage/';
import {createStore} from 'redux';
import { delay } from '../../common/Extensions/promises'

const MENU_INITIAL_STATE = {showProtectedLinks : false};
const PRODUCTPAGE_INITIAL_STATE = {
  productId : "123123-234-2341-123123-123123",
  canAddToCart : true
};

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

const mockStore = configureStore();

const initialState = { productPage: PRODUCTPAGE_INITIAL_STATE, 
                        allProducts: productsFullData,
                        menu: MENU_INITIAL_STATE } ;
    let store, wrapper;  

describe('product outer tests', () => {
    

     beforeEach(()=>{
        if(wrapper != null)
            wrapper.unmount();

        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}>
                            <MemoryRouter initialEntries={[ '/products/123123-234-2341-123123-123123' ]}>
                                <Route render={({match}) => <ConnectedProductPage props={{match: match}}/>} path="/products/:id" />
                            </MemoryRouter>
                        </Provider> );

        // good examples repository - mock routing params:
        //  https://github.com/ReactTraining/react-router/blob/b18b9dd418a12f3c175e71dece289ead22ef9a09/packages/react-router/modules/__tests__/Route-test.js#L81
    })

    it("has Layout", () => {
        expect(wrapper.find(Layout).length).toBeGreaterThan(0)
    })
    
    it("has Section Component", () => {
        expect(wrapper.find(Section).length).toBeGreaterThan(0)
    })

    it(`check callback navigatedToProductPageAction called componentWillMount`, () => {

        const navigatedToProductPageAction = {
            type: "NAVIGATED_TO_PRODUCT_PAGE",
            productId: "123123-234-2341-123123-123123" 
        };  

        // Test if my store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([navigatedToProductPageAction]);
    })

    it(`check buy click`, () => {

        const navigatedToProductPageAction = {
            type: "NAVIGATED_TO_PRODUCT_PAGE",
            productId: "123123-234-2341-123123-123123" 
        };  

        const addProductToCartAction = { type: "ADD_PRODUCT_TO_CART",
            addedProductId: "123123-234-2341-123123-123123" };

        const firstProductDeleteButton = wrapper.find('button[id="add-to-cart-button"]').first();
        firstProductDeleteButton.simulate('click');

        // Test if my store dispatched the expected actions     
        const actions = store.getActions();
        return expect(actions).toEqual([navigatedToProductPageAction,addProductToCartAction]);
    })

})

describe('product Shallow Render',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<ConnectedProductPage />);
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1);
    });
})

describe('product snapshot tests', () => {

    it('test weird snapshot', () => {

        const store = mockStore(initialState);

        const tree = renderer.create(
             <Provider store={store}>
                <MemoryRouter initialEntries={[ '/products/123123-234-2341-123123-123123' ]}>
                    <Route render={({match}) => <ConnectedProductPage props={{match: match}}/>} path="/products/:id" />
                </MemoryRouter>
            </Provider> 
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
 })

