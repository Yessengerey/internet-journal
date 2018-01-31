import React, { Component } from 'react';

import MessagesMenu from '../../components/utility/messagesMenu.jsx';
import LetterModal from '../../components/utility/letterModal.jsx';

import DataGrid from '../../components/utility/datagrid.jsx';
import Dialog from 'material-ui/Dialog';

import IconButton from 'material-ui/IconButton';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import SearchIcon from 'material-ui/svg-icons/action/search';

import style from '../../../../styles/utility/messages.css';

const iconEl = <div><CheckIcon style={{height: '17px', width: 'auto'}}/></div>;

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
          [{component: iconEl, forceComponent: true}, {value: 'Черчение 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'Английский 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'Физика 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'Физкультура 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'Казахский 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'Русский 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'География 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'Технологии 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'Искусство 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'История М. 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'История К. 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'Литература К. 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'Музыка 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'Химия 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'Французский 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'Проф 05/01/2018'}, {value: ''}],
          [{component: iconEl, forceComponent: true}, {value: 'Проф 05/01/2018'}, {value: ''}]
      ],
      open: false
    }

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.addMailboxHeader = this.addMailboxHeader.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      open: true
    })
  }

  handleCloseDialog() {
    this.setState({
      open: false
    })
  }

  addMailboxHeader(headerElement) {
    let updatedData = this.state.data.slice(0);
    updatedData.unshift([{disableEvents: true, component: headerElement, forceComponent: true, colSpan: 3}]);

    this.setState({
      data: updatedData
    })
  }

  componentWillMount() {
    let mailboxHeaderElement =
      <div className={style.header_container}>
        <div className={style.button_container} onClick={this.handleOpenDialog}>
          <div className={style.button}>Написать</div>
        </div>
        <div className={style.side_buttons_container}>
          <div className={style.inbox_pages}>1-25 из 123</div>
          <div className={style.inbox_navigation}><IconButton className={style.arrow}><ArrowLeft color={'white'}/></IconButton> <IconButton className={style.arrow}><ArrowRight color={'white'}/></IconButton></div>
        </div>
      </div>;

      this.addMailboxHeader(mailboxHeaderElement);
  }


  render() {
    return (
        <div className={style.messages_main_container}>
          <div className={style.message_inner_container}>
            <div className={style.messages_title_search_container}>
              <div className={style.messages_title_container}>Личные сообщения</div>
              <div className={style.search_outer_container}>
                <div className={style.search_inner_container}>
                  <div className={style.search_icon}>
                    <SearchIcon />
                  </div>
                  <input className={style.search_input}>

                  </input>
                  <div
                    className={style.submit_button}>
                    Поиск
                  </div>
                </div>
              </div>
            </div>
            <div className={style.messages_body_container}>
              <MessagesMenu unread={1} important={2}/>
              <div className={style.inbox}>
                <DataGrid
                  title={this.state.gridTitle}
                  numberedRows={false}
                  width={'80%'}
                  data={this.state.data}/>
              </div>
            </div>
          </div>
          <LetterModal open={this.state.open} handleCloseDialog={this.handleCloseDialog} />
        </div>
    )
  }
}
