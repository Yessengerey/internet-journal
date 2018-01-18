// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import style from '../../../../styles/studentsParentPanel.css';

export default class StudentPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.panel_outer_container}>

        <div className={style.panel_header}>
          <div className={style.panel_header_message}>
            Войдите
          </div>
        </div>

        <form className={style.form_container}>
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
