import React from 'react';

let Nav = (props) => {
  return (
    <nav>
      <button onClick={props.navigate} className="nav-logo">
        <img className="swp-logo" name="home" src="https://i.imgur.com/0b8sKEL.png" alt="SWP logo" />
      </button>
      <div>
        <button onClick={props.navigate} className="nav-link" name="photography">
          photography
        </button>
        <button onClick={props.navigate} className="nav-link" name="biography">
          biography
        </button>
      </div>
    </nav>
  );
};

export default Nav;
