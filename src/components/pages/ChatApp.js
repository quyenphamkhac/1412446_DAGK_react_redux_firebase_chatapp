import React, { Component } from 'react';
import { database } from '../../firebase/firebase';
import { getItem, clearLocalStorage } from '../../utils/LocalStorage';
import { navigate } from '@reach/router';

import { Menu } from 'semantic-ui-react';

class ChatApp extends Component {
  logout = () => {
    const { uid } = getItem("auth");
    database.ref(`users/${uid}`).update({
      isOnline: false,
      lastLoginTime: new Date().getTime(),
    }, function (error) {
      if (error) {
        console.log("[error]", error);
      } else {
        console.log("[change success]");
        clearLocalStorage();
        navigate('/');
      }
    })
  }

  render() {
    return (
      <div>
        Chat page
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default ChatApp;