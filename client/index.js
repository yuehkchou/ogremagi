import React from 'react';
import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
/* //passes down the store to the props */
<Provider store={ createStoreWithMiddleWare(reducers) }>
    <App />,
    document.getElementById('root')
</Provider>
);
