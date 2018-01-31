// React
import React, { Component } from 'react';

// Material UI Components
import Dialog from 'material-ui/Dialog';

// Style
import style from '../../../../styles/utility/letterPopup.css';

export default class LetterPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: undefined,
      letterBody: undefined
    }
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <Dialog
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleCloseDialog}
      >
        <div className={style.popup_inner_container}>
          <div className={style.to_title}>
            Кому
          </div>
          <input className={style.to_input}>

          </input>
          <div className={style.text_title}>
            Текст
          </div>
          <textarea
            className={style.text_area}
            maxLength={500}
            rows={6}
            cols={40}>
          </textarea>
          <div className={style.send_button}>
            Отправить
          </div>
        </div>
    </Dialog>
    )
  }
}
