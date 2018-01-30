import React, { Component } from 'react';

import InteractiveTitle from '../interactiveTitle.jsx';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info';
import style from '../../../../../styles/utility/newsfeed.css';

import {GridList, GridTile} from 'material-ui/GridList';

import NewsItem from './newsitem.jsx';

// every news segment needs a title, image, description, readOnly depending on user
// the newsfeed needs a newsfeedTitle which will have an interactive element

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          img: '../../../../../public/images/arriving.jpg',
          title: 'Прибытие приемной комиссии',
          description: '05/11/2018 прибудет комиссия! Всем быть в форме, не забываем учебники!'
        },
        {
          img: '../../../../../public/images/theater.jpg',
          title: 'Идем в театр',
          description: 'Старинная легенда о трагической любви Козы Корпеш и Баян Сулу гласит: некие друзья с детства Сарыбай и Карабай поклялись поженить своих детей, которых еще до появления на свет обручили. Не дождавшись рождения сына, умирает во время охоты Сарыбай. Подрастающие Козы и Баян, еще не видевшие друг друга, но связанные узамит брачного договора...'
        },
        {
          img: '../../../../../public/images/arriving.jpg',
          title: 'Прибытие приемной комиссии',
          description: '05/11/2018 прибудет комиссия! Всем быть в форме, не забываем учебники!'
        },
        {
          img: '../../../../../public/images/theater.jpg',
          title: 'Идем в театр',
          description: 'Старинная легенда о трагической любви Козы Корпеш и Баян Сулу гласит: некие друзья с детства Сарыбай и Карабай поклялись поженить своих детей, которых еще до появления на свет обручили. Не дождавшись рождения сына, умирает во время охоты Сарыбай. Подрастающие Козы и Баян, еще не видевшие друг друга, но связанные узамит брачного договора...'
        }

      ]
    }
  }

  render() {
    return (
      <div className={style.newsfeed_main_container}>
        <InteractiveTitle title={this.props.title} type={'news'} dropDownItems={this.props.quarters}/>
        <div className={style.feed_container}>
            <GridList
              cellHeight={350}
              padding={50}
            >
              {this.state.items.map((tile, id) => (
                <GridTile
                  key={id}
                  containerElement={<NewsItem title={tile.title} img={tile.img} description={tile.description}/>}
                  actionIcon={<IconButton><InfoIcon color='white'/></IconButton>}
                >
                </GridTile>
              ))}
            </GridList>
        </div>
      </div>
    )
  }
}
