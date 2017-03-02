import React, { Component } from 'react';

class Clickr extends Component {
  constructor() {
    /* oh */ super();
    this.state = { clicks: 0 };
  }

  _incrementClicks () {
    this.setState( { clicks: this.state.clicks + 1 } ); // Merges in new state.
  }

  render() {
    return (<button onClick={this._incrementClicks.bind(this)}>{this.state.clicks} clicks so far</button>);
  }
}

export default Clickr;
