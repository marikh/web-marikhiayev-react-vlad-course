// import loginReducer, {getUserNameSelector, getPasswordSelector, 
//     getLoggingInSelector, getLoggedInSelector, getLoginFailedSelector}  from './loginReducer';

// import { actionTypes } from './actions'
// import { globalActions } from '../../common/globalActions'


// const TEST_INITIAL_STATE = {
//   userName : "",
//   password : "",
//   loggingIn : false,
//   loggedIn : false,
//   loginFailed : false,
// };

// describe('loginReducer test', () => {
//     it('should return proper initial value', () => {
//         expect(loginReducer(undefined, {})).toEqual(TEST_INITIAL_STATE)
//     })

//     it('updateFieldAction - updates "userName" field', () => {
        
//         const updateFieldAction = {
//             type: actionTypes.CONTACT_FIELD_CHANGED,
//             changedFieldName: "userName",
//             newValue: "Alti Zahen"
//         }

//         expect(loginReducer(TEST_INITIAL_STATE, updateFieldAction))
//         .toEqual({
//             ...TEST_INITIAL_STATE,
//             name: "Alti Zahen"
//         })  
//     })
    
//     it('loginReducer - updates "password" field', () => {
        
//         const updateFieldAction = {
//             type: actionTypes.CONTACT_FIELD_CHANGED,
//             changedFieldName: "password",
//             newValue: "altigmailcom"
//         }

//         expect(loginReducer(TEST_INITIAL_STATE, updateFieldAction))
//         .toEqual({
//             ...TEST_INITIAL_STATE,
//             email: "altigmailcom"
//         })  
//     })

    
//     it('updateFieldAction - updates "message" field', () => {
        
//         const updateFieldAction = {
//             type: actionTypes.CONTACT_FIELD_CHANGED,
//             changedFieldName: "message",
//             newValue: "Aron, shulhan, kisaot, mehonat kvisa. alti zahen alti zahen."
//         }

//         expect(contactReducer(TEST_INITIAL_STATE, updateFieldAction))
//         .toEqual({
//             ...TEST_INITIAL_STATE,
//             message: "Aron, shulhan, kisaot, mehonat kvisa. alti zahen alti zahen."
//         })  
//     })

//     it('updateFieldAction - updates "name" field', () => {
        
//         var failedState = { ...TEST_INITIAL_STATE, submitContactFailed: true };

//         const updateFieldAction = {
//             type: actionTypes.CONTACT_FIELD_CHANGED,
//             changedFieldName: "name",
//             newValue: "Alti Zahe"
//         }

//         expect(contactReducer(failedState, updateFieldAction))
//         .toEqual({
//             ...TEST_INITIAL_STATE,
//             name: "Alti Zahe",
//             submitContactFailed : false
//         })  
//     })


//     it('contactFormSubmittedAction', () => {
        
//         var dirtyState = {
//             name : "s",
//             email : "s@c.com",
//             message : "s", 
//             submitContactFailed: true };

//         expect(contactReducer(dirtyState, {type: actionTypes.CONTACT_FORM_SUBMITTED}))
//         .toEqual({
//             ...dirtyState,
//             name : "",
//             email : "",
//             message : "",
//             submitContactFailed: false,
//         })  
//     })

 
//     it('updateFieldAction action - updates "name" field', () => {
        
//         var dirtyState = {
//             name : "s",
//             email : "s@.com",
//             message : "s", 
//             submitContactFailed: false };

//         expect(contactReducer(dirtyState, {type: actionTypes.FAILED_SUBMITTING}))
//         .toEqual({
//             ...dirtyState,
//             submitContactFailed: true
//         })  
//     })

//     it('updateFieldAction action - updates "name" field', () => {
        
//         var dirtyState = { 
//             name : "s",
//             email : "s@.com",
//             message : "s", 
//             submitContactFailed: false };

//         expect(contactReducer(dirtyState, {type: actionTypes.UNLOAD_CONTACT_FORM}))
//         .toEqual({
//             ...dirtyState,
//             ...TEST_INITIAL_STATE
//         })  
//     })

//     it('getUserNameSelector', () => {
//         const state = { loginPage: { ...TEST_INITIAL_STATE, userName: "da" } };
//         expect(getUserNameSelector(state)).toEqual("da")
//     })

//     it('getPasswordSelector', () => {
//         const state = { loginPage: { ...TEST_INITIAL_STATE, password: "dacom" } };
//         expect(getPasswordSelector(state)).toEqual("dacom")
//     })

//     it('getLoggingInSelector', () => {
//         const state = { loginPage: { ...TEST_INITIAL_STATE, loggingIn: true } };
//         expect(getLoggingInSelector(state)).toEqual(true)
//     })

//     it('getLoggedInSelector', () => {
//         const state = { loginPage: { ...TEST_INITIAL_STATE, loggedIn: true } };
//         expect(getLoggedInSelector(state)).toEqual(true)
//     })

//     it('getLoginFailedSelector', () => {
//         const state = { loginPage: { ...TEST_INITIAL_STATE, loginFailed: true } };
//         expect(getLoginFailedSelector(state)).toEqual(true)
//     })
// })