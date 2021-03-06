import React, { Component } from 'react';

import DataGrid from '../../components/utility/datagrid.jsx';

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
          [{value: 1, readOnly: true}, {value: 'Математика'}, {value: ''}, {value: ''}],
          [{value: 2, readOnly: true}, {value: 'Литература'}, {value: ''}, {value: ''}],
          [{value: 3, readOnly: true}, {value: 'Биология'}, {value: ''}, {value: ''}],
          [{value: 4, readOnly: true}, {value: 'Черчение'}, {value: ''}, {value: ''}],
          [{value: 5, readOnly: true}, {value: 'Английский'}, {value: ''}, {value: ''}],
          [{value: 6, readOnly: true}, {value: 'Физика'}, {value: ''}, {value: ''}],
          [{value: 7, readOnly: true}, {value: 'Физкультура'}, {value: ''}, {value: ''}],
          [{value: 8, readOnly: true}, {value: 'Казахский'}, {value: ''}, {value: ''}],
          [{value: 9, readOnly: true}, {value: 'Русский'}, {value: ''}, {value: ''}],
          [{value: 10, readOnly: true}, {value: 'География'}, {value: ''}, {value: ''}],
          [{value: 11, readOnly: true}, {value: 'Технологии'}, {value: ''}, {value: ''}],
          [{value: 12, readOnly: true}, {value: 'Искусство'}, {value: ''}, {value: ''}],
          [{value: 13, readOnly: true}, {value: 'История М.'}, {value: ''}, {value: ''}],
          [{value: 14, readOnly: true}, {value: 'История К.'}, {value: ''}, {value: ''}],
          [{value: 15, readOnly: true}, {value: 'Литература К.'}, {value: ''}, {value: ''}],
          [{value: 16, readOnly: true}, {value: 'Музыка'}, {value: ''}, {value: ''}],
          [{value: 17, readOnly: true}, {value: 'Химия'}, {value: ''}, {value: ''}],
          [{value: 18, readOnly: true}, {value: 'Французский'}, {value: ''}, {value: ''}],
          [{value: 19, readOnly: true}, {value: 'Проф'}, {value: ''}, {value: ''}],
          [{value: 20, readOnly: true}, {value: 'Проф'}, {value: ''}, {value: ''}]
      ],
      gridTitle: 'Программа на'
    }
  }

  render() {
    return (
      <div>
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
