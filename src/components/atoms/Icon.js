import React from 'react';

const icon = (props) => (
  <React.Fragment>
    <i className={props.icon} style={{cursor: "pointer", color: props.isStar ? "#1678C2" : null}} onClick={props.clicked}></i>
  </React.Fragment>
);

export default icon;

