import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import MathFact from './MathFact';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.state = {
      isRunning: false,
      secondsElapsed: 60,
      lastClearedIncrementer: null,
      mathProblems: []
      
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
          isRunning: true,
          // mathProblems: {
          // num1 : randomizer(1,9),
          // num2 : randomizer(1,9)
          // }

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
    // this.addProblem();
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
  
  handleAnswer(e, num1, num2, input) {
    e.preventDefault();
    const val = parseInt(input.input);
    // const val = parseInt(e.input.value);
    console.log(e);
    console.log(val);
    // if (val === NaN ) {return false}
    const isCorrect = num1 * num2 === val ?  true : false;
    const newProblem = {
      num1 : num1,
      num2 : num2,
      answer : val,
      isCorrect : isCorrect
    }
  if ( !isNaN(val)) {
  this.setState(prevState => ({
    mathProblems: prevState.mathProblems.concat(newProblem)
  }));
  console.log(this.state.value);
  e.target.input = "";
  e.target.focus();
}

  // console.log(this.state.mathProblems);
    // this.setState({
    //   mathProblems : mathProblems.push(newProblem)
    // });
    
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
        secondsElapsed={this.state.secondsElapsed}
        isRunning={this.state.isRunning} />


        {this.state.isRunning && <MathFact isRunning={this.state.isRunning} mathProblems={this.state.mathProblems} handleAnswer={this.handleAnswer} />}

      </div>

    );
  }
}

export default App;
