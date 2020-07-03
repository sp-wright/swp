import React, { useState } from 'react';
import BackgroundImage from './BackgroundImage';
import InfoHeading from './InfoHeading';
import GalleryLinks from './GalleryLinks';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import eventImg from '../eventImg';
import brandImg from '../brandImg';
import personalityImg from '../personalityImg';
import danceImg from '../danceImg';
import musicImg from '../musicImg';
import sportImg from '../sportImg';

let Photography = () => {
  const [gallery, setGallery] = useState(0);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState({ modalImg: '', modalText: '' });

  const images = [[], eventImg, brandImg, personalityImg, danceImg, musicImg, sportImg];

  const handleOpen = (e) => {
    const { src, alt } = e.target;
    setModal({ modalImg: src, modalText: alt });
    setOpen(true);
  };

  return (
    <section>
      <BackgroundImage heading="photography" img="https://i.imgur.com/cxlUH3Z.jpg" />
      <InfoHeading heading1="galleries" heading2="click the galleries to see more" />
      <GalleryLinks gallery={(e) => setGallery(e)} />
      <div id="gallery" className="gallery-container">
        {images[gallery].map((img, i) => (
          <img onClick={handleOpen} src={img.img} key={i} index={i} alt={img.name} />
        ))}
        <Modal
          className="modal"
          open={open}
          onClose={() => setOpen(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className="modal-fade-in">
              <img className="img-modal" src={modal.modalImg} alt={modal.modalText} />
            </div>
          </Fade>
        </Modal>
      </div>
    </section>
  );
};

export default Photography;
