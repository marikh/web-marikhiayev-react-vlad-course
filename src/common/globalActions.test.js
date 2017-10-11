import { globalActions, loginAction,userLoggingInAction,
loginFailedAction,userLoggedInAction, logOut,loggedOutAction,loggingOutAction } from '../common/globalActions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { delay, makeAwaitable } from '../common/Extensions/promises'

describe('Login actions',()=>{

    it('loginAction good user --> logged in', () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);

        const expectedActions = [
            { type: globalActions.USER_LOGGING_IN },
            { type: globalActions.USER_LOGGED_IN, loggedInUser: "Marik" }
        ]

        const store = mockStore({ loginPage: { userName: "Marik", password: "M" } })

        ////  loginAction() isn't a promise, so cant use "then" (even though we added thunk as middleware)
        //  return store.dispatch(loginAction()).then(() => 
        //  expect(store.getActions()).toEqual(expectedActions));

        const timeThresholdToSuccess = 4000;
        store.dispatch(makeAwaitable(loginAction));
            
        return delay(timeThresholdToSuccess).then(() => 
            expect(store.getActions()).toEqual(expectedActions))
    })

    it('loginAction bad user --> Faild log in', () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);

        const expectedActions = [
        { type: globalActions.USER_LOGGING_IN },
        { type: globalActions.LOGIN_FAILED }
        ]
        
        ////  loginAction() isn't a promise, so cant use "then" (even though we added thunk as middleware)
        //  return store.dispatch(loginAction()).then(() => 
        //  expect(store.getActions()).toEqual(expectedActions));

        const store = mockStore({ loginPage: { userName: "Maik", password: "M" } })
        
        const timeThresholdToSuccess = 4000;
         store.dispatch(makeAwaitable(loginAction));
        
        return delay(timeThresholdToSuccess).then(() => 
            expect(store.getActions()).toEqual(expectedActions))
    })

    
    it('userLoggingInAction', () => {
        
        const userLoggingInAct = userLoggingInAction();

        const expectedAction = {
            type: "USER_LOGGING_IN"
        };

        expect(userLoggingInAct).toEqual(expectedAction)
    })
    
    it('userLoggedInAction', () => {
        
        const userLoggedInAct = userLoggedInAction("Fantamas");

        const expectedAction = {
            type: "USER_LOGGED_IN",
            loggedInUser: "Fantamas"
        };

        expect(userLoggedInAct).toEqual(expectedAction)
    })

    it('loginFailedAction', () => {
        
        const loginFailedAct = loginFailedAction();

        const expectedAction = {
            type: "LOGIN_FAILED"
        };

        expect(loginFailedAct).toEqual(expectedAction)
    })

    
    it('logOut', () => {
        const expectedActions = [
        { type: globalActions.LOGGING_OUT },
        { type: globalActions.LOGGED_OUT }
        ]

        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        const store = mockStore({ });
        
        store.dispatch(logOut());
        expect(store.getActions()).toEqual(expectedActions);
    })

    it('loggingOutAction', () => {
        
        const loggingOutAct = loggingOutAction();

        const expectedAction = {
            type: "LOGGING_OUT"
        };

        expect(loggingOutAct).toEqual(expectedAction)
    })

    it('loggedOutAction', () => {
        
        const loggedOutAct = loggedOutAction();

        const expectedAction = {
            type: "LOGGED_OUT"
        };

        expect(loggedOutAct).toEqual(expectedAction)
    })

})