import React from 'react';
import objectAssign from 'object-assign';
import { postSignUp } from '../../api/UserApi';
import SignupPresentation from './SignupPresentation';

export default class SignupContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: '',
      password: '',
      fullName: '',
      success: false
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.success != this.props.success) {
      if(this.props.success) {

      }
    }
  }


  requestSignUp() {
    let _self = this;

    postSignUp(objectAssign({}, this.state)).then((res) => {
      if(res.success) {
        _self.setState({
          success: true
        })
      }
    });
  }

  handleForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return(
      <>
        <SignupPresentation 
          handleForm={this.handleForm}
          emailAddress={this.state.emaillAddress}
          password={this.state.password}
          fullName={this.state.fullName} />
      </>
    );
  }
}