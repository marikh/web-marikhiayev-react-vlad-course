import loginService from '../../services/loginService'
import { globalActions } from '../../common/globalActions'

export const actionTypes = {
    LOGIN_FIELD_CHANGED: 'LOGIN_FIELD_CHANGED',
    USER_LOGGING_IN: 'USER_LOGGING_IN',
    LOGIN_FAILED: 'LOGIN_FAILED'
}

export const updateFieldAction = (changedFieldName, newValue) => ({
    type: actionTypes.LOGIN_FIELD_CHANGED,
    changedFieldName: changedFieldName,
    newValue: newValue
})

export const userLoggingInAction = () => ({
    type: actionTypes.USER_LOGGING_IN
})

export const userLoggedInAction = (loggedInUser) => ({
    type: globalActions.USER_LOGGED_IN,
    loggedInUser: loggedInUser
})

export const loginFailedAction = () => ({
    type: actionTypes.LOGIN_FAILED
})

export const loginAction = () => (dispatch, getState) => {
    dispatch(userLoggingInAction());
    const loginServce = new loginService();
    const { loginPage : { userName, password } } = getState();

    const threeSecDelayTimerToken = setTimeout(() => 
    { 
        clearTimeout(threeSecDelayTimerToken);

        const loggedIn = loginServce.login(userName, password);
        if(loggedIn)
            dispatch(userLoggedInAction(userName));
        else    
            dispatch(loginFailedAction());            
    }
    , 3000);
}
