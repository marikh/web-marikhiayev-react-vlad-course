import React from 'react';
import { connect } from 'react-redux';
import './contact.css';
import classNames from 'classnames';
import { getNameSelector, getEmailSelector, getMessageSelector, getIsDirtySelector, getSubmitContactFailedSelector} from './contactReducer';
import { submitAction, updateFieldAction, unloadContactForm } from './actions';
import { withRouter, Prompt } from 'react-router-dom';
import { 
    Layout,
    Section,
    InputField
} from '../../components/';

export class Contact extends React.Component{

    componentWillUnmount() {
           this.props.unloadContactForm();
    }

    render(){

        const { name, email, message, submitContactFailed, isDirty, submitAction, updateFieldAction } = this.props;

        return (
            <Layout>
                <Section>
                        <form onSubmit={(e) => {e.preventDefault(); submitAction();}}>
                            <div className="form-group" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <InputField name="name" 
                                            type="text" value={name} 
                                            label="Name"
                                            updateForm={(fieldName, newValue)=> updateFieldAction(fieldName, newValue)}
                                            required={false}/>
                                <InputField name="email"
                                            type="email" value={email} 
                                            label="Email" 
                                            updateForm={(fieldName, newValue)=> updateFieldAction(fieldName, newValue)}
                                            required={true}/>
                                <InputField name="message"
                                            type="textarea" value={message} 
                                            label="Message" 
                                            updateForm={(fieldName, newValue)=> updateFieldAction(fieldName, newValue)}
                                            required={true}/>
                            
                            <button type="submit">Submit</button>
                            </div>
                            <div className={classNames([submitContactFailed && 'contact-form-submit-failed-notification'])}/>
                        </form>
                        <Prompt
                            when={isDirty}
                            message={location => (
                                `Are you sure you want to go to 
                                    ${location.pathname} without submitting the form?`
                            )}
                        />
                </Section>
            </Layout>
        )
    }
} 

const mapStateToProps = (state) => ({
    name : getNameSelector(state),
    email : getEmailSelector(state),
    message: getMessageSelector(state),
    submitContactFailed: getSubmitContactFailedSelector(state),
    isDirty: getIsDirtySelector(state),
})

export default withRouter(connect(mapStateToProps, { submitAction, updateFieldAction, unloadContactForm })(Contact));
