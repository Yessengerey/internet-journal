import React, { Component } from 'react';

import ReactDataSheet from 'react-datasheet';
import style from '../../../styles/datagrid.css';
export default class DataGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [
        [
          {value: 'A', readOnly: true},
          {value: 'B', readOnly: true},
          {value: 'C', readOnly: true},
          {value: 'D', readOnly: true}
        ],
        [{value: 1}, {value: 3}, {value: 3}, {value: 3}],
        [{value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 1}, {value: 3}, {value: 3}, {value: 3}],
        [{value: 2}, {value: 4}, {value: 4}, {value: 4}]
      ]
    }
  }
  render() {
    return (
        <div>
          <div>
            {this.props.datagridTitle}
          </div>

          <div className={style.grid_outer_container}>
            <ReactDataSheet
              className={style.grid_inner_container}
              data={this.state.grid}
              valueRenderer={(cell) => cell.value}
              onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null}
              onChange={(modifiedCell, rowI, colJ, value) =>
                this.setState({
                  grid: this.state.grid.map((row) =>
                  row.map((cell) =>
                  (cell === modifiedCell) ? ({value: value}) : cell
                )
              )
            })}
          />
        </div>
      </div>
    )
  }
}
