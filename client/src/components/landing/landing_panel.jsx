// React
import React, { Component } from 'react';

import style from '../../../../styles/landing/landing_panel.css';

export default class LandingPanel extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount () {
		this.props.handleTransitionEnd();
	}

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleStageChange(this.props.panelType);
  }

  render() {

    let panelElement = <div></div>;

    if (this.props.panelType === 'students' || this.props.panelType === 'teachers') {
      panelElement = <div id={style.panel_outer_container}>

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
    } else if (this.props.panelType === 'contactus') {
      panelElement = <div id={style.panel_outer_container}>
        <form className={style.form_container}>
          <input
            className={style.input_field}
            type='text'
            placeholder='Тема письма'>

          </input>
          <textarea
            placeholder='Ваш текст..'
            maxLength={500}
            rows={6}
            cols={40}>
          </textarea>
          <input
            className={style.submit_button}
            type='submit'
            value='Отправить'>

          </input>
        </form>

      </div>
    }

    return (panelElement)
  }
}