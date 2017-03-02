import React, { Component } from 'react';
import './App.css';

import Profile from './Profile.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile name="Bill Murray" age="60something" bio="No gods no masters" pic="http://fillmurray.com/200/300" />
        <Profile name="Groucho Marx" age="deceased" bio="Once I shot an elephant in my pyjamas" pic="http://fillmurray.com/201/299" />
      </div>
    );
  }
}

export default App;
