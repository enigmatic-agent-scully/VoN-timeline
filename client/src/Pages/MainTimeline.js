import React, { Component } from 'react';
import API from './../utils/API';
import VerticalTimeline from './../Components/VerticalTimeline/VerticalTimeline';
import TimelineEvent from './../Components/TimelineEvent/TimelineEvent';
import NewReleases from '@material-ui/icons/NewReleases';
import Modal from './../Components/Modal/Modal';
import { uploadFile } from 'react-s3';
import config from './../config/awsS3config';
import Navbar from './../Components/Navbar/Navbar';

class MainTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsArray: [],
      isLoggedIn: true,
      selectedEvent: {
        _id: '',
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
      },
      isModalOpen: false
    };

    this.reactS3config = {
      bucketName: 'voicesofnotetimeline',
      region: 'us-east-1',
      accessKeyId: config.awsKey,
      secretAccessKey: config.awsSecret
    };

    this.loadEvents = this.loadEvents.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditSumbit = this.handleEditSumbit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  loadEvents = () => {
    API.getEvents().then(res => {
      this.setState({
        eventsArray: res.data
      });
      console.log(this.state);
    });
  };

  handleUpload(event) {
    const imageFile = event.target.files[0];
    uploadFile(imageFile, this.reactS3config)
      .then(data => {
        this.setState({ imgURL: data.location });
      })
      .catch(err => console.log(err));
  }
  // loadEventModal = eventID => {
  //   API.getEvent(eventID)
  //     .then(res => this.setState({ selectedEvent: res.data }))
  //     .then(() => console.log(this.state));
  // };

  componentDidMount() {
    this.loadEvents();
  }

  handleInputChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    this.setState({
      selectedEvent: {
        [name]: value
      }
    });
  }

  editEvent(eventId) {
    console.log(eventId);
    API.getEvent(eventId).then(res =>
      this.setState({ selectedEvent: res.data, isModalOpen: true }, () =>
        console.log(this.state)
      )
    );
  }

  handleEditSumbit(event) {
    const id = event.target.value;
    const editedEvent = this.state.selectedEvent;
    API.editEvent(id, {
      type: editedEvent.type,
      name: editedEvent.name,
      director: editedEvent.director,
      primaryDate: editedEvent.primaryDate,
      secondaryDate: editedEvent.secondaryDate,
      tertiaryDate: editedEvent.tertiaryDate,
      location: editedEvent.location,
      concertSeason: editedEvent.concertSeason,
      description: editedEvent.description,
      imgURL: editedEvent.imgURL
    });
    event.preventDefault();
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div className='MainContainer'>
        {this.state.isModalOpen ? (
          <div onClick={this.closeModal} className='back-drop' />
        ) : null}
        <Navbar />
        <VerticalTimeline layout='2-columns'>
          {this.state.eventsArray.map(event => (
            <TimelineEvent
              isLoggedIn={this.state.isLoggedIn}
              primaryDate={event.primaryDate}
              icon={<NewReleases />}
              iconStyle={{ background: 'white', color: 'black' }}
              name={event.name}
              type={event.type}
              description={event.description}
              location={event.location}
              director={event.director}
              concertSeason={event.concertSeason}
              imgURL={event.imgURL}
              key={event._id}
              id={event._id}
              editEvent={this.editEvent}
            />
          ))}
        </VerticalTimeline>
        <Modal
          selectedEvent={this.state.selectedEvent}
          closeModal={this.closeModal}
          isModalOpen={this.state.isModalOpen}
          handleInputChange={this.handleInputChange}
          handleEditSumbit={this.handleEditSumbit}
          handleUpload={this.handleUpload}
        />{' '}
      </div>
    );
  }
}

export default MainTimeline;
