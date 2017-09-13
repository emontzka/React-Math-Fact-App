import React, { Component } from 'react';
import Answer from './Answer';
import { randomizer } from './helpers';

class MathFact extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.mathProblems !== this.props.mathProblems
  }
      
   
  render() {

    const num1 = randomizer(2,12);
    const num2 = randomizer(2,12);
    // const isRunning = {props.isRunning};

    

      return (
        <div className="MathFact">
        
          <div>
            {num1} X {num2} = <Answer mathProblems={this.props.mathProblems} handleAnswer={this.props.handleAnswer} num1={num1} num2={num2} />
          </div>

        </div>
      );
   
  }
 
}

export default MathFact;


