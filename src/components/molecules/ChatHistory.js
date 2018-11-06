import React, { Component } from 'react';

import Message from './Message';

class ChatHistory extends Component {
  render() {
    const { messages, myUid, friendUid } = this.props;
    const messageList = messages && myUid && friendUid && Object.keys(messages).map((key, index) => (
      <Message
        key={index}
        isMyMessage={messages[key].senderUid === myUid}
        isFirstMessage={index === 0}
        sender={messages[key].sender}
        timestamp={messages[key].timestamp}
        message={messages[key].message}
      />
    ))
    return (
      <div className="chat-history">
        <ul>
          {messageList}
        </ul>
      </div>
    );
  }
}

export default ChatHistory;