import React, { Component } from 'react';

import ControlPanel from '../../components/utility/topControlPanel.jsx';

import style from '../../../../styles/students/students_index.css';

import Schedule from './schedule.jsx';

// views: schedule, journal, homoework, syllabus, news, messages
export default class StudentsParents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'schedule',

    }

    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleViewChange(nextView) {
    this.setState({
      currentView: nextView
    })
  }

  render() {
    let views = {
      schedule: <Schedule grade={this.props.grades} shifts={this.props.shifts}/>,
      journal: <div>HELLO</div>
    }

    let viewElement = views[this.state.currentView];

    return (
      <div className={style.students_main_container}>
        <ControlPanel handleViewChange={this.handleViewChange}/>
        {viewElement}
      </div>
    )
  }
}
