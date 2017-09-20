import React from 'react';

const Results = (props) => {
const correctAnswers = props.completedFacts.filter(function(fact) {
  return fact.isCorrect === true;
});
const resultShown = props.showResults ? 'block' : 'none' ;
const formStyle = {
  display: resultShown
};


  return (
      
        <div style={formStyle}>    
        <p>You scored {correctAnswers.length} out of {props.completedFacts.length} correctly.</p>     
    

      </div>
    );

  }


export default Results;