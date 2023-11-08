// Modal.js
import React from 'react';
import '..css/modal.css';

function Modal(props) {
  return (
    <div className={`modal ${props.show ? 'active' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>&times;</span>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
