import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainTimeline from './Pages/MainTimeline';
import CreateNew from './Pages/CreateNew/createNew';
import EditEvent from './Pages/editEvent';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={MainTimeline} />
          <Route exact path='/new' component={CreateNew} />
          <Route exact path='/edit' component={EditEvent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
