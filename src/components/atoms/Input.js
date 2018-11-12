import React from 'react';

const input = (props) => (
  <React.Fragment>
    <input {...props} type="text" onChange={props.changed} placeholder="Search friend ..." />
  </React.Fragment>
)

export default input;