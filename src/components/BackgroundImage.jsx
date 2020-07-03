import React from 'react';

let BackgroundImage = (props) => {
  return (
    <div style={{ backgroundImage: `url(${props.img})` }} className="image-background">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default BackgroundImage;
