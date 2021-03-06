// React
import React, { Component } from 'react';

// Material UI Components
import IconButton from 'material-ui/IconButton';

// Icons
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';

// styles
import style from '../../../../styles/utility/topControlPanel.css';

var buttonIds = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5'
];

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeButton: undefined
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.toggleActiveButton = this.toggleActiveButton.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  componentDidMount() {
    document.getElementById(this.props.viewIndex + '').classList.add(style.panel_button_on_active);
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.viewIndex + '') !== this.props.viewIndex) {
      this.setState({
        activeButton: nextProps.viewIndex + ''
      }, () => {
        this.toggleActiveButton(this.state.activeButton, buttonIds);
      })
    }
  }

  toggleActiveButton(id, buttonIds) {
    for (var i = 0; i < buttonIds.length; i++) {
      if (id === buttonIds[i] && !document.getElementById(buttonIds[i]).classList.contains(style.panel_button_on_active)) {
        document.getElementById(buttonIds[i]).classList.add(style.panel_button_on_active);
      } else if (id === buttonIds[i] && document.getElementById(buttonIds[i]).classList.contains(style.panel_button_on_active)) {
        // do nothing...
      } else {
        document.getElementById(buttonIds[i]).classList.remove(style.panel_button_on_active);
      }
    }
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.setState({
      activeButton: e.target.id
    }, () => {
      this.toggleActiveButton(this.state.activeButton, buttonIds);
    })

    this.props.handleViewChange(e.target.id);
  }

  handleExit() {
    this.props.handleStageChange('landing');
  }

  render() {
    return (
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
            className={style.exit_button}
            hoveredStyle={{  boxShadow: '0 0 10px #c5c5c5'}}
            tooltip='Выйти'
            tooltipPosition='bottom-right'
            onClick={this.handleExit}>
            <ExitIcon/>
          </IconButton>
        </div>
    )
  }
}
