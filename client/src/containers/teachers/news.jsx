import React, { Component } from 'react';

import NewsFeed from '../../components/utility/newsfeed/newsfeed.jsx';

import style from '../../../../styles/teachers/news.css';


export default class News extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={style.add_file_button_container}>
          <div className={style.add_file_button}>
            + Добавить Новость
          </div>
        </div>
        <NewsFeed title={'Новости/Ивенты за'} quarters={this.props.quarters}/>
      </div>
    )
  }
}
