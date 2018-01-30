// React
import React, { Component } from 'react';

// Material UI Components

// styles
import style from '../../../../styles/utility/footer.css';

var buttonIds = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5'
];

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeButtonChanged: true,
      activeButton: undefined
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.toggleActiveButton = this.toggleActiveButton.bind(this);
  }

  componentDidMount() {
    document.getElementById(buttonIds[0]).classList.add(style.panel_button_on_active);
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

  render() {
    return (
      <div className={style.panel_main_container}>
        <div className={style.logo_container}>
          <img src='public/images/logo_white.png'/>
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
          <span>
            Разработчикам
          </span>
        </div>
      </div>
    )
  }
}
