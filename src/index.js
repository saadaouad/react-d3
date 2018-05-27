import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainComponent from './main-component/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainComponent />, document.getElementById('root'));
registerServiceWorker();
