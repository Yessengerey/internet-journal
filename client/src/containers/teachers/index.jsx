import React, { Component } from 'react';

import ControlPanel from '../../components/utility/topControlPanel.jsx';
import Footer from '../../components/utility/footer.jsx'

import SwipeableViews from 'react-swipeable-views';

import style from '../../../../styles/teachers/teachers_index.css';

import Schedule from './schedule.jsx';
import Homework from './homework.jsx';
import Journal from './journal.jsx';
import Messages from './messages.jsx';
import News from './news.jsx';
import Syllabus from './syllabus.jsx';

// views: schedule, journal, homoework, syllabus, news, messages
export default class Teachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 0
    }

    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleViewChange(nextView) {
    this.setState({
      currentView: parseInt(nextView)
    })
  }

  render() {
    return (
      <div className={style.teachers_main_container}>
        <ControlPanel handleViewChange={this.handleViewChange} handleStageChange={this.props.handleStageChange}/>
        <div className={style.teacher_name_container}><span>Петрова Мария Ивановна</span></div>
        <div style={{width: '100%'}}>
          <SwipeableViews
            index={this.state.currentView}
            onChangeIndex={this.handleViewChange}
            >
              <Schedule grades={this.props.grades} shifts={this.props.shifts}/>
              <Journal quarters={this.props.quarters}/>
              <Homework quarters={this.props.quarters} />
              <Syllabus quarters={this.props.quarters}/>
              <News quarters={this.props.quarters} />
              <Messages />
            </SwipeableViews>
        </div>
        <Footer handleViewChange={this.handleViewChange}/>
      </div>
    )
  }
}
