import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import CheckBoxIcon from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxOutlineIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';

import Visibility from 'material-ui/svg-icons/action/visibility';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';


import style from '../../../../styles/teachers/studentsGrid.css';

export default class StudentsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }

    this.renderStudents = this.renderStudents.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  handleRadio(e) {
  }

  renderStudents() {
    var studentsToRender = [];

    for (var i = 0; i < this.state.students.length; i+=2) {
      var classItem =
        <MuiThemeProvider key={i}><div className={style.class_table_row}>
          <Checkbox
            style={{width: '50%'}}
            label={this.state.students[i]}
            value={this.state.students[i]}
            onCheck={this.handleRadio}
            iconStyle={{fill: '#67428F'}}
            labelStyle={{fontSize: '1.1vw'}}
          />
          <Checkbox
            style={{width: '50%'}}
            label={this.state.students[i+1]}
            value={this.state.students[i+1]}
            onCheck={this.handleRadio}
            iconStyle={{fill: '#67428F'}}
            labelStyle={{fontSize: '1.1vw'}}
          />
        </div></MuiThemeProvider>;

      studentsToRender.push(classItem);
    }

    return studentsToRender;
  }

  componentWillMount() {
    this.setState({
      students: this.props.students
    })
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.state.students) !== JSON.stringify(nextProps.students)) {
      this.setState({
        students: nextProps.students
      })
    }
  }

  render() {
    return (
      <div className={style.students_main_container}>
        {this.renderStudents().map((item) => item)}
      </div>
    )
  }
}
