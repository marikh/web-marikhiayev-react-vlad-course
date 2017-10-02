import { mount, shallow, dive, equals, exists } from "enzyme";
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { Layout } from '../../components/';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createMockStore, createMockDispatch } from 'redux-test-utils';
import Cart from '../../pages/Cart/';

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

const mockedStore = createMockStore({ cart : CART_INITIAL_STATE , allProducts: products, menu : MENU_INITIAL_STATE});
let mountedCartComponent;
let props;

const cartComponent = () => {
    if (!mountedCartComponent) {
        mountedCartComponent = mount(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <Cart />
                </MemoryRouter>
            </Provider>
        );
    }
    return mountedCartComponent
}

const unMounthCart = () => {
        props = {};
        if(mountedCartComponent != null){
            mountedCartComponent.unmount();
        }
        mountedCartComponent = undefined;
}

describe('Cart outer tests', () => {
 
    beforeEach(() => {
        unMounthCart();
    });

    it("has Layout", () => {
        expect(cartComponent().find(Layout).length).toBeGreaterThan(0)
    })
    
    it("has HeroArea Component", () => {
        expect(cartComponent().find(".App-hero").length).toBeGreaterThan(0)
    })

    it("always renders a section", () => {
        const sections = cartComponent().find("section");
        expect(sections.length).toBeGreaterThan(0);
    });
    

    it("contains remove buttons of products", () => {
        const removeButtons = cartComponent().find("#remove-button");
        expect(removeButtons.length).toBeGreaterThan(0);
    });

    it(`Cart items are deleted on click on delete button`, () => {

        const deleteProductAction = {type: 'DELETE_PRODUCT_FROM_CART', 
                                    productId : '123123-234-2341-123123-123123'};

        const deleteProductFromCartMock = jest.fn();
        props.deleteProductFromCart = deleteProductFromCartMock;
        props.products = CART_INITIAL_STATE;

        const dispatchMock = createMockDispatch();
        dispatchMock.dispatch(deleteProductAction);
        const firstProductDeleteButton = cartComponent().find("#remove-button").first();
        // mockedStore.dispatch(deleteProductAction);
         firstProductDeleteButton.simulate('click');
        // const deletedProductDeleteButton = cartComponent().find("#remove-button").first();

          expect(deleteProductFromCartMock.mock.calls.length).toBe(1);
        // expect(cartComponent().find(deletedProductDeleteButton).exists()).toBe(false);
        
        
        //  expect(mockedStore.isActionDispatched(deleteProductAction)).toBe(true);
        // expect(deletedProductDeleteButton.length).toBe(0);
    })


})

describe('Cart snapshot tests', () => {
    it('test weird snapshot', () => {
        
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <Cart />
                </MemoryRouter>
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
 })

// describe('Cart shallow tests', () => {

// //     it(`Layout has menu state and it's false`, () => {
// //         const layout = shallow(<Layout />)
// //         expect(layout.state().menuState).toBe(false);
// //     })

    // it(`Cart items are deleted on click on delete button`, () => {
    //     const cart = shallow(<Cart products={CART_INITIAL_STATE} />)
    //     // cart.props().products = CART_INITIAL_STATE;


    //     const deleteProductAction = {type: 'DELETE_PRODUCT_FROM_CART', 
    //                                 productId : '123123-234-2341-123123-123123'};

    //     // const dispatchMock = createMockDispatch();
    //     // dispatchMock.dispatch(deleteProductAction);
    //     const firstProductDeleteButton = cart.find("#remove-button").first();
    //     // mockedStore.dispatch(deleteProductAction);
    //      firstProductDeleteButton.simulate('click');
    //     // const deletedProductDeleteButton = cartComponent().find("#remove-button").first();
          
    //     expect(cart.find("#remove-button").length).toBe(1);
    // })

// })


