import React from 'react';
import logos from '../logos';

let SmallLogos = () => {
  return (
    <div className="image-logo-block">
      {logos.map((l, i) => (
        <img src={l.img} alt={l.title} key={i} index={i}></img>
      ))}
    </div>
  );
};

export default SmallLogos;
