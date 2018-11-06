import React from 'react';

import Avatar from '../atoms/Avatar';
import About from './About';

import { Link } from 'react-router-dom';

const friend = (props) => (
  <React.Fragment>
    <li className="clearfix" style={{cursor: 'pointer'}}>
      <Link to={{
          pathname: `/app/${props.uid}`,
          state: props,
        }} 
        style={{color: 'white'}}
      >
        <Avatar src={props.avatar} alt="avatar" />
        <About 
          online={props.online}
          status={props.status}
          name={props.name}
        />
      </Link>
    </li>
  </React.Fragment>
);

export default friend;