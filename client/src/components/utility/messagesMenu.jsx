import React, { Component } from 'react';

import style from '../../../../styles/utility/messagesMenu.css';

export default class MessagesMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      unread: undefined,
      important: undefined,
      marked: undefined,
      sent: undefined,
      chats: undefined
    }

    this.newMessages = this.newMessages.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.changeMailView(e.target.id);
  }

  newMessages(value) {
    if (value) {
      return <div className={style.menu_number}>{`( ${value} )`}</div>;
    } else {
      return <div></div>;
    }
  }

  render() {
    var extraElement = (this.props.user && this.props.user === 'teacher') ?
    <div className={style.menu_item_container}>
      <div id='5'  onClick={this.handleClick} className={style.menu_item_title_teacher}>Рассылка</div> {this.newMessages(this.props.chats)}
    </div> : <div></div>;


    return (
      <div className={style.messages_menu_container}>
        <div className={style.menu_item_container} style={{fontFamily: 'GothamPro Medium'}}>
          <div id='0'  onClick={this.handleClick} className={style.menu_item_title}>Входящие</div> {this.newMessages(this.props.unread)}
        </div>
        <div className={style.menu_item_container} style={{fontFamily: 'GothamPro Medium'}}>
          <div id='1' className={style.menu_item_title}>Важные</div> {this.newMessages(this.props.important)}
        </div>
        <div className={style.menu_item_container}>
          <div id='2' className={style.menu_item_title}>Помеченные</div> {this.newMessages(this.props.marked)}
        </div>
        <div className={style.menu_item_container}>
          <div id='3' className={style.menu_item_title}>Отправленные</div> {this.newMessages(this.props.sent)}
        </div>
        <div className={style.menu_item_container}>
          <div id='4' className={style.menu_item_title}>Чаты</div> {this.newMessages(this.props.chats)}
        </div>
        {extraElement}
      </div>
    )
  }
}
