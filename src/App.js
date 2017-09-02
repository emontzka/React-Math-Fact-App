import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import MathFact from './MathFact';
import { randomizer } from './helpers';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.createProblem = this.createProblem.bind(this);
    this.newProblem = this.newProblem.bind(this);
    this.state = {
      isRunning: false,
      secondsElapsed: 15,
      lastClearedIncrementer: null,
      mathProblems: [],
      problems : []
      
    };
   this.incrementer = null;
  }

  handleStartClick(secondsElapsed,incrementer) {
    // this.isRunning = true;
    console.log(this.incrementer);

    var countDown = (secondsElapsed) => {

      if (this.state.secondsElapsed > 0 ) {
        this.setState({

          secondsElapsed: this.state.secondsElapsed -1,
          isRunning: true
        });
      } else {
        this.setState({
          // secondsElapsed: this.state.secondsElapsed
          isRunning: false
        });
        clearInterval(this.incrementer);
      }
    }
    this.incrementer = setInterval(countDown, 1000);
  }

    newProblem(e)  {
    const num1 = randomizer(2,12);
    const num2 = randomizer(2,12);
    const product = num1 * num2;
    const problem = {
      num1: num1,
      num2: num2,
      product: product
    }
    console.log("clicked");
    
    this.setState(prevState => {
      problems: this.prevState.problems.push('hello');
    })      
  }


  handleStopClick() {
    // this.isRunning = false;
    console.log('not running');
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer,
      isRunning: false
    });
  }

  handleResetClick() {
    // this.isRunning = false;
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 15,
      isRunning: false
    });
  }  
  // toggleIsRunning() {
  //   console.log('it ran');
  //   // this.setState({
  //   //   isRunning: true
  //   // })
  // }  

  createProblem(e) {
    e.preventDefault();
    // TODO: Make one number pull from the settings object

    const num1 = randomizer(2,12);
    const num2 = randomizer(2,12);
    const product = num1 * num2;
    const key = Date.now();
    const problem = {
      num1: num1,
      num2: num2,
      product: product,
      key: key
    }
    this.setState({
      mathProblems: this.state.mathProblems.concat(problem)
    });
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Math Fact Generator</h2>
        </div>
        <p className="App-intro">
          
        </p>
        <Timer handleStartClick={this.handleStartClick} 
        handleStopClick={this.handleStopClick} 
        handleResetClick={this.handleResetClick} 
        secondsElapsed={this.state.secondsElapsed} />

        <MathFact mathProblems={this.state.mathProblems}
        createProblem={this.createProblem}
        newProblem={this.newProblem}
        problems={this.state.problems} />

      </div>

    );
  }
}

export default App;
