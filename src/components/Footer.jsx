import React from 'react';

let Footer = (props) => {
  let navigation = (e) => {
    props.navigate(e);
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="footer-nav-link-container">
        <button onClick={navigation} name="home" className="footer-nav-links">
          home
        </button>
        <button onClick={navigation} name="photography" className="footer-nav-links">
          photography
        </button>
        <button onClick={navigation} name="biography" className="footer-nav-links">
          biography
        </button>
      </div>
      <div className="footer-info">
        <a href="mailto:stephen@stephenwrightphotography.co.uk">stephen@stephenwrightphotography.co.uk</a>
        <p>all images © Stephen Wright {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
