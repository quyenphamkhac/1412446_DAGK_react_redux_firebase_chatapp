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

  addFriendToStars = (currentState, myUid, friendUid) => {
    const { firebase } = this.props;
    let star = {};
    star[friendUid] = !currentState;
    firebase.update(`stars/${myUid}`, star);
  }

  render() {
    const { message } = this.state;
    const { location, auth, chat, stars } = this.props;
    const friend = location && location.state;
    const me = !isLoaded(auth) ? null : auth;
    const chatUid = me && friend && this.createChatUid(me.uid, friend.uid);
    const allChatMessages = !isLoaded(chat) ? null : chat;
    const messages = allChatMessages && allChatMessages[chatUid];

    //check stars
    const starList = !isLoaded(stars) ? null : stars;
    const myStars = starList && me && starList[me.uid];

    const isStar = myStars && friend && myStars[friend.uid] === true ? true : false; 

    return (
      <div className="chat">
        <ChatHeader 
          friend={friend.name}
          status={friend.status}
          avatar={friend.avatar}
          myUid={me.uid}
          friendUid={friend.uid}
          isStar={isStar}
          onStarClick={() => this.addFriendToStars(isStar, me.uid, friend.uid)}
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
    'stars',
  ]),
  connect(({ firebase: { data, auth } }) => ({ 
    chat: data.chat,
    stars: data.stars,
    auth,
  }))
)(ChatView);
