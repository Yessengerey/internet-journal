// React
import React, { Component } from 'react';

// Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';

// Icons
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';

// styles
import style from '../../../../styles/utility/topControlPanel.css';

var buttonIds = [
  'scheduleButton',
  'journalButton',
  'homeworkButton',
  'syllabusButton',
  'newsButton',
  'messagesButton'
];

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeButtonChanged: true,
      activeButton: undefined
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.toggleActiveButton = this.toggleActiveButton.bind(this);
  }

  toggleActiveButton(id, buttonIds) {
    for (var i = 0; i < buttonIds.length; i++) {
      if (id === buttonIds[i]) {
        document.getElementById(buttonIds[i]).classList.add(style.panel_button_on_active);
      } else {
        document.getElementById(buttonIds[i]).classList.remove(style.panel_button_on_active);
      }
    }
  }

  handleButtonClick(e) {
    e.preventDefault();
    console.log(e.target.id);
    this.setState({
      activeButton: e.target.id
    }, () => {
      this.toggleActiveButton(this.state.activeButton, buttonIds);
    })

    if (e.target.id === 'scheduleButton') {

    } else if (e.target.id === 'journalButton') {

    } else if (e.target.id === 'homeworkButton') {

    } else if (e.target.id === 'syllabusButton') {

    } else if (e.target.id === 'newsButton') {

    } else if (e.target.id === 'messagesButton') {

    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className={style.panel_main_container}>
          <div className={style.logo_container}>
            <img src='public/images/logo.png'/>
          </div>

          <div className={style.panel_buttons}>
            <span
              id={buttonIds[0]}
              onClick={this.handleButtonClick}>
              Расписание
            </span>
          </div>

          <div className={style.panel_buttons}>
            <span id={buttonIds[1]}
              onClick={this.handleButtonClick}>
              Журнал
            </span>
          </div>

          <div className={style.panel_buttons}>
            <span id={buttonIds[2]}
              onClick={this.handleButtonClick}>
              Задания на дом
            </span>
          </div>

          <div className={style.panel_buttons}>
            <span id={buttonIds[3]}
              onClick={this.handleButtonClick}>
              Силлабус
            </span>
          </div>

          <div className={style.panel_buttons}>
            <span id={buttonIds[4]}
              onClick={this.handleButtonClick}>
              Новости
            </span>
          </div>

          <div className={style.panel_buttons}>
            <span id={buttonIds[5]}
              onClick={this.handleButtonClick}>
              Сообщения
            </span>
          </div>

          <IconButton
            tooltip='Выйти'
            tooltipPosition='bottom-right'>
            <ExitIcon/>
          </IconButton>
        </div>
      </MuiThemeProvider>
    )
  }
}
