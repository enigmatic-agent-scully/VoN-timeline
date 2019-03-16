import React, { Component } from 'react';
import EventCard from './Components/eventCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <EventCard />
      </div>
    );
  }
}

export default App;
