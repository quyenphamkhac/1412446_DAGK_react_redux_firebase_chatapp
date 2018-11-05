import React from 'react';

import Avatar from '../atoms/Avatar';
import About from './About';

const friend = (props) => (
  <React.Fragment>
    <li className="clearfix">
      <Avatar src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
      <About 
        online={props.online}
        status={props.status}
        name={props.name}
      />
    </li>
  </React.Fragment>
);

export default friend;