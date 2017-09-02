import React, { Component } from 'react';
import { randomizer } from './helpers';

class MathFact extends Component {
  constructor(props) {
    super(props);
    
    // this.state = {
      
    // }
  }
          // <div className="problem">
          // {Object.keys(this.props.mathProblems).map( (key,i) => {
          //       const prob = this.props.mathProblems[i];
          //         return (`Hello there ${prob.num1} <br />`);
          //     }
          //   )}
          // </div>


  render() {
    return (
      <div className="MathFact">
        <div className="MathFact-header">
          
          <h2>MathFact</h2>
          <button onClick={this.props.createProblem}>add problem</button>

          <button onClick={(e) => this.props.newProblem(e)}>Problem</button>
          <div>{this.props.problems}</div>
        </div>
      </div>

    );
  }
}

export default MathFact;
