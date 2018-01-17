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

    this.teacherPanelButtonClickHandler = this.teacherPanelButtonClickHandler.bind(this);
    this.studentPanelButtonClickHandler = this.studentPanelButtonClickHandler.bind(this);
    this.contactUsPanelButtonClickHandler = this.contactUsPanelButtonClickHandler.bind(this);

  }

  teacherPanelButtonClickHandler() {
    // if ( document.getElementById(style.inkbar_container).classList.contains(style.slideToTeacher) ) {
      document.getElementById(style.inkbar_container).classList.remove(style.slideToTeacher);
      document.getElementById(style.inkbar_container).classList.remove(style.slideToStudent);
      document.getElementById(style.inkbar_container).classList.remove(style.slideToContact);
      document.getElementById(style.inkbar_container).classList.add(style.slideToTeacher);
    // } else {
    //   document.getElementById(style.inkbar_container).classList.add(style.slideToTeacher);
    // }
  }

  studentPanelButtonClickHandler() {
    // if ( document.getElementById(style.inkbar_container).classList.contains(style.slideToStudent) ) {
      document.getElementById(style.inkbar_container).classList.remove(style.slideToTeacher);
      document.getElementById(style.inkbar_container).classList.remove(style.slideToStudent);
      document.getElementById(style.inkbar_container).classList.remove(style.slideToContact);
      document.getElementById(style.inkbar_container).classList.add(style.slideToStudent);
    // } else {
    //   document.getElementById(style.inkbar_container).classList.add(style.slideToStudent);
    // }
  }

  contactUsPanelButtonClickHandler() {
    // if ( document.getElementById(style.inkbar_container).classList.contains(style.slideToContact) ) {
      document.getElementById(style.inkbar_container).classList.remove(style.slideToTeacher);
      document.getElementById(style.inkbar_container).classList.remove(style.slideToStudent);
      document.getElementById(style.inkbar_container).classList.remove(style.slideToContact);
      document.getElementById(style.inkbar_container).classList.add(style.slideToContact);
    // } else {
    //   document.getElementById(style.inkbar_container).classList.add(style.slideToContact);
    // }
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
              <div id={style.student_panel_button}
                onClick={this.studentPanelButtonClickHandler}>
                <span>ученикам и родителям</span>
              </div>
              <div id={style.teacher_panel_button}
                onClick={this.teacherPanelButtonClickHandler}>
                <span>учебным заведениям</span>
              </div>
              <div id={style.contact_us_panel_button}
                onClick={this.contactUsPanelButtonClickHandler}>
                <span>поддержка и обратная связь</span>
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
