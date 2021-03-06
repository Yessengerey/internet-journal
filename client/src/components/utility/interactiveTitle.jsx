import React, { Component } from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

import style from '../../../../styles/utility/interactiveTitle.css';

import areIntlLocalesSupported from 'intl-locales-supported';


let DateTimeFormat;

DateTimeFormat = global.Intl.DateTimeFormat;

export default class InteractiveTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusValue: 0
    }

    this.interactiveElement = this.interactiveElement.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  interactiveElement() {
    let interactiveElement = <div></div>;
    let ending = <span></span>;

    if (this.props.type === 'classes') {
      ending = <span>Класса</span>;
    } else if (this.props.type === 'alarms') {
      ending = <span>Смены</span>;
    } else if (this.props.type === 'marks' || this.props.type === 'syllabus' || this.props.type === 'news') {
      ending = <span>Четверть</span>
    }

    if ((this.props.type === 'classes' || this.props.type === 'alarms' || this.props.type === 'marks' || this.props.type === 'syllabus' || this.props.type === 'news') && this.props.dropDownItems) {
      interactiveElement =
        <div className={style.interactive_element}>
          <DropDownMenu maxHeight={300} value={this.state.focusValue} onChange={this.handleChange}>
            {this.props.dropDownItems.map((item, id) => (<MenuItem value={id} key={id} primaryText={item} />))}
          </DropDownMenu>
          {ending}
        </div>
    } else if (this.props.type === 'duties') {
      interactiveElement = <DatePicker DateTimeFormat={DateTimeFormat} locale="ru" className={style.datepicker} hintText="С 05.01 ПО 10.01" style={{backgroundColor: 'red !important'}} dialogContainerStyle={{backgroundColor: 'red !important', color: 'red'}}/>
    } else if (this.props.type === 'homework') {
      interactiveElement = <DatePicker DateTimeFormat={DateTimeFormat} locale="ru" className={style.datepicker} hintText="05.01"/>
    }


    return interactiveElement
  }

  handleChange(e, index, value) {
    this.setState({
      focusValue: value
    })
  }

  render() {
    return (
      <div className={style.table_title_container}>
        <span>{this.props.title}</span> {this.interactiveElement()}
      </div>
    )
  }
}
