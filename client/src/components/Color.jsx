import React from 'react';

const Color = (props) => {

  const style = {
    backgroundColor: props.color
  };

  return (
    <div className="color" style={style}></div>
  );
}

export default Color;