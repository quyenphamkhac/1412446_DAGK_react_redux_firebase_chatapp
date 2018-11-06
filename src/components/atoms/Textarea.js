import React from 'react';

const textarea = (props) => (
  <textarea value={props.value} onChange={props.changed} name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></textarea>
);

export default textarea;