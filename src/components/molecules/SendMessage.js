import React, { Component } from 'react';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Textarea from '../atoms/Textarea'


class SendMessage extends Component {
  render() {
    const { chatUid, message, sender, senderUid } = this.props;
    return (
      <div className="chat-message clearfix">
        <Textarea value={message} changed={this.props.onMessageChange} />
        <Icon icon="fa fa-file-image-o" />
        <Button clicked={() => this.props.onSendMessage(chatUid, sender, senderUid)}>Send</Button>
      </div>
    );
  }
}

export default SendMessage;