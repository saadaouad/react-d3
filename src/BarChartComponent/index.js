import React, {Component} from 'react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

class BarChartComponent extends Component {
  render() {
    const data = [
      {name: 'Case 1', uv: 250, pv: 400},
      {name: 'Case 2', uv: 700, pv: 1297},
      {name: 'Case 3', uv: 400, pv: 400},
      {name: 'Case 4', uv: 250, pv: 730},
      {name: 'Case 5', uv: 520, pv: 1200},
    ];
    return (
      <div className="mt5">
        <h3 className="underline pt1 pb3">BarChart</h3>
        <div className="db-ns dn">
          <BarChart
            width={550}
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
            <Bar dataKey="pv" fill="#317daf" />
            <Bar dataKey="uv" fill="#c44848" />
          </BarChart>
        </div>
        {/* Mobile view */}
        <div className="dn-ns db">
          <BarChart width={350} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#317daf" />
            <Bar dataKey="uv" fill="#c44848" />
          </BarChart>
        </div>
      </div>
    );
  }
}

export default BarChartComponent;
