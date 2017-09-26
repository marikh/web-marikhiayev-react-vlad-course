import React from 'react';
import { LoginHeroArea } from './components/';
import './login.css';
import { connect } from 'react-redux';
import { getUserNameSelector, getPasswordSelector } from './loginReducer';
import { deleteProductFromCart } from './actions';
import { withRouter } from 'react-router-dom';
import { 
    Layout,
    Section,
    Heading,
    Form
} from '../../components/';

const Login = ({ links, match, location, userName, password, loginAction }) => (
    <Layout heroContent={LoginHeroArea}>
        <Section>
            <form onSubmit={(e) => {e.preventDefault(); loginAction();}}>
                    <div className="form-group" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <InputField name="userName" 
                                    type="text" value={userName} 
                                    label="User Name"
                                    required={true}/>
                        <InputField name="password"
                                    type="password" value={password} 
                                    label="Password" 
                                    required={true}/>
                    
                    <button type="submit">Login</button>
                    </div>
                </form>
                <div className={classNames([this.state.submitted && 'submitted-notification'])}/>
        </Section>
    </Layout>
)


const mapStateToProps = (state) => ({
    userName : getUserNameSelector(state),
    password : getPasswordSelector(state)
})

export default withRouter(connect(mapStateToProps, { loginAction })(Login));
