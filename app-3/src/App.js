import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filterString: "",
      foods: ["meat", "veggies", "fruit", "candy"]
    }
  }
  handleChange(filter) {
    this.setState({ filterString: filter })
  }


  render() {
    let foodList = this.state.foods.filter((element, index) => {
      return element.includes(this.state.filterString)
    })
      .map((element, index) => { return <p key={index}>{element}</p> })

    return (
      <div className="App"><input onChange={e =>
        this.handleChange(e.target.value)} type="text" />
        {foodList}
      </div>
    )
  }
}

