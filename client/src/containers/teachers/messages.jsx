import React, { Component } from 'react';

import MessagesMenu from '../../components/utility/messagesMenu.jsx';
import ClassesGrid from '../../components/teachers/classesGrid.jsx';
import Checkbox from 'material-ui/Checkbox';

import DataGrid from '../../components/utility/datagrid.jsx';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Switch from '../../components/utility/switch.jsx';

import IconButton from 'material-ui/IconButton';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import SearchIcon from 'material-ui/svg-icons/action/search';

import style from '../../../../styles/utility/messages.css';

const iconEl = <div><MuiThemeProvider><CheckIcon style={{height: '17px', width: 'auto'}}/></MuiThemeProvider></div>;

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
      open: false,
      currentMailView: '5',
      currentSwitchView: 'По классам',
      classes: [
        '1A', '1B', '1C',
        '2A', '2B', '2C',
        '3A', '3B', '3C',
        '4A', '4B', '4C',
        '5A', '5B', '5C',
        '6A', '6B', '6C',
        '7A', '7B', '7C',
        '8A', '8B', '8C',
        '9A', '9B', '9C',
        '10A', '10B', '10C',
        '11A', '11B', '11C'],
    }

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.changeMailView = this.changeMailView.bind(this);
    this.switchView = this.switchView.bind(this);
  }

  switchView(nextView) {
    this.setState({
      currentSwitchView: nextView
    })
  }

  changeMailView(nextView) {
    this.setState({
      currentMailView: nextView
    })
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


  render() {

    let mailView = <div></div>;

    if (this.state.currentMailView === '0') {
      mailView =  <div className={style.inbox}>
          <div className={style.header_container}>
            <div className={style.button_container} onClick={this.handleOpenDialog}>
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
            width={'100%'}
            data={this.state.data}/>
        </div>;
    } else if (this.state.currentMailView === '5') {
      mailView =  <div style={{width: '80%'}}>
      <div className={style.classes_table_outer_container}>
          {/* <div className={style.class_student_switch}> */}
            <Switch
            leftTitle={'По классам'}
            rightTitle={'По ученикам'}
            switchView={this.switchView}
            width='60%'/>
          {/* </div> */}

          <div className={style.classes_table_inner_upper_container}>

            <div className={style.left_side}>
              <div className={style.left_title}>
                Выберите класс/Несколько классов
              </div>
              <div className={style.left_grid}>
                <ClassesGrid classes={this.state.classes} />
              </div>
            </div>

            <div className={style.right_side}>
              <div className={style.right_title}>
                Текст
              </div>
              <textarea
                className={style.homework_text_area}
                placeholder='Ваш текст..'
                maxLength={1000}
                >
              </textarea>
            </div>

          </div>

          <div className={style.classes_table_inner_lower_container}>

            <div className={style.choose}>
              Выберите дату
              <div className={style.dd_mm}>
                ДД/ММ
              </div>
              <Checkbox
                style={{width: '185px'}}
                label={'Сегодняшнее число'}
                value={'Сегодняшнее число'}
                iconStyle={{fill: '#67428F'}}
                labelStyle={{fontSize: '10px'}}
              />

            </div>
            <div className={style.button_send}>
              <span>
                Отправить

              </span>
            </div>
          </div>

        </div>
      </div>;
    }

    return (
      <MuiThemeProvider>
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
              <MessagesMenu unread={1} important={2} user={'teacher'} changeMailView={this.changeMailView}/>

              {mailView}

            </div>

          </div>

          <Dialog
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleCloseDialog}
          >
            <div className={style.popup_container}>
              <div className={style.to_title}>
                Кому
              </div>
              <input className={style.to_input}>

              </input>
              <div className={style.text_title}>
                Текст
              </div>
              <textarea
                className={style.text_area}
                maxLength={500}
                rows={6}
                cols={40}>
              </textarea>
              <div className={style.send_button}>
                Отправить
              </div>
            </div>
        </Dialog>

        </div>
      </MuiThemeProvider>
    )
  }
}
