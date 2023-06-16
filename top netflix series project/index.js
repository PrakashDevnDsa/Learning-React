import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Card } from "./Cards";
import Sdata from "./Sdata";

// function ncard(value,index,array)

// function ncard(val){
//   return(
//     <Card 
//     imgsrc = {val.imgsrc}
//     title = {val.title}
//     sname = {val.sname}
//     link = {val.link}
//   />
//   )
// }

ReactDOM.render(
  <>
    <h1 className="heading_style">List OF Top 5 Netflix Series in 2023</h1>
   
    
    {/* {Sdata.map(ncard)} */}
    {Sdata.map((val) => {
  return(
    <Card 
    imgsrc = {val.imgsrc}
    title = {val.title}
    sname = {val.sname}
    link = {val.link}
  />
  )
})}

  </>,
  document.getElementById("root")
);


// function myname(a,b){
//   return a+b;
// }

// const myname = (a,b) => a+b;