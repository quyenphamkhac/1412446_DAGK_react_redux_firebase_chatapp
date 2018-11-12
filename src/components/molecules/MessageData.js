import React from 'react';

import Icon from '../atoms/Icon';

import moment from 'moment';

const messageData = (props) => (
  <div className={`message-data ${props.isMyMessage ? "" : "align-right"}`}>
    {props.isMyMessage ? (
      <React.Fragment>
        <span className="message-data-name"><Icon icon="fa fa-circle online" /> {props.sender}</span>
        <span className="message-data-time">{moment(props.timestamp).fromNow()}</span>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <span className="message-data-time" >{moment(props.timestamp).fromNow()}</span> &nbsp; &nbsp;
        <span className="message-data-name" >{props.sender}</span> <Icon icon="fa fa-circle me" />
      </React.Fragment>
    )}
  </div>
);

export default messageData;