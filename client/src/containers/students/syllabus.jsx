import React, { Component } from 'react';

import DataGrid from '../../components/utility/datagrid.jsx';

export default class Syllabus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [
          {value: 'Предмет', readOnly: true},
          {value: 'Учитель/Кабинет', readOnly: true},
          {value: 'Файлы', readOnly: true}
        ],
          [{value: 'Математика'}, {value: ''}, {value: ''}],
          [{value: 'Литература'}, {value: ''}, {value: ''}],
          [{value: 'Биология'}, {value: ''}, {value: ''}],
          [{value: 'Черчение'}, {value: ''}, {value: ''}],
          [{value: 'Английский'}, {value: ''}, {value: ''}],
          [{value: 'Физика'}, {value: ''}, {value: ''}],
          [{value: 'Физкультура'}, {value: ''}, {value: ''}],
          [{value: 'Казахский'}, {value: ''}, {value: ''}],
          [{value: 'Русский'}, {value: ''}, {value: ''}],
          [{value: 'География'}, {value: ''}, {value: ''}],
          [{value: 'Технологии'}, {value: ''}, {value: ''}],
          [{value: 'Искусство'}, {value: ''}, {value: ''}],
          [{value: 'История М.'}, {value: ''}, {value: ''}],
          [{value: 'История К.'}, {value: ''}, {value: ''}],
          [{value: 'Литература К.'}, {value: ''}, {value: ''}],
          [{value: 'Музыка'}, {value: ''}, {value: ''}],
          [{value: 'Химия'}, {value: ''}, {value: ''}],
          [{value: 'Французский'}, {value: ''}, {value: ''}],
          [{value: 'Проф'}, {value: ''}, {value: ''}],
          [{value: 'Проф'}, {value: ''}, {value: ''}]
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
