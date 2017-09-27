import React from 'react';
import classNames from 'classnames';
import './inputfield.css';
import { Prompt } from 'react-router-dom';
import { omit } from 'lodash';

export default class InputField extends React.Component {

    changeText = (name, value) => {
        this.props.updateForm && this.props.updateForm(name, value);
    }
    
    // bugggggy event ---> if I press enter (submit) while still on focus on this input field, form submitted with old value
    //onBlur = (value) => this.props.updateForm && this.props.updateForm(this.props.name, this.state.value);

    render(){
        
        const inputProps = {
            name: this.props.name, 
            label: this.props.label, 
            type: this.props.type, 
            value: this.props.value, 
            required: this.props.required,
            onChange: ({ target: { name, value }}) => this.changeText(name, value)
        }
        
        return (
            <div className={classNames(["input-field", this.props.value && "form-dirty"])}>
                { this.props.type === 'textarea' ? 
                    <textarea { ...inputProps } /> :
                    <input type={this.props.type} {...inputProps} />
                }
                <label>{this.props.label}</label>
            </div>
        )
    }
}