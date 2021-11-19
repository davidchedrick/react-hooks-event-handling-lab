import React from 'react';

const sayThis = (phrase) => console.log(phrase)

function Keypad() {
  return <input type="password" onChange={() => sayThis('Entering password...')} />
}


export default Keypad;