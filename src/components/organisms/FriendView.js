import React, { Component } from 'react';

import FriendSearch from '../molecules/FriendSearch';
import Friends from './Friends';

class FriendView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    }
  }

  searchChangeHandler = (event) => {
    this.setState({ search: event.target.value });
  }

  render() {
    const { friends } = this.props;
    const { search } = this.state;
    return (
      <div className="people-list" id="people-list">
        <FriendSearch 
          onSearchChange={this.searchChangeHandler}
        />
        <Friends 
          data={friends}
          search={search}
        />
      </div>
    );
  }
}

export default FriendView;