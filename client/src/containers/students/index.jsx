import React, { Component } from 'react';

import ControlPanel from '../../components/utility/topControlPanel.jsx';
import DataGrid from '../../components/utility/datagrid.jsx';

import style from '../../../../styles/students/students_index.css';

export default class StudentsParents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstTableTitle: 'Расписание уроков',
      secondTableTitle: 'Расписание звонков',
      thirdTableTitle: 'Расписание дежурств',
      currentView: 'schedule',
      classesData: [
        [
          {value: 'Понедельник', readOnly: true},
          {value: 'Вторник', readOnly: true},
          {value: 'Среда', readOnly: true},
          {value: 'Четверг', readOnly: true},
          {value: 'Пятница', readOnly: true},
          {value: 'Суббота', readOnly: true},
        ],
        [{value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}],
        [{value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}],
        [{value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}],
        [{value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}],
        [{value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}],
        [{value: 'Физика'}, {value: 'Физика'}, {value: 'Физика'}, {value: 'Физика'}, {value: 'Физика'}, {value: 'Физика'}],
        [{value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}],
        [{value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}]
      ],
      alarmsData: [
        [
          {value: 1, readOnly: true},
          {value: 2, readOnly: true},
          {value: 3, readOnly: true},
          {value: 4, readOnly: true},
          {value: 5, readOnly: true},
          {value: 6, readOnly: true},
          {value: 7, readOnly: true},
          {value: 8, readOnly: true},
        ],
        [{value: 'С 08:00'}, {value: 'С 08:50'}, {value: 'С 09:40'}, {value: 'С 10:35'}, {value: 'С 11:35'}, {value: 'С 12:25'}, {value: 'С 13:15'}, {value: 'С 14:05'}],
        [{value: 'До 08:40'}, {value: 'До 09:35'}, {value: 'До 10:25'}, {value: 'До 11:20'}, {value: 'До 12:20'}, {value: 'До 13:10'}, {value: 'До 14:00'}, {value: 'До 14:50'}]
      ]
    }
  }

  render() {
    return (
      <div className={style.students_main_container}>
        <ControlPanel/>
        <DataGrid
          title={this.state.firstTableTitle}
          type={'classes'}
          numberedRows={true}
          grades={this.props.grades}
          data={this.state.classesData}/>
        <DataGrid
          title={this.state.secondTableTitle}
          type={'alarms'}
          numberedRows={false}
          shifts={this.props.shifts}
          data={this.state.alarmsData}/>
      </div>
    )
  }
}
