import React from 'react';
import classNames from 'classnames';
import './inputfield.css';
import { Prompt } from 'react-router-dom';

export default class InputField extends React.Component {
    
    state = {
        value: ''
    }

    changeText = (value) => this.setState({ value });
    
    onBlur = (value) => this.props.updateForm && this.props.updateForm(this.state.value);

    render(){
        const inputProps = {
            value: this.state.value,
            onChange: ({ target: { value }}) => this.changeText(value)
        }
        return (
            <div className={classNames(["input-field", this.state.value && "form-dirty"])}  onBlur={() => this.onBlur()}>
                { this.props.type === 'textarea' ? 
                    <textarea { ...inputProps } /> :
                    <input type={this.props.type} {...inputProps} />
                }
                <label>{this.props.name}</label>
                <Prompt
                    when={this.state.value !== ''}
                    message={location => (
                        `Are you sure you want to go to 
                            ${location.pathname} without submitting the form?`
                    )}
                />
            </div>
        )
    }
}