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
      </div>
    )
  }
}
