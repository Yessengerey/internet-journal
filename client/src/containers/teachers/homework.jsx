import React, { Component } from 'react';
import ClassesGrid from '../../components/teachers/classesGrid.jsx';
import DataGrid from '../../components/utility/datagrid.jsx';
import Switch from '../../components/utility/switch.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CheckBoxIcon from 'material-ui/svg-icons/toggle/check-box';
import Checkbox from 'material-ui/Checkbox';

import InteractiveTitle from '../../components/utility/interactiveTitle.jsx';

import style from '../../../../styles/teachers/homework.css';

export default class Homework extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [
          {readOnly: true, value: '№', width: 40},
          {value: 'Предмет', readOnly: true, width: 150},
          {value: 'Учитель', readOnly: true, width: 180},
          {value: 'Задание', readOnly: true, width: 350}
        ],
          [{value: 1}, {value: 'Математика'}, {value: ''}, {value: ''}],
          [{value: 2}, {value: 'Литература'}, {value: ''}, {value: ''}],
          [{value: 3}, {value: 'Биология'}, {value: ''}, {value: ''}],
          [{value: 4}, {value: 'Черчение'}, {value: ''}, {value: ''}],
          [{value: 5}, {value: 'Английский'}, {value: ''}, {value: ''}],
          [{value: 6}, {value: 'Физика'}, {value: ''}, {value: ''}],
          [{value: 7}, {value: 'Физкультура'}, {value: ''}, {value: ''}],
          [{value: 8}, {value: 'Казахский'}, {value: ''}, {value: ''}],
          [{value: 9}, {value: 'Русский'}, {value: ''}, {value: ''}],
          [{value: 10}, {value: 'География'}, {value: ''}, {value: ''}],
          [{value: 11}, {value: 'Технологии'}, {value: ''}, {value: ''}],
          [{value: 12}, {value: 'Искусство'}, {value: ''}, {value: ''}],
          [{value: 13}, {value: 'История М.'}, {value: ''}, {value: ''}],
          [{value: 14}, {value: 'История К.'}, {value: ''}, {value: ''}],
          [{value: 15}, {value: 'Литература К.'}, {value: ''}, {value: ''}],
          [{value: 16}, {value: 'Музыка'}, {value: ''}, {value: ''}],
          [{value: 17}, {value: 'Химия'}, {value: ''}, {value: ''}],
          [{value: 18}, {value: 'Французский'}, {value: ''}, {value: ''}],
          [{value: 19}, {value: 'Проф'}, {value: ''}, {value: ''}],
          [{value: 20}, {value: 'Проф'}, {value: ''}, {value: ''}]
      ],
      gridTitle: 'Домашнее задание на',
      currentSwitchView: 'КУРирование 5А',
      classes: [
        '1A', '1B', '1C',
        '2A', '2B', '2C',
        '3A', '3B', '3C',
        '4A', '4B', '4C',
        '5A', '5B', '5C',
        '6A', '6B', '6C',
        '7A', '7B', '7C',
        '8A', '8B', '8C',
        '9A', '9B', '9C',
        '10A', '10B', '10C',
        '11A', '11B', '11C'],
    }

    this.switchView = this.switchView.bind(this);
  }

  switchView(nextView) {
    this.setState({
      currentSwitchView: nextView
    })
  }

  render() {

    let viewEl = <div></div>

    if (this.state.currentSwitchView === 'КУРирование 5А') {
      viewEl = <DataGrid
        title={this.state.gridTitle}
        type={'homework'}
        numberedRows={true}
        width={'70%'}
        dropDownItems={this.props.quarters}
        data={this.state.data}/>
    } else if (this.state.currentSwitchView === 'ПРОф. Предмет') {
      viewEl =
      <div className={style.classes_table_main_container}>
        <InteractiveTitle title={this.state.gridTitle} type={'homework'}/>
        <div className={style.classes_table_outer_container}>

          <div className={style.classes_table_inner_upper_container}>

            <div className={style.left_side}>
              <div className={style.left_title}>
                Выберите класс/Несколько классов
              </div>
              <div className={style.left_grid}>
                <ClassesGrid classes={this.state.classes} />
              </div>
            </div>

            <div className={style.right_side}>
              <div className={style.right_title}>
                Текст
              </div>
              <textarea
                className={style.homework_text_area}
                placeholder='Ваш текст..'
                maxLength={1000}
                >
              </textarea>
            </div>

          </div>

          <div className={style.classes_table_inner_lower_container}>

            <div className={style.choose}>
              Выберите дату
              <div className={style.dd_mm}>
                ДД/ММ
              </div>
              <Checkbox
                style={{width: '185px'}}
                label={'Сегодняшнее число'}
                value={'Сегодняшнее число'}
                iconStyle={{fill: '#67428F'}}
                labelStyle={{fontSize: '10px'}}
              />

            </div>
            <div className={style.button_send}>
              <span>
                Отправить

              </span>
            </div>
          </div>

        </div>

      </div>
    }


    return (
        <div>
          <Switch
            leftTitle={'КУРирование 5А'}
            rightTitle={'ПРОф. Предмет'}
            switchView={this.switchView}/>
          {viewEl}
        </div>
    )
  }
}
