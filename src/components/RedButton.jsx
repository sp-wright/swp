import React from 'react';

const RedButton = (props) => {
  return (
    <button className="red-btn" onClick={() => props.navigate(props.text)}>
      {props.text}
    </button>
  );
};

export default RedButton;
