import React, { Component } from 'react';

import ReactDataSheet from 'react-datasheet';
import style from '../../../../styles/utility/datagrid.css';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


export default class DataGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }

    this.interactiveEnding = this.interactiveEnding.bind(this);
  }

  interactiveEnding() {
  }

  componentWillMount() {
    if (this.props.numberedRows) {
      let newData = this.state.data;
      newData[0].unshift({readOnly: true, value: '№'});

      for (var i = 1; i < newData.length; i++) {
        newData[i].unshift({readOnly: true, value: i});
      }

      this.setState({
        data: newData
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('new state', nextProps);
    if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      this.setState(nextProps)
    }
  }

  render() {
    return (
        <div className={style.table_container}>
          <div className={style.table_title_container}>
            {this.props.title} <a></a>
          </div>

          <div className={style.grid_outer_container}>
            <ReactDataSheet
              className={style.grid_inner_container}
              overflow='clip'
              data={this.state.data}
              valueRenderer={(cell) => cell.value}
              onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null}
              onChange={(modifiedCell, rowI, colJ, value) =>
                this.setState({
                  data: this.state.data.map((row) =>
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
