import React, { Component } from 'react';
import Main from './components/Main.js'
import './App.css'

const coins = {
  "Bitcoin": "btc",
  "Ethereum": "eth",
  "Ripple": "xrp",
  "Litecoin": "ltc",
  "Bitcoin Cash": "bch",
  "EOS": "eos",
  "Cardano": "ada",
  "Tron": "trx",
  "Stellar": "xlm",
  "ZCash": "zec"
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: "Nick",
      coins: [],
      loggedIn: false,
      mainPage: "Portfolio",
      currentPrices: {
        "Bitcoin": 0,
        "Ethereum": 0,
        "Ripple": 0,
        "Litecoin": 0,
        "Bitcoin Cash": 0,
        "EOS": 0,
        "Cardano": 0,
        "Tron": 0,
        "Stellar": 0,
        "ZCash": 0
      },
      articles: {
        "Bitcoin": [],
        "Ethereum": [],
        "Ripple": [],
        "Litecoin": [],
        "Bitcoin Cash": [],
        "EOS": [],
        "Cardano": [],
        "Tron": [],
        "Stellar": [],
        "ZCash": []
      }
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

  componentDidMount = () => {
    this.getCoinPrices();
    this.getNewsArticles();

    this.interval = setInterval(this.getCoinPrices, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getDate = () => {
    let date = new Date();
    date.setMonth(date.getMonth() - 1)
    return date.toISOString().slice(0,10)
  }

  getNewsArticles = () => {
    const newsAPI = "a8e761bdc20b4912a6cdfac98e565cba"
    for (let key in coins) {
      fetch(`https://newsapi.org/v2/everything?q=${coins[key]}&apiKey=${newsAPI}`)
        .then(res => res.json())
        .then(data => this.setState(prevState => {
          let articles = Object.assign({}, prevState.articles);
          articles[key] = data.articles.filter(obj => obj.title.includes(key));
          return { articles };
        }))
    }
  }

  getCoinPrices = () => {
    for (let key in coins) {
      fetch(`https://api.cryptonator.com/api/ticker/${coins[key]}-usd`)
        .then(res => res.json())
        .then(data => this.setState(prevState => {
          let currentPrices = Object.assign({}, prevState.currentPrices);
          currentPrices[key] = parseFloat(data.ticker.price).toFixed(2);
          return { currentPrices };
        }))
    }
  }

  render() {
    return (
      <div>
        <Main logIn={this.logIn} handleMenuClick={this.handleMenuClick} appState={this.state}/>
      </div>
    )
  }
}
