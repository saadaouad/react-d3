import React from 'react';
import ReactDOM from 'react-dom';
import BarChartComponent from '../index.js';

it('Bar Chart component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BarChartComponent />, div);
});
