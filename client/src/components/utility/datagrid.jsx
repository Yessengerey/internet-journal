import React, { Component } from 'react';
// import 'react-dates/initialize';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import ReactDataSheet from 'react-datasheet';
import style from '../../../../styles/utility/datagrid.css';

import moment from 'moment';

import InteractiveTitle from './interactiveTitle.jsx';

import { DateRange } from 'react-date-range-updated';

export default class DataGrid extends Component {
  constructor(props) {
    super(props);

    // data is for datagrid content
    this.state = {
      data: this.props.data,
      dataIsFixed: false
    }

    // this.makeNumberedGrid = this.makeNumberedGrid.bind(this);
  }

  // makeNumberedGrid(nextProps) {
  //   if (nextProps.numberedRows) {
  //     let newData = this.props.data;
  //     newData[0].unshift({readOnly: true, value: '№', width: 40});
  //
  //     for (var i = 1; i < newData.length; i++) {
  //       newData[i].unshift({readOnly: true, value: i});
  //     }
  //     this.props.data = newData;
  //     // this.setState({
  //     //   data: newData,
  //     //   alreadyNumbered: true
  //     // })
  //   } else if (nextProps.type === 'alarms') {
  //     let newData = this.props.data;
  //     newData[0].unshift({readOnly: true, value: '', width: 40});
  //
  //     newData[1].unshift({readOnly: true, value: 'С:'});
  //     newData[2].unshift({readOnly: true, value: 'ДО:'});
  //
  //     // this.setState({
  //     //   data: newData
  //     // })
  //   }
  // }
  //
  // componentWillMount() {
  //   this.makeNumberedGrid(this.props);
  // }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      this.setState({
        data: nextProps.data
      });
    }
  }

  render() {
    let titleElement = this.props.title ? <InteractiveTitle title={this.props.title} type={this.props.type} dropDownItems={this.props.dropDownItems}/> : <div></div>;

    return (
        <div className={style.table_container}>
          {titleElement}
          <div
            id='DATA' className={style.grid_outer_container} style={{width: this.props.width}}>
            <ReactDataSheet
              className={style.grid_inner_container}
              overflow='clip'
              data={this.state.data}
              valueRenderer={(cell) => cell.value}
              onContextMenu={(e, cell, i, j) => cell.readOnly ? ()=> e.preventDefault() : null}
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
