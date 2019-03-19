import React, { Component } from 'react';

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      userInfo: [],
      loggedIn: false
    };
  }

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
          <div className='pure-1-12' id='middle' />
          <div className='pure-11-24' />
        </div>
      </div>
    );
  }
}

export default Wrapper;
