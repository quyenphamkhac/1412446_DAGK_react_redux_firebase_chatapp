import React from 'react';

const avatar = (props) => (
  <React.Fragment>
    <img className="avatar" src={props.src} alt={props.alt} />
  </React.Fragment>
);

export default avatar;