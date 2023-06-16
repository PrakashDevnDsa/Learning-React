import React from "react";
import ReactDom from 'react-dom'
import './index.css'; 
// import myfav, { favprog, myName, myName2 } from "./App";

import * as ques from './App'

ReactDom.render(
  <>
  <h1>My Favourite Youtuber is : {ques.default}</h1>
    <ol>
      <li>Thapa</li>
      <li>Fav Prog : {ques.favprog}</li>
      <li>First : {ques.myName()} and Last : {ques.myName2()}</li>
    </ol>
  </>
,document.getElementById('root'))