import React from 'react'
import { useState } from 'react'
import Effect from './Effect'
// import Input from './Input'
// import Ref from './Ref'


const App = () => {

    let [count, setCount] = useState(0)

    // let count = 0;

    // let submit =()=>{
    //     count += 1;
    //     console.log(count);
    // }

    // let submit =()=>{
    //     setCount(count+=1)
    // }
    

  return (
    <div>
        {/* <button onClick={submit}>+</button> */}
        {/* <button onClick={submit}>+</button> */}
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>-</button>
        {/* <Input/> */}
        {/* <Ref/> */}
        <Effect/>
    </div>

  )
}

export default App
