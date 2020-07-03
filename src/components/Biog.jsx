import React from 'react';

const Biog = () => {
  return (
    <section className="biog-container">
      <div className="image-container">
        <img src="https://i.imgur.com/IKb8PXg.jpg" alt="stephen wright photographer" />
      </div>
      <div className="biog-text">
        <p>
          <strong>Stephen Wright</strong> is a London based photographer specialising in sports, action and event photography. His knowledge of photographing movement is directly influenced by his
          years of dance training, research and professional experience dancing for Rambert, Britain's flagship contemporary dance company.{' '}
        </p>
        <p>
          If you would like to discuss an assignment, <strong>Stephen</strong> can be contacted via email at{' '}
          <a className="email-txt" href="mailto:stephen@stephenwrightphotography.co.uk">
            stephen@stephenwrightphotography.co.uk
          </a>{' '}
        </p>
      </div>
    </section>
  );
};

export default Biog;
