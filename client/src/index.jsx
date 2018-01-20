// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

import Landing from './containers/landing/index.jsx';

import StudentsParents from './containers/students/index.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'landing'
    }

    this.handleStageChange = this.handleStageChange.bind(this);
  }

  handleStageChange(stage) {
    this.setState({
      stage: stage
    })
  }

  render() {
    let mainElement = <div></div>;

    switch (this.state.stage) {
      case 'landing':
        mainElement = <div style={{margin: '50px', height: '90%'}}><Landing handleStageChange={this.handleStageChange}/></div>
        break;
      case 'students':
        mainElement = <div style={{height: '100%'}}><StudentsParents /></div>
        break;
    }
    return (
      mainElement
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
