import React, { Component } from 'react';
import Main from './components/Main.js'
import Login from './login'
import './App.css'

const coins = {
  "Bitcoin": "btc",
  "Ethereum": "eth",
  "Ripple": "xrp",
  "Litecoin": "ltc",
  "Bitcoin Cash": "bch",
  "EOS": "eos",
  "Cardano": "ada",
  "TRON": "trx",
  "Stellar": "xlm",
  "Zcash": "zec"
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: "",
      coins: {
        "Bitcoin": 0,
        "Ethereum": 0,
        "Ripple": 0,
        "Litecoin": 0,
        "Bitcoin Cash": 0,
        "EOS": 0,
        "Cardano": 0,
        "TRON": 0,
        "Stellar": 0,
        "Zcash": 0
      },
      loggedIn: true,
      mainPage: "Portfolio",
      loginPageTab: 0,
      currentPrices: {
        "Bitcoin": 0,
        "Ethereum": 0,
        "Ripple": 0,
        "Litecoin": 0,
        "Bitcoin Cash": 0,
        "EOS": 0,
        "Cardano": 0,
        "TRON": 0,
        "Stellar": 0,
        "Zcash": 0
      },
      historicalPrices: {
        "Bitcoin": [],
        "Ethereum": [],
        "Ripple": [],
        "Litecoin": [],
        "Bitcoin Cash": [],
        "EOS": [],
        "Cardano": [],
        "TRON": [],
        "Stellar": [],
        "Zcash": []
      },
      articles: {
        "Bitcoin": [],
        "Ethereum": [],
        "Ripple": [],
        "Litecoin": [],
        "Bitcoin Cash": [],
        "EOS": [],
        "Cardano": [],
        "TRON": [],
        "Stellar": [],
        "Zcash": []
      },
      userArticles: [],
      loginEmail: "",
      loginPassword: "",
      signUpName: "",
      signUpEmail: "",
      signUpPassword: ""
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

  handleArticleSave = (articleData, coinImgKey) => {
    articleData.coinImg = coinImgKey;
    this.setState({
      userArticles: [...this.state.userArticles, articleData]
    })
  }

  handleArticleRemove = (articleData, coinImgKey) => {
    articleData.coinImg = coinImgKey;
    this.setState({
      userArticles: this.state.userArticles.filter(art => art !== articleData)
    })
  }

  handleLoginPageTab = (tab) => {
    if (tab === "login")
    this.setState({
      loginPageTab: 0
    })
    if (tab === "signup")
    this.setState({
      loginPageTab: 1
    })
  }

  loginUser = () => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        email: this.state.loginEmail,
        password: this.state.loginPassword
      })
    }).then(res => res.json()).then(res => {
      let newCoins = Object.assign({}, this.state.coins)
      for (let key in res.coins) {
        newCoins[key] = res.coins[key]
      }
      this.setState({
      loggedIn: true,
      user: res.user.name,
      coins: newCoins
    })
    })
  }

  validateLoginUser = () => {
    if (this.state.loginEmail && this.state.loginPassword) {
      this.loginUser()
    } else {
      alert("Please fill out all areas of Login Form!")
    }
  }

  handleLoginChange = (input, value) => {
    this.setState({
      [input]: value
    })
  }

  validateSignUpUser = () => {
    if (this.state.signUpName && this.state.signUpEmail && this.state.signUpPassword) {
      this.signUpUser()
    } else {
      alert("Please fill out all areas of New User Form!")
    }
  }

  signUpUser = () => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        name: this.state.signUpName,
        email: this.state.signUpEmail,
        password: this.state.signUpPassword
      })
    }).then(res => res.json()).then(res => this.loginUser())
  }

  componentDidMount = () => {
    this.getHistoricalCoinPrices();
    // this.getCurrentCoinPrices();
    // this.getNewsArticles();

    //this.interval = setInterval(this.getCurrentCoinPrices, 60000);
    //Remove comment on above when running live demo to live update prices
  }

  componentWillUnmount() {
    //clearInterval(this.interval);
    //Remove comment on above when running live demo to live update prices
  }

  getDate = () => {
    let date = new Date();
    date.setMonth(date.getMonth() - 1)
    return date.toISOString().slice(0,10)
  }

  getNewsArticles = () => {
    const newsAPI = "d695935ffeda42deba77d5caaee2a58f"
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

  getHistoricalCoinPrices = () => {
    fetch("http://localhost:3000/api/v1/cryptos")
      .then(res => res.json())
      .then(coinData => this.setState({historicalPrices: coinData}))
  }

  getCurrentCoinPrices = () => {
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

  renderLogIn = () => {
    return this.state.loggedIn
    ?
      <Main
        logIn={this.logIn}
        handleMenuClick={this.handleMenuClick}
        handleArticleSave={this.handleArticleSave}
        handleArticleRemove={this.handleArticleRemove}
        appState={this.state}
      />
    :
      <Login
        handleLoginPageTab={this.handleLoginPageTab}
        handleLoginChange={this.handleLoginChange}
        appState={this.state}
        validateSignUpUser={this.validateSignUpUser}
        validateLoginUser={this.validateLoginUser}
      />
  }

  render() {
    return (
      <div>
        {this.renderLogIn()}
      </div>
    )
  }
}
