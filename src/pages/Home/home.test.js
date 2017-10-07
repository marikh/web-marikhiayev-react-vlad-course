import { mount, shallow } from "enzyme";
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { Layout, Section } from '../../components/';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import Home from '../../pages/Home/';
import {createStore} from 'redux';

const MENU_INITIAL_STATE = {showProtectedLinks : false};

const mockStore = configureStore();

const initialState = { menu : MENU_INITIAL_STATE } ;
    let store, wrapper;  

describe('Home outer tests', () => {
    

     beforeEach(()=>{
        if(wrapper != null)
            wrapper.unmount();
            
        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}><MemoryRouter><Home /></MemoryRouter></Provider> );
    })

    it("has Layout", () => {
        expect(wrapper.find(Layout).length).toBeGreaterThan(0)
    })
    
    it("has Section Component", () => {
        expect(wrapper.find(Section).length).toBeGreaterThan(0)
    })

    it("layout has hero Component", () => {
        expect(wrapper.find(Layout).prop('heroContent') != null).toEqual(true)
    })

    it("layout has footer Component", () => {
        expect(wrapper.find(Layout).prop('footerContent') != null).toEqual(true)
    })
})

describe('Home Shallow Render',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Home />);
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1);
    });
})

describe('Home snapshot tests', () => {

    it('test weird snapshot', () => {

        const store = mockStore(initialState);

        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
 })

