import React, { Component } from 'react';
import API from './../utils/API';
import CreateEventForm from './../Components/createEventForm/createEventForm';
import { uploadFile } from 'react-s3';
import config from './../config/awsS3config';

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
      imgURL:
        'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png'
      // currentUser: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

    this.reactS3config = {
      bucketName: 'voicesofnotetimeline',
      region: 'us-east-1',
      accessKeyId: config.awsKey,
      secretAccessKey: config.awsSecret
    };
  }

  handleUpload(event) {
    const imageFile = event.target.files[0];
    uploadFile(imageFile, this.reactS3config)
      .then(data => {
        this.setState({ imgURL: data.location });
      })
      .catch(err => console.log(err));
  }

  handleInputChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const eventInfo = this.state;
    console.log(this.state);
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
      imgURL: eventInfo.imgURL
      // createdBy: eventInfo.currentUser[0]
    });
  }

  render() {
    return (
      <div className='createNew'>
        <CreateEventForm
          type={this.state.type}
          name={this.state.name}
          director={this.state.director}
          location={this.state.location}
          primaryDate={this.state.primaryDate}
          secondaryDate={this.state.secondaryDate}
          tertiaryDate={this.state.tertiaryDate}
          imgURL={this.state.imgURL}
          concertSeason={this.state.concertSeason}
          descriptopn={this.state.description}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          handleUpload={this.handleUpload}
        />
      </div>
    );
  }
}

export default CreateNew;
