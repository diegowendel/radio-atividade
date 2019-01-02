import React from 'react';

import { Modal } from 'react-bootstrap';

const ModalGaleria = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Body>
          <img src={props.src} alt="Imagem" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalGaleria;
