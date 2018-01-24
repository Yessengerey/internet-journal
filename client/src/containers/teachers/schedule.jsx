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
      classesData: [
        [
          {value: 'Понедельник', readOnly: true, width: 150},
          {value: 'Вторник', readOnly: true, width: 150},
          {value: 'Среда', readOnly: true, width: 150},
          {value: 'Четверг', readOnly: true, width: 150},
          {value: 'Пятница', readOnly: true, width: 150},
          {value: 'Суббота', readOnly: true, width: 150},
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
          {value: 1, readOnly: true, width: 90},
          {value: 2, readOnly: true, width: 90},
          {value: 3, readOnly: true, width: 90},
          {value: 4, readOnly: true, width: 90},
          {value: 5, readOnly: true, width: 90},
          {value: 6, readOnly: true, width: 90},
          {value: 7, readOnly: true, width: 90},
          {value: 8, readOnly: true, width: 90},
        ],
        [{disableEvents: true, value: 'С 08:00'}, {disableEvents: true, value: 'С 08:50'}, {disableEvents: true, value: 'С 09:40'}, {disableEvents: true, value: 'С 10:35'}, {disableEvents: true, value: 'С 11:35'}, {disableEvents: true, value: 'С 12:25'}, {disableEvents: true, value: 'С 13:15'}, {disableEvents: true, value: 'С 14:05'}],
        [{disableEvents: true, value: 'До 08:40'}, {disableEvents: true, value: 'До 09:35'}, {disableEvents: true, value: 'До 10:25'}, {disableEvents: true, value: 'До 11:20'}, {disableEvents: true, value: 'До 12:20'}, {disableEvents: true, value: 'До 13:10'}, {disableEvents: true, value: 'До 14:00'}, {disableEvents: true, value: 'До 14:50'}]
      ],
      dutiesData: [
        [
          {value: 'Понедельник', readOnly: true, width: 150},
          {value: 'Вторник', readOnly: true, width: 150},
          {value: 'Среда', readOnly: true, width: 150},
          {value: 'Четверг', readOnly: true, width: 150},
          {value: 'Пятница', readOnly: true, width: 150},
          {value: 'Суббота', readOnly: true, width: 150},
        ],
        [{value: 'Денис 7В'}, {value: 'Алия 6А'}, {value: 'Денис 7В'}, {value: 'Алия 6А'}, {value: 'Денис 7В'}, {value: 'Алия 6А'}],
        [{value: 'Андрей 3А'}, {value: 'Максим 3Б'}, {value: 'Андрей 3А'}, {value: 'Максим 3Б'}, {value: 'Андрей 3А'}, {value: 'Максим 3Б'}],
        [{value: 'Алтынай 11А'}, {value: 'Адиль 10Б'}, {value: 'Алтынай 11А'}, {value: 'Адиль 10Б'}, {value: 'Алтынай 11А'}, {value: 'Адиль 10Б'}],
        [{value: ''}, {value: 'Малика 2Г'}, {value: ''}, {value: 'Малика 2Г'}, {value: ''}, {value: 'Малика 2Г'}],
        [{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
        [{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
        [{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
        [{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}]
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
      title={'Расписание уроков'}
      type={'duties'}
      numberedRows={true}
      width={'70%'}
      data={this.state.dutiesData}/>;

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
