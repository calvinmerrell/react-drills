import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor (){
    super ();
      this.state = {
        food: ["Tacos", "Pizza", "Burgers", "Chips", "Burritos", "Salad"]
      }
  }
    render() {
      let foodList = this.state.food.map((element, index) => {
        return <p key={index}>{element}</p>
      })
      return <div className="App">{foodList}</div>
    }
}

