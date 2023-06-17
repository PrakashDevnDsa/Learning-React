import React from "react";
import { Card } from "./Cards";
import Sdata from "./Sdata";
import Heading from "./Heading";




const App = ()=>(
  <>
    <Heading/>
    
    {/* {Sdata.map(ncard)} */}
    {Sdata.map((val) => {
  return(
    <Card 
    key = {val.id}
    imgsrc = {val.imgsrc}
    title = {val.title}
    sname = {val.sname}
    link = {val.link}
  />
  )
})}

  </>
);


// function myname(a,b){
//   return a+b;
// }

// const myname = (a,b) => a+b;

export default App;