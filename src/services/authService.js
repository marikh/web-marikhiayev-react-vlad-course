import React from 'react';
import { Redirect } from 'react-router-dom';


const checkAuth = (WrappedComponent) => {
  const isAuthenticated = true;

  return ({ match }) => (
    isAuthenticated ? 
      <WrappedComponent {...this.props } match={match}/> : 
      <Redirect to="login" />
  )
}

export {
    checkAuth
}