import React from 'react';
import EditEventForm from './../../Pages/editEvent';
import '../Modal/Modal.css';

const Modal = props => {
  return (
    <div>
      <div
        className='modal-wrapper'
        style={{
          transform: props.isModalOpen
            ? 'translateY(0vh)'
            : 'translateY(-100vh)',
          opacity: props.isModalOpen ? '1' : '0'
        }}
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <h3>Now Editing {props.name}</h3>
          </div>
          <div className='modal-content'>
            <EditEventForm {...props.selectedEvent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
