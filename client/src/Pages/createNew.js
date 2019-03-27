import React, { Component } from 'react';
import API from './../utils/API';
import CreateEventForm from './../Components/createEventForm/createEventForm';
import { uploadFile } from 'react-s3';
import config from './../config/awsS3config';
import Wrapper from './../Wrapper/Wrapper';
var moment = require('moment');

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
      imgURL: ''
      // currentUser: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.formatDates = this.formatDates.bind(this);

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

  formatDates() {
    const origFormat = 'YYYY-MM-DDTHH:mm:ss';
    const newDateFormat = 'MMMM DD, YYYY';
    const primeDateFormatted = moment(
      this.state.primaryDate,
      origFormat
    ).format(newDateFormat);
    if (this.state.secondaryDate) {
      const secondDateFormatted = moment(
        this.state.secondaryDate,
        origFormat
      ).format('DD');
      const thirdDateFormatted = moment(
        this.state.tertiaryDate,
        origFormat
      ).format('DD');
      this.setState({
        secondaryDate: secondDateFormatted,
        tertiaryDate: thirdDateFormatted
      });
    }
    this.setState({
      primaryDate: primeDateFormatted
    });
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
      <Wrapper>
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
      </Wrapper>
    );
  }
}

export default CreateNew;
