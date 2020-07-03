import React from 'react';
import InfoTextItem from './InfoTextItem';

let InfoTextBlock = () => {
  return (
    <section className="info-block-container">
      <InfoTextItem title="Creative" content="stephen wright photography draws on its extensive experience in the arts to deliver consistently creative and unique images" />
      <InfoTextItem
        title="Experienced"
        content="we are proud to have worked with a large number of leading clients in the uk and europe providing event coverage, live editing and headline images to accompany media campaigns"
      />
      <InfoTextItem
        title="Fast Delivery"
        content="we know clients need their images delivered asap. at stephen wright photography we can deliver fully edited galleries within 24 hours of an event taking place or even quicker if necessary"
      />
      <InfoTextItem
        title="Personal Service"
        content="we work closely with our clients to create unique briefs to suit the event. with clear communication from booking to delivery we ensure nothing is left to chance"
      />
    </section>
  );
};

export default InfoTextBlock;
