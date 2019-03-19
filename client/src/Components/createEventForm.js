import React from 'react';

const createEventForm = props => {
  return (
    <div className='pure-g'>
      <form className='pure-form pure-form-aligned'>
        <fieldset>
          <div className='pure-control-group'>
            <label for='type'>Type of Event</label>
            <select id='type' className='pure-input-1-2'>
              <option>Holiday Concert</option>
              <option>Spring Concert</option>
              <option>Special Event</option>
              <option>Pride Concert</option>
              <option>Fundraiser</option>
              <option>Recording Released</option>
              <option>Other Milestone</option>
            </select>
          </div>
          <div className='pure-control-group'>
            <label for='name'>Event Name</label>
            <input id='name' type='text' placeholder='Event Name' />
          </div>
          <div className='pure-control-group'>
            <label for='director'>Artistic Director</label>
            <input id='director' type='text' placeholder='Artistic Director' />
          </div>
          <div className='pure-control-group'>
            <label for='location'>Location</label>
            <input id='location' type='text' placeholder='Location' />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default createEventForm;
