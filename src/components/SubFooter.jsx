import React from 'react';

let SubFooter = () => {
  return (
    <div className="sub-footer-container">
      <button onClick={() => window.scrollTo(0, 0)} className="to-top">
        top
      </button>
      <div className="social-icons-container">
        <div className="social-icons">
          <a href="https://www.instagram.com/stephenwrightphotography/">
            <i className="fab fa-lg fa-instagram"></i>
          </a>
        </div>
        <div className="social-icons">
          <a href="https://twitter.com/wright_stephen_">
            <i className="fab fa-lg fa-twitter"></i>
          </a>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/stephenwrightphotography0">
            <i className="fab fa-lg fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
