// React
import React, { Component } from 'react';

// Material UI Components
import Dialog from 'material-ui/Dialog';

// Style
import style from '../../../../styles/utility/letterPopup.css';

export default class LetterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: undefined,
      letterBody: undefined
    }

    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    })
  }

  handleTextChange(e) {
    this.setState({
      letterBody: e.target.value
    })
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <Dialog
        paperClassName={style.popup_paper_container}
        contentStyle={{width: "50%", maxWidth: "none"}}
        open={this.props.open}
        modal={true}
      >
        <div className={style.popup_inner_container}>
          <div className={style.to_title}>
            Кому
          </div>
          <div className={style.to_input_container}>
            <input className={style.to_input}
              onChange={this.handleAddressChange}>

            </input>
          </div>
          <div className={style.text_title}>
            Текст
          </div>
          <textarea
            className={style.text_area}
            maxLength={1000}
            rows={6}
            cols={40}
            onChange={this.handleTextChange}>
          </textarea>
          <div className={style.actions_container}>
            <div className={style.actions_button}>
              Отправить
            </div>
            <div
              className={style.actions_button}
              onClick={this.props.handleCloseDialog}>
              Закрыть
            </div>

          </div>
        </div>
    </Dialog>
    )
  }
}
