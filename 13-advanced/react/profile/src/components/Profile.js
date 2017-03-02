import React, { Component } from 'react';

// <Profile name="Fred" age="17" bio="No gods no masters" pic="http://..."/>
class Profile extends Component {
  constructor(props) {
    super(props); // Fuck this but it is necessary.
    this.state = {height: 100}
  }
  _zoomIn() {
    this.setState({height: this.state.height + 10});
  }

  _zoomOut() {
    this.setState({height: this.state.height - 10});
  }

  render() {
    const {name, age, bio, pic} = this.props;
    return (
      <div className="profile">
        <h1>{name}</h1>
        <h2>Age: {age}</h2>
        <p>Bio: {bio}</p>
        <img src={pic} alt={name} height={this.state.height} />
        <div>
          <button onClick={this._zoomIn.bind(this)}>+</button>
          <button onClick={this._zoomOut.bind(this)}>-</button>
        </div>
        <hr />
      </div>
    );
  }
}

export default Profile;
