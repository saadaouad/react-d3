import React from 'react';
import {shallow} from 'enzyme';
import BarChartComponent from '../index.js';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

it('Bar Chart component renders without crashing', () => {
  const wrapper = shallow(<BarChartComponent />);
  const title = <h3 className="underline pt1 pb3">BarChart</h3>;
  const data = [
    {name: 'Case 1', uv: 250, pv: 400},
    {name: 'Case 2', uv: 700, pv: 1297},
    {name: 'Case 3', uv: 400, pv: 400},
    {name: 'Case 4', uv: 250, pv: 730},
    {name: 'Case 5', uv: 520, pv: 1200},
  ];
  const barChart = (
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
  );

  const secondBarChart = (
    <BarChart width={350} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#317daf" />
      <Bar dataKey="uv" fill="#c44848" />
    </BarChart>
  );

  expect(wrapper.contains(title)).toEqual(true);
  expect(wrapper.contains(barChart)).toEqual(true);
  expect(wrapper.contains(secondBarChart)).toEqual(true);
});
