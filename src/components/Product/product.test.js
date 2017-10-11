import { mount, shallow } from "enzyme";
import React from 'react';
import { MemoryRouter, Route, Link } from 'react-router-dom'
import { Card, Product } from '../../components/';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import {createStore} from 'redux';

const testNonCartProduct =
    {
        id: '123123-234-2341-123123-123123',
        name: 'Greek amphora 1',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        longDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut. Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '101K USD'
    };
    
const cartProduct =
    {
        cartItemId: 2,
        id: '123123-12342-456456-123123-123123',
        name: 'Greek amphora 2',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        longDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut. Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '102K USD'
    };

const mockStore = configureStore()

const initialState = { } ;
    let store, wrapper;  

describe('Product outer tests', () => {

     beforeEach(()=>{
        if(wrapper != null)
            wrapper.unmount();

        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}>
                            <MemoryRouter>
                                <Product {...cartProduct} deleteProductFromCart={() => {}}/>
                            </MemoryRouter>
                        </Provider> );
    })

    it("contains Card", () => {
        expect(wrapper.find(Card).length).toBeGreaterThan(0)
    })
    
    it("has link to product page", () => {
        expect(wrapper.find('a[href="/products/123123-12342-456456-123123-123123"]').length).toBe(1)
    })

    it("has product title", () => {
        expect(wrapper.contains(<p className="product-title">{cartProduct.name}</p>)).toBe(true);
    });

    it("has product price", () => {
        expect(wrapper.contains(<p className="product-price">{cartProduct.price}</p>)).toBe(true);
    });

    it("has product bottom description", () => {
        expect(wrapper.contains(<p className="product-bottom-desc">{cartProduct.shortDesc}</p>)).toBe(true);
    });

    it("remove button appears (since the wrapper instance is a cart product)", () => {
        expect(wrapper.find('#remove-button').length).toBe(1);
    });


    it("no remove button should appears (since the wrapper instance is not a cart product - no cartItemId is provided in the props)", () => {
        
        if(wrapper != null)
            wrapper.unmount();

        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}>
                            <MemoryRouter>
                                <Product {...testNonCartProduct} />
                            </MemoryRouter>
                        </Provider> );
        
        
        expect(wrapper.find('#remove-button').length).toBe(0);
    });
})

describe('Product Shallow Render',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Product />)
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });
})


describe('Product snapshot tests', () => {

    it('test weird snapshot', () => {

        const store = mockStore(initialState);

        const tree = renderer.create(
            <Provider store={store}>
                            <MemoryRouter>
                                <Product {...cartProduct} deleteProductFromCart={() => {}}/>
                            </MemoryRouter>
                        </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
 })

