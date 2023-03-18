import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function ConfirmModal(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => props.onClose(true);
  const handleDismiss= () => props.onClose(false);

  return (
    <>
      
      
      <div className='modal'>

      <Modal show={show} onHide={handleDismiss}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDismiss}>
            No
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
      
    </>
  );
}

export default ConfirmModal;