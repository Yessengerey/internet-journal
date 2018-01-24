import React, { Component } from 'react';

import DataGrid from '../../components/utility/datagrid.jsx';

export default class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [
          {value: 'Предмет', readOnly: true, width: 150},
          {value: 'Учитель/Кабинет', readOnly: true, width: 180},
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
          [{value: 'Математика'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: '5'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Литература'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Биология'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Черчение'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Английский'}, {value: ''}, {value: '3'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Физика'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Физкультура'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Казахский'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Русский'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'География'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Технологии'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Искусство'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'История М.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'История К.'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: '5'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Литература К.'}, {value: ''}, {value: ''}, {value: ''}, {value: '4'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Музыка'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Химия'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Французский'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Проф'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{value: 'Проф'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}]
      ],
      gridTitle: 'Оценки за'
    }
  }

  render() {
    return (
      <div>
        <DataGrid
          title={this.state.gridTitle}
          type={'marks'}
          numberedRows={true}
          width={'90%'}
          dropDownItems={this.props.quarters}
          data={this.state.data}/>
      </div>
    )
  }
}
