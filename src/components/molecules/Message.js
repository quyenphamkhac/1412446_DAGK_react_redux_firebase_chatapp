import React from 'react';

import MessageData from './MessageData';
import Text from '../atoms/Text';

const message = (props) => (
  <React.Fragment>
    <li className={`${props.isFirstMessage ? 'clearfix' : ''}`}>
      <MessageData 
        sender={props.sender}
        isMyMessage={props.isMyMessage}
        timestamp={props.timestamp}
      />
      <Text className={`message ${props.isMyMessage ? "my-message" : "other-message float-right"}`}>{props.message}</Text>
    </li>
  </React.Fragment>
);

export default message;