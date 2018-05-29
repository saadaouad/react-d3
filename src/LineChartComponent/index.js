import React, {Component} from 'react';
import {
  LineChart,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Bar,
} from 'recharts';

class LineChartComponent extends Component {
  render() {
    const data = [
      {name: 'Page A', uv: 300, pv: 300},
      {name: 'Page B', uv: 820, pv: 520},
      {name: 'Page C', uv: 1397, pv: 700},
      {name: 'Page D', uv: 800, pv: 730},
      {name: 'Page E', uv: 520, pv: 1200},
    ];
    return (
      <div className="mt5">
        <div>
          <h3>LineChart</h3>
          <LineChart width={630} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div>
          <h3>BarChart</h3>
          <BarChart width={630} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    );
  }
}

export default LineChartComponent;
