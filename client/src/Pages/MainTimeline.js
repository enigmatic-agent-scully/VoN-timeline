import React, { Component } from 'react';
import API from './../utils/API';
import VerticalTimeline from './../Components/VerticalTimeline/VerticalTimeline';

import TimelineEvent from './../Components/TimelineEvent/TimelineEvent';
import NewReleases from '@material-ui/icons/NewReleases';
import Navbar from './../Components/Navbar/Navbar';

class MainTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsArray: [],
      isLoggedIn: true
    };

    this.loadEvents = this.loadEvents.bind(this);
  }

  loadEvents = () => {
    API.getEvents().then(res => {
      this.setState({
        eventsArray: res.data
      });
      console.log(this.state.eventsArray);
    });
  };

  componentDidMount() {
    this.loadEvents();
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
            />
          ))}
        </VerticalTimeline>
      </div>
    );
  }
}

export default MainTimeline;
