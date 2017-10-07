import { mount, shallow } from "enzyme";
import React from 'react';
import { MemoryRouter, Route, Switch, Link } from 'react-router-dom'
import { Layout, Card } from '../../components/';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import ConnectedProducts,{Products} from '../../pages/Products/';
import ConnectedProductPage, {ProductPage} from '../../pages/ProductPage/';
import {createStore} from 'redux';
import { delay } from '../../common/Extensions/promises';

const MENU_INITIAL_STATE = {showProtectedLinks : false};

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


// const PRODUCTPAGE_INITIAL_STATE = {
//   productId : "123123-234-2341-123123-123123",
//   canAddToCart : true
// };

const mockStore = configureStore()

const initialState = { allProducts: products, menu : MENU_INITIAL_STATE /*, productPage: PRODUCTPAGE_INITIAL_STATE */ } ;
    let store, wrapper;  

describe('Products outer tests', () => {

     beforeEach(()=>{
        if(wrapper != null)
            wrapper.unmount();

        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}>
                            <MemoryRouter initialEntries={[ '/products' ]}>
                                <Switch>
                                    <Route render={({match}) => <ConnectedProducts props={{match: match}}/>} path="/products" />
                                    {/*<Route render={({match}) => <ConnectedProductPage props={{match: match}}/>} path="/products/:id" />*/}
                                </Switch>
                            </MemoryRouter>
                        </Provider> );
    })

    it("has Layout", () => {
        expect(wrapper.find(Layout).length).toBeGreaterThan(0)
    })
    
    it("has HeroArea Component", () => {
        expect(wrapper.find(Layout).prop('heroContent') != null).toBe(true)
    })

    it("always renders a section", () => {
        const sections = wrapper.find("section");
        expect(sections.length).toBeGreaterThan(0);
    });

    it("has 2 products Cards", () => {
        const cards = wrapper.find(Card);
        expect(cards.length).toBe(2);
    });

    it(`check good target path of product Link`, () => {
        expect(wrapper.find(Card).at(0).find(Link).at(0).prop('to')).toEqual('/products/123123-234-2341-123123-123123');
    })
})

describe('Products Shallow Render',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Products products={products} match={{url: "/products"}}/>)
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });
})


describe('Products snapshot tests', () => {

    it('test weird snapshot', () => {

        const store = mockStore(initialState);

        const tree = renderer.create(
            <Provider store={store}>
                            <MemoryRouter initialEntries={[ '/products' ]}>
                                <Route render={({match}) => <ConnectedProducts props={{match: match}}/>} path="/products" />
                            </MemoryRouter>
                        </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
 })

