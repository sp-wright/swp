import React, { useState } from 'react';
import Home from './Home';
import Nav from './Nav';
import SubFooter from './SubFooter';
import Footer from './Footer';
import Photography from './Photography';
import Biog from './Biog';

let App = () => {
  const [page, setPage] = useState('home');

  return (
    <div>
      <Nav navigate={(e) => setPage(e.target.name)} />
      {page === 'home' && <Home navigate={(e) => setPage(e)} />}
      {page === 'photography' && <Photography />}
      {page === 'biography' && <Biog />}
      <SubFooter />
      <Footer navigate={(e) => setPage(e.target.name)} />
    </div>
  );
};

export default App;
