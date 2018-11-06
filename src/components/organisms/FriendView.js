import React, { Component } from 'react';

import FriendSearch from '../molecules/FriendSearch';
import Friends from './Friends';

class FriendView extends Component {
  render() {
    const { friends } = this.props;
    return (
      <div className="people-list" id="people-list">
        <FriendSearch />
        <Friends 
          data={friends}
        />
      </div>
    );
  }
}

export default FriendView;