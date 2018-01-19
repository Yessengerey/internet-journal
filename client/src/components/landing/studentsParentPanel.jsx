// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import style from '../../../../styles/studentsParentPanel.css';

export default class StudentPanel extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount () {
		this.props.handleTransitionEnd();
	}

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleStageChange('students');
  }

  render() {
    return (
      <div id={style.panel_outer_container}>

        <div className={style.panel_header}>
          <div className={style.panel_header_message}>
            Войдите
          </div>
        </div>

        <form className={style.form_container}
          onSubmit={this.handleSubmit}>
          <input
            className={style.input_field}
            type='text'
            placeholder='логин'>

          </input>
          <input
            className={style.input_field}
            type='password'
            placeholder='пароль'>

          </input>
          <input
            className={style.submit_button}
            type='submit'
            value='войти'>

          </input>
        </form>

      </div>
    )
  }
}
