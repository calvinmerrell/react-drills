import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      message: "",
      message2: ''
    }
  }

  handleChange(e) {
    
    this.setState({
      message: e.target.value
    })
  }

  handleChange2(e) {
    
    this.setState({
      message2: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <input name="input1" type="text" value={this.state.message} onChange={e => this.handleChange(e)} />
        <input name="input2" type="text" value={this.state.message2} onChange={e => this.handleChange2(e)} />
      </div>
    )
  }
}
