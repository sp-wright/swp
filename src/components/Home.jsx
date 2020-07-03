import React from 'react';
import BackgroundImage from './BackgroundImage';
import InfoHeading from './InfoHeading';
import InfoTextBlock from './InfoTextBlock';
import SmallLogos from './SmallLogos';

function Home(props) {
  return (
    <div>
      <BackgroundImage img="https://i.imgur.com/dDznE1w.jpg" />
      <InfoHeading heading1="Stephen Wright Photography" heading2="content agency specialised in event & production imagery" buttonText="photography" navigate={(e) => props.navigate(e)} />
      <BackgroundImage img="https://i.imgur.com/MEhBfor.jpg" heading="what we do" />
      <InfoTextBlock />
      <BackgroundImage img="https://i.imgur.com/eufUwle.jpg" heading="our work" />
      <SmallLogos />
    </div>
  );
}

export default Home;
