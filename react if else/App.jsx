import React from "react";
import Heading from "./Heading";
import Netflix from "./Netflix";
import Amzon from "./Amzon";


const favSeries = prompt("Favourite Series : ")

// const FavS = () => {
//   if(favSeries == 'netflix'){
//     return <Netflix/>
//   } 
//   else{
//     return <Amzon/>
// } 
// }

// TERNARY OPERATOR
const FavS = () => {
  // condition ? expTrue : expFalse
 return (favSeries=='netflix')?<Netflix/>:<Amzon/>
}

const App = ()=>(
  <>
    <Heading/>
    <FavS/>
    {/* {Sdata.map(ncard)} */}
    {/* {Sdata.map((val) => {
  return(
    <Card 
    key = {val.id}
    imgsrc = {val.imgsrc}
    title = {val.title}
    sname = {val.sname}
    link = {val.link}
  />
  )
})} */}

  </>
);


// function myname(a,b){
//   return a+b;
// }

// const myname = (a,b) => a+b;

export default App;