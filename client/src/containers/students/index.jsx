import React, { Component } from 'react';

import ControlPanel from '../../components/utility/topControlPanel.jsx';

import style from '../../../../styles/students/students_index.css';

import Schedule from './schedule.jsx';
import Homework from './homework.jsx';
import Journal from './journal.jsx';
import Messages from './messages.jsx';
import News from './news.jsx';
import Syllabus from './syllabus.jsx';

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
      schedule: <Schedule grades={this.props.grades} shifts={this.props.shifts}/>,
      journal: <Journal quarters={this.props.quarters}/>,
      homework: <Homework />,
      syllabus: <Syllabus />,
      news: <News />,
      messages: <Messages />
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
