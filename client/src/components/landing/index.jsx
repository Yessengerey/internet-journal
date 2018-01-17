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
            PANEL CONTROLS
          </div>
        </div>

        <div className={style.dynamic_container}>
          DYNAMIC
        </div>
      </div>
    )
  }
}
