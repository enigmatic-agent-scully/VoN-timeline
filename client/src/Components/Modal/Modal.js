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
            ? 'translateY(-110vh)'
            : 'translateY(0vh)',
          opacity: props.isModalOpen ? '1' : '0'
        }}
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <h3>Now Editing {props.selectedEvent.name}</h3>
          </div>
          <div className='modal-body'>
            <EditEventForm
              {...props.selectedEvent}
              handleInputChange={props.handleInputChange}
              handleEditSubmit={props.handleEditSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
