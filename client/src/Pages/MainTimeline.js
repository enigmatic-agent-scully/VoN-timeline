import React, { Component } from 'react';
import API from './../utils/API';
import VerticalTimeline from './../Components/VerticalTimeline/VerticalTimeline';
import TimelineEvent from './../Components/TimelineEvent/TimelineEvent';
import NewReleases from '@material-ui/icons/NewReleases';
import Navbar from './../Components/Navbar/Navbar';
import Modal from './../Components/Modal/Modal';

class MainTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsArray: [],
      isLoggedIn: true,
      isModalOpen: false
    };

    this.loadEvents = this.loadEvents.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  loadEvents = () => {
    API.getEvents().then(res => {
      this.setState({
        eventsArray: res.data
      });
      console.log(this.state.eventsArray);
    });
  };

  // loadEventModal = eventID => {
  //   API.getEvent(eventID)
  //     .then(res => this.setState({ selectedEvent: res.data }))
  //     .then(() => console.log(this.state));
  // };

  componentDidMount() {
    this.loadEvents();
  }

  editEvent(eventId) {
    API.getEvent(eventId).then(res =>
      this.setState({ selectedEvent: res.data, isModalOpen: true }, () =>
        console.log(this.state)
      )
    );
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div className='MainContainer'>
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
          <Modal
            selectedEvent={this.state.selectedEvent}
            isModalOpen={this.state.isModalOpen}
          />
        </VerticalTimeline>
      </div>
    );
  }
}

export default MainTimeline;
