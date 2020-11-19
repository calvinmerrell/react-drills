import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./Image"

export default class App extends Component {
  render (){
    return (
      <div className = "App">
        <Image url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiDgXpUTFokskLG8iX_3ULfwU85x_JnQeR7w&usqp=CAU"}/>
      </div>
    )
  }
}
