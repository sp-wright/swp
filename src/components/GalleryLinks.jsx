import React from 'react';

let GalleryLinks = (props) => {
  return (
    <div className="gallery-logo-container">
      <div onClick={() => props.gallery(1)} className="gallery-logo">
        <h3>event</h3>
        <img src="https://i.imgur.com/mDHneHk.jpg" alt="event-img" />
      </div>
      <div onClick={() => props.gallery(2)} className="gallery-logo">
        <h3>brand</h3>
        <img src="https://i.imgur.com/6RQS6xl.jpg" alt="brand-img" />
      </div>
      <div onClick={() => props.gallery(3)} className="gallery-logo">
        <h3>personality</h3>
        <img src="https://i.imgur.com/DeoehGo.jpg" alt="personality-img" />
      </div>
      <div onClick={() => props.gallery(4)} className="gallery-logo">
        <h3>dance</h3>
        <img src="https://i.imgur.com/1ryCJxg.jpg" alt="dance-img" />
      </div>
      <div onClick={() => props.gallery(5)} className="gallery-logo">
        <h3>music</h3>
        <img src="https://i.imgur.com/kJfbYrb.jpg" alt="music-img" />
      </div>
      <div onClick={() => props.gallery(6)} className="gallery-logo">
        <h3>sport</h3>
        <img src="https://i.imgur.com/iRnoGnC.jpg" alt="sport-img" />
      </div>
    </div>
  );
};

export default GalleryLinks;
