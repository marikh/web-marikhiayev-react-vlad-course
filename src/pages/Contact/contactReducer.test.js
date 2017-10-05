import contactReducer, {getNameSelector, getEmailSelector, getMessageSelector, getSubmitContactFailedSelector, getIsDirtySelector}  from './contactReducer';
import { actionTypes } from './actions';

const TEST_INITIAL_STATE = {
  name : "",
  email : "",
  message : "",
  submitContactFailed: false,
};


describe('contactReducer test', () => {
    it('should return proper initial value', () => {
        expect(contactReducer(undefined, {})).toEqual(TEST_INITIAL_STATE)
    })

    it('updateFieldAction - updates "name" field', () => {
        
        const updateFieldAction = {
            type: actionTypes.CONTACT_FIELD_CHANGED,
            changedFieldName: "name",
            newValue: "Alti Zahen"
        }

        expect(contactReducer(TEST_INITIAL_STATE, updateFieldAction))
        .toEqual({
            ...TEST_INITIAL_STATE,
            name: "Alti Zahen"
        })  
    })
    
    it('updateFieldAction - updates "email" field', () => {
        
        const updateFieldAction = {
            type: actionTypes.CONTACT_FIELD_CHANGED,
            changedFieldName: "email",
            newValue: "altiZehen@gmail.com"
        }

        expect(contactReducer(TEST_INITIAL_STATE, updateFieldAction))
        .toEqual({
            ...TEST_INITIAL_STATE,
            email: "altiZehen@gmail.com"
        })  
    })

    
    it('updateFieldAction - updates "message" field', () => {
        
        const updateFieldAction = {
            type: actionTypes.CONTACT_FIELD_CHANGED,
            changedFieldName: "message",
            newValue: "Aron, shulhan, kisaot, mehonat kvisa. alti zahen alti zahen."
        }

        expect(contactReducer(TEST_INITIAL_STATE, updateFieldAction))
        .toEqual({
            ...TEST_INITIAL_STATE,
            message: "Aron, shulhan, kisaot, mehonat kvisa. alti zahen alti zahen."
        })  
    })

    it('updateFieldAction - updates "submitContactFailed" field', () => {
        
        var failedState = { ...TEST_INITIAL_STATE, submitContactFailed: true };

        const updateFieldAction = {
            type: actionTypes.CONTACT_FIELD_CHANGED,
            changedFieldName: "name",
            newValue: "Alti Zahe"
        }

        expect(contactReducer(failedState, updateFieldAction))
        .toEqual({
            ...TEST_INITIAL_STATE,
            name: "Alti Zahe",
            submitContactFailed : false
        })  
    })


    it('contactFormSubmittedAction', () => {
        
        var dirtyState = {
            name : "s",
            email : "s@c.com",
            message : "s", 
            submitContactFailed: true };

        expect(contactReducer(dirtyState, {type: actionTypes.CONTACT_FORM_SUBMITTED}))
        .toEqual({
            ...dirtyState,
            name : "",
            email : "",
            message : "",
            submitContactFailed: false,
        })  
    })

 
    it('failedSubmitAction', () => {
        
        var dirtyState = {
            name : "s",
            email : "s@.com",
            message : "s", 
            submitContactFailed: false };

        expect(contactReducer(dirtyState, {type: actionTypes.FAILED_SUBMITTING}))
        .toEqual({
            ...dirtyState,
            submitContactFailed: true
        })  
    })

    it('unloadContactForm', () => {
        
        var dirtyState = { 
            name : "s",
            email : "s@.com",
            message : "s", 
            submitContactFailed: false };

        expect(contactReducer(dirtyState, {type: actionTypes.UNLOAD_CONTACT_FORM}))
        .toEqual({
            ...dirtyState,
            ...TEST_INITIAL_STATE
        })  
    })

    it('getNameSelector', () => {
        const state = { contact: { ...TEST_INITIAL_STATE, name: "da" } };
        expect(getNameSelector(state)).toEqual("da")
    })

    it('getEmailSelector', () => {
        const state = { contact: { ...TEST_INITIAL_STATE, email: "da@asd.com" } };
        expect(getEmailSelector(state)).toEqual("da@asd.com")
    })

    it('getMessageSelector', () => {
        const state = { contact: { ...TEST_INITIAL_STATE, message: "das" } };
        expect(getMessageSelector(state)).toEqual("das")
    })

    it('getSubmitContactFailedSelector', () => {
        const state = { contact: { ...TEST_INITIAL_STATE, submitContactFailed: true } };
        expect(getSubmitContactFailedSelector(state)).toEqual(true)
    })

    it('getIsDirtySelector true', () => {
        const state = { contact: { ...TEST_INITIAL_STATE, name: "da" } };
        expect(getIsDirtySelector(state)).toEqual(true)
    })

    it('getIsDirtySelector false', () => {
        const state = { contact: { ...TEST_INITIAL_STATE } };
        expect(getIsDirtySelector(state)).toEqual(false)
    })
})