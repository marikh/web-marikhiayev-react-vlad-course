import { actionTypes, submitAction, updateFieldAction, submittingAction,
    contactFormSubmittedAction,failedSubmitAction,unloadContactForm } from './actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { makeAwaitable } from '../../common/Extensions/promises'

describe('Contact actions',()=>{

    it('submitAction', () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);

        const expectedActions = [
        { type: actionTypes.SUBMITTING },
        { type: actionTypes.CONTACT_FORM_SUBMITTED }
        ]

        const store = mockStore({ contact: {} })

        return store.dispatch(makeAwaitable(submitAction)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    
    it('updateFieldAction', () => {
        
        const updateField = updateFieldAction("name", "didula Alik");

        const expectedAction = {
            type: "CONTACT_FIELD_CHANGED",
            changedFieldName: "name",
            newValue: "didula Alik"
        };

        expect(updateField).toEqual(expectedAction)
    })

    
    it('contactFormSubmittedAction', () => {
        
        const submittedAct = contactFormSubmittedAction();

        const expectedAction = {
            type: "CONTACT_FORM_SUBMITTED"
        };

        expect(submittedAct).toEqual(expectedAction)
    })
    
    it('contactFormSubmittedAction', () => {
        
        const submittingAct = submittingAction();

        const expectedAction = {
            type: "SUBMITTING"
        };

        expect(submittingAct).toEqual(expectedAction)
    })
    
    it('failedSubmitAction', () => {
        
        const failedSubmitAct = failedSubmitAction();

        const expectedAction = {
            type: "FAILED_SUBMITTING"
        };

        expect(failedSubmitAct).toEqual(expectedAction)
    })
    
    it('unloadContactForm', () => {
        
        const unloadContactFormAct = unloadContactForm();

        const expectedAction = {
            type: "UNLOAD_CONTACT_FORM"
        };

        expect(unloadContactFormAct).toEqual(expectedAction)
    })
})