import React, { Component } from 'react';
import API from './../utils/API';
import createEventForm from './../Components/createEventForm';

class CreateNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      name: '',
      director: '',
      primaryDate: '',
      secondaryDate: '',
      tertiaryDate: '',
      location: '',
      concertSeason: '',
      description: '',
      imageURL: '',
      currentUser: []
    };
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const eventInfo = this.state;
    API.postEvent({
      type: eventInfo.type,
      name: eventInfo.name,
      director: eventInfo.director,
      primaryDate: eventInfo.primaryDate,
      secondaryDate: eventInfo.secondaryDate,
      tertiaryDate: eventInfo.tertiaryDate,
      location: eventInfo.location,
      concertSeason: eventInfo.concertSeason,
      description: eventInfo.description,
      imageURL: eventInfo.imageURL
    });

    render() {
      return(
        <div className='createNew'>
          <createEventForm/>

        </div>
      );
    }
  }
}

export default CreateNew;
