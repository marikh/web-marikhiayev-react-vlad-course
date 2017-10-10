import loginService from '../services/loginService'

export const globalActions = {
    USER_LOGGED_IN: 'USER_LOGGED_IN',
    USER_LOGGING_IN: 'USER_LOGGING_IN',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGGING_OUT : 'LOGGING_OUT',
    LOGGED_OUT : 'LOGGED_OUT'
}

export const userLoggingInAction = () => ({
    type: globalActions.USER_LOGGING_IN
})

export const userLoggedInAction = (loggedInUser) => ({
    type: globalActions.USER_LOGGED_IN,
    loggedInUser: loggedInUser
})

export const loginFailedAction = () => ({
    type: globalActions.LOGIN_FAILED
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

export const logOut = () => (dispatch, getState) => {
    dispatch(loggingOutAction());
    dispatch(loggedOutAction());
}

export const loggingOutAction = () => ({
    type: globalActions.LOGGING_OUT
})

export const loggedOutAction = () => ({
    type: globalActions.LOGGED_OUT
})

