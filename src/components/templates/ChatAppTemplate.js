import React, { Component } from 'react';
//redux
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
//styles
import '../_settings/_base.scss';
//components
import FriendView from '../organisms/FriendView';
import ChatView from '../organisms/ChatView';
import Loading from '../atoms/Loading';
import NoChatRoom from '../molecules/NoChatRoom';
import { Menu, Button, Header } from 'semantic-ui-react';
//react router
import { Route, Switch } from 'react-router-dom';

class ChatAppTemplate extends Component {

  componentWillReceiveProps({ authExists }) {
    if (!authExists) {
      this.props.history.push('/');
    }
  }

  render() {
    const { auth, firebase, users } = this.props;
    const friends = !isLoaded(users) ? null : users;
    return (
      <div className="container clearfix">

        <Menu pointing secondary>
          <Menu.Item>
            <Header as='h3' inverted color='grey'>RRF Chat App</Header>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Button 
              content='Log out' 
              primary
              icon='log out'
              style={{margin: 5}}
              onClick={() => firebase.logout()}
            />
          </Menu.Menu>
        </Menu>
        {
          isLoaded(auth)
          ? (
            <React.Fragment>      
              <FriendView friends={friends} />
              <Switch>
                <Route path={`/app/:uid`} component={ChatView}/> 
                <Route component={NoChatRoom}/>
              </Switch>
            </React.Fragment>
          )
          : <Loading />
        }
      </div>
    );
  }
}

export default compose(
  firebaseConnect([
    'users',
  ]),
  connect(({ firebase: { auth, data } }) => ({ 
    authExists: !!auth && !!auth.uid, 
    auth, 
    users: data.users,
  }))
)(ChatAppTemplate);