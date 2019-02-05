import React, { Component } from 'react';
import './App.css';
import MathFact from './MathFact';
import Timer from './Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleIsRunning = this.handleIsRunning.bind(this);
    this.handleNotRunning = this.handleNotRunning.bind(this);
    this.handleShowResults = this.handleShowResults.bind(this);
    this.handleHideResults = this.handleHideResults.bind(this);
    this.state = {
      isRunning : false,
      showResults: false
    }
  }

  handleIsRunning() {
    this.setState((prevState) => ({
      isRunning : true
    }));
  }

  handleNotRunning() {
    this.setState((prevState) => ({
      isRunning : false
    }));
  }  

  handleShowResults() {
    this.setState( (prevState) => ({
      showResults: true
    }));
  }

  handleHideResults() {
    this.setState( (prevState) => ({
      showResults: false
    }));
  }

  // handleResetGame() {
  //   this.setState
  // }

  render() {
    const showResults = this.state.showResults;
    return (
      <div className="App">
      <header><h1 className="app-title">Math Fact App</h1></header>
      { !showResults && <div> 
        <p> Complete the math problems before the timer runs out!</p>
        <Timer handleIsRunning={this.handleIsRunning}
      handleNotRunning={this.handleNotRunning}
      isRunning={this.state.isRunning}
      handleShowResults={this.handleShowResults} /></div>}

      <MathFact handleShowResults={this.handleShowResults} 
      isRunning={this.state.isRunning} 
      showResults={this.state.showResults} />
      {showResults && <button onClick={this.handleHideResults} >Start again?</button>}
    { /* State change: 
    Math Fact: answerValue: "",num1: randomizer(2,12),num2: randomizer(2,12),completedFacts: []
    Timer: secondsElapsed: 60,lastClearedIncrementer: null, */}

      </div>
    );
  }
}

export default App;
