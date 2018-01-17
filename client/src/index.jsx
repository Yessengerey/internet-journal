// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

import Landing from './components/landing/index.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'landing'
    }
  }

  render() {
    return (
      <Landing />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
