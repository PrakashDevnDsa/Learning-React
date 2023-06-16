import React from "react";
import './index.css';


const name = prompt("Enter Your Name : ")

function App() {
  // let curDate = new Date(2023,6,15,5);
  let curDate = new Date();
  curDate = curDate.getHours();
  let greet = "";
  const cssStyle = {};

  if (curDate >= 1 && curDate < 12) {
    greet = "Good Morning";
    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate < 19) {
    greet = "Good Afternoon";
    cssStyle.color = "orange";
  } else {
    greet = "Good Night";
    cssStyle.color = "black";
  }
  return (
    <>

    <div >
    <h1>Hello {name} , <span  style={cssStyle}> {greet}</span></h1>    
    </div>
    </>
  )

}

export default App;