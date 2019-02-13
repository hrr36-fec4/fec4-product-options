import React from 'react';

const Stars = (props) => {

  let num = Math.floor(props.rating);
  let stars = [];

  for (var i = 0; i < 5; i++) {
    if (num > 0) {
      stars.push(<i className="fas fa-star"></i>);
      num--;
    } else {
      stars.push(<i className="far fa-star"></i>);
    }
  }

  return <div className="stars">{stars}</div>;
}

export default Stars;