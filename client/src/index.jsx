// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

import Landing from './containers/landing/index.jsx';

import StudentsParents from './containers/students/index.jsx';
import Teachers from './containers/teachers/index.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'landing',
      grades: [
        '1A', '1B', '1C',
        '2A', '2B', '2C',
        '3A', '3B', '3C',
        '4A', '4B', '4C',
        '5A', '5B', '5C',
        '6A', '6B', '6C',
        '7A', '7B', '7C',
        '8A', '8B', '8C',
        '9A', '9B', '9C',
        '10A', '10B', '10C',
        '11A', '11B', '11C'],
      shifts: [
        'I',
        'II',
        'III',
        'IV',
        'V'
      ],
      quarters: [
        'I',
        'II',
        'III',
        'IV'
      ]
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
        mainElement = <div style={{height: '100%'}}><Landing handleStageChange={this.handleStageChange}/></div>
        break;
      case 'students':
        mainElement = <div style={{height: '100%'}}><StudentsParents handleStageChange={this.handleStageChange} grades={this.state.grades} shifts={this.state.shifts} quarters={this.state.quarters}/></div>
        break;
      case 'teachers':
        mainElement = <div style={{height: '100%'}}><Teachers handleStageChange={this.handleStageChange} grades={this.state.grades} shifts={this.state.shifts} quarters={this.state.quarters}/></div>
        break;
    }
    return (
      <MuiThemeProvider>
        {mainElement}
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
