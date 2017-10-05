import React from 'react';
import { Redirect } from 'react-router-dom';
import loginService from './loginService'


export default (WrappedComponent) => {
  return class CheckAuth extends React.Component {

    constructor(props){
      super(props);
      this.loginService = new loginService();
    }

    render(){
      return (this.loginService.loggedIn ? 
        <WrappedComponent {...this.props }/> : 
        <Redirect to="login" />
    )}
  }
}