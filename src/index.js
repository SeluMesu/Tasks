import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import React from 'react';
import App from './App';

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
