import React, { Component } from 'react';

import style from '../../../../styles/utility/switch.css';

export default class Switch extends Component {
  constructor(props) {
    super(props);

    this.handleSwitch = this.handleSwitch.bind(this);
  }

  componentDidMount() {
    document.getElementById(this.props.leftTitle).classList.add(style.active_switch);
  }

  handleSwitch(e) {
    if (e.target.id === this.props.leftTitle) {
      document.getElementById(this.props.leftTitle).classList.add(style.active_switch);
      document.getElementById(this.props.rightTitle).classList.remove(style.active_switch);
    } else {
      document.getElementById(this.props.leftTitle).classList.remove(style.active_switch);
      document.getElementById(this.props.rightTitle).classList.add(style.active_switch);
    }
    this.props.switchView(e.target.id);
  }

  render() {
    return (
      <div className={style.switch_outer_container}>
        <div className={style.switch_inner_container}>
          <div id={this.props.leftTitle} className={style.left_button} onClick={this.handleSwitch}>
            {this.props.leftTitle}
          </div>
          <div id={this.props.rightTitle} className={style.right_button} onClick={this.handleSwitch}>
            {this.props.rightTitle}
          </div>
        </div>
      </div>
    )
  }
}
