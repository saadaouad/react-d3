import React from 'react';
import {shallow} from 'enzyme';
import MainComponent from '../index.js';
import logo from '../logo.svg';
import LineChartComponent from '../../LineChartComponent/index.js';
import BarChartComponent from '../../BarChartComponent/index.js';

it('renders without crashing', () => {
  const wrapper = shallow(<MainComponent />);
  const officialLogo = <img src={logo} className="App-logo" alt="logo" />
  const welcome = <h1 className="App-title">Welcome to React and D3</h1>;
  const lineChart = <LineChartComponent />;
  const barChart = <BarChartComponent />;
  expect(wrapper.contains(officialLogo)).toEqual(true);
  expect(wrapper.contains(welcome)).toEqual(true);
  expect(wrapper.contains(lineChart)).toEqual(true);
  expect(wrapper.contains(barChart)).toEqual(true);
});
