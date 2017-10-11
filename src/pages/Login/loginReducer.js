import { actionTypes } from './actions'
import { globalActions } from '../../common/globalActions'


const INITIAL_STATE = {
  userName : "",
  password : "",
  loggingIn : false,
  loggedIn : false,
  loginFailed : false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_FIELD_CHANGED:
      return {
        ...state,
        [action.changedFieldName]: action.newValue
      }

    case globalActions.USER_LOGGING_IN:
      return {
        ...state,
        loggingIn : true,
        loggedIn: false,
        loginFailed : false,
      }

    case globalActions.USER_LOGGED_IN:
      return {
        ...state,
        loggingIn : false,
        loggedIn: true,
        loginFailed : false,
      }

    case globalActions.LOGIN_FAILED:
      return {
        ...state,
        loggingIn : false,
        loggedIn: false,
        loginFailed : true,
      }
    
    case globalActions.LOGGED_OUT:
      return {
        ...state,
        userName : "",
        password : "",
        loggingIn : false,
        loggedIn: false,
        loginFailed : false,
      }
    
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

export const getLoggingInSelector = (state) => {
    return state.loginPage.loggingIn;
}

export const getLoggedInSelector = (state) => {
    return state.loginPage.loggedIn;
}

export const getLoginFailedSelector = (state) => {
    return state.loginPage.loginFailed;
}
