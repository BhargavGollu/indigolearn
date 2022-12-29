import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./ModalComponent.css"

function ModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='button' variant="primary" onClick={handleShow}>
        Request Call Back
      </Button>

      <Modal className='modal' show={show} onHide={handleClose}>
        
        <Modal.Body className='success'>Success!</Modal.Body>
        <button className='close-button' onClick={handleClose}>Close</button>
      </Modal>
    </>
  );
}

export default ModalComponent;