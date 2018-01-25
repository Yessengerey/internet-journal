import React, { Component } from 'react';

import DataGrid from '../../components/utility/datagrid.jsx';

import style from '../../../../styles/teachers/syllabus.css';

export default class Syllabus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [
          {readOnly: true, value: '№', width: 40},
          {value: 'Предмет', readOnly: true, width: 150},
          {value: 'Учитель/Кабинет', readOnly: true, width: 180},
          {value: 'Файлы', readOnly: true, width: 350}
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
      gridTitle: 'Программа на'
    }
  }

  render() {
    return (
      <div>
        <div className={style.add_file_button_container}>
          <div className={style.add_file_button}>
            + Добавить файл
          </div>
        </div>
        <DataGrid
          title={this.state.gridTitle}
          type={'syllabus'}
          numberedRows={true}
          width={'70%'}
          dropDownItems={this.props.quarters}
          data={this.state.data}/>
      </div>
    )
  }
}
