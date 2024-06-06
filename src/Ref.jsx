import React from 'react'
import { useRef } from 'react'


const Ref = () => {

  let email = useRef();
  let password = useRef();

  let handle=()=>{
    let data ={
      email:email.current.value,
      password:password.current.value,
    }
    console.log(data);
  }



  return (
    <div>
        <input type="text" ref={email} /><br /><br />
        <input type="text" ref={password}  /><br /><br />
        <button onClick={handle}>Submit</button>
    </div>
  )
}

export default Ref
