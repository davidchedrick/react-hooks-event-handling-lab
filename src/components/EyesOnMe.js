import React from 'react';

const sayThis = (phrase) => console.log(phrase)


function EyesOnMe() {
  return (
     
    <button 
        onFocus={() => sayThis('Good!')} 
        onBlur={() => sayThis('Hey! Eyes on me!')}
    >
        Eyes on me
    </button>
    
    )
}


export default EyesOnMe;