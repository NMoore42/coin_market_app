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

  render() {
    return (
      <LineChart
        width={1150}
        height={300}
        data={this.getCoinPerformance()}
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
