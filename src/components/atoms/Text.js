import React from 'react';

const text = (props) => (
  <div {...props}>
    {props.children}
  </div>
);

export default text;