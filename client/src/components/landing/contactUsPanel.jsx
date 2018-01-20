// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import style from '../../../../styles/landing/contactUsPanel.css';

export default class ContactUsPanel extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount () {
		this.props.handleTransitionEnd();
	}

  render() {
    return (
      <div id={style.panel_outer_container}>
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
    )
  }
}
