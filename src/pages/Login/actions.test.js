import { updateFieldAction } from './actions'

describe('Login actions',()=>{

    it('updateFieldAction', () => {
        
        const updateFieldAct = updateFieldAction("userName", "didula Alik");

        const expectedAction = {
            type: "LOGIN_FIELD_CHANGED",
            changedFieldName: "userName",
            newValue: "didula Alik"
        };

        expect(updateFieldAct).toEqual(expectedAction)
    })
})