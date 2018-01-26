import React, { Component } from 'react';

import DataGrid from '../../components/utility/datagrid.jsx';

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstTableTitle: 'Расписание уроков',
      secondTableTitle: 'Расписание звонков',
      thirdTableTitle: 'Расписание дежурств',
      classesData: [
        [
          {readOnly: true, value: '№', width: 40},
          {value: 'Понедельник', readOnly: true, width: 150},
          {value: 'Вторник', readOnly: true, width: 150},
          {value: 'Среда', readOnly: true, width: 150},
          {value: 'Четверг', readOnly: true, width: 150},
          {value: 'Пятница', readOnly: true, width: 150},
          {value: 'Суббота', readOnly: true, width: 150},
        ],
        [{value: 1, readOnly: true}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}],
        [{value: 2, readOnly: true}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}],
        [{value: 3, readOnly: true}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}],
        [{value: 4, readOnly: true}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}],
        [{value: 5, readOnly: true}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}],
        [{value: 6, readOnly: true}, {value: 'Физика'}, {value: 'Физика'}, {value: 'Физика'}, {value: 'Физика'}, {value: 'Физика'}, {value: 'Физика'}],
        [{value: 7, readOnly: true}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}],
        [{value: 8, readOnly: true}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}]
      ],
      alarmsData: [
        [
          {readOnly: true, value: '', width: 40},
          {value: 1, readOnly: true, width: 90},
          {value: 2, readOnly: true, width: 90},
          {value: 3, readOnly: true, width: 90},
          {value: 4, readOnly: true, width: 90},
          {value: 5, readOnly: true, width: 90},
          {value: 6, readOnly: true, width: 90},
          {value: 7, readOnly: true, width: 90},
          {value: 8, readOnly: true, width: 90},
        ],
        [{readOnly: true, value: 'С:'}, {disableEvents: true, value: 'С 08:00'}, {disableEvents: true, value: 'С 08:50'}, {disableEvents: true, value: 'С 09:40'}, {disableEvents: true, value: 'С 10:35'}, {disableEvents: true, value: 'С 11:35'}, {disableEvents: true, value: 'С 12:25'}, {disableEvents: true, value: 'С 13:15'}, {disableEvents: true, value: 'С 14:05'}],
        [{readOnly: true, value: 'До:'}, {disableEvents: true, value: 'До 08:40'}, {disableEvents: true, value: 'До 09:35'}, {disableEvents: true, value: 'До 10:25'}, {disableEvents: true, value: 'До 11:20'}, {disableEvents: true, value: 'До 12:20'}, {disableEvents: true, value: 'До 13:10'}, {disableEvents: true, value: 'До 14:00'}, {disableEvents: true, value: 'До 14:50'}]
      ],
      dutiesData: [
        [
          {readOnly: true, value: '', width: 40},
          {value: 'Понедельник', readOnly: true, width: 150},
          {value: 'Вторник', readOnly: true, width: 150},
          {value: 'Среда', readOnly: true, width: 150},
          {value: 'Четверг', readOnly: true, width: 150},
          {value: 'Пятница', readOnly: true, width: 150},
          {value: 'Суббота', readOnly: true, width: 150},
        ],
        [{value: 1, readOnly: true}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}],
        [{value: 2, readOnly: true}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}],
        [{value: 3, readOnly: true}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}],
        [{value: 4, readOnly: true}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}],
        [{value: 5, readOnly: true}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}],
        [{value: 6, readOnly: true}, {value: ''}, {value: 'Физика'}, {value: ''}, {value: 'Физика'}, {value: ''}, {value: 'Физика'}],
        [{value: 7, readOnly: true}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}],
        [{value: 8, readOnly: true}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}]
      ],
    }
  }

  render() {
    return (
      <div>
        <DataGrid
          title={this.state.firstTableTitle}
          type={'classes'}
          numberedRows={true}
          width={'70%'}
          dropDownItems={this.props.grades}
          data={this.state.classesData}/>
        <DataGrid
          title={this.state.secondTableTitle}
          type={'alarms'}
          numberedRows={false}
          width={'70%'}
          dropDownItems={this.props.shifts}
          data={this.state.alarmsData}/>
        <DataGrid
          title={this.state.thirdTableTitle}
          type={'duties'}
          numberedRows={true}
          width={'70%'}
          data={this.state.dutiesData}/>
      </div>
          )
        }
      }
