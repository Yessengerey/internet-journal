import React, { Component } from 'react';

import MessagesMenu from '../../components/utility/messagesMenu.jsx';

import DataGrid from '../../components/utility/datagrid.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import IconButton from 'material-ui/IconButton';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import style from '../../../../styles/utility/messages.css';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [
          {value: 'Тип', readOnly: true, width: 40},
          {value: 'От кого', readOnly: true, width: 180},
          {value: 'Тема', readOnly: true, width: 500}
        ],
          [{component: <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}><div style={{height: '10px', width: '10px', backgroundColor: 'red'}}></div></div>, forceComponent: true}, {value: 'Математика 05/01/2018'}, {value: ''}],
          [{component: <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}><div style={{height: '10px', width: '10px', backgroundColor: 'purple'}}></div></div>, forceComponent: true}, {value: 'Литература 05/01/2018'}, {value: ''}],
          [{component: <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}><div style={{height: '10px', width: '10px', backgroundColor: 'red'}}></div></div>, forceComponent: true}, {value: 'Биология 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Черчение 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Английский 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Физика 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Физкультура 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Казахский 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Русский 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'География 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Технологии 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Искусство 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'История М. 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'История К. 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Литература К. 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Музыка 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Химия 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Французский 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Проф 05/01/2018'}, {value: ''}],
          [{component: <div><MuiThemeProvider><CheckIcon/></MuiThemeProvider></div>, forceComponent: true}, {value: 'Проф 05/01/2018'}, {value: ''}]
      ]
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className={style.messages_main_container}>
          <div className={style.message_inner_container}>
            <div className={style.messages_title_search_container}>
              <div className={style.messages_title_container}>Личные сообщения</div>
              <div className={style.search}></div>
            </div>
            <div className={style.messages_body_container}>
              <MessagesMenu unread={1} important={2}/>
              <div className={style.inbox}>
                <div className={style.header_container}>
                  <div className={style.button_container}>
                    <div className={style.button}>Написать</div>
                  </div>
                  <div className={style.side_buttons_container}>
                    <div className={style.inbox_pages}>1-25 из 123</div>
                    <div className={style.inbox_navigation}><IconButton className={style.arrow}><ArrowLeft color={'white'}/></IconButton> <IconButton className={style.arrow}><ArrowRight color={'white'}/></IconButton></div>
                  </div>
                </div>
                <DataGrid
                  title={this.state.gridTitle}
                  numberedRows={false}
                  width={'80%'}
                  data={this.state.data}/>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
