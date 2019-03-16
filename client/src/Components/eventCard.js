import React from 'react';

const eventCard = props => {
  return (
    <div className='card'>
      <img src={props.img} class='card-img' alt='AGMC' />
      <div className='card-img-overlay'>
        <h5 className='card-title'>{props.name}</h5>
        <h6 className='card-subtitle'>{props.eventType}</h6>
        <p className='card-text'>Directed by {props.director}</p>
        <p className='card-text'>{props.description}</p>
      </div>
    </div>
  );
};

export default eventCard;
