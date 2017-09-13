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
    this.addProblem = this.addProblem.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
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
    this.addProblem();
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
  // console.log(this.state.mathProblems);
  addProblem() {
    const timestamp = Date.now();
    const problem = {
      num1 : randomizer(1,9),
      num2 : randomizer(1,9),
      answered: false,
      correct : false,
      key: timestamp
    }
    this.setState({
      mathProblems : this.state.mathProblems.concat(problem)
    });
    
  }



  checkAnswer(e, index) {
    // console.log(e.target.value);
    // console.log(index);
    // console.log(this.state.mathProblems[index].num1);
    const {num1, num2} = this.state.mathProblems[index];
    const sum = num1 * num2;
    const answer = e.target.value;
    let answeredProblem = this.state.mathProblems;

    if (parseInt(answer) === sum ) {
      answeredProblem[index].correct = true;
    }
    answeredProblem[index].answered = true;
    this.setState((prevState) => {
        return {mathProblems: answeredProblem};
    });

    const timestamp = Date.now();
    const problem = {
      num1 : randomizer(1,9),
      num2 : randomizer(1,9),
      answered: false,
      correct : false,
      key: timestamp
    }
    this.setState({
      mathProblems : this.state.mathProblems.concat(problem)
    });

    // this.setState(prevState => ({
    //   // mathProblems: prevState.mathProblems[index].answered = true
    // }));
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
        <button onClick={this.addProblem}></button>
        <ul>
        {Object.keys(this.state.mathProblems)
          .map(key => <MathFact key={key} index={key}
          problem={this.state.mathProblems[key]} 
          checkAnswer={this.checkAnswer}/>)
          // .filter(prob => {
          //   this
          //   // this.state.problem.answered === false;
          // })

        }
        </ul>

      </div>

    );
  }
}

export default App;
