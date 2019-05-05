import React from 'react';

const EditEventForm = props => {
  return (
    <div className='pure-g createEventForm'>
      <form className='pure-form pure-form-aligned'>
        <fieldset>
          <div className='pure-control-group'>
            <label htmlFor='type'>Type of Event</label>
            <select
              type='select'
              id='type'
              name='type'
              className='pure-input-1-2'
              onChange={props.handleInputChange}
              value={props.type}
              default={props.type}
            >
              <option value='No Type Specified'>-Select Event Type-</option>
              <option value='Holiday Concert'>Holiday Concert</option>
              <option value='Spring Concert'>Spring Concert</option>
              <option value='Special Event'>Special Event</option>
              <option value='Pride Concert'>Pride Concert</option>
              <option value='Fundraiser'>Fundraiser</option>
              <option value='Recording Released'>Recording Released</option>
              <option value='Milestone Event'>Milestone Event</option>
            </select>
          </div>
          <div className='pure-control-group'>
            <label htmlFor='name'>Event Name</label>
            <input
              onChange={props.handleInputChange}
              value={props.name}
              name='name'
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
              name='director'
              type='textarea'
            />
          </div>
          <div className='pure-control-group dates'>
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
          <div className='pure-control-group dates'>
            <label htmlFor='secondaryDate'>Secondary Event Date</label>
            <input
              onChange={props.handleInputChange}
              value={props.secondaryDate}
              type='date'
              name='secondaryDate'
              id='secondaryDate'
            />
          </div>
          <div className='pure-control-group dates'>
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
              name='location'
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
              name='concertSeason'
              type='textarea'
            />
          </div>
          <div className='pure-control-group'>
            <label htmlFor='description'>Event Description</label>
            <input
              onChange={props.handleInputChange}
              value={props.description}
              id='description'
              name='description'
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

export default EditEventForm;
