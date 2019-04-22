import React, { Component } from 'react';
import API from './../utils/API';
import { uploadFile } from 'react-s3';
import config from './../config/awsS3config';
import Navbar from './../Components/Navbar/Navbar';
var moment = require('moment');

class EditEvent extends Component {
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
    return <Navbar />;
  }
}

export default EditEvent;
