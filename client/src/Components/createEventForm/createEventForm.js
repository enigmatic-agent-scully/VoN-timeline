import React from 'react';
import './style.css';

const CreateEventForm = props => {
  return (
    <div className='pure-g'>
      <form className='pure-form pure-form-aligned'>
        <fieldset>
          <div className='pure-control-group'>
            <label htmlFor='type'>Type of Event</label>
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
            <label htmlFor='name'>Event Name</label>
            <input
              onChange={props.handleInputChange}
              value={props.name}
              id='name'
              type='textarea'
            />
          </div>
          <div className='pure-control-group'>
            <label htmlFor='director'>Artistic Director</label>
            <input
              onChange={props.handleInputChange}
              value={props.director}
              id='director'
              type='textarea'
              required
            />
          </div>
          <div className='pure-control-group'>
            <label htmlFor='primaryDate'>Primary Event Date</label>
            <input
              onChange={props.handleInputChange}
              value={props.primaryDate}
              type='date'
              name='primaryDate'
              id='primaryDate'
              required
            />
          </div>
          <div className='pure-control-group'>
            <label htmlFor='secondaryDate'>Secondary Event Date</label>
            <input
              onChange={props.handleInputChange}
              value={props.secondaryDate}
              type='date'
              name='secondaryDate'
              id='secondaryDate'
            />
          </div>
          <div className='pure-control-group'>
            <label htmlFor='tertiaryDate'>Tertiary Event Date</label>
            <input
              onChange={props.handleInputChange}
              value={props.tertiaryDate}
              type='date'
              name='tertiaryDate'
              id='tertiaryDate'
            />
          </div>
          <div className='pure-control-group'>
            <label htmlFor='location'>Location</label>
            <input
              onChange={props.handleInputChange}
              value={props.location}
              id='location'
              type='textarea'
              required
            />
          </div>
          <div className='pure-control-group'>
            <label htmlFor='concertSeason'>Concert Season</label>
            <input
              onChange={props.handleInputChange}
              value={props.concertSeason}
              id='concertSeason'
              type='textarea'
            />
          </div>
          <div className='pure-control-group'>
            <label htmlFor='description'>Event Description</label>
            <input
              onChange={props.handleInputChange}
              value={props.description}
              id='description'
              type='textarea'
              required
            />
          </div>
          <div className='pure-control-group'>
            <label htmlFor='imageURL'>Event Photo</label>
            <input
              onChange={props.handleUpload}
              id='imageURL'
              type='file'
              required
            />
          </div>
          <button
            onClick={props.handleSubmit}
            type='submit'
            className='pure-button pure-button-primary'
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateEventForm;
