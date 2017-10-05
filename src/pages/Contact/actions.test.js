import { actionTypes, submitAction } from './actions'
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
})