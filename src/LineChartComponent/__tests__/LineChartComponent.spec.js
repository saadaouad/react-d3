import React from 'react';
import ReactDOM from 'react-dom';
import LineChartComponent from '../index.js';

it('Line Chart component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LineChartComponent />, div);
});
