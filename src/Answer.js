import React from 'react';

const Answer = (props) => (
        <span> 
          {props.num1} x {props.num2} = 
        <input 
        type="text" 
        ref={props.answer}
        value={props.answerValue} 
        onChange={props.handleChange} />
      </span>
  );


export default Answer;