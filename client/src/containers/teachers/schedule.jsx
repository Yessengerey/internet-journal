import React, { Component } from 'react';

import DataGrid from '../../components/utility/datagrid.jsx';

import Switch from '../../components/utility/switch.jsx';
export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstTableTitle: 'Расписание уроков',
      secondTableTitle: 'Расписание звонков',
      thirdTableTitle: 'Расписание дежурств',
      specData: [
        [
          {readOnly: true, value: '№', width: 40},
          {readOnly: true, value: 'Понедельник', readOnly: true, width: 150},
          {readOnly: true, value: 'Вторник', readOnly: true, width: 150},
          {readOnly: true, value: 'Среда', readOnly: true, width: 150},
          {readOnly: true, value: 'Четверг', readOnly: true, width: 150},
          {readOnly: true, value: 'Пятница', readOnly: true, width: 150},
          {readOnly: true, value: 'Суббота', readOnly: true, width: 150},
        ],
        [{value: '1', readOnly: true, }, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}],
        [{value: '2', readOnly: true, }, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}],
        [{value: '3', readOnly: true, }, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}],
        [{value: '4', readOnly: true, }, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}],
        [{value: '5', readOnly: true, }, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}],
        [{value: '6', readOnly: true, }, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}],
        [{value: '7', readOnly: true, }, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}],
        [{value: '8', readOnly: true, }, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}]
      ],
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
        [{value: '1', readOnly: true, }, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}, {value: 'Математика'}],
        [{value: '2', readOnly: true, }, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}, {value: 'Литература'}],
        [{value: '3', readOnly: true, }, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}, {value: 'Биология'}],
        [{value: '4', readOnly: true, }, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}, {value: 'Черчение'}],
        [{value: '5', readOnly: true, }, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}, {value: 'Английский'}],
        [{value: '6', readOnly: true, }, {value: 'Физика'}, {value: 'Физика'}, {value: 'Физика'}, {value: 'Физика'}, {value: 'Физика'}, {value: 'Физика'}],
        [{value: '7', readOnly: true, }, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}],
        [{value: '8', readOnly: true, }, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}, {value: 'Физкультура'}]
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
        [{value: 'С'}, {disableEvents: true, value: 'С 08:00'}, {disableEvents: true, value: 'С 08:50'}, {disableEvents: true, value: 'С 09:40'}, {disableEvents: true, value: 'С 10:35'}, {disableEvents: true, value: 'С 11:35'}, {disableEvents: true, value: 'С 12:25'}, {disableEvents: true, value: 'С 13:15'}, {disableEvents: true, value: 'С 14:05'}],
        [{value: 'До'}, {disableEvents: true, value: 'До 08:40'}, {disableEvents: true, value: 'До 09:35'}, {disableEvents: true, value: 'До 10:25'}, {disableEvents: true, value: 'До 11:20'}, {disableEvents: true, value: 'До 12:20'}, {disableEvents: true, value: 'До 13:10'}, {disableEvents: true, value: 'До 14:00'}, {disableEvents: true, value: 'До 14:50'}]
      ],
      dutiesData: [
        [
          {readOnly: true, value: '№', width: 40},
          {readOnly: true, value: 'Понедельник', readOnly: true, width: 150},
          {readOnly: true, value: 'Вторник', readOnly: true, width: 150},
          {readOnly: true, value: 'Среда', readOnly: true, width: 150},
          {readOnly: true, value: 'Четверг', readOnly: true, width: 150},
          {readOnly: true, value: 'Пятница', readOnly: true, width: 150},
          {readOnly: true, value: 'Суббота', readOnly: true, width: 150},
        ],
        [{value: '1', readOnly: true, }, {value: 'Денис 7В'}, {value: 'Алия 6А'}, {value: 'Денис 7В'}, {value: 'Алия 6А'}, {value: 'Денис 7В'}, {value: 'Алия 6А'}],
        [{value: '2', readOnly: true, }, {value: 'Андрей 3А'}, {value: 'Максим 3Б'}, {value: 'Андрей 3А'}, {value: 'Максим 3Б'}, {value: 'Андрей 3А'}, {value: 'Максим 3Б'}],
        [{value: '3', readOnly: true, }, {value: 'Алтынай 11А'}, {value: 'Адиль 10Б'}, {value: 'Алтынай 11А'}, {value: 'Адиль 10Б'}, {value: 'Алтынай 11А'}, {value: 'Адиль 10Б'}],
        [{value: '4', readOnly: true, }, {value: ''}, {value: 'Малика 2Г'}, {value: ''}, {value: 'Малика 2Г'}, {value: ''}, {value: 'Малика 2Г'}],
        [{value: '5', readOnly: true, }, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
        [{value: '6', readOnly: true, }, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
        [{value: '7', readOnly: true, }, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
        [{value: '8', readOnly: true, }, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}]
      ],
      switchView: 'Курирование 5А'
    }

    this.switchView = this.switchView.bind(this);
  }

  switchView(nextView) {
    this.setState({
      switchView: nextView
    })
  }

  render() {
    let leftSwitchView = <DataGrid
      title={this.state.firstTableTitle}
      type={'classes'}
      numberedRows={true}
      width={'70%'}
      dropDownItems={this.props.grades}
      data={this.state.classesData}/>;

    let rightSwitchView = <DataGrid
      title={'Расписание'}
      type={'classes'}
      numberedRows={true}
      width={'70%'}
      data={this.state.specData}/>;

    let switchEl = this.state.switchView === 'Курирование 5А' ? leftSwitchView : rightSwitchView;

    return (
      <div>
        <Switch
          leftTitle={'Курирование 5А'}
          rightTitle={'Проф. Предмет'}
          switchView={this.switchView}/>
        {switchEl}
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
