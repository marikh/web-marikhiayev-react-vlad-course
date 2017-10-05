import loginReducer, {getUserNameSelector, getPasswordSelector, 
    getLoggingInSelector, getLoggedInSelector, getLoginFailedSelector}  from './loginReducer';

import { actionTypes } from './actions'
import { globalActions } from '../../common/globalActions'


const TEST_INITIAL_STATE = {
  userName : "",
  password : "",
  loggingIn : false,
  loggedIn : false,
  loginFailed : false,
};

describe('loginReducer test', () => {
    it('should return proper initial value', () => {
        expect(loginReducer(undefined, {})).toEqual(TEST_INITIAL_STATE)
    })

    it('updateFieldAction - updates "userName" field', () => {
        
        const updateFieldAction = {
            type: actionTypes.LOGIN_FIELD_CHANGED,
            changedFieldName: "userName",
            newValue: "Alti Zahen"
        }

        expect(loginReducer(TEST_INITIAL_STATE, updateFieldAction))
        .toEqual({
            ...TEST_INITIAL_STATE,
            userName: "Alti Zahen"
        })  
    })
    
    it('loginReducer - updates "password" field', () => {
        
        const updateFieldAction = {
            type: actionTypes.LOGIN_FIELD_CHANGED,
            changedFieldName: "password",
            newValue: "altigmailcom"
        }

        expect(loginReducer(TEST_INITIAL_STATE, updateFieldAction))
        .toEqual({
            ...TEST_INITIAL_STATE,
            password: "altigmailcom"
        })  
    })

    it('userLoggingInAction', () => {
        
        var dirtyState = { ...TEST_INITIAL_STATE,
            userName : "s",
            password : "s@l.com"};

        expect(loginReducer(dirtyState, {type: actionTypes.USER_LOGGING_IN}))
        .toEqual({
            ...dirtyState,
            loggingIn : true,
            loggedIn: false,
            loginFailed : false
        })  
    })

    it('userLoggedInAction', () => {
        
        var dirtyState = { ...TEST_INITIAL_STATE,
            userName : "s",
            password : "s@l.com"};

        expect(loginReducer(dirtyState, {type: globalActions.USER_LOGGED_IN}))
        .toEqual({
            ...dirtyState,
            loggingIn : false,
            loggedIn: true,
            loginFailed : false,
        })  
    })

    it('loginFailedAction', () => {
        
        var dirtyState = { ...TEST_INITIAL_STATE,
            userName : "s",
            password : "s@l.com"};

        expect(loginReducer(dirtyState, {type: actionTypes.LOGIN_FAILED}))
        .toEqual({
            ...dirtyState,
            loggingIn : false,
            loggedIn: false,
            loginFailed : true,
        })  
    })

    it('getUserNameSelector', () => {
        const state = { loginPage: { ...TEST_INITIAL_STATE, userName: "da" } };
        expect(getUserNameSelector(state)).toEqual("da")
    })

    it('getPasswordSelector', () => {
        const state = { loginPage: { ...TEST_INITIAL_STATE, password: "dacom" } };
        expect(getPasswordSelector(state)).toEqual("dacom")
    })

    it('getLoggingInSelector', () => {
        const state = { loginPage: { ...TEST_INITIAL_STATE, loggingIn: true } };
        expect(getLoggingInSelector(state)).toEqual(true)
    })

    it('getLoggedInSelector', () => {
        const state = { loginPage: { ...TEST_INITIAL_STATE, loggedIn: true } };
        expect(getLoggedInSelector(state)).toEqual(true)
    })

    it('getLoginFailedSelector', () => {
        const state = { loginPage: { ...TEST_INITIAL_STATE, loginFailed: true } };
        expect(getLoginFailedSelector(state)).toEqual(true)
    })
})