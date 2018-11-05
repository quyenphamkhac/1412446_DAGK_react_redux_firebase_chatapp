import React from 'react';

import Text from '../atoms/Text';
import Icon from '../atoms/Icon';

const about = (props) => (
  <div className="about">
    <Text className="name">{props.name}</Text>
    <div className="status">
      <Icon icon={`fa fa-circle ${props.online ? 'online' : 'offline'}`} /> {props.status}
    </div>
  </div>
);

export default about;