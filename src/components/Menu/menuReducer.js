import { globalActions } from '../../common/globalActions'

const INITIAL_STATE = {
  showProtectedLinks : false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case globalActions.USER_LOGGED_IN:
      return {
        ...state,
        showProtectedLinks: true,
      }

    case globalActions.LOGGED_OUT:
      return {
        ...state,
        showProtectedLinks: false,
      }
    default:
      return state
  }
};

export const getShowProtectedLinksSelector = (state) => {
    return state.menu.showProtectedLinks;
}
