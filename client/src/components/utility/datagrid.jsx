import React, { Component } from 'react';
// import 'react-dates/initialize';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import DatePicker from 'material-ui/DatePicker';

import ReactDataSheet from 'react-datasheet';
import style from '../../../../styles/utility/datagrid.css';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import moment from 'moment';

import { DateRange } from 'react-date-range-updated';

export default class DataGrid extends Component {
  constructor(props) {
    super(props);

    // data is for datagrid content
    this.state = {
      data: this.props.data,
      menuItems: undefined,
      grades: undefined,
      shifts: undefined,
      date: undefined,
      focusValue: 0
    }

    this.interactiveElement = this.interactiveElement.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(date) {
    console.log(date);
  }

  handleChange(e, index, value) {
    this.setState({
      focusValue: value
    })
  }

  interactiveElement() {
    let interactiveElement = <div></div>;
    let ending = <span></span>;

    if (this.props.type === 'classes') {
      ending = <span>Класса</span>;
    } else if (this.props.type === 'alarms') {
      ending = <span>Смены</span>;
    } else if (this.props.type === 'marks') {
      ending = <span>Четверть</span>
    }

    if (this.props.type === 'classes' || this.props.type === 'alarms' || this.props.type === 'marks') {
      interactiveElement =
        <div className={style.interactive_element}>
          <DropDownMenu maxHeight={300} value={this.state.focusValue} onChange={this.handleChange}>
            {this.state.menuItems}
          </DropDownMenu>
          {ending}
        </div>
    } else if (this.props.type === 'duties') {
//       interactiveElement = <DateRangePicker
//   startDate={this.state.startDate} // momentPropTypes.momentObj or null,
//   startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
//   endDate={this.state.endDate} // momentPropTypes.momentObj or null,
//   endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
//   onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
//   focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
//   onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
// />;
      interactiveElement = <DatePicker className={style.datepicker} hintText="С 05.01 ПО 10.01"/>
    } else if (this.props.type === 'homework') {
      interactiveElement = <DatePicker className={style.datepicker} hintText="05.01"/>
    }


    return <MuiThemeProvider>{interactiveElement}</MuiThemeProvider>
  }

  componentWillMount() {
    let items = [];
    let existingItems = [];

    if (this.props.grades) {
      existingItems = this.props.grades.slice(0);
    } else if (this.props.shifts) {
      existingItems = this.props.shifts.slice(0);
    } else if (this.props.quarters) {
      existingItems = this.props.quarters.slice(0);
    }

    for (let i = 0; i < existingItems.length; i++) {
      items.push(<MenuItem value={i} key={i} primaryText={existingItems[i]} />)
    }

    this.setState({
      menuItems: items
    })


    if (this.props.numberedRows) {
      let newData = this.state.data;
      newData[0].unshift({readOnly: true, value: '№'});

      for (var i = 1; i < newData.length; i++) {
        newData[i].unshift({readOnly: true, value: i});
      }

      this.setState({
        data: newData
      })
    } else if (this.props.type === 'alarms') {
      let newData = this.state.data;
      newData[0].unshift({readOnly: true, value: ''});

      newData[1].unshift({readOnly: true, value: 'С:'});
      newData[2].unshift({readOnly: true, value: 'ДО:'});

      this.setState({
        data: newData
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      this.setState(nextProps)
    }
  }

  render() {
    return (
        <div className={style.table_container}>
          <div className={style.table_title_container}>
            <span>{this.props.title}</span> {this.interactiveElement()}
          </div>

          <div
            id='DATA' className={style.grid_outer_container} style={{width: this.props.width}}>
            <ReactDataSheet
              className={style.grid_inner_container}
              overflow='clip'
              data={this.state.data}
              valueRenderer={(cell) => cell.value}
              onContextMenu={(e, cell, i, j) => cell.readOnly ? ()=>{console.log('HELLO');e.preventDefault();} : null}
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
