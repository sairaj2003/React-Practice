//simple state change when click on button
import React, { useState } from 'react';

const App = () => {

const[val,setVal]=useState('hello my name is sairaj');
const changeName = ()=>
{
  setVal('i am from i2it');
}

  return (
    <div>
      <h1>{val}</h1>
      <button onClick={changeName}>Click me</button>
    </div>
  )
}

export default App
