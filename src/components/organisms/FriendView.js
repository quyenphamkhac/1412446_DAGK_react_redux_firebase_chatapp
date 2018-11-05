import React, { Component } from 'react';

import FriendSearch from '../molecules/FriendSearch';
import Friends from './Friends';

class FriendView extends Component {
  render() {
    return (
      <div className="people-list" id="people-list">
        <FriendSearch />
        <Friends />
      </div>
    );
  }
}

export default FriendView;