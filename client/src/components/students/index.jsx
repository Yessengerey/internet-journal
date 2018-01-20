import React, { Component } from 'react';

import ControlPanel from './topControlPanel.jsx';

export default class StudentsParents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: '100%', backgroundColor: '#F9F9F9'}}>
        <ControlPanel />
        STUDENTS
      </div>
    )
  }
}
