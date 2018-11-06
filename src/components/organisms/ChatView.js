import React, { Component } from 'react';


import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

import ChatHeader from '../molecules/ChatHeader';
import ChatHistory from '../molecules/ChatHistory';
import SendMessage from '../molecules/SendMessage';

class ChatView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    }
  }

  createChatUid = (myUid, friendUid) => {
    return myUid > friendUid ? `${myUid}-${friendUid}` : `${friendUid}-${myUid}`; 
  }

  messageChangeHandler = (event) => {
    this.setState({
      message: event.target.value,
    });
  }

  sendMessageHandler = (chatUid, sender, senderUid) => {
    const { firebase } = this.props;
    const { message } = this.state;
    const newMessage = {
      message,
      sender,
      senderUid,
      timestamp: new Date().getTime(),
    }
    firebase.push(`chat/${chatUid}`, newMessage);
    this.setState({message: ''});
  }

  render() {
    const { message } = this.state;
    const { location, auth, chat } = this.props;
    const friend = location && location.state;
    const me = !isLoaded(auth) ? null : auth;
    const chatUid = me && friend && this.createChatUid(me.uid, friend.uid);
    const allChatMessages = !isLoaded(chat) ? null : chat;

    const messages = allChatMessages && allChatMessages[chatUid];
    return (
      <div className="chat">
        <ChatHeader 
          friend={friend.name}
          status={friend.status}
          avatar={friend.avatar}
        />
        <ChatHistory 
          messages={messages}
          myUid={me.uid}
          friendUid={friend.uid}
        />
        <SendMessage
          message={message}
          onMessageChange={this.messageChangeHandler}
          onSendMessage={this.sendMessageHandler}
          chatUid={chatUid}
          sender={me.displayName}
          senderUid={me.uid}
        />
      </div>
    );
  }
}

export default compose(
  firebaseConnect([
    'chat',
  ]),
  connect(({ firebase: { data, auth } }) => ({ 
    chat: data.chat,
    auth,
  }))
)(ChatView);
