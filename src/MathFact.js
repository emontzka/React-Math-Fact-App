import React, { Component } from 'react';
// import { randomizer } from './helpers';

class MathFact extends Component {

  // addProblem = function(e) {
  //   e.preventDefault();
  //   // TODO: Make one number pull from the settings object
  //   const num1 = randomizer(2,12);
  //   const num2 = randomizer(2,12);
  //   const product = num1 * num2;
  //   const problem = {
  //     num1: num1,
  //     num2: num2,
  //     product: product
  //   }
  //   this.props.mathProblems.push('hello');
  // }

  render() {
    return (
      <div className="MathFact">
        <div className="MathFact-header">
          
          <h2>MathFact</h2>
          <button onClick={this.props.createProblem}>add problem</button>



        </div>

      </div>

    );
  }
}

export default MathFact;
