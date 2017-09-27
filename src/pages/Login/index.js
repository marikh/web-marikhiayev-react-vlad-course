import React from 'react';
import { LoginHeroArea } from './components/';
import './login.css';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getUserNameSelector, getPasswordSelector, getLoggingInSelector, getLoggedInSelector, getLoginFailedSelector } from './loginReducer';
import { loginAction, updateFieldAction } from './actions';
import { withRouter, Redirect } from 'react-router-dom';
import { 
    Layout,
    Section,
    InputField
} from '../../components/';

const Login = ({ links, match, location, history, 
    userName, password, loggingIn, loggedIn, loginFailed, loginAction, updateFieldAction }) =>  {
    
    if(loggedIn){
        return <Redirect to="/" />
    }

    return (
        <Layout heroContent={LoginHeroArea}>
            <Section>
                { loggingIn && <span>Logging in...</span> }
                { !loggingIn && !loggedIn &&      
                    <form onSubmit={(e) => {e.preventDefault(); loginAction();}}>
                        <div className="form-group" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <InputField name="userName" 
                                        type="text" value={userName} 
                                        label="User Name"
                                        updateForm={(fieldName, newValue)=> updateFieldAction(fieldName, newValue)}
                                        required={true}/>
                            <InputField name="password"
                                        type="password" value={password} 
                                        label="Password" 
                                        updateForm={(fieldName, newValue)=> updateFieldAction(fieldName, newValue)}
                                        required={true}/>
                        
                        <button type="submit">Login</button>
                        </div>
                        <div className={classNames([loginFailed && 'login-failed-notification'])}/>
                    </form>
                }
            </Section>
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    userName : getUserNameSelector(state),
    password : getPasswordSelector(state),
    loggingIn: getLoggingInSelector(state),
    loggedIn: getLoggedInSelector(state),
    loginFailed: getLoginFailedSelector(state),
})

export default withRouter(connect(mapStateToProps, { loginAction, updateFieldAction })(Login));
