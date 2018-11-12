import React from 'react';

const image = (props) => (
  <React.Fragment>
    <img className="message-image" src={props.src} alt={props.alt} />
  </React.Fragment>
);

export default image;