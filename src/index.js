import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainComponent from './MainComponent/index.js';
import registerServiceWorker from './registerServiceWorker';

import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support

ReactDOM.render(<MainComponent />, document.getElementById('root'));
registerServiceWorker();
