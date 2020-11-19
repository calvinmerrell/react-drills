import React, { Component } from "react"



export default class Login extends Component {
    constructor() {
      super ()
      this.state = {
        username: "",
        password: ""
        }
    this.handleLogin = this.handleLogin.bind(this)
    }

    handleUsernameChange(name) {
        this.setState({ username: name})
    }
    handlePasswordChange (password){
        this.setState({ password: password})
    }

    handleLogin(){
        alert(`Username: ${this.state.username} Password ${this.state.password}`)
    }
  
    render () {
      return (
          <div>
              <input type="text" onChange={e => this.handleUsernameChange(e.target.value)}/>
              <input type="text" onChange={e => this.handlePasswordChange(e.target.value)}/>
              <button onClick={this.handleLogin}><h2>Login</h2></button>
          </div>
      )
    }
  }