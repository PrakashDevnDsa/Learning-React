import React from "react";
import SlotM from "./SlotMach";

// let x = prompt("X : ")
// let y = prompt("Y : ")
// let z = prompt("Z : ")

// REVISION KR RHA THA
// const Test = (props) =>{
//     return (
//       <>
//         <h1>Heading : {props.head}</h1>
//       <img src={props.link} alt="img" />
//       </>
//     )
// }

const App = () =>
{
  return(
    <>
      <h1 className="heading_style">🎰 Welcome to <span style={{fontWeight : 'bold'}}> 
      Slot Machine Game </span> 🎰</h1>

   <div className="slot_machine">
   {/* <SlotM x={x} y={y} z={z} />
   <SlotM x={x} y={y} z={z} />
   <SlotM x={x} y={y} z={z} /> */}
   
   {/* REVISION FUNCTION */}
   {/* <Test
    head = "Heading 1"
    link = 'https://picsum.photos/200/300?grayscale'
   />
   <Test
    head = "PRAKASH KUMAR SINGH"
    link = 'https://picsum.photos/seed/picsum/200/300'
   /> */}

   {/* <SlotM x='💔' y='💔' z='💔' />
   <SlotM x='💛' y='💛' z='💚' />
   <SlotM x='🤍' y=' 🥇 ' z=' 🧷 ' /> 
   <SlotM x='💥' y='💫' z='🍟' />  */}

   </div>
    </>
  )
}

export default App;