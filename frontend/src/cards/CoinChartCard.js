import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  getCoinPerformance = () => {
    let data = this.props.appState.historicalPrices[this.props.appState.mainPage]
    data.forEach((element, index) => data[index]["day"] = data[index]["created_at"].slice(5,10))
    return data
  }

  getPortfolio = () => {
    let data = this.props.appState.historicalPrices
    let returnArr = []
    for (let i = 0; i < 7; i ++) {
      let value = 0
      for (let key in data) {
        value += (data[key][i].price * this.props.appState.coins[key])
      }
      returnArr.push({day: i, price: value})
    }
    return returnArr
  }

  toggleCharts = () => {
    return this.props.appState.mainPage === "Charts" ? this.getPortfolio() : this.getCoinPerformance()
  }

  render() {
    return (
      <LineChart
        width={1150}
        height={250}
        data={this.toggleCharts()}
        margin={{
          top: 10, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />

      </LineChart>
    );
  }
}
