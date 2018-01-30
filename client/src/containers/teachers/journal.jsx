import React, { Component } from 'react';

import DataGrid from '../../components/utility/datagrid.jsx';

import Switch from '../../components/utility/switch.jsx';
import style from '../../../../styles/teachers/journal.css';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quarterGrades: [
        [
          {readOnly: true, value: '№', width: 40},
          {value: 'Ученик', readOnly: true, width: 150},
          {value: 'Заметки учителя', readOnly: true, width: 180},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50}
        ],
          [{value: 1}, {value: 'Угоров Е. Ж.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: '5'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 2}, {value: 'Шамилин У. Ю.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 3}, {value: 'Каратаева З. Р.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 4}, {value: 'Устепов К. А.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 5}, {value: 'Куропаткина Ж. У.'}, {value: ''}, {value: '3'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 6}, {value: 'Фандоринов К. К.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 7}, {value: 'Щянтарин Г. К.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 8}, {value: 'Сунтарова Ф. А.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 9}, {value: 'Руссов С. С.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 10}, {value: 'Самилинова А. В.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 11}, {value: 'Акматов А. А.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 12}, {value: 'Симворов А. С.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 13}, {value: 'Ломоносова М. А.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 14}, {value: 'Ломоносов К. А.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: '5'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 15}, {value: 'Болат А. А.'}, {value: ''}, {value: ''}, {value: ''}, {value: '4'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 16}, {value: 'Мырза Ж. Б.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 17}, {value: 'Химтар Ж. Ж.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 18}, {value: 'Йоркина С. В.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 19}, {value: 'Сарыбек А. Ч.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 20}, {value: 'Чехов А. С.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}]
      ],
      classGrades: [
        [
          {readOnly: true, value: '№', width: 40},
          {value: 'Ученик', readOnly: true, width: 150},
          {value: 'Заметки', readOnly: true, width: 180},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50},
          {value: '05.01', readOnly: true, width: 50}
        ],
          [{value: 1}, {value: 'Угоров Е. Ж.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: '5'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 2}, {value: 'Шамилин У. Ю.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 3}, {value: 'Каратаева З. Р.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 4}, {value: 'Устепов К. А.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 5}, {value: 'Куропаткина Ж. У.'}, {value: ''}, {value: '3'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 6}, {value: 'Фандоринов К. К.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 7}, {value: 'Щянтарин Г. К.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 8}, {value: 'Сунтарова Ф. А.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 9}, {value: 'Руссов С. С.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 10}, {value: 'Самилинова А. В.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 11}, {value: 'Акматов А. А.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 12}, {value: 'Симворов А. С.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 13}, {value: 'Ломоносова М. А.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 14}, {value: 'Ломоносов К. А.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: '5'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 15}, {value: 'Болат А. А.'}, {value: ''}, {value: ''}, {value: ''}, {value: '4'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 16}, {value: 'Мырза Ж. Б.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 17}, {value: 'Химтар Ж. Ж.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 18}, {value: 'Йоркина С. В.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 19}, {value: 'Сарыбек А. Ч.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 20}, {value: 'Чехов А. С.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}]
      ],
      gridTitle: 'Оценки за',
      currentSwitchView: 'КУрирование 5А',
      focusValue: 0,
      dropDownItems: [
        'Математика',
        'Литература',
        'Биология',
        'Черчение',
        'Английский',
        'Физика',
        'Физкультура',
        'Казахский',
        'Русский',
        'География',
        'Технологии',
        'Искусство',
        'История М.',
        'История К.',
        'Литература К.',
        'Музыка',
        'Химия',
        'Французский',
        'Проф'
      ]
    }

    this.switchView = this.switchView.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  switchView(nextView) {
    this.setState({
      currentSwitchView: nextView
    })
  }

  handleChange(e, index, value) {
    this.setState({
      focusValue: value
    })
  }

  render() {

    let dropDownMenu =
    <div className={style.dropdown_outer}>
      <div className={style.dropdown_inner}>
        <DropDownMenu maxHeight={300} value={this.state.focusValue} onChange={this.handleChange}>
          {this.state.dropDownItems.map((item, id) => (<MenuItem value={id} key={id} primaryText={item} />))}
        </DropDownMenu>
      </div>
    </div>

    let dropDownEl = this.state.currentSwitchView === 'КУрирование 5А' ? dropDownMenu : <div></div>;

    let leftSwitchView = <DataGrid
      title={'Оценки за'}
      type={'marks'}
      numberedRows={true}
      width={'90%'}
      dropDownItems={this.props.quarters}
      data={this.state.quarterGrades}/>;

    let rightSwitchView = <DataGrid
      title={'Оценки'}
      type={'classes'}
      numberedRows={true}
      width={'90%'}
      dropDownItems={this.props.grades}
      data={this.state.classGrades}/>;

    let switchEl = this.state.currentSwitchView === 'КУрирование 5А' ? leftSwitchView : rightSwitchView;

    return (
      <div>
        <Switch
          leftTitle={'КУрирование 5А'}
          rightTitle={'ПРоф. Предмет'}
          switchView={this.switchView}/>
        {dropDownEl}
        {switchEl}
      </div>
    )
  }
}
