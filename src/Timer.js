import React, { Component } from 'react';

class Timer extends Component {

  render() {
    return (
      <div className="Timer">
        <div className="Timer-header">
          
          <h2>Timer</h2>
          <p>{ ( this.props.secondsElapsed )}</p>
          {!this.props.isRunning && <button onClick={ this.props.handleStartClick.bind(this) }>start</button>}
          {this.props.isRunning && <button onClick={ this.props.handleStopClick.bind(this) }>stop</button>}
          {this.props.isRunning && <button onClick={ this.props.handleResetClick.bind(this) }>reset</button>}
        </div>

      </div>

    );
  }
}

export default Timer;
