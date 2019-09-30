import React from 'react';
import AuthPresentation from './AuthPresentation';

export default class AuthContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.validateEmpty = this.validateEmpty.bind(this);
  }

  validateEmpty() {
    
  }

  
  render() {
    return(
      <>
        <AuthPresentation />
      </>
    );
  }
}