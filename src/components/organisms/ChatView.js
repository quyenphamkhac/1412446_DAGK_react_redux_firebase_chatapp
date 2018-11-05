import React, { Component } from 'react';

import ChatHeader from '../molecules/ChatHeader';
import ChatHistory from '../molecules/ChatHistory';
import SendMessage from '../molecules/SendMessage';

class ChatView extends Component {
  render() {
    return (
      <div className="chat">
        <ChatHeader 
          friend="Vincent Porter"
          numMessages={1902}
        />
        <ChatHistory />
        <SendMessage />
      </div>
    );
  }
}

export default ChatView;