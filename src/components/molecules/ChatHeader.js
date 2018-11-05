import React from 'react';

import Avatar from '../atoms/Avatar';
import ChatAbout from './ChatAbout';
import Icon from '../atoms/Icon';

const chatHeader = (props) => (
  <div className="chat-header clearfix">
    <Avatar src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
    <ChatAbout 
      friend={props.friend}
      numMessages={props.numMessages}
    />
    <Icon icon="fa fa-star" />
  </div>
);

export default chatHeader;