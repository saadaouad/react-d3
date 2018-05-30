import React, {Component} from 'react';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
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
        <h3 className="underline pt1 pb3">LineChart</h3>
        <div className="db-ns dn">
          <LineChart
            width={650}
            height={250}
            data={data}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '50%',
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        {/* Mobile view */}
        <div className="dn-ns db">
          <LineChart width={350} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    );
  }
}

export default LineChartComponent;
