import React, { Component } from 'react';
import API from './../utils/API';
import VerticalTimeline from './../Components/VerticalTimeline/VerticalTimeline';
import TimelineEvent from './../Components/TimelineEvent/TimelineEvent';
import NewReleases from '@material-ui/icons/NewReleases';

class MainTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsArray: []
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
        <h3>AGMC History</h3>

        <VerticalTimeline layout='2-columns'>
          {this.state.eventsArray.map(event => (
            <TimelineEvent
              primaryDate={event.primaryDate}
              icon={<NewReleases />}
              name={event.name}
              type={event.type}
              description={event.description}
              location={event.location}
              director={event.director}
              concertSeason={event.concertSeason}
              imgURL={event.imgURL}
              key={event._id}
            />
          ))}
        </VerticalTimeline>
      </div>
    );
  }
}

export default MainTimeline;
