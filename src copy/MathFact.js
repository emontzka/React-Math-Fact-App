import React, { Component } from 'react';
// import { randomizer } from './helpers';

class MathFact extends Component {
  render() {

    const {num1, num2, answered} = this.props.problem;
    const index = this.props.index;
    const isAnswered = () => {
      if (answered) {
        return "answered";
      }
    }


    return (
      <div className="MathFact">


        <div className={isAnswered()}>
          
          {num1} X {num2} = <input onBlur={(e) => {this.props.checkAnswer(e, index)}} type="text" />

        </div>
      </div>

    );
  }
}

export default MathFact;
