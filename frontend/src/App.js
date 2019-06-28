import React, { Component } from 'react';
import Main from './components/Main.js'
import './App.css'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: "Nick",
      coins: [],
      loggedIn: false,
      mainPage: "Portfolio"
    }
  }

  logIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  handleMenuClick = (text) => {
    this.setState({
      mainPage: text
    })
  }


  render() {
    return (
      <div>
        <Main logIn={this.logIn} handleMenuClick={this.handleMenuClick} appState={this.state}/>
      </div>
    )
  }
}
