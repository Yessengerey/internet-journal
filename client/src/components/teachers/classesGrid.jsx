import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import CheckBoxIcon from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxOutlineIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';

import style from '../../../../styles/teachers/classesGrid.css';

export default class ClassesGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: []
    }

    this.renderClasses = this.renderClasses.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(e) {
  }

  renderClasses() {
    var classesToRender = [];

    for (var i = 0; i < this.state.classes.length; i+=3) {
      var classItem =
        <div key={i}><div className={style.class_table_row}>
          <Checkbox
            style={{width: '33.33%'}}
            label={this.state.classes[i]}
            value={this.state.classes[i]}
            onCheck={this.handleSelection}
            iconStyle={{fill: '#67428F'}}
            labelStyle={{fontSize: '1.1vw'}}
          />
          <Checkbox
            style={{width: '33.33%'}}
            label={this.state.classes[i+1]}
            value={this.state.classes[i+1]}
            onCheck={this.handleSelection}
            iconStyle={{fill: '#67428F'}}
            labelStyle={{fontSize: '1.1vw'}}
          />
          <Checkbox
            style={{width: '33.33%'}}
            label={this.state.classes[i+2]}
            value={this.state.classes[i+2]}
            onCheck={this.handleSelection}
            iconStyle={{fill: '#67428F'}}
            labelStyle={{fontSize: '1.1vw'}}
          />
        </div></div>;

      classesToRender.push(classItem);
    }

    return classesToRender;
  }

  componentWillMount() {
    this.setState({
      classes: this.props.classes
    })
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.state.classes) !== JSON.stringify(nextProps.classes)) {
      this.setState({
        classes: nextProps.classes
      })
    }
  }

  render() {
    return (
      <div className={style.classes_main_container}>
        {this.renderClasses().map((item) => item)}
      </div>
    )
  }
}
