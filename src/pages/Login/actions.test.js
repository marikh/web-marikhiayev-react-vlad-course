import { actionTypes, loginAction } from './actions'
import { globalActions } from '../../common/globalActions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { delayPromise, makeAwaitable } from '../../common/Extensions/promises'



describe('Login actions',()=>{

    it('loginAction good user --> logged in', () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);

        const expectedActions = [
        { type: actionTypes.USER_LOGGING_IN },
        { type: globalActions.USER_LOGGED_IN, loggedInUser: "Marik" }
        ]

        const store = mockStore({ loginPage: { userName: "Marik", password: "M" } })

        //// !!!! isn't working because store.dispatch(loginAction()) doesn't return promise
        //// !!!! even though we added thunk as middleware
        // return store.dispatch(loginAction()).then(() => 
        //     expect(store.getActions()).toEqual(expectedActions));

        return store.dispatch(makeAwaitable(loginAction)).then(delayPromise(4000)).then(() => 
            expect(store.getActions()).toEqual(expectedActions))
    })

    it('loginAction bad user --> Faild log in', () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);

        const expectedActions = [
        { type: actionTypes.USER_LOGGING_IN },
        { type: actionTypes.LOGIN_FAILED }
        ]
        
        //// !!!! isn't working because store.dispatch(loginAction()) doesn't return promise
        //// !!!! even though we added thunk as middleware
        // return store.dispatch(loginAction()).then(() => 
        //     expect(store.getActions()).toEqual(expectedActions));

        const store = mockStore({ loginPage: { userName: "Maik", password: "M" } })
        
        return store.dispatch(makeAwaitable(loginAction)).then(delayPromise(4000)).then(() => 
            expect(store.getActions()).toEqual(expectedActions))
    })
})