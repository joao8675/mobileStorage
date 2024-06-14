import React from 'react';
import './global.css'; // Certifique-se de importar global.css no nível mais alto do seu aplicativo
import './modal.css';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;