import React, { Component } from 'react';

class Answer extends Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.handleInput = this.handleInput.bind(this);
  }

   componentDidMount() {
    console.log('it mounted');
  }

  handleInput(e) {
    this.setState({value: e.target.value});
    // this.textInput.value = "";
    // console.log(this.textInput.value);
  }
  render() {
    const {num1, num2} = this.props;
    const input = this.state.value;


    return (
      <form onSubmit={(e) => {this.props.handleAnswer(e,num1,num2,{input}) }} >
      <input  ref={this.props.inputRef} value={this.state.value} onChange={this.handleInput} type="text"    />
      <input type="submit" value="Submit" />
      {console.log(this.state.value)}
      </form>
    );
  }
}

export default Answer;

// <input onBlur={(e) => {this.props.checkAnswer(e, index)}} type="text" />

// ref={(input) => { this.textInput = input; }}

// Control input state from App component. Move handleInput to app and bind. 