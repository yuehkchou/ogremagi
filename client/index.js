import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(
/* //passes down the store to the props */
    <App />,

  document.getElementById('root')
);
