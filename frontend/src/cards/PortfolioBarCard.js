import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {name: 'BTC', uv: 4000, pv: 2400, amt: 2400},
  {name: 'ETH', uv: 3000, pv: 1398, amt: 2210},
  {name: 'XRP', uv: 2000, pv: 5800, amt: 2290},
  {name: 'LTC', uv: 2780, pv: 3908, amt: 2000},
  {name: 'BCH', uv: 1890, pv: 4800, amt: 2181},
  {name: 'EOS', uv: 2390, pv: 3800, amt: 2500},
  {name: 'ADA', uv: 2390, pv: 3800, amt: 2500},
  {name: 'TRX', uv: 2390, pv: 3800, amt: 2500},
  {name: 'XLM', uv: 2390, pv: 3800, amt: 2500},
  {name: 'ZEC', uv: 3490, pv: 4300, amt: 2100}
];


const getIntroOfPage = (label) => {
  if (label === 'BTC') {
    return "Quantiy: 2.24";
  } if (label === 'ETH') {
    return "Quantiy: 11";
  } if (label === 'XRP') {
    return "Quantiy: 6";
  } if (label === 'LTC') {
    return "Quantiy: 22";
  } if (label === 'BCH') {
    return "Quantiy: 7";
  } if (label === 'EOS') {
    return "Quantiy: 23";
  } if (label === 'ADA') {
    return "Quantiy: 4";
  } if (label === 'TRX') {
    return "Quantiy: 12";
  } if (label === 'XLM') {
    return "Quantiy: 122";
  } if (label === 'ZEC') {
    return "Quantiy: 24";
  }
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : $${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
      </div>
    );
  }

  return null;
};

export default class PortfolioBarCard extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/vxq4ep63/';

  render() {
    return (
      <BarChart
        width={500}
        height={275}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="pv" barSize={20} fill={"#3F51B5"} />
      </BarChart>
    );
  }
}
