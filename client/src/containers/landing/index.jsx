// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

// styles
import style from '../../../../styles/landing/landing_index.css';

import StudentPanel from '../../components/landing/landing_panel.jsx';
import TeachersPanel from '../../components/landing/landing_panel.jsx';
import ContactUsPanel from '../../components/landing/landing_panel.jsx';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelIndex: 0,
      transitionEnd: true
    }

    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.panelButtonHandler = this.panelButtonHandler.bind(this);
  }

  handleTransitionEnd() {
    this.setState({
      transitionEnd: true
    })
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

    if (event.target.id === 'studentButton' || event.target.id === 'studentPanelButton') {
      this.setState({
        panelIndex: 0,
        transitionEnd: false
      });
      teaElm.classList.remove(style.active_button);
      conElm.classList.remove(style.active_button);

      stuElm.classList.add(style.active_button);
      inkbarElm.classList.add(style.slideToStudent);
    } else if (event.target.id === 'teacherButton' || event.target.id === 'teacherPanelButton') {
      this.setState({
        panelIndex: 1,
        transitionEnd: false
      });
      stuElm.classList.remove(style.active_button);
      conElm.classList.remove(style.active_button);

      teaElm.classList.add(style.active_button);
      inkbarElm.classList.add(style.slideToTeacher);
    } else if (event.target.id === 'contactUsButton' || event.target.id === 'contactUsPanelButton') {
      this.setState({
        panelIndex: 2,
        transitionEnd: false
      });
      stuElm.classList.remove(style.active_button);
      teaElm.classList.remove(style.active_button);

      conElm.classList.add(style.active_button);
      inkbarElm.classList.add(style.slideToContact);
    }
  }

  render() {

    let panelElement = <div></div>;

    if (this.state.panelIndex === 0 && this.state.transitionEnd) {
      panelElement = <StudentPanel key='studentpanel' panelType={'students'} handleTransitionEnd={this.handleTransitionEnd} handleStageChange={this.props.handleStageChange}/>
    } else if (this.state.panelIndex === 1 && this.state.transitionEnd) {
      panelElement = <TeachersPanel key='teacherpanel' panelType={'teachers'} handleTransitionEnd={this.handleTransitionEnd}/>;
    } else if (this.state.panelIndex === 2 && this.state.transitionEnd) {
      panelElement = <ContactUsPanel key='contactpanel' panelType={'contactus'} handleTransitionEnd={this.handleTransitionEnd}/>;
    }

    return (
      <div className={style.main_card}>

        <div className={style.panels_container}>

          <div className={style.logo_container}>
            <img src='public/images/logo.png'/>
          </div>

          <div className={style.panels_outer_container}>
            <ReactCSSTransitionGroup
              className={style.animation_container}
              transitionName='panel-transition'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {panelElement}
            </ReactCSSTransitionGroup>
          </div>

          <div className={style.panel_view_controls}>

            <div className={style.panel_view_buttons}>

              <div id='studentPanelButton'
                onClick={this.panelButtonHandler}>
                <span id='studentButton'>ученикам и родителям</span>
              </div>

              <div id='teacherPanelButton'
                onClick={this.panelButtonHandler}>
                <span id='teacherButton'>учебным заведениям</span>
              </div>

              <div id='contactUsPanelButton'
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

        </div>
      </div>
    )
  }
}
