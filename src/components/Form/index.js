import React,{Component} from 'react';
import classNames from 'classnames';
import './form.css';
import { 
    Layout,
    Section,
    Heading,
    InputField
} from '../../components/';
import { Prompt } from 'react-router-dom';

class Form extends Component{

    constructor(props){
        super(props)

        this.updateForm = this.updateForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { 
            formFields : this.props.formFields,
            submitted:false
        };
    }

    updateForm(name, value){

        const changedField = this.state.formFields.find(field => field.name === name);
        changedField.value = value;

        const indexOfItemToUpdate =  this.state.formFields.indexOf(changedField);
        const updatedFormFieldsArray = [...this.state.formFields.slice(0, indexOfItemToUpdate), changedField, ...this.state.formFields.slice(indexOfItemToUpdate + 1)];

        this.setState({ formFields : updatedFormFieldsArray , submitted: false});

    }

    
    onSubmit(e){
        e.preventDefault();

        this.resetFields();
        this.setState({ formFields : [...this.state.formFields] , submitted: true });        
    }

    resetFields(){
        for(let i=0; i<this.state.formFields.length; i++){
            this.state.formFields[i].value = '';
        }
    }

render(){
    return (
        <div className="form-div">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    {  this.state.formFields.map(( {name, label, type, value, required} ) => (
                        <InputField key={`input-field-${name}`} name={name} 
                                    type={type} value={value} label={label} 
                                    required={required}
                                    updateForm={this.updateForm} />
                        ))
                    }
                    
                    <button type="submit">Submit</button>
                    </div>
                </form>
                <div className={classNames([this.state.submitted && 'submitted-notification'])}/>
                <Prompt
                    when={this.state.formFields.some(field => field.value !== '')}
                    message={location => (
                        `Are you sure you want to go to 
                            ${location.pathname} without submitting the form?`
                    )}
                />
        </div>
    )
    }
}

export default Form;



