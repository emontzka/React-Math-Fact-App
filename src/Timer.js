import React, {Component} from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);    
    this.state = {
      secondsElapsed: 30,
      lastClearedIncrementer: null,
   
    };
    this.incrementer = null;
  }
  handleStartClick(secondsElapsed,incrementer) {
    console.log(this.incrementer);
    var countDown = (secondsElapsed) => {

      if (this.state.secondsElapsed > 0 ) {
        this.setState({
          secondsElapsed: this.state.secondsElapsed -1
        });
        this.props.handleIsRunning();
        // updateRunningStatus(true);
      } else {
        this.setState({
          secondsElapsed: 30,
          lastClearedIncrementer: null,
          // isRunning: false
        });
        this.props.handleNotRunning();
        this.props.handleShowResults();
        // updateRunningStatus(false);
        clearInterval(this.incrementer);
      }
    }
    this.incrementer = setInterval(countDown, 1000);
    // this.addProblem();
  }

  handleStopClick() {
    this.props.handleNotRunning();
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer,
    });
    
  }  

  render() {
    return (
        <div className="Timer">

        <p>{this.state.secondsElapsed} seconds</p>
        {!this.props.isRunning && <button onClick={ this.handleStartClick }>Start Timer!</button>}
        {this.props.isRunning && <button onClick={ this.handleStopClick }>stop</button>}
        </div>
      )
  }
}


export default Timer;