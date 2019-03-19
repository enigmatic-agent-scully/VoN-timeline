import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import EventCard from './Components/eventCard';
import MainTimeline from './Pages/MainTimeline';
import createNew from './Pages/createNew';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={MainTimeline} />
          <Route exact path='/new' component={createNew} />
        </Switch>
      </Router>
    );
  }
}

export default App;
