import React from 'react';

import Text from '../atoms/Text';

const chatAbout = (props) => (
  <div className="chat-about">
    <Text className="chat-with">Chat with {props.friend}</Text>
    <Text className="chat-num-messages">{props.status}</Text>
  </div>
);

export default chatAbout;