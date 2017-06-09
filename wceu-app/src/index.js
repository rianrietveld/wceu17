import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Tab, TabList, Tabs, TabPanel } from 'react-context-tabs';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

registerServiceWorker();
