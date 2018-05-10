import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InfoForm from './Form';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<InfoForm />, document.getElementById('root'));
registerServiceWorker();
