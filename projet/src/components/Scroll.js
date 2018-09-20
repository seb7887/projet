import React from 'react';

const scrollStyles = {
  position: 'relative',
  overflow: 'scroll',
  border: '3px solid black',
  height: '37.3rem', 
}

const Scroll = (props) => {
  return (
    <div style={scrollStyles}>
      {props.children}
    </div>
  );
}

export default Scroll;
