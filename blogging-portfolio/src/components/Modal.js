import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, title, content }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <p>{content}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
