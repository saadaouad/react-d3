import React from 'react';
import {shallow} from 'enzyme';
import LineChartComponent from '../index.js';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';

it('Line Chart component renders without crashing', () => {
  const wrapper = shallow(<LineChartComponent />);
  const title = <h3 className="underline pt1 pb3">LineChart</h3>;
  const data = [
    {name: 'Page A', uv: 300, pv: 300},
    {name: 'Page B', uv: 820, pv: 520},
    {name: 'Page C', uv: 1397, pv: 700},
    {name: 'Page D', uv: 800, pv: 730},
    {name: 'Page E', uv: 520, pv: 1200},
  ];
  const lineChart = (
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
  );
  const secondLineChart = (
    <LineChart width={350} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );

  expect(wrapper.contains(title)).toEqual(true);
  expect(wrapper.contains(lineChart)).toEqual(true);
  expect(wrapper.contains(secondLineChart)).toEqual(true);
});
