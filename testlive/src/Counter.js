import React, { Component } from 'react';

class Counter extends Component {
  render(){
    return (
      <div className="Counter">
        <h1> Você tem { this.props.count } counters. </h1>
      </div>
    );
  }
}

export default Counter;