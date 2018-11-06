import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

import { Grid, Header, Image, Message } from 'semantic-ui-react';

import GoogleButton from 'react-google-button';

import { Redirect } from 'react-router-dom';

import logo from '../../assets/logo.png';

class LoginTemplate extends Component {
  render() {
    const { firebase, auth } = this.props;
    return (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              <Image src={logo} /> React-Redux-Firebase Chat App
            </Header>
            <GoogleButton
              style={{width: "100%", marginBottom: 10}}
              onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
            />
            <Message>
              {
                !isLoaded(auth)
                ? <span>Authen checking ...</span>
                : isEmpty(auth)
                  ? <span>Please log-in to using chat app</span>
                  : <Redirect to="/app" />
              }
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }))
)(LoginTemplate)