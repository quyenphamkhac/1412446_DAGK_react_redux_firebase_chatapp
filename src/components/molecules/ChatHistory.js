import React, { Component } from 'react';

import Message from './Message';

class ChatHistory extends Component {
  render() {
    return (
      <div className="chat-history">
        <ul>
          <Message
            isMyMessage={false}
            isFirstMessage={true}
            sender="Olia"
            timestamp="10:10 AM, Today"
            message="Hi Vincent, how are you? How is the project coming along?"
          />

          <Message 
            isMyMessage={true}
            isFirstMessage={false}
            sender="Vincent"
            timestamp="10:12 AM, Today"
            message="Are we meeting today? Project has been already finished and I have results to show you."
          />
        </ul>
      </div>
    );
  }
}

export default ChatHistory;