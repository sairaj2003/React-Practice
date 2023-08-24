// change state using useState using toggle
import React, { useState } from 'react';

const App = () => {

const[val,setVal]=useState('hello my name is sairaj');
const changeName = ()=>
{
  let temp=val;
  if (temp === 'hello my name is sairaj')
  {
    setVal('i am from i2it');
  }
  else
  {
    setVal('hello my name is sairaj');
  }
  
}

  return (
    <div>
      <h1>{val}</h1>
      <button onClick={changeName}>Click me</button>
    </div>
  )
}

export default App
