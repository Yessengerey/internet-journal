// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

// styles
import style from '../../../../styles/landing_index.css';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panel: 0
    }

    this.panelButtonHandler = this.panelButtonHandler.bind(this);
  }

  componentDidMount() {
    document.getElementById('studentButton').classList.add(style.active_button);
  }

  panelButtonHandler(event) {
    const inkbarElm = document.getElementById(style.inkbar_container);

    const stuElm = document.getElementById('studentButton');
    const teaElm = document.getElementById('teacherButton');
    const conElm = document.getElementById('contactUsButton');

    inkbarElm.classList.remove(style.slideToTeacher);
    inkbarElm.classList.remove(style.slideToStudent);
    inkbarElm.classList.remove(style.slideToContact);

    if (event.target.id === 'studentButton') {
      this.setState({
        panel: 0
      });
      teaElm.classList.remove(style.active_button);
      conElm.classList.remove(style.active_button);

      stuElm.classList.add(style.active_button);
      inkbarElm.classList.add(style.slideToStudent);
    } else if (event.target.id === 'teacherButton') {
      this.setState({
        panel: 1
      });
      stuElm.classList.remove(style.active_button);
      conElm.classList.remove(style.active_button);

      teaElm.classList.add(style.active_button);
      inkbarElm.classList.add(style.slideToTeacher);
    } else if (event.target.id === 'contactUsButton') {
      this.setState({
        panel: 2
      });
      stuElm.classList.remove(style.active_button);
      teaElm.classList.remove(style.active_button);

      conElm.classList.add(style.active_button);
      inkbarElm.classList.add(style.slideToContact);
    }
  }

  render() {

    return (
      <div className={style.main_card}>

        <div className={style.panels_container}>

          <div className={style.logo_container}>
            LOGO
          </div>

          <div className={style.panels_outer_container}>
            <div className={style.user_panel}>
              PANEL
            </div>
          </div>

          <div className={style.panel_view_controls}>

            <div className={style.panel_view_buttons}>

              <div
                onClick={this.panelButtonHandler}>
                <span id='studentButton'>ученикам и родителям</span>
              </div>

              <div
                onClick={this.panelButtonHandler}>
                <span id='teacherButton'>учебным заведениям</span>
              </div>

              <div
                onClick={this.panelButtonHandler}>
                <span id='contactUsButton'>поддержка и обратная связь</span>
              </div>

            </div>

            <div id={style.inkbar_container}>
              <hr className={style.inkbar}/>
            </div>
          </div>

        </div>

        <div className={style.dynamic_container}>
          DYNAMIC
        </div>
      </div>
    )
  }
}
