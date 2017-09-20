import React, { Component } from 'react';
import Answer from './Answer';
import Results from './Results';
import { randomizer } from './helpers';

class MathFact extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.state = {
      answerValue: "",
      num1: randomizer(2,12),
      num2: randomizer(2,12),
      completedFacts: []
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if( nextProps.showResults){
  //     this.setState((prevState) => ({
  //       completedFacts: []
  //     }))
  //   }
  // }

  handleChange(e) {
    this.setState({ answerValue: e.target.value });
  }
  handleAnswer(e) {
    e.preventDefault();
    if (this.state.answerValue === "" ) return;
    const {num1, num2} = this.state;
    const answerValue = parseInt(this.state.answerValue, 10);
    const isCorrect = num1 * num2 === answerValue ?  true : false;
    const newFact = {
      num1 : num1, 
      num2 : num2,
      answerValue : answerValue,
      isCorrect : isCorrect
    }
    this.setState(prevState => ({
      completedFacts: prevState.completedFacts.concat(newFact),
      num1 : randomizer(2,12),
      num2 : randomizer(2,12),
      answerValue : ""
    }));
    this.answer.focus();


  }

  render () {
    const resultShown = this.props.showResults ? 'none' : 'block' ;
    const formStyle = {
      display: resultShown
    };
    const runningShown = this.props.isRunning ? 'block' : 'none' ;
    const answerStyle = {
      display: runningShown
    }

    return (
      <div>
        <form onSubmit={this.handleAnswer} style={formStyle}> 
        <div style={answerStyle} >
          <Answer handleChange={this.handleChange} 
          answer={input => this.answer = input}
          answerValue={this.state.answerValue} 
          num1={this.state.num1} 
          num2={this.state.num2} />
          <input type="submit" onSubmit={this.handleAnswer} value="submit" />
          </div>
          
          {console.log('math fact rerendered')}
        </form>

        <Results showResults={this.props.showResults} completedFacts={this.state.completedFacts} />
      </div>
      )
  }
}

export default MathFact;