import React from 'react';

import MessageData from './MessageData';
import Text from '../atoms/Text';
import Image from '../atoms/Image';

import '../_settings/_base.css';

const isImageUrl = (message = "") => {
  return message.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/g);
}

const message = (props) => (
  <React.Fragment>
    <li className={`${props.isFirstMessage ? 'clearfix' : ''}`} style={{overflowWrap: 'break-word'}}>
      <MessageData 
        sender={props.sender}
        isMyMessage={props.isMyMessage}
        timestamp={props.timestamp}
      />
      {isImageUrl(props.message) 
        ? <Image src={props.message} alt="image_message" /> 
        : <Text className={`message ${props.isMyMessage ? "my-message" : "other-message float-right"}`}>{props.message}</Text>}
     
    </li>
  </React.Fragment>
);

export default message;