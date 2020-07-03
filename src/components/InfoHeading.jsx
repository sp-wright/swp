import React from 'react';
import RedButton from './RedButton';

let InfoHeading = (props) => {
  return (
    <div className="info-heading-container">
      <h1>{props.heading1}</h1>
      <h2>{props.heading2}</h2>
      {props.buttonText === undefined ? null : <RedButton text={props.buttonText} navigate={() => props.navigate(props.buttonText)} />}
    </div>
  );
};

export default InfoHeading;
