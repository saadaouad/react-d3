import React from 'react';
import {shallow} from 'enzyme';
import MainComponent from '../index.js';

it('renders without crashing', () => {
  shallow(<MainComponent />);
});
