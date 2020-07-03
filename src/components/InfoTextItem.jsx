import React from 'react';

let InfoTextItem = (props) => {
  return (
    <div className="info-block-item">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default InfoTextItem;
