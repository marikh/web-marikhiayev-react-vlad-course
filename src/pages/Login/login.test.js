import { mount, shallow } from "enzyme";
import React from 'react';
import { MemoryRouter, Prompt } from 'react-router-dom'
import { Layout, Section } from '../../components/';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import ConnectedLogin,{Login} from '../../pages/Login/';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import { delay } from '../../common/Extensions/promises'

const MENU_INITIAL_STATE = {showProtectedLinks : false};
const LOGIN_INITIAL_STATE = {
  userName : "Marik",
  password : "M",
  loggingIn : false,
  loggedIn : false,
  loginFailed : false,
};


const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

const initialState = { loginPage: LOGIN_INITIAL_STATE, menu: MENU_INITIAL_STATE } ;
    let store, wrapper;  

describe('login outer tests', () => {
    

     beforeEach(()=>{
        if(wrapper != null)
            wrapper.unmount();

        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}><MemoryRouter><ConnectedLogin /></MemoryRouter></Provider> );
    })

    it("has Layout", () => {
        expect(wrapper.find(Layout).length).toBeGreaterThan(0)
    })
    
    it("has Section Component", () => {
        expect(wrapper.find(Section).length).toBeGreaterThan(0)
    })

    it(`check login click`, () => {

        const userLoggingInAction = { type: 'USER_LOGGING_IN' };
        const userLoggedInAction = { type: 'USER_LOGGED_IN', loggedInUser: "Marik" };

        const firstProductDeleteButton = wrapper.find('button[type="submit"]').first();
        firstProductDeleteButton.simulate('submit');

        // Test if my store dispatched the expected actions        
        const timeThresholdToSuccess  = 4000;
        const actions = store.getActions();
        
        return delay(timeThresholdToSuccess).then(() =>
            expect(actions).toEqual([userLoggingInAction, userLoggedInAction])
        );
    })

   it(`check login should fail`, () => {

        const failureInitialState = { loginPage: {
            userName : "M",
            password : "M",
            loggingIn : false,
            loggedIn : false,
            loginFailed : false,
        }, menu: MENU_INITIAL_STATE 
        } ;
        
        store = mockStore(failureInitialState);
        wrapper = mount( <Provider store={store}><MemoryRouter><ConnectedLogin /></MemoryRouter></Provider> );
        
        const userLoggingInAction = { type: 'USER_LOGGING_IN' };
        const loginFailedAction = { type: 'LOGIN_FAILED'};

        const firstProductDeleteButton = wrapper.find('button[type="submit"]').first();
        firstProductDeleteButton.simulate('submit');

        // Test if my store dispatched the expected actions
        const timeThresholdToSuccess  = 4000;
        const actions = store.getActions();
        

        return delay(timeThresholdToSuccess).then(() =>
            expect(actions).toEqual([userLoggingInAction, loginFailedAction])
        );
    })
})

describe('login Shallow Render',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Login />);
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1);
    });

    it('contains userName InputField', () => {
        expect(wrapper.find('InputField[name="userName"]').length).toEqual(1);
    });

    it('contains password InputField', () => {
        expect(wrapper.find('InputField[name="password"]').length).toEqual(1);
    });
})

describe('login snapshot tests', () => {

    it('test weird snapshot', () => {

        const store = mockStore(initialState);

        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <ConnectedLogin />
                </MemoryRouter>
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
 })

