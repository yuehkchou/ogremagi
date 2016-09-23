import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

class App extends React.Component {
  render() {
    return <p> Hello React! </p>;

  }
}

render(<App />, document.getElementById('root'))
