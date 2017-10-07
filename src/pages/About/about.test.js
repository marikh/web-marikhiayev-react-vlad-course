import { mount, shallow } from "enzyme";
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { Layout } from '../../components/';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import About from '../../pages/About/';
import {createStore} from 'redux';

const MENU_INITIAL_STATE = {showProtectedLinks : false};

const mockStore = configureStore()

const initialState = { menu : MENU_INITIAL_STATE } ;
    let store, wrapper;  

describe('About outer tests', () => {

     beforeEach(()=>{
        if(wrapper != null)
            wrapper.unmount();

        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}><MemoryRouter><About /></MemoryRouter></Provider> );
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
    
    it("contains Yo! Mr. White! header", () => {
        expect(wrapper.contains(<h1>Yo! Mr. White!</h1>)).toBe(true);
    });
})

describe('About Shallow Render',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<About />)
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });
})

describe('About snapshot tests', () => {

    it('test weird snapshot', () => {

        const store = mockStore(initialState);

        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <About />
                </MemoryRouter>
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
 })

