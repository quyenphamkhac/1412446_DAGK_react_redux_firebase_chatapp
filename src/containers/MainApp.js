import React, { Component } from 'react';
import AtomButton from '../components/atoms/AtomButton';

import { loginWithGoogle } from '../redux/modules/auth';

import { connect } from 'react-redux';

class MainApp extends Component {
    render() {
        return (
            <div>
                <AtomButton
                    clicked={() => this.props.loginWithGoogle()}
                >
                    Login With Google Account
                </AtomButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);