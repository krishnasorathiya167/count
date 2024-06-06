import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Effect = () => {

    const [count, setcount] = useState(0);

    const [text, settext] = useState("i m krishna")

    useEffect(() => {
    setInterval(()=>{
      setcount(count+1)
    },1000)
    }, [text])

  return (
    <div>
      <h1>{count}</h1>
      <h1>{text}</h1>
      <button onClick={()=>settext("i m kisu")}>Click Here</button>
    </div>
  )
}

export default Effect
