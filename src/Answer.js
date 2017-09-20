import React from 'react';

const Answer = (props) => (
        <div> 
          {props.num1} x {props.num2} = 
        <input 
        type="text" 
        ref={props.answer}
        value={props.answerValue} 
        onChange={props.handleChange} />
      
        {console.log('answer rerendered')}
      </div>
  );


export default Answer;