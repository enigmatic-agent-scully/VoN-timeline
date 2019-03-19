import React, { Component } from 'react';
import API from './../utils/API';

class MainTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsArray: []
    };
  }

  getEvents = () => {
    API.getEvents().then(res => {
      this.setState({
        eventsArray: res.data
      });
    });
  };

  render() {
    return (
      <div className='MainContainer'>
        <div className='pure-g'>
          <div className='pure-u-1-3' />
          <div className='pure-u-1-3'>
            <h3>AGMC History</h3>
          </div>
          <div className='pure-u-1-3' />
        </div>
        <div className='pure-g'>
          <div className='pure-11-24' />
          <div className='pure-1-12' id='middle'>
            ||||
          </div>
          <div className='pure-11-24' />
        </div>
      </div>
    );
  }
}

export default MainTimeline;
