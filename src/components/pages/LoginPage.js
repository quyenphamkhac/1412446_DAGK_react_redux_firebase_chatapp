import React, { Component } from 'react';

import LoginButton from '../atoms/LoginButton';


import { loginWithGoogle } from '../../redux/modules/auth';

import { connect } from 'react-redux';


class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginButton
          clicked={() => this.props.loginWithGoogle()}
        >
          Login With Google Account
        </LoginButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
  loginWithGoogle
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);