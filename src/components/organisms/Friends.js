import React from 'react';

import Friend from '../molecules/Friend';

const friends = (props) => (
  <ul className="list">
    <Friend name="Aiden Chavez" online status="online" />
    <Friend name="Aiden Chavez 1" online={false} status="left 7 mins ago" />
  </ul>
);

export default friends;