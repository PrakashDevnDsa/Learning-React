import React, { useState } from "react";

const App = () => {
  const purple = '#8e44ed'
  const [bg , setBg]=useState(purple)
  const [name , setName] = useState('Click Me')
  const bgChange = () => {
    // console.log('clicked !');
    let newBg = '#34495e'
    setBg(newBg)
    setName("Ouch !! 🐺")
  }
  const bgBack = () =>{
    setBg(purple)
    setName("Waapis Aaagya !! 😮‍💨")

  }
  return(
    <>
    <div style={{backgroundColor : bg}}>
    {/* <button onClick={bgChange}>Click Here</button> */}
    {/* <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button> */}
    <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
    </div>
    </>
  )
}

export default App;