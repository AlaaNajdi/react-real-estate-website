import React from 'react'
import { useState } from 'react';

const Counter = () => {
  //you should write 2 parameter var and fun, then defin inintal value 0
  const[count,setCount]=useState(0);

  const handleincement=()=>{
//call the fun
  setCount((count)=>count+1);
  console.log('count inc'+count);
  };

  const handledecement=()=>{
  setCount((count)=>count-1);
  console.log('count dec'+count);
  };

  const handlereset=()=>{
  setCount(0);
  };

  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={handleincement} disabled={count===5?true:false}>+</button>
      <button onClick={handlereset}>0</button>
      <button onClick={handledecement} disabled={count===0?true:false}>-</button>
    </div>
  )
}

export default Counter
