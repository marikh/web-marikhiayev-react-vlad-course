import { mount, shallow } from "enzyme";
import React from 'react';
import { MemoryRouter, Prompt } from 'react-router-dom'
import { Layout, Section } from '../../components/';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import ConnectedContact,{Contact} from '../../pages/Contact/';
import {createStore} from 'redux';
import thunk from 'redux-thunk';

const MENU_INITIAL_STATE = {showProtectedLinks : false};
const CONTACT_INITIAL_STATE = {
  name : "da",
  email : "da@gmail.com",
  message : "asd",
  submitContactFailed: false,
};

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

const initialState = { contact : CONTACT_INITIAL_STATE, menu : MENU_INITIAL_STATE } ;
    let store, wrapper;  

describe('contact outer tests', () => {
    

     beforeEach(()=>{
        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}><MemoryRouter><ConnectedContact /></MemoryRouter></Provider> );
    })

    it("has Layout", () => {
        expect(wrapper.find(Layout).length).toBeGreaterThan(0)
    })
    
    it("has Section Component", () => {
        expect(wrapper.find(Section).length).toBeGreaterThan(0)
    })

    it("has Prompt Component", () => {
        expect(wrapper.find(Prompt).length).toBeGreaterThan(0)
    })

    it(`check submit click`, () => {

        const submittingActionType = { type: 'SUBMITTING' };
        const contactFormSubmittedAction = { type: 'CONTACT_FORM_SUBMITTED' };

        const firstProductDeleteButton = wrapper.find('button[type="submit"]').first();
        firstProductDeleteButton.simulate('submit');

        // Test if my store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([submittingActionType, contactFormSubmittedAction]);
    })

    it(`check clearing fields on unmount`, () => {

        const unloadContactFormActionType = { type: 'UNLOAD_CONTACT_FORM' };

        const firstProductDeleteButton = wrapper.unmount();

        // Test if my store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([unloadContactFormActionType]);
    })
})

describe('Contact Shallow Render',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Contact />);
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1);
    });

    it('contains name InputField', () => {
        expect(wrapper.find('InputField[name="name"]').length).toEqual(1);
    });

    it('contains email InputField', () => {
        expect(wrapper.find('InputField[name="email"]').length).toEqual(1);
    });

    it('contains message InputField', () => {
        expect(wrapper.find('InputField[name="message"]').length).toEqual(1);
    });
})

describe('Cart snapshot tests', () => {

    it('test weird snapshot', () => {

        const store = mockStore(initialState);

        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <ConnectedContact />
                </MemoryRouter>
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
 })

