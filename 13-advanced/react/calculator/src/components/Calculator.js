import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    /* oh */ super(props);
    this.state = {a: 0, b: 0};
  }

  _updateA(e) {
    const a = parseFloat( e.target.value ) || 0;
    this.setState({a});
  }

  _updateB(e) {
    const b = parseFloat( e.target.value ) || 0;
    this.setState({b: b});
  }

  render() {
    const {a, b} = this.state;
    return (
      <div>
        <input type="number" value={a} onChange={this._updateA.bind(this)}/>
        <input type="number" value={b} onChange={this._updateB.bind(this)}/>

        <p>(+ {a} {b}) {a + b}</p>
        <p>(- {a} {b}) {a - b}</p>
        <p>(* {a} {b}) {a * b}</p>
        <p>(/ {a} {b}) {a / b}</p>
      </div>
    );
  }
};

export default Calculator;
