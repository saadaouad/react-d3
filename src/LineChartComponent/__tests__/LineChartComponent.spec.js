import React from 'react';
import {shallow} from 'enzyme';
import LineChartComponent from '../index.js';

it('Line Chart component renders without crashing', () => {
  shallow(<LineChartComponent />);
});

