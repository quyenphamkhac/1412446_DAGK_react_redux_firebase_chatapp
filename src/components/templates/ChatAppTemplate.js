import React, { Component } from 'react';

import '../_settings/_base.scss';

import FriendView from '../organisms/FriendView';
import ChatView from '../organisms/ChatView';

class ChatAppTemplate extends Component {
  render() {
    return (
      <div className="container clearfix">
        <FriendView />
        <ChatView />
      </div>
    );
  }
}

export default ChatAppTemplate;