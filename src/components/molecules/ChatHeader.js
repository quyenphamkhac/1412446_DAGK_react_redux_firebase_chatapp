import React from 'react';

import Avatar from '../atoms/Avatar';
import ChatAbout from './ChatAbout';
import Icon from '../atoms/Icon';

const chatHeader = (props) => (
  <div className="chat-header clearfix">
    <Avatar src={props.avatar} alt="avatar" />
    <ChatAbout 
      friend={props.friend}
      status={props.status}
    />
    <Icon 
      icon="fa fa-star"
      isStar={props.isStar}
      clicked={props.onStarClick}
    />
  </div>
);

export default chatHeader;