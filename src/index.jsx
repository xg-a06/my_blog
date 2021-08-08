import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.global.css';

import App from './app';

const Element = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(<Element />, document.getElementById('root'));
