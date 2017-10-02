import { mount, shallow } from "enzyme";
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { Layout } from '../../components/';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import ConnectedCart from '../../pages/Cart/';
import {createStore} from 'redux';

const productsIDs = [
    '123123-234-2341-123123-123123',
    '123123-12342-456456-123123-123123',
];
const MENU_INITIAL_STATE = {showProtectedLinks : false};
const CART_INITIAL_STATE = productsIDs;
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
    }];

const mockStore = configureStore()

const initialState = { cart : CART_INITIAL_STATE , allProducts: products, menu : MENU_INITIAL_STATE } ;
    let store, wrapper;  

describe('Cart outer tests', () => {
    

     beforeEach(()=>{
        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}><MemoryRouter><ConnectedCart /></MemoryRouter></Provider> );
    })

    it("has Layout", () => {
        expect(wrapper.find(Layout).length).toBeGreaterThan(0)
    })
    
    it("has HeroArea Component", () => {
        expect(wrapper.find(".App-hero").length).toBeGreaterThan(0)
    })

    it("always renders a section", () => {
        const sections = wrapper.find("section");
        expect(sections.length).toBeGreaterThan(0);
    });
    
    it("contains remove buttons of products", () => {
        const removeButtons = wrapper.find("#remove-button");
        expect(removeButtons.length).toBe(2);
    });



    it(`check DELETE_PRODUCT_FROM_CART`, () => {

        const deleteProductAction = {type: 'DELETE_PRODUCT_FROM_CART', 
                                    productId : '123123-234-2341-123123-123123'};
                                    
        const firstProductDeleteButton = wrapper.find("#remove-button").first();
        firstProductDeleteButton.simulate('click');

        // Test if my store dispatched the expected actions
        const actions = store.getActions().map(action => action.type);
        const expectedPayload = deleteProductAction.type;
        expect(actions).toEqual([expectedPayload]);
    })
})

describe('Cart snapshot tests', () => {

    it('test weird snapshot', () => {

        const store = mockStore(initialState);

        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <ConnectedCart />
                </MemoryRouter>
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
 })

