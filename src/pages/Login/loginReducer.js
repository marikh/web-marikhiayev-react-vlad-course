import { actionTypes } from './actions'

const INITIAL_STATE = {
  userName : "",
  password : ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_FIELD_CHANGED:
      return {
        ...state,
        [action.changedFieldName]: action.newValue
      }

    case actionTypes.USER_LOGGING_IN:
      return state.filter(cartProductId =>
        cartProductId !== action.productId
      )

    case actionTypes.USER_LOGGED_IN:
      return state.filter(cartProductId =>
        cartProductId !== action.productId
      )

    default:
      return state
  }
};

export const getUserNameSelector = (state) => {
    return state.loginPage.userName;
}

export const getPasswordSelector = (state) => {
    return state.loginPage.password;
}
