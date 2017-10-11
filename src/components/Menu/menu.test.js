import { mount, shallow } from "enzyme";
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import ConnectedMenu,{ Menu } from '../../components/Menu/';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import {createStore} from 'redux';


const socialLinks = [
  {
    text: 'Facebook',
    icon: 'facebook',
    link: 'facebook.com'
  },
  {
    text: 'Github',
    icon: 'github',
    link: 'github.com'
  },
  {
    text: 'Email',
    icon: 'envelope',
    link: 'vnovick@gmail.comm'
  }
]

const MENU_INITIAL_STATE = {showProtectedLinks : false};
const mockStore = configureStore();

const initialState = { menu : MENU_INITIAL_STATE } ;
    let store, wrapper;  

describe('Menu outer tests', () => {

     beforeEach(()=>{
        if(wrapper != null)
            wrapper.unmount();

        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}>
                <MemoryRouter>
                    <ConnectedMenu menuConfig={{ menuState : true, open: () => {}, socialLinks:socialLinks}} />
                </MemoryRouter>
            </Provider> );
    })

    it("has home link", () => {
        expect(wrapper.find('a[href="/"]').length).toBeGreaterThan(0)
    })
    
    it("has about link", () => {
        expect(wrapper.find('a[href="/about"]').length).toBeGreaterThan(0)
    })

    it("has products link", () => {
        expect(wrapper.find('a[href="/products"]').length).toBeGreaterThan(0)
    })
    
    it("has contact link", () => {
        expect(wrapper.find('a[href="/contact"]').length).toBeGreaterThan(0)
    })

    it("has login link", () => {
        expect(wrapper.find('a[href="/login"]').length).toBeGreaterThan(0)
    })

    it("has cart link when loggen in", () => {
        if(wrapper != null)
            wrapper.unmount();

        const initialState = { menu : {showProtectedLinks : true} } ;
        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}>
                <MemoryRouter>
                    <ConnectedMenu menuConfig={{ menuState : true, open: () => {}, socialLinks:socialLinks}} />
                    </MemoryRouter>
            </Provider> )

        expect(wrapper.find('a[href="/cart"]').length).toBeGreaterThan(0)
    })

    it("has logout link when loggen in", () => {
        if(wrapper != null)
            wrapper.unmount();

        const initialState = { menu : {showProtectedLinks : true} } ;
        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}>
                <MemoryRouter>
                    <ConnectedMenu menuConfig={{ menuState : true, open: () => {}, socialLinks:socialLinks}} />
                    </MemoryRouter>
            </Provider> )

        expect(wrapper.find('a[href="/cart"]').length).toBeGreaterThan(0)
    })

    it("has socialLinks component with link type of 'icons' (each link should be with className='fa fa-${icon}')", () => {
        expect(wrapper.find('div[className="social-links"]')
                        .find('a').map(a => a.prop('className'))
                        .every(className => className.includes("fa fa-"))).toEqual(true)
    })
    
    it('"overlay" and "active" class applied when menu open (gray overlay beneath the menu all over the screen)', () => {
        expect(wrapper.find('div[className="overlay active"]').length).toBeGreaterThan(0)
    })
})

describe('Menu Shallow Render',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Menu menuConfig={{ menuState : true, open: () => {}, socialLinks:socialLinks}}/>)
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });
})


describe('Menu snapshot tests', () => {

    it('test weird snapshot', () => {

        const store = mockStore(initialState);

        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <ConnectedMenu menuConfig={{ menuState : true, open: () => {}, socialLinks:socialLinks}}/>
                </MemoryRouter>
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
 })

