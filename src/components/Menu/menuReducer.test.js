import menuReducer, {getShowProtectedLinksSelector}  from './menuReducer';
import { globalActions } from '../../common/globalActions'

const TEST_INITIAL_STATE = {
  showProtectedLinks : false
}

describe('counterReducer test', () => {
    it('should return proper initial value', () => {
        expect(menuReducer(undefined, {})).toEqual(TEST_INITIAL_STATE)
    })

    it('user loggen in --> state : { show protected links : true }', () => {
        expect(
            menuReducer(TEST_INITIAL_STATE, { 
                type: globalActions.USER_LOGGED_IN
            })
        )
        .toEqual({
                showProtectedLinks: true
        })  
    })

    it('getShowProtectedLinksSelector return false for initial value', () => {
        const state = { menu : menuReducer(undefined, {}) }
        expect(getShowProtectedLinksSelector(state)).toEqual(false)
    })

    it('getShowProtectedLinksSelector return true when user loggen in --> state : { show protected links : true }', () => {
        const state = { menu : menuReducer(TEST_INITIAL_STATE, { type: globalActions.USER_LOGGED_IN }) }
        expect(getShowProtectedLinksSelector(state)).toEqual(true)
    })
})

