import React, { Component } from 'react';

class Answer extends Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({value: e.target.value});
  }
  render() {
    const {num1, num2} = this.props;
    const input = this.state.value;


    return (
      <form onSubmit={(e) => {this.props.handleAnswer(e,num1,num2,{input}) }} >
      <input value={this.state.value} onChange={this.handleInput} type="text" autoFocus   />
      <input type="submit" value="Submit" />
      {console.log(this.state.value)}
      </form>
    );
  }
}

export default Answer;

// <input onBlur={(e) => {this.props.checkAnswer(e, index)}} type="text" />