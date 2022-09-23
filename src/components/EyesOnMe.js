import React from 'react';

function EyesOnMe() {
  function handleFocusEvent(){
    console.log("Good!");
  };  

  function handleBlurEvent(){
      console.log("Hey! Eyes on me!");
    };


  return (
      <button onFocus={handleFocusEvent} onBlur={handleBlurEvent}>
      Eyes on me
    </button>
    
  )
}

export default EyesOnMe;
