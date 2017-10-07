import { actionTypes, loginAction, updateFieldAction,userLoggingInAction,
loginFailedAction,userLoggedInAction } from './actions'
import { globalActions } from '../../common/globalActions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { delay, makeAwaitable } from '../../common/Extensions/promises'



describe('Login actions',()=>{

    it('loginAction good user --> logged in', () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);

        const expectedActions = [
            { type: actionTypes.USER_LOGGING_IN },
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
        { type: actionTypes.USER_LOGGING_IN },
        { type: actionTypes.LOGIN_FAILED }
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

    
    it('updateFieldAction', () => {
        
        const updateFieldAct = updateFieldAction("name", "didula Alik");

        const expectedAction = {
            type: "LOGIN_FIELD_CHANGED",
            changedFieldName: "name",
            newValue: "didula Alik"
        };

        expect(updateFieldAct).toEqual(expectedAction)
    })
    
    it('contactFormSubmittedAction', () => {
        
        const userLoggingInAct = userLoggingInAction();

        const expectedAction = {
            type: "USER_LOGGING_IN"
        };

        expect(userLoggingInAct).toEqual(expectedAction)
    })
    
    it('contactFormSubmittedAction', () => {
        
        const userLoggedInAct = userLoggedInAction("Fantamas");

        const expectedAction = {
            type: "USER_LOGGED_IN",
            loggedInUser: "Fantamas"
        };

        expect(userLoggedInAct).toEqual(expectedAction)
    })

    it('contactFormSubmittedAction', () => {
        
        const loginFailedAct = loginFailedAction();

        const expectedAction = {
            type: "LOGIN_FAILED"
        };

        expect(loginFailedAct).toEqual(expectedAction)
    })
})