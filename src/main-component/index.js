import React, { Component } from 'react';
import logo from './logo.svg';
import LineChartComponent from '../LineChartComponent/index.js'
import './styles.css';

class MainComponent extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React and D3</h1>
        </header>
        <LineChartComponent />
      </div>
    );
  }
}

export default MainComponent;
