import React from 'react';
import {shallow} from 'enzyme';
import BarChartComponent from '../index.js';

it('Bar Chart component renders without crashing', () => {
  shallow(<BarChartComponent />);
});
