import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './Button';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Button />, document.getElementById('root'));
registerServiceWorker();
