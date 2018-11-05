import React, { Component } from 'react';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Textarea from '../atoms/Textarea'


class SendMessage extends Component {
  render() {
    return (
      <div className="chat-message clearfix">
        <Textarea />
        <Icon icon="fa fa-file-image-o" />
        <Button>Send</Button>
      </div>
    );
  }
}

export default SendMessage;