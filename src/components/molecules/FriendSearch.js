import React from 'react';

import Icon from '../atoms/Icon';
import Input from '../atoms/Input';

const friendSearch = (props) => (
  <div className="search">
    <Input 
      changed={props.onSearchChange}
    />
    <Icon icon="fa fa-search" />
  </div>
);

export default friendSearch;