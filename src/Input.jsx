import React from 'react'
import { useState } from 'react'

const Input = () => {

    const [input, setinput] = useState({})

    let handle=(e)=>{
        setinput({...input,[e.target.name]:e.target.value})
    }

    let submit=()=>{
        console.log(input);
    }

  return (

    <div>

    <h1>{input.firstname}</h1>     
    <h1>{input.lastname}</h1>

      <input type="text" name='firstname' onChange={handle} />
      <input type="text" name='lastname' onChange={handle} />
      <input type="email" name='email' onChange={handle} />
      <input type="password" name='password' onChange={handle} />
      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Input
