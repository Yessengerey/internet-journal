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
  }

  newMessages(value) {
    if (value) {
      return <div className={style.menu_number}>{`( ${value} )`}</div>;
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className={style.messages_menu_container}>
        <div id='0' className={style.menu_item_container} style={{fontFamily: 'GothamPro Bold'}}>
          <div className={style.menu_item_title}>Входящие</div> {this.newMessages(this.props.unread)}
        </div>
        <div id='1' className={style.menu_item_container} style={{fontFamily: 'GothamPro Bold'}}>
          <div className={style.menu_item_title}>Важные</div> {this.newMessages(this.props.important)}
        </div>
        <div id='2' className={style.menu_item_container}>
          <div className={style.menu_item_title}>Помеченные</div> {this.newMessages(this.props.marked)}
        </div>
        <div id='3' className={style.menu_item_container}>
          <div className={style.menu_item_title}>Отправленные</div> {this.newMessages(this.props.sent)}
        </div>
        <div id='4' className={style.menu_item_container}>
          <div className={style.menu_item_title}>Чаты</div> {this.newMessages(this.props.chats)}
        </div>
      </div>
    )
  }
}
